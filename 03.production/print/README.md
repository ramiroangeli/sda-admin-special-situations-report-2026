# Print pipeline (cover, Contents, air pages, back cover, CMYK, 28-page assembly)

Part of release v1.2. The interior (24 pages) is still rendered by the WeasyPrint engine from
`03.production/content/pages.yaml` and `templates/`. This folder adds the Node step that surrounds it.

## One command

```bash
python3 03.production/scripts/build_release.py        # from the project root
```

Requirements: Python deps of `scripts/build.py` (WeasyPrint 68.1, PyYAML, Jinja2), Node 18+, poppler (`pdfinfo`, `pdftotext`,
`pdftoppm`), Pillow; `opencv-python` for the QR check. `npm ci` runs automatically on first use (`print/package-lock.json`).
No network access is needed at build time (fonts are local, in `print/fonts/`).

Outputs (git-ignored, regenerable; rebuilt from scratch on every run, so no obsolete names linger):

| Path | Content |
|---|---|
| `05.outputs/digital/SDA_Admin_SS_Report_2026.pdf` | complete 28-page report, A4, digital / proof edition |
| `05.outputs/print/cover/Front_Cover.pdf`, `Back_Cover.pdf`, `Cover_Spread.pdf`, `Spine.pdf` | cover artwork: 3 mm bleed, crop marks, Trim/BleedBox |
| `05.outputs/print/interior/Interior.pdf` | 26-page interior (complete report without front/back cover) |
| `05.outputs/print/PREFLIGHT_PENDING.txt` | print status note |
| `03.production/out/release/` | intermediates: `interior.pdf`, `contents.json`, `node-out/` (original approved file names) |

The existing `05.outputs/public/` 24-page canonical PDF (v1.1) is untouched by this build.

## Page map (28 pages)

1 front cover | 2 air page 1 | 3 folio 2 "Why SDA Is Different" | 4-5 Contents (spread) | 6-26 folios 4-24 | 27 air page 2 | 28 back cover.
Printed folios are unchanged from v1.1 (they do not match physical pages; folio 3 does not exist).

## Back-cover contact area

Content (QR URL, eyebrow, website, phone) is in `print/data/back-cover.json`; layout in `build-print.js` (`contactBack`). The QR is generated at build
time (`qrcode-generator` 1.4.4, error correction Q) and drawn as 100% K vector modules on a white tile with a 4-module quiet zone, so it prints from a
single ink. The QR uses a tagged direct URL because `/report2026` redirects with a fixed campaign and drops extra parameters. If a short redirect for
the Administration Report is created on the website later, change `qr_url` and rebuild.

## Single source of truth

| Item | Source |
|---|---|
| Interior pages, all copy | `content/pages.yaml` + `templates/` (WeasyPrint) |
| Contents titles, page numbers, grouping | `pages.yaml` via `build.py` `TOC_GROUPS` / `build_toc_data()` -> `contents.json`. Line breaks and positions are computed in `print/scripts/build-print.js` (`layoutContents`) |
| Cover, air pages, back cover geometry and colours | `print/scripts/build-print.js` (op lists `front`, `back`, `air1`, `air2`, `contL`, `contR`) |
| Section-label line breaks (3 labels) | `LABEL_BREAKS` in `build.py` |

`design-reference/` holds the Claude Design `.dc.html` files, design-system copy and reference images. They are visual references only,
NOT a second source: edit `build-print.js` and rebuild. `scripts/build-print.original.js` is the byte-for-byte approved script, kept for audit.

Changes from the approved script (all in `build-print.js` / `run-build.mjs`): imports supplied by the runner (no CDN); fonts read from
`fonts/` (no network); interior read from `INTERIOR_PDF` (no `uploads/` path); Contents generated from `contents.json` instead of
embedded `CT`; PDF Subject marks print files PROVISIONAL; creation/modification dates fixed (`SOURCE_DATE_EPOCH`) so builds are
byte-reproducible; metadata Title of the Complete PDF is the full approved report title. Drawing, colours and typography are unchanged.

## Print status: PROVISIONAL (printer preflight pending)

Open questions, to be answered by the printer before final print:
1. ICC / CMYK output profile (e.g. FOGRA39, GRACoL). Current CMYK is hand-set values plus a 75% GCR formula; no ICC, no OutputIntent, not PDF/X.
2. Binding type and spine width. The 3 mm solid-navy spine is a placeholder (saddle-stitched 28 pp has no printed spine).
3. **Back-cover QR**: to be updated to the SDAHC Research hub `https://sdahomechoices.com.au/research/` once it is published (`data/back-cover.json`), then rebuild.
4. Whether the printer wants the 26-page interior or the 28-page Complete file, and their slug/crop-mark requirements.

## Validation

`scripts/validate_release.py` runs after every build: 28 pages and order, folios, interior text equals the WeasyPrint output, outlined
artwork pages, A4 / bleed / Trim/Bleed boxes, no RGB left, no em dash, QR codes decode to `/report2026`, and (when `incoming/` is present)
a raster comparison against the approved reference PDFs. Reference checksums: `00.project/reference_artifacts.sha256`.
