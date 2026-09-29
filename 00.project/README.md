# b.admin-and-special-situations-report-2026

*Specialist Disability Accommodation Administration & Special Situations Report
2026* — SDAHC Research. This project was restructured from
`ADMIN_REPORT_WORKING_PACK/` into the layout below; see `CLEANUP_MANIFEST.md`
(project root) for the full move-by-move record of that restructuring.

## How this project is organised

```
PROJECT   →  00.project/     governance: brief, strategy, skeleton, feedback, changelog
EVIDENCE  →  01.evidence/    claims/evidence registers, sanitised research notes
CONTENT   →  02.content/     the current active editorial draft (24 pages)
PRODUCTION → 03.production/  the build engine that renders content into the report
REVIEW    →  04.review/      Steve's review app, its Supabase schema, and QA
OUTPUTS   →  05.outputs/     the latest public/review PDFs and preview images
ARCHIVE   →  90.archive/     every superseded draft, skeleton and visual build
```

Read that top-to-bottom and you have the whole project: what it's trying to
say, what it's allowed to say, what it currently says, how that gets turned
into a PDF, how Steve reviews it, what the reader receives, and where
everything superseded went.

## Where to start

- **Understand the current commercial direction**: `strategic_direction.md` (this folder).
- **See what changed and why**: `changelog.md` (this folder).
- **Read the current report**: `../02.content/full_draft.md`, or just open `../05.outputs/public/SDA_Administration_Special_Situations_Report_2026.pdf`.
- **Rebuild the report**: `cd ../03.production && python3 scripts/build.py --all`.
- **Run Steve's review app**: `../04.review/app/README.md`.

## Versioning rule (binding going forward)

**Active folders (`00.project`–`05.outputs`) hold exactly one current version
of everything, always.** When a new round of feedback or revision supersedes
the current content/skeleton/visual engine:

1. Move the previous active version into `90.archive/` (in the matching
   subfolder — `drafts/`, `visual/`, `skeletons/`, `review_versions/`, or
   `planning/`).
2. Promote the new version into the canonical active path — same filename,
   no version suffix (`skeleton.yaml`, not `skeleton_v0.6.yaml`; `pages.yaml`,
   not `pages_round2.yaml`).
3. Update `changelog.md` with what changed and why.
4. Never create a permanent active folder named after a round or version
   number (no `draft_v0.4/`, `visual_v0.3/`, `round2/`, etc.). Version history
   lives only in `90.archive/` and in `changelog.md` — never in an active
   filename.

## Known limitation, disclosed rather than hidden

Archived visual builds (`90.archive/visual/v0.1/`, `v0.2/`) are kept complete
and self-contained for their own static assets (fonts, images, CSS) — but
their `scripts/build.py` still contains a relative-path reference to a
`draft_v0.3/` sibling that no longer sits next to them (it was moved to
`90.archive/drafts/v0.3/` as part of this restructuring, per the archive's
own category-based layout: drafts and visual builds are archived separately,
not paired). Rebuilding an archived version standalone would need that one
path pointed at `../drafts/v0.3/review_manifest.yaml` by hand first. This
wasn't fixed in place, to avoid duplicating `draft_v0.3` into two archive
locations. Only the **active** engine (`03.production/`) is guaranteed
one-command buildable — confirmed by a full rebuild test after this
restructuring (see `changelog.md`).
