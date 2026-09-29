# Claims and Evidence Impact — Round 1 (+ Round 1.1 evidence pass)

Written and checked against the existing evidence pack **before** drafting copy, per
instruction. Classification key: `SUPPORTED_PUBLIC`, `SUPPORTED_INTERNAL`,
`STEVE_DIRECT_EXPERT_INPUT`, `NEEDS_INTERNAL_CONFIRMATION`, `NEEDS_PUBLIC_SOURCE`,
`ILLUSTRATIVE_ONLY`. Proposed IDs use an `ADM-R1-##` stem — these are not yet
registered in the pack-root `claims_register.csv`/`evidence_register.csv`; formal
registration is a follow-up step once this round itself reaches editorial lock (see
`README.md` in this folder for why the root registers were not edited in place).

**Round 1.1 update (targeted evidence-gap pass, strategic direction unchanged):** four
of the five open gaps below were investigated against local primary sources (all six
locally-held NDIA Supplement P workbooks, `INT-05`, and a live web search where local
evidence was insufficient) and are now closed or narrowed — see
`evidence_gap_resolution_round1.1.md` for the full method and findings, and
`ndia_eligible_not_using_timeseries.csv` for the reproducible eligible-not-using series.
Rows for ADM-R1-01, ADM-R1-03, ADM-R1-04 and ADM-R1-05 are updated in place below with a
**Round 1.1** note; the original Round 1 finding is kept struck through for audit trail
rather than deleted.

## Preliminary checks

**Data currency.** `DATA_CURRENT_AS_AT`: 30 June 2026 (Q4 2025–26). `SOURCE_CHECK_DATE`:
2026-09-27 (this round). `SOURCE`: local — `public_evidence_notes/public_evidence/
PUB-01_ndia_q4_data.md`, retrieved 2026-09-23, citing NDIA Supplement P. No live network
query was made this round (none of the tools used in this session performed an external
fetch); per instruction this is recorded as a gap rather than guessed. **No newer
official quarter was found or invented** — 30 June 2026 is retained and labelled in the
draft as the latest official available quarter.

**Flagship title check.** Searched `ndis-python-v2/templates/report.html` directly.
Section-divider watermark (used 4×, the most "designed" instance of the title): **"SDA
Market Report 2026."** Body prose also uses "SDA Report 2026" (2×) and "The SDA Report
2026" (1×) interchangeably. **SDA Market Report 2026** is used in the revised draft as
the more deliberately canonical form, with a note that the flagship's own prose is not
fully consistent about the definite article.

