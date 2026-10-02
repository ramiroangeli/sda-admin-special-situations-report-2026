# Changelog — visual_v0.2 → steve_review_round1

Round 1: Steve Dawson's first detailed commercial review, treated as a strategic
repositioning brief per `STRATEGIC_DIRECTION.md`, not a redline. `visual_v0.2` and
`draft_v0.3` are unchanged and remain the previous locked version. Page numbers below
are unchanged end to end (old page 4 = new page 4, ... old page 24 = new page 24) —
the one new page (2) and one merge (old 2+3 → new 3) net to zero, so every reference
below is a direct, comparable page-number match.

## Report-wide

- **Title**: cover now spells out "Specialist Disability Accommodation" ahead of the
  acronym — *Specialist Disability Accommodation Administration & Special Situations
  Report 2026*. Extends (does not reopen) `visual_v0.2`'s canonical short-title
  decision. Subtitle unchanged.
- **Companion positioning**: new — introduces the report (page 2) as a companion to
  *SDA Market Report 2026*, the existing flagship report, rather than a standalone or
  overlapping document.
- **Central thesis**: shifted from an operational "how to run an SDA administration"
  sequence to "why SDA needs different diagnosis, which factors alter recovery, when
  to engage a specialist" — see `STRATEGIC_DIRECTION.md`.
- **Terminology**: "due diligence" now deliberately split into four terms
  (Specialist SDA Commercial Vendor Due Diligence / Buyer Due Diligence / Commercial
  Due Diligence / legal review) rather than one generic term, applied where each
  page's meaning calls for it — not a blanket find-replace.
- **Contact**: page 24 changed from a company-level contact
  (hello@sdahomechoices.com.au) to Steve Dawson's named personal contact, sourced from
  the flagship report.
- **Review burden**: 9 review items across 7 pages → 5 items across 4 pages (`Q1, Q3,
  Q7, Q11` resolved this round; `Q2, Q4, Q5, Q6, Q10` remain open). Page 16 no longer
  carries a review panel in review mode.

## Page-by-page

