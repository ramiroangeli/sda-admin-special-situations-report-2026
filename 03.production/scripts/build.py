"""
build.py — Specialist Disability Accommodation Administration & Special
Situations Report 2026 — production engine

Renders the active content (03.production/content/pages.yaml, itself a
structured transcription of ../../02.content/) into public and review
HTML/PDF, per-page PNGs, the canonical cover render, and a contact sheet.
This is the ACTIVE, canonical build engine — there is exactly one, per the
project's versioning rule (see ../../00.project/changelog.md). Superseded
engines live under ../../90.archive/visual/.

Usage (run from 03.production/):
    python3 scripts/build.py                    # HTML only, both modes (debug/review)
    python3 scripts/build.py --pdf               # also render PDFs
    python3 scripts/build.py --pdf --png          # also render per-page PNGs
    python3 scripts/build.py --all               # HTML + PDF + PNG + cover + contact sheet + review_payload.json + publish

`--publish` (included in --all) copies the four canonical deliverables into
../../05.outputs/ under their clean public-facing names. Per the project's
versioning rule, 05.outputs/ should only ever hold the latest build's output —
re-running --publish overwrites it in place; there is no versioned filename.

Same convention as the flagship report / sda-market-update: stop at HTML for
review before rendering PDF, unless explicitly asked.
"""

import argparse
import base64
import json
import os
import re
import shutil
import subprocess
import sys
from pathlib import Path

import yaml
from jinja2 import Environment, FileSystemLoader

HERE = Path(__file__).resolve().parent.parent  # 03.production/
PROJECT_ROOT = HERE.parent  # resolved dynamically from this file's own location,
# never hardcoded, so the project can live at any path/parent-folder name
CONTENT = HERE / "content"
TEMPLATES = HERE / "templates"
STATIC = HERE / "static"
OUT = HERE / "out"

_brew_lib = Path("/opt/homebrew/lib")
if _brew_lib.exists():
    os.environ.setdefault("DYLD_LIBRARY_PATH", str(_brew_lib))

REPORT_VERSION = "SDA-ADMIN-2026"

# ── Public source labels ──────────────────────────────────────────────────
# Restrained, human-readable citations for public-mode source footers. Derived
# from ../../01.evidence/source_manifest.yaml's public_sources entries (title +
# retrieval context) — never the internal PUB-xx ID, never a SharePoint/Notion/
# internal path. See 01.evidence/source_manifest.yaml for the full record each
# of these summarises.
PUB_SOURCES = {
    "PUB-01": "NDIA, Supplement P: Specialist Disability Accommodation, Q4 2025–26 (as at 30 June 2026)",
    "PUB-02": "NDIS, SDA Pricing Arrangements 2026–27",
    "PUB-03": "Specialist Disability Accommodation Rules 2020 (Cth), current compilation",
    "PUB-04": "NDIS, Guide to Providing Specialist Disability Accommodation (SDA)",
    "PUB-05": "ASIC, Insolvency Statistics and Information Sheet INFO 80",
    "PUB-06": "NDIS Amendment (Securing the NDIS for Future Generations) Act 2026; NDIA guidance on plan reassessment",
    "PUB-07": "NDIS, SDA Design Standard / Price Guide: New Build classification (certificate of occupancy on or after 1 April 2016)",
    "PUB-08": "NDIS, How to Enrol a Home as Specialist Disability Accommodation (SDA): change-of-provider guidance",
    "PUB-09": "SDAHC Research: SDA Market Report 2026",
    "PUB-11": "NDIS, How to Manage SDA Vacancies (11 August 2026)",
    "PUB-12": "NDIS, Pricing Schedule for SDA 2026-27 (effective 24 September 2026), section 3.1 and Appendix 1",
    "PUB-13": "ATO, National Disability Insurance Scheme - GST-free supply conditions",
    "PUB-10": "NDIA, Supplement P: Specialist Disability Accommodation, Q4 2025–26 (as at 30 June 2026); Specialist Disability Accommodation Rules 2020 (Cth), current compilation",
}


