# PAGE 05 — WHAT THE HEADLINE DEMAND DATA DOES NOT TELL YOU

**Reader question:** Does eligible SDA funding mean viable demand for this dwelling?

**Round 2 renumbering note:** was page 4 — shifts to page 5 with the insertion of the
new page 4 glossary; see `../../00.project/changelog.md` for the full old→new page map.

**Round 2 change type:** REVISED. Headline visual's third card changes from "enrolled
dwellings" to "enrolled SDA places" (Steve's instruction — dwellings and places are
different measures; an official place-capable field does not exist, so a transparent,
cross-validated SDAHC calculation is used instead of a raw dwelling count). Adds a
fourth, visually subordinate metric — an enrolled-place utilisation estimate — published
only because a reproducible numerator, denominator, date, definition, source and
methodology exist; framed as SDAHC Research / market analysis, never as an NDIA
statistic, and never using the phrase "market failure." See
`../../01.evidence/evidence_gap_resolution_round2.md` §§2–3 for the full method. To keep
the page within one sheet, the detailed enrolled-places calculation walkthrough lives in
the caption/footnote and `../../01.evidence/public/enrolled_places_calculation.csv`
rather than as a fifth body paragraph.

**v1.0 precision QA (2026-09-29):** the highlight-metric label and footnote were
corrected. The original wording ("...not currently generating SDA in-use income") could
be read as implying every place outside the ratio earns zero SDA income, which
overstates what a participants-vs-capacity comparison can support — some of that gap
may in fact be covered by eligible NDIA vacancy payments in limited circumstances (see
page 21). The label now reads as a utilisation/enrolled-capacity comparison, not an
income or vacancy statistic. The calculation itself (16,644 ÷ 31,065) is unchanged.

As at 30 June 2026 — the latest official dataset verified for this report — 16,644
active participants had SDA funding in use, and a further 9,014 were assessed as
eligible for SDA but not yet using it. Nationally, 14,235 dwellings were enrolled as
SDA, representing an estimated 31,065 enrolled SDA places (see below); enrolled
dwellings grew from 7,925 in June 2023 to 14,235 in June 2026, and annualised SDA
supports over the same period rose from $365m to $684m.

**Eligibility, or the existence of SDA funding, does not by itself establish
commercially viable demand for a particular enrolled dwelling.** The quarterly data is
not granular enough for an investor to tell, from the headline eligible-not-using
count, whether an individual participant's funding level is commercially aligned with a
specific dwelling's enrolled pricing capacity. A participant can technically hold SDA
funding at a level materially below the enrolled income capacity of the dwelling they
wish to occupy.

The consequence: headline eligible-not-using volume may overstate economically
addressable demand for some properties, and a physically occupied place can still be
materially underfunded relative to its enrolled pricing capacity. Some of these
situations can be remediated; others cannot — identifying which is a diagnosis, not an
assumption either way.

NDIA quarterly reporting has separated "eligible, not yet using" from "using"
participants only since the Q4 2024-25 (30 June 2025) release. Across the four quarters
this split has been published, the count has moved from 9,880 (June 2025) to 9,577
(December 2025) to 9,370 (March 2026) to 9,014 (June 2026) — a 12-month decline, not a
static three-year pattern. From 27 August 2026, new plan-reassessment requirements
apply; the effect on individual SDA funding outcomes should not be inferred from this
change alone.

**Visual:** the three-figure panel (SDA in use / eligible, not yet using / enrolled SDA
places, replacing enrolled dwellings), with a caption naming the enrolled-places
calculation basis, followed by a visually distinct, single-metric highlight block for
the utilisation estimate — deliberately given lower visual weight than the three-card
row, per instruction to avoid "a dashboard full of competing statistics."

**Visual data (current, post-v1.0 correction):**

```text
16,644                9,014                   31,065
SDA in use             Eligible, not           Enrolled SDA places
                        yet using

≈46%
Estimated enrolled SDA place capacity not occupied by participants with
SDA funding in use
SDAHC Research / market analysis: calculated by comparing active
participants with SDA in use against estimated enrolled SDA place
capacity. This is a utilisation measure, not an NDIA vacancy statistic.
```

Evidence note: NDIA participant/eligible figures unchanged and re-verified
(`../../01.evidence/evidence_gap_resolution_round2.md` §1, `SUPPORTED_PUBLIC`).
Enrolled SDA places (31,065) is an `SDAHC_EXPERT_OBSERVATION` — a calculated, not
NDIA-published, figure, but transparent and cross-validated against SDA Market Report
2026's own independently-derived ~31,155 figure (within 0.3%) — see
`../../01.evidence/evidence_gap_resolution_round2.md` §2. The ≈46% utilisation estimate
is `SDAHC_EXPERT_OBSERVATION` / SDAHC Research — Market Analysis, replicating SDAHC's
own already-published ratio methodology rather than a new methodology invented for this
report, and consistent with — not exceeding — Steve's own ">40%" expectation; see
`../../01.evidence/evidence_gap_resolution_round2.md` §3 for numerator, denominator,
date, definition, source and full method, and its v1.0 addendum for the corrected
public-copy framing. The calculation is a utilisation/capacity comparison only — it is
not a statement that every place outside the ~46% earns no SDA income (eligible NDIA
vacancy payments may apply in limited circumstances; see page 21), and it is not
presented as an NDIA vacancy rate.
