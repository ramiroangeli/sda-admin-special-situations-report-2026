# 03.production — report build engine

The active, canonical production engine for the *Specialist Disability
Accommodation Administration & Special Situations Report 2026*. There is
exactly one active engine at any time, per the project's versioning rule (see
`../00.project/changelog.md`) — superseded engines live under
`../90.archive/visual/`.

**Editorial content is locked at the point it enters this engine.** This
system does not rewrite, re-plan or re-source anything in `../02.content/`. It
is a rendering layer only. If a page's copy doesn't fit its intended visual,
the fix here is layout (spacing, font size, a different but equivalent visual
component) — never a copy change.

## Why this architecture

The flagship report (`../../ndis-python-v2/templates/report.html`) is a single
~9,000-line handwritten HTML file with content and markup mixed together —
the wrong pattern for a 24-page report that has to render in two modes from
one source of truth. This system follows the smaller, cleaner pattern in
`../../sda-market-update/build_pdf.py` (Jinja2 + WeasyPrint, CSS inlined into
a debug HTML before PDF) but goes further by keeping content in a structured
YAML file rather than hardcoded in Python — so `content/pages.yaml` is the
only place page content lives, and `templates/` only knows how to lay it out.

```
config/config.yaml       build configuration reference
content/pages.yaml       structured content for all 24 pages (title, reader
                          question, body copy, visual type + data, public
                          source IDs, has_review flag) — a structured
                          transcription of ../02.content/pages/*.md
content/review_overrides.yaml  render-time text trims for the review PDF
                          (drafting-history/meta wording removed) — see its
                          own header comment
templates/report.html    master document: inlines tokens.css + components.css,
                          loops pages through page.html
templates/page.html      per-page layout: kicker/title/body/visual dispatch/
                          review panel (review mode only)/source footer
templates/components/
  macros.html             one Jinja2 macro per visual_type, plus shared
                          macros (title block, body copy, source footer,
                          review panel, cover)
static/css/
  tokens.css              brand tokens — colors, type scale, spacing (values
                          identical to ndis-python-v2/tokens.css)
  components.css           this report's component library (process chains,
                          diagnostic cards, matrices, decision tree,
                          checklists, review panel, cover) — purpose-built
                          for this report's forensic/diagnostic content,
                          not copied from the flagship's chart-oriented CSS
static/fonts/             Playfair Display, Source Sans 3, Barlow Condensed
                          (copied from ndis-python-v2/fonts/)
static/img/                SDAHC logo/mark (copied from
                          SDA_Market_Manual_Python/04_Logos_and_Assets/)
scripts/build.py          orchestrates everything below
out/                       build workspace — regenerable, not a deliverable
                          location; see "Where outputs actually live" below
```

## Two build modes, one content system

`content/pages.yaml` never stores review content — only a page-level
`has_review: true/false` flag. At build time, `scripts/build.py` reads
`../02.content/review_manifest.yaml` directly and groups its items by page
number. Review mode renders those items into a restrained review panel;
public mode never touches `review_manifest.yaml` at all, so there is no
duplicated internal content anywhere in this system to fall out of sync.

Public-mode builds run automated purity assertions on the rendered HTML
before writing the file: no `review-panel` markup, no review banner text, no
"Decision required" string, no `ADM-###-##` claim ID, no bare `INT-##`/`PUB-##`
evidence ID. A public build that fails any of these does not get written.
Review-mode builds separately assert that known drafting-history/meta phrases
were successfully trimmed by `content/review_overrides.yaml`.

## Running the build

From this directory:

```
python3 scripts/build.py             # HTML only (public + review) — fast preview
python3 scripts/build.py --pdf       # + PDF for both modes
python3 scripts/build.py --pdf --png # + all 24 pages rasterised to PNG
python3 scripts/build.py --covers    # + canonical cover render
python3 scripts/build.py --contact-sheet  # + 6x4 contact-sheet PNG (needs --png first)
python3 scripts/build.py --payload   # + regenerate ../04.review/manifest/review_payload.json
python3 scripts/build.py --publish   # + copy the 4 canonical deliverables to ../05.outputs/
python3 scripts/build.py --all       # everything above
```

Requires `weasyprint`, `jinja2`, `pyyaml`, `Pillow` and `pdftoppm` (poppler, on PATH).

## Where outputs actually live

`out/` is this engine's own build workspace — it will accumulate a full set of
per-page PNGs, debug HTML, and PDFs every time you build. That is expected and
fine; it is not the clean deliverable layer. After a build you care about,
run (or re-run) `python3 scripts/build.py --publish` (included in `--all`) to
copy just the four canonical files into `../05.outputs/`:

- `out/public/SDA_Administration_Special_Situations_Report_2026.pdf` → `05.outputs/public/`
- `out/review/SDA_Administration_Special_Situations_Report_2026_REVIEW.pdf` → `05.outputs/review/`
- `out/cover_tests/cover_canonical.png` → `05.outputs/previews/cover.png`
- `out/public/contact_sheet.png` → `05.outputs/previews/contact_sheet.png`

`05.outputs/` only ever holds the latest published copies — there is no
versioned filename there. `out/`'s 24 individual page PNGs and debug HTML are
useful for local QA but are not published anywhere; delete `out/` freely
between sessions if disk space matters, it regenerates from a single command.

## Editing content

Change page copy in `../02.content/pages/page_NN.md` first (the editorial
source of truth), then update the corresponding entry in `content/pages.yaml`
to match — this system does not auto-transcribe markdown into YAML. Visual
data (visual_type, visual_data) lives only in `content/pages.yaml`.

To add or change a visual component: add a macro in
`templates/components/macros.html`, register its `visual_type` name in the
dispatch block in `templates/page.html`, and add the matching CSS in
`static/css/components.css`.

## review_payload.json

Regenerated from `../02.content/review_manifest.yaml` on every `--payload` (or
`--all`) build into `../04.review/manifest/review_payload.json` — never
hand-edited. Schema: one entry per review item with `page_id`, `page_number`,
`page_title`, `review_id`, `topic`, `current_working_view`,
`decision_required`, `claims_affected`, `pages_affected`. This feeds the Steve
Review App (`../04.review/app/`) and is not itself a review interface.

## History

This engine is the direct descendant of the visual system built across three
prior rounds — see `../90.archive/visual/v0.1/` and `v0.2/` for the earlier
builds (including the original cover A/B test and the fixed WeasyPrint
`writing-mode`/font-embedding bugs, documented in each archived version's own
`qa/` folder) and `../00.project/changelog.md` for the round-1 content and
architecture changes layered on top of `v0.2` to produce the content this
engine currently renders.