def load_pages():
    data = yaml.safe_load((CONTENT / "pages.yaml").read_text())
    return data["report"], data["pages"]


def load_review_manifest():
    # Reads the active review manifest directly — there is no per-round
    # generation step any more; when a future round resolves or adds items,
    # this file is edited in place and the previous version archived, per the
    # project's versioning rule (00.project/changelog.md).
    path = PROJECT_ROOT / "02.content" / "review_manifest.yaml"
    return yaml.safe_load(path.read_text())


def load_review_overrides():
    """Optional per-review_id text trims applied only to the rendered PDF
    panel (drafting-history/meta wording removed) — see content/review_overrides.yaml.
    review_payload.json does NOT use this; it reads review_manifest.yaml
    directly, untrimmed, for the Steve Review App."""
    path = CONTENT / "review_overrides.yaml"
    if not path.exists():
        return {}
    return yaml.safe_load(path.read_text()) or {}


def build_review_by_page(review_manifest, overrides=None):
    overrides = overrides or {}
    by_page = {}
    for entry in review_manifest:
        e = dict(entry)
        ov = overrides.get(entry["review_id"])
        if ov:
            if ov.get("current_working_view"):
                e["current_working_view"] = ov["current_working_view"]
            if ov.get("decision_required"):
                e["decision_required"] = ov["decision_required"]
        by_page.setdefault(entry["page"], []).append(e)
    return by_page


def _b64_uri(path: Path, mime: str) -> str:
    data = base64.b64encode(path.read_bytes()).decode("ascii")
    return f"data:{mime};base64,{data}"


def build_pub_labels_by_page(pages):
    by_page = {}
    for p in pages:
        ids = p.get("public_source_ids") or []
        by_page[p["page_number"]] = [PUB_SOURCES[i] for i in ids if i in PUB_SOURCES]
    return by_page


# Page 3 Contents groups — the round-2 design-pass TOC. Deliberately a plain
# narrative grouping (Steve's approved 6-block structure), distinct from each
# page's own `kicker_section` (the running-header label, which has its own,
# separately-decided abbreviation history — see changelog). Only page numbers
# and range/section labels live here; every page TITLE is looked up from
# pages.yaml at build time so the two can never silently drift apart.
TOC_GROUPS = [
    ("UNDERSTAND", [2, 4, 5, 6]),
    ("ENGAGE SPECIALIST", [7]),
    ("COMMERCIAL VENDOR DUE DILIGENCE", [8, 9, 10, 11, 12, 13, 14]),
    ("REMEDY / POSITION", [15, 16, 17]),
    ("REALISE", [18, 19, 20, 21, 22, 23]),
    ("REFERENCE", [24]),
]


def build_toc_data(pages):
    pages_by_number = {p["page_number"]: p for p in pages}
    groups = []
    for name, numbers in TOC_GROUPS:
        rng = f"{numbers[0]:02d}" if len(numbers) == 1 else f"{numbers[0]:02d}–{numbers[-1]:02d}"
        entries = [{"number": n, "title": pages_by_number[n]["title"]} for n in numbers]
        groups.append({"range": rng, "name": name, "entries": entries})
    return {"groups": groups}


def md_inline(text):
    """Minimal, safe inline markdown: **bold** -> <strong>, escape everything
    else. Locked copy only ever uses **bold** for emphasis: no links, no
    other markdown, so this is intentionally narrow rather than a general
    markdown parser."""
    if text is None:
        return ""
    parts = re.split(r"(\*\*[^*]+\*\*)", text)
    out = []
    for part in parts:
        if part.startswith("**") and part.endswith("**"):
            inner = _escape(part[2:-2])
            out.append(f"<strong>{inner}</strong>")
        else:
            out.append(_escape(part))
    return "".join(out)


def _escape(s):
    return (
        s.replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace('"', "&quot;")
    )


def make_env():
    env = Environment(loader=FileSystemLoader(str(TEMPLATES)))
    env.filters["md_inline"] = md_inline
    return env