| Page | Change type | What changed |
|---|---|---|
| 1 | REVISED | Spelled-out title. |
| 2 | **NEW** | "Why SDA Is Different" — two exposures (freehold vs. provider business), nascent-asset-class framing, companion-report reference. Did not exist in visual_v0.2. |
| 3 | MERGED | Old pages 2 + 3 combined ("When the Appointment Lands" + "How to Use This Report") to free a page for the new page 2. Nav table condensed to 6 rows (from 6 in v0.2 plus the new page-2 entry) after an overflow fix. |
| 4 | REPOSITIONED | "Why SDA Special Situations Matter Now" → "What the Headline Demand Data Does Not Tell You." Same NDIA figures retained; adds the round's central new thesis (eligible-not-using ≠ viable demand), an illustrative funding-vs-income bar comparison, and an SDAHC Research-attributed 3-year cohort-trend note. Old Q1 resolved (superseded). |
| 5 | UNCHANGED | Carried forward verbatim. |
| 6 | REVISED | Adds a specialist-adviser call-out above the six-box grid; strengthens the Contracts box (registered provider identification, independent-provider consideration, engage constructively). Old Q2 still open. |
| 7 | REVISED | Framing sentence only — six-stage sequence unchanged, now explicitly named as what Commercial Vendor Due Diligence looks like in the first month. |
| 8 | REVISED (light) | One connecting sentence added; chain and content otherwise unchanged. |
| 9 | UNCHANGED | Terminology-only pass ("diligence" → "Commercial Vendor Due Diligence" where applicable). Matrix and cells unchanged. |
| 10 | REVISED | Retitled to add "Participant Information"; new paragraph on the owner/provider/participant information misconception (de-identified analysis is possible without disclosing private data). 12-question list unchanged. |
| 11 | UNCHANGED | One connecting sentence added; reconciliation unchanged. |
| 12 | REVISED | Retitled to include remaining pricing tenure and highest-and-best-use. Adds a qualitative, evidence-gated value-gap statement (no percentage published), a named "remaining SDA pricing tenure" value driver (concept only, no duration asserted as fact), and explicit non-default highest-and-best-use framing. Non-ordinal visual retained; connector-free design unchanged, tenure line added between sections. |
| 13 | REVISED | Four impairment sources unchanged (Steve endorsed). Adds a forensic-DD caveat and "hidden commercial conflicts or dependencies" concept, no named-party implication. Old Q3 resolved. |
| 14 | RENAMED | "What Affects Current Recoverability?" → "Hidden Chokeholds: What Affects Recoverability." Same factor list; adds the remediable-chokehold-vs-fundamental-impairment framing as the page's central question. |
| 15 | REVISED (IP protection) | Line-item checklist (18 items, 6 categories) replaced with 7 high-level categories, no sub-items, plus a restrained SDAHC-contact CTA. |
| 16 | REVISED (deepened) | 4 segmentation factors → 11; adds 4 general (non-named) buyer/fund-mandate behaviour examples. Old Q7 and Q11 both resolved. |
| 17 | UNCHANGED | Content and decision-balance visual unchanged; this file's ASCII sketch corrected to match the visual_v0.2 redesign actually built (draft_v0.3 had described the pre-redesign quadrant). Old Q5/Q6 still open. |
| 18 | REVISED | Reader question already updated in visual_v0.2; adds the "headline occupancy is an operating statistic, Commercial Vendor Due Diligence determines its value relevance" framing sentence. Five-state matrix unchanged. Old Q4 still open. |
| 19 | REVISED | Retitled "Are You Actually Ready to Go to Market?" → "From Vendor Due Diligence to Market." Sequence relabelled around Specialist SDA Commercial Vendor Due Diligence and a specialist sales agency; same underlying logic (verify, reconcile, resolve, prepare, price, package, launch), now 5 named stages instead of 7. |
| 20 | REVISED (framing only) | Opening reconciliation sentence changed from "Reconciliation over the following weeks..." to "Specialist SDA Commercial Vendor Due Diligence identified..." Composite facts, structure and confidentiality treatment unchanged. Q10 **not** marked resolved — remains open. |
| 21 | UNCHANGED | Content and tree unchanged; removed a closing reference to "Steve's Q3 review" (now resolved elsewhere). |
| 22 | REPURPOSED (IP protection) | Detailed 18-item printable checklist replaced with six broad workstreams (Understand/Reconcile/Diagnose/Remediate/Position/Realise) and an adviser-engagement principle. Retitled "SDA Appointment Checklist" → "Before a Realisation Strategy Is Fixed." |
| 23 | REVISED | Adds the bold Commercial Vendor Due Diligence thesis paragraph ahead of the existing capability list — explicit "not a guarantee of optimal value" qualification included. Capability grid and closing pull-quote unchanged. |
| 24 | REVISED | Contact block changed to Steve Dawson (name, title, phone, email); sources/disclaimer text unchanged. |

## Visual system

No brand redesign — same fonts (Playfair Display / Source Sans 3 / Barlow Condensed),
same SDAHC blue, same component language. New/extended components, all built from
existing CSS primitives (`card-grid`/`diag-card`, `simple-list`, `pull-quote`,
`process-chain__note`, `ref-points`/`ref-points__divider`, `factor-grid`,
`section-heading`) — one small new CSS block added for the page 4 illustrative bar
comparison, and one small addition to the contact band for a title line:

- `two_exposures` (page 2, new)
- `stat_cards` extended with optional illustrative comparison + trend note (page 4)
- `six_box` extended with an optional lead callout (page 6)
- `reference_points` extended with an optional tenure note (page 12)
- `diagnostic_cards` extended with an optional note (page 13)
- `factor_center` extended with an optional two-state note (page 14)
- `category_list` (page 15, new — replaces `checklist_categories`)
- `segmentation_grid` (page 16, new — replaces `factor_split_outcome`)
- `workstream_summary` (page 22, new — replaces `checklist_printable`, which is
  retained unused in `macros.html` rather than deleted)
- `sources_list` extended with optional `contact_title` / `contact_phone` fields (page 24)

## Build pipeline

