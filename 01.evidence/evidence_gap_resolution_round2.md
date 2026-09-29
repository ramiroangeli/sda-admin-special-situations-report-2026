# Evidence Gap Resolution — Round 2 (Steve Dawson's second detailed review)

Surgical editorial/evidence pass on top of the locked Round 1.1 content. Strategic
direction unchanged. Pre-Round-2 content archived at `../90.archive/drafts/round1.1/`
and `../90.archive/old_outputs/round1.1/` before any active file was edited.

Classification key (per this round's brief): `SUPPORTED_PUBLIC`, `SUPPORTED_INTERNAL`,
`SDAHC_EXPERT_OBSERVATION`, `NEEDS_EVIDENCE`, `NOT_FOR_PUBLICATION`.

## 1. Re-verify 16,644 (participants with SDA in use, 30 June 2026)

Re-extracted directly from `ndis-python-v2/data/Supplement P Specialist Disability
Accommodation 2025-26 Q4_0.xlsx`, Table P.1, National row, "Participants with SDA in
use" column: **16,644**. Matches the figure already published on page 5 (formerly page
4). Confirmed against the primary workbook itself, not merely the prior evidence note —
**no change to the number**. `SUPPORTED_PUBLIC`.

## 2. Enrolled SDA places (replacing "enrolled dwellings" on the headline visual)