def strip_review_only_pages_for_public(pages):
    """Public mode still shows every page — review content is stripped inside
    page.html by the `mode` flag, not by removing pages. This function exists
    as an explicit, auditable checkpoint: confirm no review-only fields leak
    into the pages list itself before rendering public mode."""
    for p in pages:
        assert "review_manifest_entries" not in p, "review data must not be pre-merged into pages.yaml"
    return pages


def render_html(mode: str) -> Path:
    assert mode in ("public", "review")
    report, pages = load_pages()
    review_manifest = load_review_manifest()
    overrides = load_review_overrides()
    review_by_page = build_review_by_page(review_manifest, overrides) if mode == "review" else {}
    pub_labels_by_page = build_pub_labels_by_page(pages)
    strip_review_only_pages_for_public(pages)
    for p in pages:
        if p.get("visual_type") == "contents":
            p["visual_data"] = build_toc_data(pages)
    logo_uri = _b64_uri(STATIC / "img" / "sdahc-logo.png", "image/png")
    qr_uri = _b64_uri(STATIC / "img" / "qr_sda_market_report_2026.png", "image/png")

    env = make_env()
    template = env.get_template("report.html")
    html = template.render(
        report=report,
        pages=pages,
        mode=mode,
        logo_uri=logo_uri,
        qr_uri=qr_uri,
        review_by_page=review_by_page,
        pub_labels_by_page=pub_labels_by_page,
        tokens_css=(STATIC / "css" / "tokens.css").read_text(),
        components_css=(STATIC / "css" / "components.css").read_text(),
    )

    out_dir = OUT / ("public" if mode == "public" else "review")
    out_dir.mkdir(parents=True, exist_ok=True)
    if mode == "public":
        html_path = out_dir / "SDA_Administration_Special_Situations_Report_2026.html"
    else:
        html_path = out_dir / "SDA_Administration_Special_Situations_Report_2026_REVIEW.html"
    html_path.write_text(html, encoding="utf-8")
    print(f"Wrote {html_path}")

    if mode == "public":
        # Check for actual rendered markup/text, not CSS selector definitions
        # (components.css defines `.review-panel { ... }` in every build's
        # <style> block regardless of mode — that's just an unused style rule
        # in public mode, not a leak. The leak check is for the HTML element
        # itself and for review-only copy actually appearing in the body.)
        assert 'class="review-panel"' not in html, "Public build leaked review-panel element"
        assert "review-banner" not in html or '<div class="review-banner">' not in html, "Public build leaked review banner"
        assert "Steve Review —" not in html, "Public build leaked review panel heading text"
        assert "Internal Review — Not for Distribution" not in html, "Public build leaked review banner text"
        assert "Decision required" not in html, "Public build leaked a review decision-required field"
        assert not re.search(r"ADM-\d{3}-\d{2}", html), "Public build leaked a claim ID"
        assert not re.search(r"\b(INT|PUB)-\d{2}\b", html), "Public build leaked an evidence ID"
        print("Public-mode purity check: PASSED (no review markers, claim IDs or evidence IDs).")

    if mode == "review":
        # Confirm the drafting-history/meta phrases trimmed via
        # content/review_overrides.yaml did not leak back into the rendered panel.
        banned_meta_phrases = [
            "reworded in v0.3",
            "v0.3 further reduced identifying detail",
            "is the page carrying the most SDAHC-specific commercial framing in the draft",
        ]
        for phrase in banned_meta_phrases:
            assert phrase not in html, f"Review build leaked drafting-history meta text: {phrase!r}"
        print("Review-mode meta check: PASSED (no drafting-history wording in rendered panels).")

    return html_path


def render_pdf(mode: str, html_path: Path) -> Path:
    from weasyprint import HTML

    out_dir = html_path.parent
    pdf_name = (
        "SDA_Administration_Special_Situations_Report_2026.pdf"
        if mode == "public"
        else "SDA_Administration_Special_Situations_Report_2026_REVIEW.pdf"
    )
    pdf_path = out_dir / pdf_name
    HTML(string=html_path.read_text(encoding="utf-8"), base_url=str(TEMPLATES)).write_pdf(str(pdf_path))
    print(f"Wrote {pdf_path}")
    return pdf_path