- `scripts/build.py`: paths repointed to read from `steve_review_round1/draft/
  review_manifest_round2.yaml` instead of `draft_v0.3/review_manifest.yaml`;
  `report_version` changed to `SDA-ADMIN-2026-ROUND1-DRAFT`; output filenames changed
  to `..._round1.*` (no `v0.1`/`v0.2`-style version collision with the locked builds).
  Cover A/B testing not reopened — single canonical cover render only.
- `content/review_overrides.yaml`: pruned to just `Q10` (the only remaining item that
  needed a drafting-history trim); `Q3`/`Q11` entries removed since those review IDs no
  longer appear in the reduced manifest.

## Not changed

`visual_v0.2/` and `draft_v0.3/` — read from for reference only (title/contact
citations, prior page text as a starting point), never modified. `claims_register.csv`,
`evidence_register.csv`, `source_manifest.yaml` at the pack root — not edited in place
this round (see `CLAIMS_AND_EVIDENCE_IMPACT.md` for the new claims arising this round,
proposed for formal registration when this round locks).

---

# Round 1.1 — targeted evidence-and-editorial pass

Strategic thesis unchanged (locked). Not a rewrite: closes/narrows evidence gaps,
tightens a small number of editorial issues, reduces repetition, prepares for a short
Steve Round 2 on the same 5 open items (Q2, Q4, Q5, Q6, Q10). 24-page architecture
unchanged. Pre-1.1 state archived at `../90.archive/drafts/round1/` (content) and
`../90.archive/old_outputs/round1/` (PDFs/previews) before any active file was edited.

## Evidence gaps (see `../01.evidence/evidence_gap_resolution_round1.1.md` for method)

- **Page 4, ~9,000 "three-year" trend**: all six locally-held NDIA Supplement P
  workbooks extracted directly. The eligible-not-using split has only existed since
  Q4 2024-25 (30 June 2025) — narrowed to the actual 12-month, four-quarter, *declining*
  series (9,880 → 9,577 → 9,370 → 9,014), sourced to
  `../01.evidence/public/ndia_eligible_not_using_timeseries.csv`. Not left as an
  unverified "SDAHC Research, ~3 years" attribution.
- **Page 4, $10k/$80k illustrative example**: no local primary pricing schedule found
  to ground the figures without opportunistically picking a design category; live
  NDIS pricing-arrangements fetch blocked (HTTP 403). Numbers **removed**; mechanism
  kept as a non-numeric sentence. Illustrative bar visual removed from the page.
- **Page 12, New Build pricing tenure**: renamed "remaining SDA pricing tenure" →
  "remaining **New Build** pricing tenure" and explicitly distinguished from enrolment
  duration. Secondary (non-primary) commentary found consistent with a 20-year
  certificate-of-occupancy-based transition, but the primary NDIS document itself
  could not be retrieved — exact duration remains unpublished, flagged
  `PRIMARY SOURCE CONFIRMATION REQUIRED`.
- **Page 12, >50% value-gap magnitude**: `INT-05` re-read in full; contains no
  quantified example. Qualitative wording kept; flag closed rather than left open
  indefinitely.
- **Page 4, data freshness**: verified live (search only — direct fetch blocked) that
  Q1 2026-27 could not yet exist as at 2026-09-27; wording changed from "the latest
  official quarter available" to "the latest official dataset verified for this
  report."

## Editorial

- **Page 2**: "the single most common way value gets lost" (unsupported ranking) →
  "a common source of value leakage."
- **Page 10**: intro paragraph trimmed — it re-itemised the same economics (payment,
  fee, vacancy, maintenance, sale/breach) the 12-question reference list below it
  already covers. Detail now lives once, in the visual/list; all 12 questions retained
  unchanged (Steve raised no IP concern about this list).
- **Page 18**: "Commercial Vendor Due Diligence is what determines the quality..." →
  "...tests the quality..." — avoids overclaiming that the process itself determines
  value rather than testing/evidencing it.