**Steve Dawson contact check.** Found in `ndis-python-v2/templates/report.html`
(flagship report's own closing page): "Steve Dawson," "Managing Director," "0408 550
441," "steve@sdahomechoices.com.au." **SUPPORTED_INTERNAL** — used verbatim in the
revised page 24; no number invented. (Note: `visual_v0.2`'s own page 24 used a
different, company-level contact — `hello@sdahomechoices.com.au` / sdahomechoices.com.au
— sourced from `sda-market-update/build_pdf.py` and flagged at the time as a judgement
call between the two. Steve's round-1 review resolves that judgement call explicitly in
favour of his personal/named contact; both remain available in `../../visual_v0.2/`
unchanged.)

## Claim-by-claim register

| # | Claim (as Steve raised it) | Classification | Evidence checked | How it appears in `../draft/` |
|---|---|---|---|---|
| ADM-R1-01 | SDA in-use value and alternative-use value "can diverge significantly" / "materially higher, in some cases potentially more than 50%" | `SUPPORTED_INTERNAL` (direction/mechanism) + `STEVE_DIRECT_EXPERT_INPUT` (magnitude) | `INT-05` supports material, bidirectional divergence; **no note contains a percentage**. **Round 1.1:** `INT-05` re-read in full; confirmed no quantified example exists anywhere in it or elsewhere internally. | Published as: *"SDAHC has observed cases where the SDA in-use valuation materially exceeds the underlying alternative-use value — and cases where it does not."* No percentage published. **Round 1.1: gap closed by default (qualitative treatment retained) — see `evidence_gap_resolution_round1.1.md` §4.** ~~`[EVIDENCE CONFIRMATION REQUIRED — STEVE >50% VALUE GAP OBSERVATION]`~~ closed, not left open indefinitely. |
| ADM-R1-02 | Funded/not-using participant volume ≠ commercially viable demand for a specific enrolled dwelling | `SUPPORTED_PUBLIC` (category distinction) | `PUB-01` (NDIA reports the measures separately; "eligible/funded-but-not-using is not equivalent to vacant SDA stock"), `INT-07` (occupancy quality varies; do not combine eligibility with vacancy/valuer assumptions) | Published as the page 4 thesis, in NDIA's own terms, without the illustrative dollar figures presented as fact. |
| ADM-R1-03 | Illustrative funding ≈ $10,000 vs. potential enrolled income ≈ $80,000 | `ILLUSTRATIVE_ONLY` | Not present in any evidence note. **Round 1.1:** searched all local evidence and both sibling project directories for a frozen SDA price schedule with actual $ bands — none found; live fetch of the NDIS pricing-arrangements document returned HTTP 403; secondary commentary suggests $80,000 would be an opportunistically low figure for some design categories. | ~~Published once, explicitly labelled "an illustrative example, not a national average"...~~ **Round 1.1: figures REMOVED from page 4** (could not be grounded without selecting a category to make the contrast work); replaced with the non-numeric mechanism statement — see `evidence_gap_resolution_round1.1.md` §2. |
| ADM-R1-04 | Eligible/not-using cohort "remained broadly around 9,000" for ~3 years | `NEEDS_INTERNAL_CONFIRMATION` | Only the current single-quarter figure (9,014) is reproducible locally (`PUB-01`); no multi-quarter series found in `evidence_notes/` or `public_evidence_notes/`. **Round 1.1:** all six locally-held NDIA Supplement P workbooks (Q4 2022-23 → Q4 2025-26) extracted directly; the eligible-not-using split has only existed since Q4 2024-25 (30 June 2025) — a 12-month, four-quarter, *declining* series (9,880 → 9,577 → 9,370 → 9,014), not a static 3-year ~9,000 pattern. | ~~Published as a single-quarter fact... with the multi-year pattern attributed... as SDAHC Research analysis...~~ **Round 1.1: claim NARROWED to the actual reproducible 12-month series**, sourced directly to the primary workbooks — see `ndia_eligible_not_using_timeseries.csv` and `evidence_gap_resolution_round1.1.md` §1. `[EVIDENCE CONFIRMATION REQUIRED — reproducible quarter-by-quarter series for the 3-year ~9,000 trend]` **RESOLVED (narrowed, not confirmed as stated)**. |
| ADM-R1-05 | Remaining SDA pricing tenure: New Build pricing operates on a 20-year horizon from certificate of occupancy, then may convert to Existing Stock treatment | `STEVE_DIRECT_EXPERT_INPUT` — `NEEDS_PUBLIC_SOURCE` for the specific duration | `PUB-02`/`PUB-03` (abstracted notes) confirm maximum-price framework and enrolment/plan-alignment conditions, but **do not state the New Build→Existing Stock transition period** in the note text available locally. **Round 1.1:** live web search (direct fetch of ndis.gov.au blocked, HTTP 403) surfaced non-NDIA secondary commentary consistent with a 20-year certificate-of-occupancy-based transition, and confirmed NDIA's most recent SDA Pricing Review changed how that period's start date is calculated — directionally consistent, but not a primary document this project could retrieve and freeze. | Published as a *concept* only — "New Build pricing tenure" (renamed from generic "SDA pricing tenure" for precision) introduced as a named commercial due-diligence item, explicitly distinguished from enrolment duration, without asserting "20 years" as confirmed fact. `[PUBLIC EVIDENCE REQUIRED — confirm exact New Build pricing tenure period and transition mechanism against current NDIS SDA Pricing Arrangements / Rules text]` **remains OPEN — `PRIMARY SOURCE CONFIRMATION REQUIRED`**, per `evidence_gap_resolution_round1.1.md` §3. |
| ADM-R1-06 | Public-record examples of SDA assets selling below alternative-use value | `NEEDS_PUBLIC_SOURCE` | Not found in `public_evidence_notes/` or `evidence_notes/`. | Not published as a claim. General principle only ("a conventional sale process may fail to identify or resolve SDA-specific value drivers before the market prices the asset") is published without a cited example. `[PUBLIC EVIDENCE REQUIRED — SDA sale below alternative-use value examples]` flagged below. |
| ADM-R1-07 | Valuers may allow for remedial/conversion costs in alternative-use valuations | `NEEDS_INTERNAL_CONFIRMATION` | `INT-05` describes assumption sets (occupancy, provider arrangement, opex, sinking fund/CAPEX, lease-up, discount rate) but does not describe conversion/remediation cost allowances specifically. | Not published as a specific claim this round. `[EVIDENCE CONFIRMATION REQUIRED — remediation/conversion cost allowances in alternative-use valuations]` flagged below. |
| ADM-R1-08 | Buyer/fund mandate behaviours (design-category targeting, sprinkler/Class 3 preference, SA4 exclusions, geography-based underwriting variation) | `STEVE_DIRECT_EXPERT_INPUT` (specific behaviours) + `SDAHC_PROPRIETARY_RESEARCH` (segmentation factors generally) | `INT-10` supports the general segmentation lessons (geography, operating state, provider structure, alternative-use characteristics can justify segmentation; strong/weak assets can have different buyer universes) but does not itemise sprinkler/Class 3 or SA4-specific behaviour. | Published as *general, non-named examples of market segmentation dynamics*, consistent with `INT-10`'s explicit boundary (no buyer rankings, yield requirements, pricing formulas, named feedback). |
| ADM-R1-09 | Two distinct exposures on appointment: SDA freehold property vs. SDA provider business/rights | `SUPPORTED_INTERNAL` + `SUPPORTED_PUBLIC` | `INT-03` (provider agreement questions: who receives payments, fee base, assignment/transition), `PUB-03` (Rules Part 3: provider/dwelling/participant/plan conditions) | Published as the new page 2 thesis. |
| ADM-R1-10 | Hidden commercial conflicts/dependencies as a forensic-DD concept (related-party arrangements, undisclosed dependencies, cross-entity arrangements) | `STEVE_DIRECT_EXPERT_INPUT` + `SDAHC_PROPRIETARY_RESEARCH` | `INT-01` pattern 6 (provider/SIL sustainability can create secondary property risk; aggregate only, never name a provider or assert distress without public evidence) | Published using "hidden commercial conflicts or dependencies," no named-party or misconduct implication, consistent with `INT-01`'s guardrail. |
| ADM-R1-11 | Commercial information can be obtained/analysed de-identified without disclosing private participant data | `STEVE_DIRECT_EXPERT_INPUT`, consistent with existing practice | `confidentiality_rules.md` (existing de-identification discipline), `INT-03` | Published as a framing sentence on page 10; not legal/privacy advice, flagged as such in the copy itself. |
| ADM-R1-12 | Steve Dawson personal contact (phone/email) | `SUPPORTED_INTERNAL` | `ndis-python-v2/templates/report.html` (flagship closing page) | Published verbatim on page 24. |

## Flagged internal evidence gaps

- ~~`[EVIDENCE CONFIRMATION REQUIRED — STEVE >50% VALUE GAP OBSERVATION]`~~ **CLOSED,
  Round 1.1** — `INT-05` re-read in full, contains no quantified example; qualitative
  wording retained by default per the brief's own instruction, rather than left open
  indefinitely. See `evidence_gap_resolution_round1.1.md` §4.
- ~~`[EVIDENCE CONFIRMATION REQUIRED — reproducible quarter-by-quarter series for the
  3-year ~9,000 trend]`~~ **RESOLVED (narrowed), Round 1.1** — see
  `ndia_eligible_not_using_timeseries.csv` and `evidence_gap_resolution_round1.1.md` §1.
- `[EVIDENCE CONFIRMATION REQUIRED — remediation/conversion cost allowances in
  alternative-use valuations]` — needs an internal valuation-evidence note update (an
  `INT-05` addendum) if this is to be published as more than a passing possibility.
  Not in scope of Round 1.1; still unresolved; not published.

## Flagged public evidence gaps

- `[PUBLIC EVIDENCE REQUIRED — confirm exact New Build pricing tenure period and
  transition mechanism]` — **Round 1.1: investigated, still OPEN.** Direct fetch of the
  current NDIS SDA Pricing Arrangements document was blocked (HTTP 403); secondary
  commentary is directionally consistent with a 20-year certificate-of-occupancy-based
  transition but is not a primary source this project could freeze. Recommended next
  step: obtain a dated local copy of the 2026-27 Pricing Arrangements document directly
  (not via automated fetch) before asserting an exact duration. See
  `evidence_gap_resolution_round1.1.md` §3.
- `[PUBLIC EVIDENCE REQUIRED — SDA sale below alternative-use value examples]` — needs
  a public-record transaction example (e.g. receiver/liquidator sale reported publicly)
  if this is to be published as anything more than a general possibility. Not in scope
  of Round 1.1; still unresolved; not published.
- ~~`[PUBLIC EVIDENCE REQUIRED — newer-than-30-June-2026 NDIA quarterly release]`~~
  **RESOLVED, Round 1.1** — live search confirms Q1 2026-27 (30 September 2026) had not
  yet ended as at the 2026-09-27 verification date, so no later official quarter could
  exist yet. Page 4 wording changed to state the verification basis rather than imply a
  live check that hadn't been done. See `evidence_gap_resolution_round1.1.md` §5.

## What was deliberately *not* promoted

Consistent with `evidence_claim_crosswalk.md`'s existing method note (an evidence note
"sounding supportive" is not sufficient on its own to upgrade a claim to unqualified
`SUPPORTED`): every item above with a `NEEDS_*` or `ILLUSTRATIVE_ONLY` classification
stays that way in the draft's *wording*, even where the underlying mechanism is
well-supported. No number, trend, or example was strengthened past what the checked
evidence actually allows.