def render_page_pngs(pdf_path: Path):
    out_dir = OUT / "page_renders"
    out_dir.mkdir(parents=True, exist_ok=True)
    prefix = out_dir / "page"
    subprocess.run(
        ["pdftoppm", "-r", "150", "-png", str(pdf_path), str(prefix)],
        check=True,
    )
    pngs = sorted(out_dir.glob("page-*.png"))
    print(f"Wrote {len(pngs)} page PNGs to {out_dir}")
    return pngs


def render_cover():
    """Cover title is settled — renders the single canonical cover, not an
    A/B test pair (that decision was made and closed out in an earlier round;
    see 90.archive/visual/v0.1 for the historical A/B test)."""
    report, pages = load_pages()
    env = make_env()
    from weasyprint import HTML

    out_dir = OUT / "cover_tests"
    out_dir.mkdir(parents=True, exist_ok=True)

    env.get_template("page.html")  # ensures template loads

    fname_stub = "cover_canonical"
    html_src = f"""<!DOCTYPE html><html><head><meta charset="utf-8">
<style>{(STATIC / 'css' / 'tokens.css').read_text()}\n{(STATIC / 'css' / 'components.css').read_text()}</style>
</head><body>
{{% import 'components/macros.html' as c %}}
<section class="sheet sheet--dark">{{{{ c.cover(report, none) }}}}</section>
</body></html>"""
    tmpl = env.from_string(html_src)
    html = tmpl.render(report=report)
    pdf_path = out_dir / f"{fname_stub}.pdf"
    HTML(string=html, base_url=str(TEMPLATES)).write_pdf(str(pdf_path))
    subprocess.run(["pdftoppm", "-r", "150", "-png", "-singlefile", str(pdf_path), str(out_dir / fname_stub)], check=True)
    print(f"Wrote {out_dir / (fname_stub + '.png')}")


def render_contact_sheet():
    """6x4 thumbnail grid of all 24 public-mode page renders, for fast human
    rhythm review of the whole report at a glance."""
    from PIL import Image, ImageDraw, ImageFont

    src_dir = OUT / "page_renders"
    pngs = sorted(src_dir.glob("page-*.png"))
    assert len(pngs) == 24, f"expected 24 page renders, found {len(pngs)} — run --png first"

    cols, rows = 6, 4
    thumb_w, thumb_h = 260, 368
    label_h = 20
    gap = 10
    sheet_w = cols * thumb_w + (cols + 1) * gap
    sheet_h = rows * (thumb_h + label_h) + (rows + 1) * gap

    sheet = Image.new("RGB", (sheet_w, sheet_h), "#FFFFFF")
    draw = ImageDraw.Draw(sheet)
    try:
        font = ImageFont.truetype(str(STATIC / "fonts" / "SourceSans3-SemiBold.ttf"), 14)
    except Exception:
        font = ImageFont.load_default()

    for i, png_path in enumerate(pngs):
        r, c = divmod(i, cols)
        im = Image.open(png_path).convert("RGB")
        im.thumbnail((thumb_w, thumb_h))
        x = gap + c * (thumb_w + gap)
        y = gap + r * (thumb_h + label_h + gap)
        paste_x = x + (thumb_w - im.width) // 2
        paste_y = y + (thumb_h - im.height) // 2
        sheet.paste(im, (paste_x, paste_y))
        label = f"{i + 1:02d}"
        bbox = draw.textbbox((0, 0), label, font=font)
        tw = bbox[2] - bbox[0]
        draw.text((x + (thumb_w - tw) / 2, y + thumb_h + 3), label, fill="#3C5468", font=font)

    out_path = OUT / "public" / "contact_sheet.png"
    out_path.parent.mkdir(parents=True, exist_ok=True)
    sheet.save(out_path)
    print(f"Wrote {out_path}")
    return out_path