- **Terminology repetition**: the section running-header ("kicker") on pages 8–13 was
  the single largest source of repetition — it printed the full "Commercial Vendor Due
  Diligence" phrase twice per page (header strip + title block), 12 times across six
  pages. Shortened to "Due Diligence" for pages 8–13; page 7 (the section's
  introduction) keeps the full phrase. In body copy, three further single-use
  instances (pages 9, 11, 14) were replaced with "specialist diagnosis," "the
  diligence process" and "this commercial review" respectively. Full phrase remains
  prominent on pages 7, 15, 19, 20 and 23, as instructed.

## Not changed this round

Pages 3, 5, 6, 8 (body), 13, 15, 16, 17, 19, 20 (composite facts), 21, 22, 23, 24 —
content unchanged; `review_manifest.yaml`'s 5 items unchanged (reviewed for
resolvability without Steve, none resolved — see its own header note); no new
`draft_v0.x`/`round2` folder created in the active layer.

---

# Round 2 — Steve Dawson's second detailed commercial review

Surgical editorial/evidence revision on top of the locked Round 1.1 content.
Strategic direction unchanged (locked) — see `steve_feedback_round2.md` for the raw
feedback record and its item-by-item disposition. Pre-Round-2 content archived at
`../90.archive/drafts/round1.1/` and `../90.archive/old_outputs/round1.1/` before any
active file was edited (this archiving had already been done as part of this round's
preparatory evidence work — see `../01.evidence/evidence_gap_resolution_round2.md`).

## Architecture change: new page 4 (glossary), page 22 retired

A new page 4, "Common SDA Terms & Abbreviations," is inserted immediately after the
introductory/how-to page (page 3), per Steve's stated preference for early placement
and the instruction not to cram an already-dense page to preserve an arbitrary page
count.

To keep the report at 24 pages without expanding it, the former page 22 ("Before a
Realisation Strategy Is Fixed" — six broad workstreams: Understand/Reconcile/Diagnose/
Remediate/Position/Realise, each with "see pages X" pointers) is **retired**. Assessed
as materially duplicative of:

- page 7 (now 8)'s own six-stage Secure→Reconcile→Diagnose→Stabilise→Value→Decide
  sequence — the same six ideas, differently named; and
- page 19 (now 20)'s go-to-market sequence, which already covers the
  reconcile-before-launch principle.

Page 22's one genuinely distinct sentence — collate and reconcile all relevant
information before a realisation strategy is fixed; consider a specialist adviser
where the appointee lacks internal SDA expertise — is folded into the opening of the
new page 20 (old 19), where it functions as a direct precondition for that page's own
"am I ready to launch" question, rather than standing alone as a seventh recap page.
The `workstream_summary` visual/macro itself is not relocated (its content was already
covered elsewhere); `checklist_printable` and now `workstream_summary` both remain
defined but unused in `macros.html`, per the project's existing convention of retaining
superseded macros rather than deleting them.

**Net effect: still 24 pages.** Old pages 1–3 keep their numbers; old pages 4–21 (18
pages) shift to new pages 5–22; old page 22 is retired; old pages 23–24 keep their
numbers.

## Full old→new page-number map

| Old | New | Old | New | Old | New |
|---|---|---|---|---|---|
| 1 | 1 | 9 | 10 | 17 | 18 |
| 2 | 2 | 10 | 11 | 18 | 19 |
| 3 | 3 | 11 | 12 | 19 | 20 |
| — | **4 (new, glossary)** | 12 | 13 | 20 | 21 |
| 4 | 5 | 13 | 14 | 21 | 22 |
| 5 | 6 | 14 | 15 | 22 | **retired** |
| 6 | 7 | 15 | 16 | 23 | 23 |
| 7 | 8 | 16 | 17 | 24 | 24 |
| 8 | 9 | | | | |

Every internal "(page N)" cross-reference across all 24 pages, the page-3 nav table and
four-question index, and the review manifest's `page`/`pages_affected` fields have been
checked and updated against this map.

## Page-by-page (round 2)

