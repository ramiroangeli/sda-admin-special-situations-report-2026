# Page 21 Replacement — QA (2026-09-29)

Verified independently after the page 21 replacement was found already implemented in
the active files. Checks below were run directly against
`03.production/content/pages.yaml`, the rendered page PNGs
(`03.production/out/page_renders/page-*.png`, 150dpi from the rebuilt PDF) and the
published PDFs, not merely against the drafting notes.

| # | Check | Result |
|---|---|---|
| 1 | Current composite page 21 is retired | ✅ `page-21` entry is entirely the new `diligence_lenses` content; no composite text remains anywhere in it |
| 2 | No stale composite references remain | ✅ `grep -rniE "composite\|worked example\|illustrated"` across `pages.yaml`, all `02.content/pages/*.md` and `full_draft.md` returns zero hits tied to page 21 (only historical mentions in round-1 planning docs, which are audit trail, not live copy) |
| 3 | Q10 removed from active review | ✅ `review_manifest.yaml` is `[]`; `review_payload.json` `items: []`; `config.yaml` `review_pages: []` |
| 4 | Provider-change/new-enrolment wording matches current NDIA guidance | ✅ Matches PUB-08 and the newly-verified NDIS "How to enrol a home as SDA" page (cancellation on provider change; new application treated as new even if previously enrolled) |
| 5 | Change-of-ownership NOT presented as an automatic re-enrolment trigger unless sourced | ✅ Page copy only says a sale "may prompt buyers, lenders or advisers to seek continuity evidence" — ownership change itself is never stated as a trigger; `ADM-P21-H01` explicitly withholds that claim in `../../01.evidence/page21_evidence_review.md` |
| 6 | Vacancy-payment wording reflects current eligibility rules | ✅ "temporarily support income after a participant moves out of a qualifying shared home; eligibility, duration and evidence must be tested," excludes never-occupied new builds — matches PUB-11's cited shared-home/day-limit eligibility |
| 7 | No vacancy guarantee implied | ✅ "may," "eligible," "must be tested" throughout; no duration or amount stated |
| 8 | GST language does not constitute tax advice | ✅ "Obtain specialist taxation advice" stated prominently; each GST point ends in "verify with tax advisers" |
| 9 | SDA pricing/GST distinction supported by a primary pricing source or gated | ✅ PUB-12 — current Pricing Schedule for SDA 2026-27, effective 24 September 2026, section 3.1(c)(vi) and Appendix 1 Tables 1 & 5 — no calculated income effect asserted |
| 10 | Provider GST language qualified | ✅ "similar arrangements may have different GST treatment... verify... with tax advisers"; the "large providers don't charge GST" market-statistic framing is explicitly withheld (`ADM-P21-H03`) |
| 11 | Page 21 does not duplicate page 20 | ✅ Page 21 body states outright it shows "what the process on page 20 may reveal"; its closing sequence (Commercial diagnosis → Legal/tax review → Realisation strategy → Specialist market process) is distinct from page 20's own Vendor-DD-to-market chain, not a restatement of it |
| 12 | Pages 20–22 form a coherent sequence | ✅ Read together: 20 = process, 21 = what the process may reveal, 22 = pathway that follows — page 21's closing line ("Page 22 translates the findings into pathway decisions") makes the link explicit; page 22 itself is unchanged and still self-consistent |
| 13 | Page 24 sources updated if required | ✅ Adds PUB-11, PUB-12, PUB-13 to the existing list (11 sources total) — concise, not a bibliography dump |
| 14 | Public PDF contains no review/internal language | ✅ `scripts/build.py`'s public-mode purity assertions passed (no review-panel markup, no claim/evidence IDs) |
| 15 | Report remains 24 pages with no overflow | ✅ `pdfinfo` reports 24 pages; page 21's rendered PNG shows the full four-card grid, closing paragraph and sequence band with a comfortable margin above the footer — no clipped or overlapping text |

## Not re-verified in this pass

The underlying source URLs and section/page citations in
`../../01.evidence/page21_evidence_review.md` (NDIS enrolment/vacancy pages, the
24-September-2026 pricing schedule, ATO GST guidance) were reviewed for internal
consistency and correct hedging, but their live URLs were not independently
re-fetched in this QA pass — see that file's own "Remaining limits" note (direct NDIS
document fetch returns HTTP 403 to automated tools; content was verified via web
retrieval, not a frozen local copy).