def render_review_payload():
    review_manifest = load_review_manifest()
    report, pages = load_pages()
    pages_by_number = {p["page_number"]: p for p in pages}

    payload = {
        "report_version": REPORT_VERSION,
        "source_content": "02.content/review_manifest.yaml",
        "generated_from": "02.content/review_manifest.yaml",
        "items": [],
    }
    for entry in review_manifest:
        page = pages_by_number.get(entry["page"])
        payload["items"].append(
            {
                "page_id": f"page-{entry['page']:02d}",
                "page_number": entry["page"],
                "page_title": page["title"] if page else None,
                "review_id": f"review-{entry['review_id']}",
                "topic": entry["topic"],
                "current_working_view": entry["current_working_view"].strip(),
                "decision_required": entry["decision_required"].strip(),
                "claims_affected": [f"claim-{c}" for c in entry.get("claims_affected", [])],
                "pages_affected": [f"page-{n:02d}" for n in entry.get("pages_affected", [])],
            }
        )

    out_path = PROJECT_ROOT / "04.review" / "manifest" / "review_payload.json"
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(json.dumps(payload, indent=2), encoding="utf-8")
    print(f"Wrote {out_path} ({len(payload['items'])} review items)")


def publish():
    """Copies the four canonical deliverables into ../../05.outputs/ under
    their clean public-facing names, overwriting whatever was there. Per the
    versioning rule, 05.outputs/ only ever holds the latest build — there is
    no versioned filename and no history kept here (history lives in
    90.archive/ and is created deliberately, not by this function)."""
    outputs = PROJECT_ROOT / "05.outputs"
    targets = [
        (OUT / "public" / "SDA_Administration_Special_Situations_Report_2026.pdf", outputs / "public" / "SDA_Administration_Special_Situations_Report_2026.pdf"),
        (OUT / "review" / "SDA_Administration_Special_Situations_Report_2026_REVIEW.pdf", outputs / "review" / "SDA_Administration_Special_Situations_Report_2026_REVIEW.pdf"),
        (OUT / "cover_tests" / "cover_canonical.png", outputs / "previews" / "cover.png"),
        (OUT / "public" / "contact_sheet.png", outputs / "previews" / "contact_sheet.png"),
    ]
    for src, dest in targets:
        if not src.exists():
            print(f"Skipping publish of {dest.name}: {src} not built yet.")
            continue
        dest.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(src, dest)
        print(f"Published {dest}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--pdf", action="store_true")
    parser.add_argument("--png", action="store_true")
    parser.add_argument("--payload", action="store_true")
    parser.add_argument("--covers", action="store_true")
    parser.add_argument("--contact-sheet", action="store_true")
    parser.add_argument("--publish", action="store_true")
    parser.add_argument("--all", action="store_true")
    args = parser.parse_args()

    do_pdf = args.pdf or args.all
    do_png = args.png or args.all
    do_payload = args.payload or args.all
    do_covers = args.covers or args.all
    do_contact_sheet = args.contact_sheet or args.all
    do_publish = args.publish or args.all

    public_html = render_html("public")
    review_html = render_html("review")

    if do_pdf:
        public_pdf = render_pdf("public", public_html)
        review_pdf = render_pdf("review", review_html)
        if do_png:
            render_page_pngs(public_pdf)
    elif do_png:
        print("Skipping PNG render: --pdf (or --all) required to produce a PDF to rasterise.")

    if do_covers:
        render_cover()

    if do_contact_sheet:
        if do_png:
            render_contact_sheet()
        else:
            print("Skipping contact sheet: --png (or --all) required to produce page renders first.")

    if do_payload:
        render_review_payload()

    if do_publish:
        publish()

    if not any([do_pdf, do_png, do_payload, do_covers, do_contact_sheet, do_publish]):
        print("Stopped at HTML preview. Pass --all to render PDFs, PNGs, cover, contact sheet, review_payload.json and publish.")