| Page (new) | Change type | What changed |
|---|---|---|
| 2 | REVISED | Opening paragraph replaced with Steve's supplied copy (minimal editorial pass); Provider Business/Rights side expanded 6→10 factors (adds sustainable cash flow, WIP/pipeline, brand/reputation value, geographical reach); restrained QR callout to *SDA Market Report 2026* added. |
| 3 | REVISED (light) | One sentence added pointing to the new page 4 glossary; all page-range references renumbered. |
| 4 | **NEW** | Common SDA Terms & Abbreviations — 18 terms, 5 groups. Funds itself by page 22's retirement (see above). |
| 5 | REVISED | Headline third stat card changed from "enrolled dwellings" to "enrolled SDA places" (31,065, SDAHC calculation, cross-validated); adds a visually subordinate highlight metric for the ~46% enrolled-places-not-earning-SDA-income estimate (SDAHC Research / market analysis, not an NDIA statistic); body copy restructured for the new visual hierarchy. |
| 6 | UNCHANGED | Renumbering only. |
| 7 | REVISED | First 48 Hours reordered: Provider/Contracts is now the first box (safeguarding-first rationale), remaining five keep prior relative order. Resolves old Q2. |
| 8 | UNCHANGED | Renumbering only (cross-references updated). |
| 9 | UNCHANGED | Renumbering only (one cross-reference updated). |
| 10 | REVISED | Adds a hedged tenant-mix / short-term-residential-use paragraph; sources tightened to two non-padded citations (SDAHC Research; combined NDIA Supplement P + SDA Rules). |
| 11 | REVISED | Adds a provider-change / re-enrolment paragraph using current primary NDIA guidance (enrolment cancelled on provider change; new application required). |
| 12 | UNCHANGED | Renumbering only. |
| 13 | UNCHANGED | Renumbering only. |
| 14 | UNCHANGED | Renumbering only (one cross-reference updated). |
| 15 | UNCHANGED | Renumbering only (two cross-references updated). |
| 16 | REVISED (tone) | Closing CTA softened — explains why only categories are published rather than instructing "Contact SDAHC"; conversion function left to pages 23–24. |
| 17 | UNCHANGED | Renumbering only (one cross-reference updated). |
| 18 | REVISED | Adds a restrained commercial-diligence principle (no unsupported guarantee). Q5/Q6 retired (no concrete cases supplied this round). |
| 19 | REVISED (review status only) | Q4 retired; five-state framework kept as-is, not expanded. |
| 20 | REVISED | Absorbs former page 22's one distinct sentence as a new opening line; other cross-references renumbered. |
| 21 | UNCHANGED | Renumbering only (one cross-reference updated); Q10 remains open, internal-QA-only. |
| 22 | UNCHANGED | Renumbering only (four cross-references updated). |
| 23 | UNCHANGED | No change. |
| 24 | REVISED | Adds *SDA Market Report 2026* to Key Sources; adds "Continue reading" QR callout. |

## Evidence work (see `../01.evidence/evidence_gap_resolution_round2.md` for full method)

- **16,644** re-verified directly against the primary NDIA Supplement P workbook —
  unchanged, `SUPPORTED_PUBLIC`.
- **Enrolled SDA places (31,065)** — calculated from NDIA Table P.6 dwelling-capacity
  buckets (a floor); cross-validated within 0.3% of SDA Market Report 2026's own
  ~31,155 figure. `SDAHC_EXPERT_OBSERVATION`, methodology transparent.
- **~46% enrolled places not earning SDA in-use income** — replicates SDAHC's own
  already-published SDA Market Report 2026 ratio methodology (participants ÷ places)
  for the current quarter; not a new methodology invented for this report; not
  presented as an NDIA statistic; "market failure" not used.
- **New Build classification date (1 April 2016)** — `SUPPORTED_PUBLIC`, secondary-
  source corroborated (`PUB-07`); primary NDIS document fetch blocked (HTTP 403,
  consistent with prior rounds).
- **Provider change / re-enrolment** — `SUPPORTED_PUBLIC`, secondary-source
  corroborated (`PUB-08`); cost range is `SDAHC_EXPERT_OBSERVATION`, no figures
  invented.
- **SDA Market Report 2026 QR destination** — canonical URL found in the flagship
  report's own QR script, not invented; decode-tested from the rendered PDF.
