#!/usr/bin/env python3
"""
validate_release.py - checks the generated v1.2 set (run automatically by build_release.py).

Hard checks (exit code 1 on failure): page count and order, printed folios, interior text equals the
WeasyPrint interior, dimensions / TrimBox / BleedBox, no RGB colour left, no em dash, QR codes decode to
/report2026, provisional-print metadata present.

Comparison checks (against the approved reference PDFs, when present under incoming/): rasterised
per-page difference. Reported, with a tolerance; they do not fail the build when references are absent.
"""
import json
import re
import subprocess
import sys
import tempfile
from pathlib import Path

HERE = Path(__file__).resolve().parent
PROD = HERE.parent
ROOT = PROD.parent
DIG = ROOT / "05.outputs" / "digital" / "SDA_Admin_SS_Report_2026.pdf"
PRN = ROOT / "05.outputs" / "print"
INTERIOR = PROD / "out" / "release" / "interior.pdf"
REF_DIR = ROOT / "incoming" / "claude-design-final-2026"
REF_COMPLETE = REF_DIR / "SDA Administration & Special Situations Report - 2026.pdf"
REF_PRINT = REF_DIR / "print"

BACK_QR = json.loads((PROD / "print" / "data" / "back-cover.json").read_text())["qr_url"]
# Back-cover contact band (design px 1120-1410 of 1485 on the trim): the only area allowed to differ
# from the originally approved back cover.
BAND = (1120 / 1485, 1410 / 1485)
A4H = 841.89
BLEED_OFF = 13 * 72 / 25.4  # slug + bleed offset (pt) on print files

fails, notes = [], []


def check(ok, msg):
    print(("PASS  " if ok else "FAIL  ") + msg)
    if not ok:
        fails.append(msg)


def sh(*a):
    return subprocess.run(a, capture_output=True, text=True).stdout


def pages(p):
    m = re.search(r"Pages:\s+(\d+)", sh("pdfinfo", str(p)))
    return int(m.group(1)) if m else 0


def size(p, n=1):
    m = re.search(r"Page\s+%d size:\s+([\d.]+) x ([\d.]+)" % n, sh("pdfinfo", "-f", str(n), "-l", str(n), str(p)))
    return float(m.group(1)), float(m.group(2))


def text(p, n):
    return sh("pdftotext", "-f", str(n), "-l", str(n), "-layout", str(p), "-")


def norm(t):
    return re.sub(r"\s+", " ", t).strip()


def raster(p, dpi, first=None, last=None):
    d = Path(tempfile.mkdtemp())
    cmd = ["pdftoppm", "-r", str(dpi), "-png"]
    if first:
        cmd += ["-f", str(first), "-l", str(last or first)]
    subprocess.run(cmd + [str(p), str(d / "p")], check=True)
    return sorted(d.glob("p-*.png"))


def diff_ratio(a, b, band_off=None):
    """Fraction of differing pixels. band_off: (page height pt, offset pt) -> ignore the back-cover contact band rows."""
    from PIL import Image, ImageChops
    ia, ib = Image.open(a).convert("RGB"), Image.open(b).convert("RGB")
    if ia.size != ib.size:
        return 1.0
    d = ImageChops.difference(ia, ib).convert("L").point(lambda v: 255 if v > 24 else 0)
    if band_off:
        H, off = band_off
        y0 = int((off + BAND[0] * A4H) / H * ia.size[1])
        y1 = int((off + BAND[1] * A4H) / H * ia.size[1])
        d.paste(0, (0, y0, ia.size[0], y1))
    return d.histogram()[255] / (ia.size[0] * ia.size[1])


# ---------------------------------------------------------------- digital Complete
print("== Digital edition")
check(DIG.exists(), f"exists: {DIG.relative_to(ROOT)}")
if not DIG.exists():
    sys.exit(1)
n = pages(DIG)
check(n == 28, f"28 pages (found {n})")
w, h = size(DIG)
check(abs(w - 595.276) < 0.01 and abs(h - 841.89) < 0.01, f"A4 page size ({w} x {h})")

# order: 1 front, 2 air1, 3 folio 2, 4-5 Contents, 6..26 folios 4..24, 27 air2, 28 back
interior_n = pages(INTERIOR)
check(interior_n == 24, f"interior engine output has 24 pages (found {interior_n})")
expected = {3: 2}
expected.update({p: p - 2 for p in range(6, 27)})   # physical 6 -> folio 4 ... 26 -> folio 24
for phys, folio in expected.items():
    t = norm(text(DIG, phys))
    m = re.findall(r"(\d+)\s*$", t)
    ok = bool(m) and int(m[-1]) == folio
    if not ok:
        check(False, f"page {phys}: printed folio {folio} (found {m[-1:] })")
check(not [f for f in fails if f.startswith("page ")], "printed folios: p3=2, p4-5=Contents, p6..p26=4..24")
mism = []
for phys, folio in expected.items():
    if norm(text(DIG, phys)) != norm(text(INTERIOR, folio)):
        mism.append(phys)
check(not mism, f"interior text identical to WeasyPrint output on pages 3, 6-26 (mismatches: {mism})")
for phys in (1, 2, 4, 5, 27, 28):
    if norm(text(DIG, phys)) not in ("",) and phys not in (1, 2, 27, 28):
        pass
art_text = {p: norm(text(DIG, p)) for p in (1, 2, 4, 5, 27, 28)}
check(all(v == "" for v in art_text.values()), "cover, air, Contents and back pages are outlined artwork (no live text)")
alltext = "".join(text(DIG, p) for p in range(1, 29))
check("—" not in alltext, "no em dash (U+2014) in digital text")
check("research@sdahomechoices.com.au" in alltext, "page 24 contact present")

