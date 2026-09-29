# Evidence Gap Resolution — Round 1.1

Targeted evidence-and-editorial pass on top of the locked Round 1 content (Steve's
strategic direction unchanged). Resolves or narrows the five evidence gaps opened in
`claims_and_evidence_impact.md`'s Round 1 register. Pre-1.1 content is archived at
`../90.archive/drafts/round1/` and `../90.archive/old_outputs/round1/`.

## 1. ~9,000 eligible-not-using "three-year" trend (ADM-R1-04)

**Searched:** all six locally-held NDIA Supplement P workbooks (`ndis-python-v2/data/`),
spanning Q4 2022-23 through Q4 2025-26 (30 June 2026), using the project's existing
extraction logic (`ndis-python-v2/scripts/extract_sda_master.py`).

**Finding:** the "eligible, not yet using" split did not exist as a published metric
before the Q4 2024-25 (30 June 2025) release — earlier quarters report only a single
combined "Active participants with SDA supports" figure. The reproducible series is
therefore four quarters spanning **12 months** (June 2025 → June 2026), not three years:

| As at | Eligible, not using |
|---|---|
| 30 Jun 2025 | 9,880 |
| 31 Dec 2025 | 9,577 |
| 31 Mar 2026 | 9,370 |
| 30 Jun 2026 | 9,014 |

This is a **declining** series (-8.8% over the four quarters), not a static "remain
broadly around 9,000" pattern, though all four values do sit in the same high-9,000s
band.

**Resolution:** page 4 narrowed to the actual 12-month, four-quarter, declining series,
sourced directly to the primary NDIA workbooks rather than attributed as an unverified
"SDAHC Research, ~3 years" observation. See
`ndia_eligible_not_using_timeseries.csv` for the full reproducible table. **Status:
RESOLVED (narrowed).**

## 2. $10,000 / $80,000 illustrative example (ADM-R1-03)

**Searched:** every local evidence file in `01.evidence/` (public and internal) plus
both sibling project directories (`ndis-python-v2/`, `SDA_Market_Manual_Python/`) for a
frozen SDA price schedule or rate card with actual dollar figures by design category.
**None found locally** — the only local pricing evidence (`PUB-02`) establishes that
maximum prices exist and that a price calculator exists; it does not contain a frozen
copy of the actual price bands. A live check of the NDIS pricing-arrangements page and
document (`ndis.gov.au`) returned HTTP 403 (site blocks automated fetch); secondary
commentary located via search indicates single-occupancy High Physical Support annual
prices are commonly well above $80,000 in some markets, which would make $80,000 an
opportunistic (not representative) choice of category if retained as "illustrative."

**Resolution:** the exact figures could not be grounded without selecting a pricing
category to make the contrast work, which the brief for this pass expressly rules out.
$10k/$80k **removed** from page 4 body copy and visual; replaced with the non-numeric
mechanism statement: *"A participant can technically hold SDA funding at a level
materially below the enrolled income capacity of the dwelling they wish to occupy."*
**Status: RESOLVED (numbers removed, mechanism retained).**

## 3. New Build pricing tenure — exact duration (ADM-R1-05)

**Searched:** local evidence (`PUB-02`, `PUB-03`, `source_manifest.yaml`) — none states
an exact New Build → Existing Stock transition period. Live search (web search only;
direct fetch of ndis.gov.au pages returned HTTP 403) surfaced secondary commentary
(non-NDIA) stating that a dwelling is classified Existing Stock once 20 years have
elapsed from its certificate-of-occupancy date, and that the NDIA's most recent SDA
Pricing Review changed how that period's start date is calculated. This is a plausible,
directionally consistent signal, but **not a primary-source document this project could
retrieve and freeze** — the current NDIS pricing-arrangements document itself could not
be fetched.

**Resolution:** page 12 tightened to the user-preferred conceptual wording, explicitly
naming "New Build pricing tenure" (rather than a generic "SDA pricing tenure") and
explicitly distinguishing it from enrolment duration, without asserting the 20-year
figure as confirmed. Evidence note updated to record what was and wasn't verifiable.
**Status: OPEN — `PRIMARY SOURCE CONFIRMATION REQUIRED`** before any exact duration is
published. Not guessed.

## 4. >50% SDA in-use vs alternative-use value gap (ADM-R1-01)

**Searched:** `INT-05` (the sanitised internal valuation-evidence note) in full.

**Finding:** `INT-05` supports material, bidirectional divergence between SDA in-use and
alternative-use value, with no quantified example and no percentage anywhere in the
note. No other internal evidence file adds a magnitude.

**Resolution:** nothing to record as a magnitude-bearing internal evidence note — there
is no documentary example to sanitise. The public copy stays on the existing qualitative
wording ("SDAHC has observed cases where the SDA in-use valuation materially exceeds the
underlying alternative-use value — and cases where it does not"); "more than 50%" is not
used publicly, consistent with the brief's default preference. **Status: RESOLVED
(qualitative treatment retained; magnitude not published).**

## 5. Public data freshness (30 June 2026) (new this round)

**Verified:** live web search (search only; site itself blocks fetch) confirms the NDIA
is required to release each quarterly report to disability ministers within 42 days of
quarter end; Q1 2026-27 (30 September 2026) had not yet ended as at the verification
date below, so no later official quarter could exist yet.

- Source date: 30 June 2026 (FY2025-26 Q4 Supplement P).
- Verification date: 2026-09-27.
- Local file used: `ndis-python-v2/data/Supplement P Specialist Disability Accommodation 2025-26 Q4_0.xlsx`.
- Live-current status: independently checked this round (web search); page 4 wording
  changed from "the latest official quarter available" to "the latest official dataset
  verified for this report," with the verification basis stated rather than implied.

**Status: RESOLVED.**

## Not in scope of this pass

- ADM-R1-06 (public sale-below-alternative-use examples) and ADM-R1-07 (remediation-cost
  valuation allowances) were not re-investigated this round — the brief for Round 1.1
  did not ask for them, and neither claim is published in the current draft. Left open
  in `claims_and_evidence_impact.md`, unchanged.