- `source_manifest.yaml` updated with `PUB-07`, `PUB-08` (new public sources) and
  `PUB-09` (SDAHC Research — SDA Market Report 2026, self-citation); `PUB-10` recorded
  as a combined-citation convenience (PUB-01 + PUB-03), not an independent source.
  `ADM-R2-*` claims are tracked in `steve_feedback_round2.md` /
  `evidence_gap_resolution_round2.md`, following the same convention as Round 1's
  `ADM-R1-*` claims (formal registration into `claims_register.csv` deferred to a
  future consolidation pass, not required to lock this round).

## Review system

Q2, Q4, Q5 and Q6 retired from `review_manifest.yaml` this round — each resolved by
Steve's own round-2 direction (reordering, or an explicit decision to publish without
the requested concrete examples rather than continuing to flag them indefinitely). Only
Q10 (composite realism/confidentiality) remains, strictly as an internal QA item
(review-mode PDF only, page 21) — `config.yaml`'s `review_pages` narrowed from
`[6, 17, 18, 20]` to `[21]` accordingly.

## Not changed this round

Visual/brand system unchanged. `strategic_direction.md` not reopened. `skeleton.yaml`
left as the round-1 architecture record (consistent with how round 1.1 also left it
unrefreshed) with a short notice added pointing to this changelog and `pages.yaml` as
the current source of truth. `claims_register.csv` / `evidence_register.csv` not edited
in place (see above) — only `source_manifest.yaml` updated, for the new public sources
specifically.



## 2026-09-29 - Final Page 21 substantive direction

- Archived the entire active state before editing: `90.archive/review_versions/before_page21_replacement_20260929_101046.tar.gz`.
- Replaced Page 21 with **What Due Diligence May Reveal Before Realisation**. Four institutional diagnostic cards distinguish hidden income/enrolment risk, eligible vacancy support, forensic reconciliation and tax/transaction issues. Main copy: 188 words plus cards. Advice sequencing sits below the cards.
- Preserved Page 20 (process) and Page 22 (pathway). Updated Page 3 navigation and necessary Page 24 citations. Rebuilt full_draft.md from the canonical page files because the prior concatenation predated round 2; no unrelated individual page was rewritten.
- Verified NDIS enrolment and vacancy guidance; current pricing schedule effective 24 September 2026 supports the GST/input-tax-credit distinction. ATO NDIS GST guidance supports conditional treatment, not universal management-service exemption.
- Withheld automatic ownership-change re-enrolment, quantified rectification costs and unsupported provider GST market statistics. Buyer conditions are explicitly SDAHC market experience.
- Retired Q10 as obsolete, archived its metadata, removed the legacy narrative claim from the active register, and cleared active manifest/overrides. Review seed generation now follows the manifest (including zero items) rather than hard-coded historical IDs; preview assets likewise follow active pages.
- Public/review PDFs, renders, contact sheet, review payload and app preview assets regenerated locally. No external distribution, database changes or Git commit.
- Evidence detail and verification limitations: `../01.evidence/page21_evidence_review.md`. Layout and scope checks: `../04.review/qa/PAGE21_QA.md`.

## 2026-09-29 - v1.0 precision QA (two corrections only)

- Archived the active state before editing: `90.archive/review_versions/before_v1_precision_qa_20260929_131538.tar.gz`.
- **Page 5**: reworded the ≈46% highlight-metric label and footnote. The prior wording
  ("...not currently generating SDA in-use income") could be read as asserting that
  every place outside the ratio earns zero SDA income — stronger than a participants ÷
  enrolled-place-capacity comparison can support, given eligible NDIA vacancy payments
  may temporarily cover a participant's departure in limited circumstances (page 21).
  New label: "Estimated enrolled SDA place capacity not occupied by participants with
  SDA funding in use." New footnote frames it explicitly as a utilisation measure, not
  an NDIA vacancy statistic. Calculation (16,644 ÷ 31,065), numerator, denominator,
  date and source are unchanged. `02.content/pages/page_05.md` also brought back into
  sync with `pages.yaml` (it had drifted since the Round 2 overflow fix removed a body
  paragraph and trend-note visual that the `.md` mirror still described).
