# Cleanup Manifest — ADMIN_REPORT_WORKING_PACK → b.admin-and-special-situations-report-2026

Written before any move/delete, per the requested safety procedure. Verified first:
**no file outside this folder references `ADMIN_REPORT_WORKING_PACK`** (checked
`ndis-python-v2/`, `sda-market-update/`, `SDA_Market_Manual_Python/`,
`REPORT_SYSTEM_CONTEXT.md`, `.claude/`, and this account's memory files — zero
matches). All internal references found are either code comments or prose mentions
resolved by relative-path logic (`Path(__file__).resolve().parent...`), not hardcoded
absolute paths — safe to move, but every script whose *relative nesting depth*
changes is still listed below with its exact fix, and re-verified by a post-move
build.

Hash-verified duplicates before any delete: font/image assets identical across
`visual_v0.1`, `visual_v0.2`, `steve_review_round1/visual` (`diff -rq`, zero
differences); `ADMIN_REPORT_evidence_notes_v0.1.zip` identical to `evidence_notes/`
except for a `.DS_Store` (`diff -rq` after extraction).

Legend: **KEEP** = moves within active layer · **ARCHIVE** = moves to `90.archive/`
· **DELETE** = removed, regenerable or genuinely redundant.

## 00.project/

| Old path | Action | New path | Reason | Risk |
|---|---|---|---|---|
| `report_brief.md` | KEEP | `00.project/report_brief.md` | Current brief, explicitly named as current | None |
| `confidentiality_rules.md` | KEEP | `00.project/confidentiality_rules.md` | Active governance rule, still referenced by evidence notes | None |
| `steve_review_round1/STRATEGIC_DIRECTION.md` | KEEP | `00.project/strategic_direction.md` | Current strategic interpretation | None |
| `steve_review_round1/revised_skeleton.yaml` | KEEP | `00.project/skeleton.yaml` | Only active skeleton per versioning rule | None |
| `steve_review_round1/STEVE_FEEDBACK_SOURCE.md` | KEEP | `00.project/steve_feedback_round1.md` | Latest SME feedback source | None |
| `steve_review_round1/CHANGELOG_from_visual_v0.2.md` | KEEP | `00.project/changelog.md` | Current changelog | None |
| `README.md` (root, pre-visual era) | ARCHIVE | `90.archive/planning/README_original.md` | Stale (predates visual/draft lock; says "no PDF, not wired into a build") | Low — superseded by new `00.project/README.md` |
| *(new file)* | — | `00.project/README.md` | New, written to reflect current structure | — |

## 01.evidence/

| Old path | Action | New path | Reason | Risk |
|---|---|---|---|---|
| `claims_register.csv` | KEEP | `01.evidence/claims_register.csv` | Current source of truth | None |
| `evidence_register.csv` | KEEP | `01.evidence/evidence_register.csv` | Current source of truth | None |
| `source_manifest.yaml` | KEEP | `01.evidence/source_manifest.yaml` | Current source of truth | None |
| `evidence_claim_crosswalk.md` | KEEP | `01.evidence/claims_evidence_crosswalk.md` | Renamed to canonical form only, content untouched | None |
| `steve_review_round1/CLAIMS_AND_EVIDENCE_IMPACT.md` | KEEP | `01.evidence/claims_and_evidence_impact.md` | Current round's impact register | None |
| `evidence_notes/` (10 internal notes + README + index + manifest.json) | KEEP | `01.evidence/internal/` | Sanitised internal evidence, still cited by claims register | None |
| `public_evidence_notes/` (6 public notes + README + index) | KEEP | `01.evidence/public/` | Public evidence, still cited | None |
| `evidence_notes/.DS_Store` | DELETE | — | OS junk | None |
| `ADMIN_REPORT_evidence_notes_v0.1.zip` | DELETE | — | Verified byte-identical (minus `.DS_Store`) to `evidence_notes/`, already integrated into the registers | None — content survives unzipped in `01.evidence/internal/` |
| *(no `primary_sources/` created)* | — | — | No frozen primary-source documents exist locally beyond the notes above (public sources are cited by URL in the notes, not mirrored as files) | Flagged, not invented |

## 02.content/