raw = DIG.read_bytes()
check(b"DeviceRGB" not in raw, "no DeviceRGB left in digital PDF (CMYK conversion complete)")
fonts = sh("pdffonts", str(DIG))
print("      fonts:", ", ".join(sorted({l.split()[0].split("+")[-1] for l in fonts.splitlines()[2:] if l.strip()})))
info = sh("pdfinfo", str(DIG))
check("Title:" in info and "Specialist Disability Accommodation Administration" in info, "full approved title in metadata")

# QR codes (physical pages 3 and 26)
try:
    import cv2
    det = cv2.QRCodeDetector()
    for phys in (3, 26):
        img = raster(DIG, 200, phys)[0]
        v, _, _ = det.detectAndDecode(cv2.imread(str(img)))
        check(v == "https://sdahomechoices.com.au/report2026", f"QR on physical page {phys} decodes to {v or 'nothing'}")
    for label, f, pg in (("digital page 28", DIG, 28), ("Back_Cover.pdf", PRN / "cover" / "Back_Cover.pdf", 1), ("Cover_Spread.pdf", PRN / "cover" / "Cover_Spread.pdf", 1)):
        if f.exists():
            img = raster(f, 200, pg)[0]
            v, _, _ = det.detectAndDecode(cv2.imread(str(img)))
            check(v == BACK_QR, f"back-cover QR ({label}) decodes to the tagged URL ({v or 'nothing'})")
except ImportError:
    notes.append("opencv not installed: QR decode skipped")

# ---------------------------------------------------------------- print files
print("== Print artwork (PROVISIONAL)")
# deliverable (relative to 05.outputs/print) -> (pages, width pt, height pt, reference file name)
spec = {
    "cover/Front_Cover.pdf": (1, 668.977, 915.591, "SDA-AdminSS-2026_Front-Cover_A4_3mm-bleed.pdf"),
    "cover/Back_Cover.pdf": (1, 668.977, 915.591, "SDA-AdminSS-2026_Back-Cover_A4_3mm-bleed.pdf"),
    "cover/Cover_Spread.pdf": (1, 1264.25, 915.591, "SDA-AdminSS-2026_Cover-Spread_420x297_3mm-bleed.pdf"),
    "cover/Spine.pdf": (1, 82.2047, 915.591, "SDA-AdminSS-2026_Spine_3mm_3mm-bleed.pdf"),
    "interior/Interior.pdf": (26, 595.276, 841.89, "SDA-AdminSS-2026_Interior_Air-pages-Content.pdf"),
}
for name, (np_, pw, ph, _ref) in spec.items():
    f = PRN / name
    if not f.exists():
        check(False, f"missing {name}")
        continue
    w, h = size(f)
    ok = pages(f) == np_ and abs(w - pw) < 0.02 and abs(h - ph) < 0.02
    check(ok, f"{name}: {pages(f)} pp, {w} x {h}")
    if np_ == 1:
        boxes = sh("pdfinfo", "-box", str(f))
        check("TrimBox" in boxes and "BleedBox" in boxes, f"{name}: TrimBox/BleedBox set")
    check(b"DeviceRGB" not in f.read_bytes(), f"{name}: no DeviceRGB")
    check("PROVISIONAL" in sh("pdfinfo", str(f)), f"{name}: provisional/preflight note in metadata")
# deliverable layout: exactly the agreed files, no obsolete duplicates
expected_files = {"digital/SDA_Admin_SS_Report_2026.pdf", "print/PREFLIGHT_PENDING.txt"} | {"print/" + k for k in spec}
found = {str(p.relative_to(ROOT / "05.outputs")) for sub in ("digital", "print") for p in (ROOT / "05.outputs" / sub).rglob("*") if p.is_file()}
check(found == expected_files, f"deliverables in 05.outputs/digital and print are exactly the agreed set (extra: {sorted(found - expected_files)}, missing: {sorted(expected_files - found)})")
check((PRN / "PREFLIGHT_PENDING.txt").exists(), "PREFLIGHT_PENDING.txt present")

# ---------------------------------------------------------------- comparison with approved references
print("== Comparison with approved reference PDFs")
if REF_COMPLETE.exists():
    a, b = raster(DIG, 70), raster(REF_COMPLETE, 70)
    worst = 0.0
    for i, (x, y) in enumerate(zip(a, b), 1):
        r = diff_ratio(x, y, (A4H, 0) if i == 28 else None)
        worst = max(worst, r)
        if r > 0.0005:
            print(f"      page {i}: {r*100:.3f}% of pixels differ")
    check(len(a) == len(b) == 28 and worst <= 0.0005, f"digital edition vs approved Complete PDF: worst page {worst*100:.4f}% pixels differ outside the back-cover contact band (tolerance 0.05%)")
    for name, (_n, _w, _h, refname) in spec.items():
        ref = REF_PRINT / refname
        gen = PRN / name
        if ref.exists() and gen.exists():
            ra, rb = raster(gen, 50), raster(ref, 50)
            band = (915.591, BLEED_OFF) if name in ("cover/Back_Cover.pdf", "cover/Cover_Spread.pdf") else None
            w = max(diff_ratio(x, y, band) for x, y in zip(ra, rb)) if ra and rb and len(ra) == len(rb) else 1.0
            check(w <= 0.0005, f"{name} vs reference: worst page {w*100:.4f}% pixels differ")
else:
    notes.append("reference PDFs not found under incoming/: visual comparison skipped")

for n_ in notes:
    print("NOTE  " + n_)
print("\nRESULT:", "FAILED" if fails else "ALL CHECKS PASSED")
sys.exit(1 if fails else 0)