- **Page 4**: tightened **Basic** (now scoped to Existing Stock, not New Build) and
  **New Build** (now defined by "applicable New Build criteria" generally, with the
  1 April 2016 certificate-of-occupancy requirement named as one element rather than
  the whole definition). Verified against existing `PUB-03`/`PUB-07` evidence; no new
  pricing-tenure duration introduced.
- Addendum added to `../01.evidence/evidence_gap_resolution_round2.md` §3 documenting
  the corrected framing (methodology and figures unchanged, wording only).
- `full_draft.md` patched to match both corrected pages.
- No other page, claim, architecture or strategic content touched. Review manifest
  remains empty (zero active Steve review items) — this pass did not reopen review.
- Rebuilt and republished public + review PDFs, page renders, contact sheet and review
  payload. 24 pages confirmed; both QR codes (pages 2, 24) decode-tested from the
  rendered PDF to `https://sdahomechoices.com.au/report2026`; public-mode purity check
  passed (no internal IDs or review text).
- **Status: v1.0 — FINAL PUBLICATION CANDIDATE**, pending Ramiro's confirmation before
  any external publication, tagging or Git commit.

## 2026-09-29 - v1.0 approved as FINAL; release record created

- Ramiro approved the v1.0 precision-QA build above as **FINAL**. Status upgraded from
  "FINAL PUBLICATION CANDIDATE" to **v1.0 — FINAL**.
- Steve Dawson's editorial/content review of this report is complete: **0 active review
  items** (`02.content/review_manifest.yaml` is `[]`; `04.review/manifest/review_payload.json`
  reports 0 items). Editorial/content review is closed.
- Re-ran the canonical build from the current project path
  (`02.admin-and-special-situations-report-2026`) with no content change: 24 pages,
  public-mode purity check passed, both QR codes (pages 2, 24) decode-tested from the
  rendered PDF to `https://sdahomechoices.com.au/report2026`. Canonical output remains
  `05.outputs/public/SDA_Administration_Special_Situations_Report_2026.pdf`
  (SHA-256 `ffed2209649bb81b52d361c6b5b6760d1e4413013e35e950436cc3fb263cd8ae`).
- Release record created at `RELEASE.md`.
- **Any future substantive change to this report must be released as v1.1 or later —
  v1.0 must not be silently modified.**
- **Git**: this project directory is not, and has never been, inside a Git repository
  (no `.git` found from this path up to filesystem root; no `.gitignore` present). Tag/
  commit steps could not be performed this pass — see Ramiro's own report for the
  blocker and the options to resolve it.

## 2026-09-29 - Final design polish pass (typography, header/footer, TOC, em dashes)

Editorial/content work remains closed this pass; scope was rendering and typography
only. Archived active state before editing:
`90.archive/review_versions/before_v1_precision_qa_20260929_131538.tar.gz` (the same
archive point as the immediately prior precision-QA pass, since no further edit had
landed between them).

- **Page 3 redesigned as Contents.** Retired the old nav/how-to page (four-question
  breakdown, opening paragraph, pull-quote) in favour of a one-page Contents built
  around Steve's six approved section blocks (Understand / Engage Specialist /
  Commercial Vendor Due Diligence / Remedy-Position / Realise / Reference), each with a
  large condensed section-range number, thin dividing rules and a restrained two-column
  page list. Adapted (not copied) from the stored reference at
  `00.project/design_refs/toc_reference.png`; no photography, no icons. Data is
  generated at build time by `scripts/build.py`'s new `build_toc_data()` from the
  canonical `pages` list (`TOC_GROUPS` constant supplies only page numbers and
  section/range labels; every page **title** is looked up live, never retyped), so the
  Contents cannot silently desynchronise from the actual page titles in future rounds.
  The old page-24 disclaimer sentence this page used to echo was already present on
  page 24 independently and did not need to be preserved here.
- **Header simplified.** The long running report title is removed from every internal
  page's top header; only the section label remains, now bold, ~1pt larger (8pt → 9pt)
  and guaranteed one line (`white-space: nowrap`, plus the horizontal space the long
  title used to occupy). This also fixes a genuine pre-existing bug: "Commercial Vendor
  Due Diligence" (page 8's kicker) was wrapping to two lines because the long title
  competing for row width forced a flex-shrink. Header vertical footprint reduced
  (~26mm → ~17.5mm) by tightening `sheet__kicker-row` padding/margin; content starts
  correspondingly higher on every page without any other position being hand-tuned.