| Old path | Action | New path | Reason | Risk |
|---|---|---|---|---|
| `steve_review_round1/draft/page_01.md` … `page_24.md` | KEEP | `02.content/pages/page_01.md` … `page_24.md` | Current active editorial draft (round 1) | None |
| `steve_review_round1/draft/full_draft.md` | KEEP | `02.content/full_draft.md` | Current concatenated draft | None |
| `steve_review_round1/draft/README.md` | KEEP | `02.content/README.md` | Current draft-layer README | None |
| `steve_review_round1/draft/review_manifest_round2.yaml` | KEEP | `02.content/review_manifest.yaml` | Canonical name; this is the current (5-item) review manifest | None |
| `steve_review_questions.md` | KEEP | `02.content/steve_review_questions_full.md` | Full historical question list (incl. retired Q8/Q9), still referenced by the manifest's own header comment | Low — reference path in that comment updated |
| `content/` (root, page_04–22 planning stubs) | ARCHIVE | `90.archive/planning/content/` | Earliest page-planning briefs, superseded by the drafts | None |
| `draft_v0.1/` (full folder) | ARCHIVE | `90.archive/drafts/v0.1/` | Superseded editorial draft, real historical value (own QA doc) | None |
| `draft_v0.2/` (full folder) | ARCHIVE | `90.archive/drafts/v0.2/` | Superseded editorial draft, own changelog | None |
| `draft_v0.3/` (full folder) | ARCHIVE | `90.archive/drafts/v0.3/` | Superseded editorial lock, includes the original 9-item `review_manifest.yaml` | None |

## 03.production/

| Old path | Action | New path | Reason | Risk |
|---|---|---|---|---|
| `steve_review_round1/visual/config.yaml` | KEEP | `03.production/config/config.yaml` | Current engine config | None |
| `steve_review_round1/visual/content/pages.yaml` | KEEP | `03.production/content/pages.yaml` | Current structured render data | None |
| `steve_review_round1/visual/content/review_overrides.yaml` | KEEP | `03.production/content/review_overrides.yaml` | Current render-time trims | None |
| `steve_review_round1/visual/templates/` | KEEP | `03.production/templates/` | Current templates | None |
| `steve_review_round1/visual/static/` | KEEP | `03.production/static/` | Current fonts/CSS/images | None |
| `steve_review_round1/visual/scripts/build.py` | KEEP (edited) | `03.production/scripts/build.py` | Current build engine — **paths rewritten**: review manifest source now `../../02.content/review_manifest.yaml` (was `draft_v0.3/review_manifest.yaml` via a now-archived path); `report_version` unchanged; output filenames changed to canonical (no `_round1` suffix); adds a `--publish` step copying the 4 canonical deliverables to `../../05.outputs/` | Medium — mechanical path rewrite, verified by rebuild below |
| `steve_review_round1/visual/README.md` | KEEP (edited) | `03.production/README.md` | Current engine docs, paths updated | Low |
| `steve_review_round1/visual/out/*` | DELETE then regenerate | `03.production/out/` (fresh build) | Stale `_round1`-labelled build artefacts (PDFs, HTML, 24 page PNGs, cover PDF, `.DS_Store`); engine's own build workspace, not a place to keep old copies | None — regenerated by the post-move build test |
| `steve_review_round1/visual/qa/VISUAL_QA.md` | ARCHIVE | `90.archive/planning/VISUAL_QA_v0.2.md` | Copied from `visual_v0.2` into round 1 but never updated for round 1's page changes — stale if kept active | Low — noted explicitly, not silently dropped |
| `visual_v0.1/` (full folder) | ARCHIVE | `90.archive/visual/v0.1/` | Superseded visual build (cover A/B test artefact); real provenance value | None |
| `visual_v0.2/` (full folder) | ARCHIVE | `90.archive/visual/v0.2/` | Superseded visual lock | None |
| `skeleton_v0.3.yaml` | ARCHIVE | `90.archive/skeletons/skeleton_v0.3.yaml` | Superseded | None |
| `skeleton_v0.4.yaml` | ARCHIVE | `90.archive/skeletons/skeleton_v0.4.yaml` | Superseded | None |
| `skeleton_v0.5.yaml` | ARCHIVE | `90.archive/skeletons/skeleton_v0.5.yaml` | Superseded by `00.project/skeleton.yaml` | None |
| `SKELETON_EVIDENCE_REVIEW.md` | ARCHIVE | `90.archive/planning/SKELETON_EVIDENCE_REVIEW.md` | Point-in-time decision record for the v0.3→v0.4 change | None |
| `ARCHITECTURE_CHANGELOG_v0.3_to_v0.4.md` | ARCHIVE | `90.archive/planning/ARCHITECTURE_CHANGELOG_v0.3_to_v0.4.md` | Same | None |
| `DRAFT_READINESS.md` | ARCHIVE | `90.archive/planning/DRAFT_READINESS.md` | Point-in-time RAG assessment, superseded | None |

## 04.review/