No single NDIA Supplement P table reports a national "total enrolled SDA places" field
directly for all building types combined. The closest direct field, Table P.7 ("New
Build/New Build (Refurbished) Maximum Residents by Design Category"), covers New Build
stock only (national total 18,554 places at 30 June 2026) and excludes Existing/Legacy
stock — not usable alone as a whole-of-market figure.

**Calculation used**: Table P.6 ("Number of Enrolled SDA Dwellings by SA4 Region and
Maximum Number of Residents," National row, all building types) cross-tabulates
dwelling counts by resident-capacity bucket (1, 2, 3, 4, 5, 6+ residents). Multiplying
each bucket's dwelling count by its resident capacity and summing gives a place count:
**31,065** as at 30 June 2026, with the open-ended "6+" bucket floored at 6 residents
per dwelling (true total is therefore ≥31,065; the exact figure cannot be recovered
from published aggregate data). Full working: `enrolled_places_calculation.csv`.

**Cross-validation**: SDAHC's own already-published *SDA Market Report 2026* states
"total enrolled SDA places now sit at approximately 31,155 (as at 8 June 2026)"
(`ndis-python-v2/templates/report.html` line 6359; hardcoded constant in
`ndis-python-v2/scripts/build_charts_pipeline.py`, not a documented live formula). The
two figures — different as-at dates, independently derived — are within 0.3% of each
other. This is strong corroboration that the Table P.6 calculation method is sound and
consistent with SDAHC's own established Research practice, not a novel methodology
invented for this report.

**Classification**: `SDAHC_EXPERT_OBSERVATION` for the specific total (a calculated
figure, not an NDIA-published single field) but methodology is transparent and
cross-validated; underlying dwelling-by-bucket data is `SUPPORTED_PUBLIC`. Published on
the headline visual as "31,065" with a footnote pointing to the calculation note, per
the brief's preference for a defensible reproducible figure over silence.

## 3. Estimated enrolled places not earning SDA in-use income

Searched, in order: (1) the flagship *SDA Market Report 2026* — **found** an existing,
already-published SDAHC Research methodology and figure (see below); (2) SDAHC Research
methodology generally — same source; (3) Housing Hub source material held locally —
none found beyond general platform description (`report.html` lines 5364–5369,
descriptive only, no statistic); (4) current NDIA Supplement P — no direct
"not-earning-income" field exists; (5) no other locally frozen source.

**Existing SDAHC methodology found** (`ndis-python-v2/templates/report.html` line 6362,
dated 31 March 2026 / "Q1 2026" per its own Figure 13 caption): *"active SDA-funded
participants represent approximately 52.2% of total enrolled SDA places"* i.e. **47.8%
of enrolled places do not appear to be matched to active SDA-funded participant
income"* — computed as (active SDA-funded participants) ÷ (total enrolled SDA places).
This is an already-published, SDAHC-approved analytical convention, not a new
methodology devised for this report.

**Replicated for the current quarter (30 June 2026)**: 16,644 active participants with
SDA in use ÷ 31,065 enrolled places (floor) = 53.6% matched, i.e. **approximately 46%**
of enrolled places do not appear matched to an active SDA-in-use participant. Because
the denominator (31,065) is itself a floor (see §2), the true not-matched percentage is
**at least approximately 46%**, consistent with — and slightly higher than —
SDAHC's own March-2026 figure of 47.8%, and consistent with Steve's ">40%" expectation.

**Comparability caveat honoured**: participants, dwellings and places are different
units. This calculation does not equate "enrolled places minus participants with SDA in
use" as a raw subtraction of different measures — it replicates SDAHC's own published
ratio methodology (participants ÷ places), which the flagship report itself already
uses and has published. No new, unvetted methodology is introduced.

**Classification**: `SDAHC_EXPERT_OBSERVATION` / **SDAHC Research — Market Analysis**
(not an NDIA national statistic). Published on page 5 framed exactly as such, with
numerator, denominator, date, definition, source and methodology all stated in the page
copy and in `enrolled_places_calculation.csv`. The phrase "market failure" is not used.

**v1.0 precision-QA addendum (2026-09-29)**: the public-copy label and footnote for this
figure were corrected. The prior wording ("...not currently generating SDA in-use
income") was capable of being read as asserting that every place outside the ~46% earns
zero SDA income — that is a stronger claim than the participants ÷ enrolled-place-capacity
ratio itself can support, because eligible NDIA vacancy payments may temporarily cover a
participant's departure in limited, tested circumstances (see PUB-11, and page 21's
"Occupancy / vacancy income" lens). The calculation, numerator, denominator, date and
source are **unchanged**; only the public-facing label/footnote were reworded to
describe it precisely as a utilisation/enrolled-capacity comparison rather than an
income or vacancy statistic. See `../02.content/pages/page_05.md` for the corrected
copy.

## 4. New Build classification date (1 April 2016)

See `public_evidence/PUB-07_new_build_definition.md`. Corroborated by two independent
web searches of third-party SDA design/pricing technical summaries (primary NDIS
document itself blocked from automated fetch, consistent with prior rounds).
`SUPPORTED_PUBLIC` (secondary-corroborated), scoped precisely to the classification
threshold, not to "when SDA began."

## 5. Provider change / re-enrolment

See `public_evidence/PUB-08_provider_reenrolment.md`. Corroborated by web search against
NDIS's own "How to enrol a home as SDA" guidance. `SUPPORTED_PUBLIC`
(secondary-corroborated). The cost-range statement ("can range from minimal to
material") is recorded as `SDAHC_EXPERT_OBSERVATION` — no dollar figures invented.

## 6. SDA Market Report 2026 — QR destination

Canonical public URL located in the existing, already-published flagship report's own
back-cover QR script: `ndis-python-v2/scripts/build_qr_overlay.py` →
`https://sdahomechoices.com.au/report2026`. Not invented. Live-checked: resolves (HTTP
308 → 200) to `sdahomechoices.com.au/research/sda-market-report-2026/` with
`utm_medium=qr` tracking already built into the destination, confirming it is the
report's own intended print/QR landing link. Same URL used for both the page 2 and page
24 QR codes in this report (per instruction). Decode-tested — see
`../04.review/qa/QR_QA.md`.

## 7. Not investigated this round (unchanged, out of scope)

Page 12's New Build pricing-tenure exact duration remains
`PRIMARY SOURCE CONFIRMATION REQUIRED` (unchanged from Round 1.1) — this round's
provider-transition and New Build-date searches turned up further secondary corroboration
of the "20 years from certificate of occupancy" figure (independently, twice), but still
no retrievable primary document, and page 12 is out of scope for Round 2's brief. Not
changed.