- **Footer simplified.** Every internal page footer now reads exactly
  `SDA ADMINISTRATION & SPECIAL SITUATIONS - 2026` (ordinary hyphen), page number
  retained on the opposite side. Cover page unaffected (it never carried this chrome).
- **Zero em dashes (U+2014) in public copy.** Rewrote every instance in
  `pages.yaml` (91 occurrences), `templates/components/macros.html`,
  `templates/page.html`/`report.html`, and `scripts/build.py`'s `PUB_SOURCES` labels
  (the last of these renders live in every page's source footer and in page 24's key
  sources list, so it counted) contextually, using whichever punctuation actually fit
  each sentence (comma, semicolon, colon, full stop, parentheses) rather than a blind
  find-replace. One CSS-generated separator (`.glossary-term__name::after`, page 4) also
  injected an em dash into rendered output and is now a colon. En dashes in ranges
  (2025-26, page ranges like 08-14) and ordinary hyphens (in-use, pre-sale) were left
  untouched, per instruction. Verified via `pdftotext` extraction of the final rendered
  PDF, not just the source: **0** matches.
- **A genuine WeasyPrint rendering bug found and fixed during this pass.** The first
  Contents build (large 30pt numbers, roomier spacing) computed taller than the printable
  frame once populated with the real 22-entry, 6-group dataset (my initial space budget
  had under-estimated line-wrapping for longer titles in a two-column layout). Instead of
  clipping the overflow (the documented, expected behaviour for this template's
  `overflow: hidden` sheets), WeasyPrint 68.1 rendered the **entire page blank** in that
  specific case, an edge-case engine failure distinct from ordinary clipping, reproduced
  and confirmed in isolation before the fix. Resolved by tightening the Contents CSS
  (numbers 30pt to 19pt, tighter block/row spacing) to fit with a large safety margin
  rather than right at the limit, not by working around the renderer.
- **Global overflow QA.** All 24 pages re-rendered to PNG and inspected, with particular
  attention to pages 3, 4, 5, 11, 13, 17, 21 and 24 per instruction. No clipped lines,
  footer collisions, section-label wrapping, card overflow or unexpected extra pages
  found after the fixes above.
- Rebuilt and republished public + review PDFs, page renders, cover, contact sheet and
  review payload (still 0 items). Public-mode purity check passed; QR codes on pages 2
  and 24 decode-tested from the rendered PDF to
  `https://sdahomechoices.com.au/report2026`. New canonical PDF SHA-256:
  `9709bd525f8f99522a296c2bf4a063cd2680e7f1947bb78f63674449c89dc0f9` (supersedes the
  prior precision-QA pass's hash, since the visual output changed).
- **Status reverted to v1.0 — FINAL PUBLICATION CANDIDATE** in `RELEASE.md` per
  instruction, pending Ramiro's visual approval of this design pass before it is
  re-marked FINAL and the Git repository is initialised/frozen in a separate task. Git
  was not touched this pass (still no `.git` anywhere in this path, as previously
  reported).

## v1.0 FINAL (29 September 2026)

Final release. Ramiro's visual approval received; project frozen in Git as
`sda-admin-special-situations-report-2026-v1.0`. Canonical PDF SHA-256 recorded in
`RELEASE.md`. `90.archive/` and regenerable build output (`03.production/out/`,
previews, review PDF) are not versioned.

## v1.1 FINAL (1 October 2026)

Final design reference adopted. Cover embedded as image asset; page 24 closing block per reference (contact: research@sdahomechoices.com.au, QR, Steve Dawson name and phone); pages 20-21 navy bands inset to 14 mm margins; circa 46% on page 5; italic title on page 2. Copy otherwise unchanged. v1.0 untouched.
- v1.1 housekeeping: generated PDFs remain in Git history up to v1.1 (tags v1.0, v1.1) and are no longer versioned after that commit.