| Old path | Action | New path | Reason | Risk |
|---|---|---|---|---|
| `steve_review_round1/visual/review_payload.json` | KEEP | `04.review/manifest/review_payload.json` | Current review payload | None |
| `steve_review_app/src/`, `public/`, `package.json`, `package-lock.json`, `next.config.mjs`, `jsconfig.json`, `.gitignore`, `.env.example`, `scripts/`, `README.md` | KEEP (edited) | `04.review/app/...` | Current review app — **paths rewritten** in `scripts/generate_seed.mjs` (manifest/pages/overrides sources) and `scripts/copy_assets.mjs` (page-render + PDF sources, and the 4 review pages this app now needs: `[6,17,18,20]`, down from `[4,6,13,16,17,18,20]`) to match the new tree; `README.md`/`QA_ACCEPTANCE_TEST.md` prose paths to Supabase updated | Medium — mechanical path rewrite, verified by rebuild below |
| `steve_review_app/supabase/` | KEEP | `04.review/supabase/` | Pulled up to sibling of `app/` per requested structure | None (never programmatically referenced by app code — SQL run manually) |
| `steve_review_app/QA_ACCEPTANCE_TEST.md` | KEEP | `04.review/qa/QA_ACCEPTANCE_TEST.md` | Pulled up per requested structure | None |
| `steve_review_app/exports/.gitkeep` | KEEP | `04.review/exports/.gitkeep` | Empty export dir, preserved | None |
| `steve_review_app/node_modules/` (233M) | DELETE | — | Fully regenerable via `npm install` | None |
| `steve_review_app/.next/` (52M) | DELETE | — | Fully regenerable via `npm run build` | None |
| `steve_review_app/public/page-renders/*.png`, `public/report/*.pdf` | DELETE then regenerate | `04.review/app/public/...` (fresh) | Copied assets, regenerable via the app's own `copy_assets.mjs` once pointed at the new engine location | None |
| `steve_review_app/src/data/review_items.json` | DELETE then regenerate | `04.review/app/src/data/review_items.json` (fresh) | Generated seed, regenerable via `generate_seed.mjs` | None |
| `steve_review_round1/scripts/generate_round2_manifest.py` | ARCHIVE | `90.archive/review_versions/generate_round2_manifest.py` | One-off generator tied to the now-archived `draft_v0.3` path; its output (`review_manifest.yaml`) is now the direct active file, not regenerated each round per the new versioning rule | None — reasoning it recorded is also preserved inline in `review_manifest.yaml`'s own header |

## 05.outputs/

| Old path | Action | New path | Reason | Risk |
|---|---|---|---|---|
| `steve_review_round1/visual/out/public/SDA_Administration_Report_2026_round1.pdf` | KEEP (renamed, via fresh `--publish`) | `05.outputs/public/SDA_Administration_Special_Situations_Report_2026.pdf` | Canonical filename, current output | None |
| `steve_review_round1/visual/out/review/SDA_Administration_Report_2026_REVIEW_round1.pdf` | KEEP (renamed) | `05.outputs/review/SDA_Administration_Special_Situations_Report_2026_REVIEW.pdf` | Canonical filename | None |
| `steve_review_round1/visual/out/cover_tests/cover_canonical.png` | KEEP (renamed) | `05.outputs/previews/cover.png` | Canonical filename | None |
| `steve_review_round1/visual/out/public/SDA_Administration_Report_2026_contact_sheet.png` | KEEP (renamed) | `05.outputs/previews/contact_sheet.png` | Canonical filename | None |
| `steve_review_round1/visual/out/public/*.html`, `out/review/*.html`, `out/cover_tests/cover_canonical.pdf`, `out/page_renders/*.png` (24), `out/.DS_Store` | DELETE | — | Debug HTML / regenerable per-page renders / redundant cover PDF — explicitly excluded from the "extremely clean" outputs layer | None — all regenerable from `03.production` |

## 90.archive/ (destinations already listed above, summarised)

```
90.archive/
├── drafts/{v0.1,v0.2,v0.3}/        ← full folders, unmodified
├── visual/{v0.1,v0.2}/             ← full folders, unmodified (each keeps its own out/ and static/fonts as a self-contained snapshot)
├── skeletons/                       ← skeleton_v0.3/v0.4/v0.5.yaml
├── review_versions/                 ← generate_round2_manifest.py
└── planning/                        ← README_original.md, SKELETON_EVIDENCE_REVIEW.md,
                                        ARCHITECTURE_CHANGELOG_v0.3_to_v0.4.md, DRAFT_READINESS.md,
                                        content/ (root planning stubs), VISUAL_QA_v0.2.md
```

## Top-level delete candidates

| Path | Action | Reason |
|---|---|---|
| `.DS_Store` (6 occurrences across the tree) | DELETE | OS junk, zero content |
| `steve_review_round1/` (folder itself, once emptied by the moves above) | DELETE (empty dir) | Contents fully redistributed; per the versioning rule, no permanent `round1`-named folder remains |

## Intentionally NOT deleted

- Both `visual_v0.1/` and `visual_v0.2/` are archived **whole**, including their own `static/fonts/` copies (byte-identical to the active copy) — an archived build must stay independently rebuildable; stripping its fonts would silently break that guarantee for a few MB of saving.
- `steve_review_questions.md` — kept active (not archived) because `review_manifest.yaml`'s own header comment still points to it for the two retired questions (Q8/Q9) Steve may volunteer unprompted.
- No `01.evidence/primary_sources/` folder was invented — no such frozen files exist locally; public sources are cited by URL inside the evidence notes themselves.
