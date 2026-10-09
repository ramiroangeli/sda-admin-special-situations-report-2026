#!/usr/bin/env python3
"""
build_release.py - one command for the full v1.2 production set.

    python3 03.production/scripts/build_release.py            # build + validate
    python3 03.production/scripts/build_release.py --no-npm   # skip `npm ci` check

Pipeline
  1. WeasyPrint engine (scripts/build.py, public mode) renders the 24-page interior
     from content/pages.yaml + templates  ->  build/interior.pdf
  2. Contents data is exported from the same pages.yaml (build_toc_data)  ->  build/contents.json
  3. Node (print/scripts/run-build.mjs) builds cover, Contents spread, air pages, back cover,
     converts the interior to CMYK and assembles the outputs:
        05.outputs/digital/SDA-AdminSS-Report-2026_Complete.pdf            28 pp, A4 (digital / proof)
        05.outputs/print/SDA-AdminSS-2026_*.pdf                            print artwork (PROVISIONAL)
  4. validate_release.py checks page count/order, folios, text, QR codes, dimensions.

Generated files are never committed (see .gitignore). Print files are PROVISIONAL until the
printer's preflight approves the ICC/CMYK profile and binding (see print/README.md).
"""
import argparse
import json
import os
import shutil
import subprocess
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent            # 03.production/scripts
PROD = HERE.parent                                # 03.production
ROOT = PROD.parent                                # project root
PRINT = PROD / "print"
BUILD = PROD / "out" / "release"                  # intermediates (git-ignored)
DIGITAL = ROOT / "05.outputs" / "digital"
PRINTOUT = ROOT / "05.outputs" / "print"

sys.path.insert(0, str(HERE))


def run(cmd, **kw):
    print("$", " ".join(str(c) for c in cmd))
    subprocess.run(cmd, check=True, **kw)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--no-npm", action="store_true", help="do not run npm ci when node_modules is missing")
    ap.add_argument("--no-validate", action="store_true")
    args = ap.parse_args()

    import build  # scripts/build.py (WeasyPrint engine)

    # 1. interior PDF from the existing engine
    html_path = build.render_html("public")
    BUILD.mkdir(parents=True, exist_ok=True)
    pdf_path = build.render_pdf("public", html_path)
    interior = BUILD / "interior.pdf"
    shutil.copyfile(pdf_path, interior)

    # 2. Contents data from pages.yaml (single source for titles and page numbers)
    _, pages = build.load_pages()
    toc = build.build_toc_data(pages)
    contents = BUILD / "contents.json"
    contents.write_text(json.dumps(toc["groups"], indent=1), encoding="utf-8")

    # 3. Node: cover / Contents / air pages / back cover / CMYK / assembly
    if not (PRINT / "node_modules").exists():
        if args.no_npm:
            sys.exit("print/node_modules missing: run `npm ci` in 03.production/print")
        run(["npm", "ci"], cwd=PRINT)
    stage = BUILD / "node-out"
    shutil.rmtree(stage, ignore_errors=True)
    env = dict(os.environ, INTERIOR_PDF=str(interior), CONTENTS_JSON=str(contents), OUT_DIR=str(stage))
    run(["node", "scripts/run-build.mjs"], cwd=PRINT, env=env)

    DIGITAL.mkdir(parents=True, exist_ok=True)
    PRINTOUT.mkdir(parents=True, exist_ok=True)
    shutil.copyfile(stage / "SDA-AdminSS-Report-2026_Complete.pdf", DIGITAL / "SDA-AdminSS-Report-2026_Complete.pdf")
    for f in (stage / "print").glob("*.pdf"):
        shutil.copyfile(f, PRINTOUT / f.name)
    (PRINTOUT / "PREFLIGHT_PENDING.txt").write_text(
        "PROVISIONAL PRINT ARTWORK - requires printer preflight approval.\n"
        "Pending confirmation: ICC/CMYK output profile (e.g. FOGRA39 / GRACoL), binding type and spine width.\n"
        "CMYK values are hand-set/approximated (no ICC, no OutputIntent, not PDF/X).\n"
        "The 3 mm spine is a provisional placeholder.\n", encoding="utf-8")
    print(f"\nDigital: {DIGITAL}\nPrint:   {PRINTOUT}")

    if not args.no_validate:
        run([sys.executable, str(HERE / "validate_release.py")])


if __name__ == "__main__":
    main()
