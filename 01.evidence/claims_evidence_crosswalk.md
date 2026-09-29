# Evidence–Claim Crosswalk

Status: PLANNING DRAFT. Revision 2 — now integrates both the sanitised internal
evidence notes in `evidence_notes/` (INT-01–INT-10) AND the public evidence notes in
`public_evidence_notes/` (PUB-01–PUB-06, drawn from NDIA, the Federal Register of
Legislation and ASIC). This file cross-checks every non-HOLD claim in
`claims_register.csv` against the evidence actually available and records whether the
evidence supports the claim **as currently worded**.

Method note: an evidence note "sounding supportive" was not treated as sufficient on its
own to upgrade a claim. Where a note supports only SDAHC's own working interpretation
(a framework, sequencing choice, or prioritisation judgement) rather than an
independently checkable fact, the claim is held at `STEVE_VALIDATION_REQUIRED` or
qualified, not promoted to unqualified `SUPPORTED`. This discipline applies equally to
the new public evidence: `public_evidence_notes/README.md` itself warns not to strengthen
claims beyond the wording the primary source supports, so a public source "existing" is
never treated as automatic promotion to SUPPORTED where the claim requires an
interpretive step the source doesn't make explicit (see ADM-008-02 below for the one
case where this discipline was applied). No claim's `status` in `claims_register.csv`
has been changed by this pass except the two claims whose wording referenced the
retired "Three Value Lenses" concept (ADM-014-01's claim text, and the
`primary_evidence` field on ADM-014-01/ADM-017-02) — see
`ARCHITECTURE_CHANGELOG_v0.3_to_v0.4.md`. This file is an additional assessment layer,
not a general edit to the register (see `README.md`'s layer description).

**Primary-vs-interpretation-aid rule for public evidence:** where a primary source
already exists locally (the NDIA Supplement P workbook, EV-PUB-01/EV-PUB-02), that local
file remains the citation source and the corresponding PUB-0X note is treated as a
corroborating index, not a replacement. Where no primary file exists locally (pricing
arrangements, SDA Rules, provider guidance, ASIC statistics, 2026 reassessment), the
PUB-0X note supplies the official URL and a description of what the source establishes,
but no local frozen copy has been downloaded or invented — see `source_manifest.yaml`
(`local_path_status: URL_IDENTIFIED_NOT_YET_FROZEN_LOCALLY`).

HOLD-01 through HOLD-07 are excluded — they remain blocked; see §"HOLD claims:
cross-check against new evidence" at the end of this file.

## Public-source gaps closed this pass

All 5 claims previously assessed `PUBLIC_SOURCE_STILL_REQUIRED` have been reassessed.
4 are now `SUPPORTED` (ADM-004-04, ADM-004-05, ADM-008-01, ADM-010-01) and 1 is now
`SUPPORTED_WITH_QUALIFICATION` (ADM-008-02 — the primary source is identified, but the
claim itself requires a small interpretive step beyond what any single source states
explicitly; see its entry below). `PUBLIC_SOURCE_STILL_REQUIRED` now stands at 0.

## Assessment definitions

- **SUPPORTED** — the claim as worded is directly and specifically backed by verified
  public evidence and/or a clearly on-point internal evidence note, with no material
  gap between what the evidence says and what the claim asserts.
- **SUPPORTED_WITH_QUALIFICATION** — the evidence backs the claim, but only within a
  stated boundary (aggregation required, archetype-only, no figures, SDAHC's own
  framework rather than an external fact, etc.) — the existing `qualification_required`
  text in `claims_register.csv` still applies and is not loosened.
- **STEVE_VALIDATION_REQUIRED** — evidence exists (sometimes strong evidence) but the
  open question is a judgement call only Steve can make (ranking, taxonomy validity,
  legal-adjacent framing, IP exposure) — unchanged from the claim's existing `STEVE`
  flag in the register, not a new finding.
- **PUBLIC_SOURCE_STILL_REQUIRED** — the claim depends on a public document that has not
  yet been sourced/frozen locally (see `source_manifest.yaml`); internal evidence may
  corroborate but cannot substitute for the citation.
- **INSUFFICIENT** — no evidence path currently supports the claim. (None found — see
  summary.)

## Crosswalk

### Page 4

CLAIM ID: ADM-004-01
CLAIM: NDIA distinguishes SDA in-use from eligible-not-yet-using and enrolled supply.
LOCAL INTERNAL EVIDENCE: None required.
PUBLIC EVIDENCE: EV-PUB-01, NDIA SDA participants dataset — 30 June 2026 (VERIFIED_LOCAL_SOURCE; the workbook itself reports "SDA in use" and "eligible but not yet using SDA" as distinct series). Cross-referenced by EV-PUB-10 (PUB-01 interpretation note), which independently confirms this local workbook as the primary citation source.
ASSESSMENT: SUPPORTED
QUALIFICATION: Preserve NDIA's own category boundaries; do not collapse them.
STEVE INPUT: No.

CLAIM ID: ADM-004-02
CLAIM: Do not treat those measures as one national vacancy statistic.
LOCAL INTERNAL EVIDENCE: evidence_notes/internal_evidence/INT-07_occupancy_patterns.md ("Vacancy data must be defined carefully... Do not combine: NDIA participants eligible/not-yet-using SDA; advertised vacancy listings; actual property occupancy; income-producing vacancy assumptions").
PUBLIC EVIDENCE: EV-PUB-01 (as above); EV-PUB-10 (PUB-01) adds its own explicit guardrail: "Eligible/funded-but-not-using is not equivalent to vacant SDA stock."
ASSESSMENT: SUPPORTED
QUALIFICATION: State explicitly as separate measures, not a single national rate.
STEVE INPUT: No.

CLAIM ID: ADM-004-03
CLAIM: SDAHC observes repeated capital recycling/provider transition/vacancy/special-situation signals.
LOCAL INTERNAL EVIDENCE: evidence_notes/internal_evidence/INT-01_market_intelligence_patterns.md (§1 funding conversion friction, §2 capital recycling and exit activity, §3 provider transition and displacement).
PUBLIC EVIDENCE: None applicable (this is an SDAHC pattern claim, not a public fact).
ASSESSMENT: STEVE_VALIDATION_REQUIRED
QUALIFICATION: Aggregate only; no named assets, providers or lenders. INT-01 gives specific, on-point support, but it is SDAHC's own generalisation from its intelligence records — Steve still needs to confirm how many independent signals are needed before this is safely publishable as a "repeated" pattern (steve_review_questions.md Q1).
STEVE INPUT: Yes — Q1.

CLAIM ID: ADM-004-04
CLAIM: 2026 reassessment rules changed; direct causal effect on SDA funding not established.
LOCAL INTERNAL EVIDENCE: None. No internal note addresses the 2026 plan reassessment specifically.
PUBLIC EVIDENCE: EV-PUB-09/EV-PUB-15, NDIS Amendment (Securing the NDIS for Future Generations) Act 2026 (legislation.gov.au/C2026A00066/asmade) plus NDIA plan-reassessment guidance, identified via PUB-06. The source directly confirms the rule change AND explicitly states what it does NOT establish (that the reform stopped SDA approvals, that a particular request would have succeeded under the prior regime, or that the reform is the sole/primary cause of observed SDA funding friction) — this matches the claim's own hedged wording almost exactly.
ASSESSMENT: SUPPORTED — RESOLVED this pass (previously PUBLIC_SOURCE_STILL_REQUIRED).
QUALIFICATION: State the rule change as fact, citing the Act; keep the causal link to SDA funding explicitly unestablished, exactly as PUB-06 itself frames it. URL identified, not yet frozen as a local dated copy — freeze before final publication citation.
STEVE INPUT: No.

CLAIM ID: ADM-004-05
CLAIM: ASIC cannot independently quantify SDA-specific insolvency.
LOCAL INTERNAL EVIDENCE: None applicable.
PUBLIC EVIDENCE: EV-PUB-07/EV-PUB-08/EV-PUB-14, ASIC Series 1/2 insolvency statistics and INFO 80, official URLs identified via PUB-05. The source directly confirms "the standard published series do not, by themselves, establish an SDA-specific insolvency trend."
ASSESSMENT: SUPPORTED — RESOLVED this pass (previously PUBLIC_SOURCE_STILL_REQUIRED).
QUALIFICATION: Explicit that ASIC data is not SDA-specific — direct guardrail against HOLD-02/HOLD-03. URLs identified, not yet frozen as a local dated copy.
STEVE INPUT: No.

### Page 5

CLAIM ID: ADM-005-01
CLAIM: Enrolment alone does not create SDA funding.
LOCAL INTERNAL EVIDENCE: INT-01 (§1 funding conversion friction); INT-05_valuation_patterns.md ("In-use value is conditional" on enrolment status plus funding, occupancy, provider arrangement, etc.).
PUBLIC EVIDENCE: EV-PUB-05/EV-PUB-12, SDA Rules 2020 (legislation.gov.au/F2020L00769/latest, compilation F2025C00260 C01), identified via PUB-03. Part 3 sets out multiple requirements — SDA provider, enrolled dwelling, participant residency, design-category alignment, other conditions — that must ALL be satisfied for SDA support to be funded. This directly and specifically evidences that enrolment is necessary but not sufficient.
ASSESSMENT: SUPPORTED — upgraded this pass (previously SUPPORTED_WITH_QUALIFICATION). This is no longer only an SDAHC analytical construct; it is grounded in the Rules' own legislative structure.
QUALIFICATION: Still present as SDAHC's organising framework (the SDA Alignment Chain) for readability, but the underlying fact now has a direct P1 legislative citation, not just SDAHC's internal pattern-recognition.
STEVE INPUT: No.

CLAIM ID: ADM-005-02
CLAIM: SDA value sits across more than freehold real estate alone.
LOCAL INTERNAL EVIDENCE: INT-05_valuation_patterns.md (in-use vs. alternative-use value, part of the Two Value Anchors framing — see report_brief.md).
PUBLIC EVIDENCE: EV-PUB-05/EV-PUB-12, SDA Rules 2020, via PUB-03 — "provider and participant arrangements form part of the SDA operating position, not merely the freehold property." PUB-03 itself flags this claim needs to be read "with internal valuation/transaction evidence" to be fully supported (i.e. the Rules establish that provider/participant conditions matter operationally; INT-05 is what connects that to value).
ASSESSMENT: SUPPORTED_WITH_QUALIFICATION — evidence base strengthened (now P1 + P2 rather than P2 alone) but the source's own framing keeps this at qualified support, not unqualified.
QUALIFICATION: None beyond standard framing.
STEVE INPUT: No.

CLAIM ID: ADM-005-03
CLAIM: Healthy assets show alignment from enrolment through income and valuation.
LOCAL INTERNAL EVIDENCE: INT-05_valuation_patterns.md (explicit "Supports: ADM-005-03").
PUBLIC EVIDENCE: None.
ASSESSMENT: SUPPORTED_WITH_QUALIFICATION
QUALIFICATION: Describe as archetype pattern, not a guarantee.
STEVE INPUT: No.

### Page 6

CLAIM ID: ADM-006-01
CLAIM: First-response information covers participants, funding, enrolment, contracts, property and records.
LOCAL INTERNAL EVIDENCE: INT-02_vdd_information_request.md (explicit "Supports: ADM-006-01"; six matching information categories: participant/occupancy, financial, enrolment/compliance, agreements/contracts, property/capital, insurance).
PUBLIC EVIDENCE: EV-PUB-06/EV-PUB-13, NDIS Guide to providing SDA, via PUB-04 — confirms certification, enrolment, provider registration and participant funding are distinct concepts, and that "SDA administration needs to preserve and verify more than title and physical property records."
ASSESSMENT: SUPPORTED — upgraded this pass (previously SUPPORTED_WITH_QUALIFICATION). The category breadth is now doubly evidenced (P1 agency guidance + P2 internal checklist), not just an internal construct.
QUALIFICATION: The category list is well supported. What still needs Steve is not this list but the urgency/priority ordering of items within it for the First 48 Hours (page 6) — INT-02 itself flags "Steve validation required: urgency ordering for the First 48 Hours." That is a page-6-specific sequencing question, not a defect in this claim's evidentiary support.
STEVE INPUT: Indirectly — see Q2 (affects page 6's prioritisation, not this category claim).

CLAIM ID: ADM-006-02
CLAIM: Participant/provider continuity is not merely ordinary property management.
LOCAL INTERNAL EVIDENCE: INT-01 (§3); INT-03_contract_patterns.md (assignment/transition subject to participant consent, legal requirements, regulatory/enrolment processes); INT-06_provider_transition_patterns.md ("a staged operational and regulatory transition, not the equivalent of simply replacing a conventional property manager" — near-verbatim support).
PUBLIC EVIDENCE: EV-PUB-05/EV-PUB-12 (SDA Rules, via PUB-03) and EV-PUB-06/EV-PUB-13 (NDIS provider guide, via PUB-04) both explicitly list this claim as supported — provider/participant service agreements and rights are part of the regulatory operating framework, not incidental to it.
ASSESSMENT: STEVE_VALIDATION_REQUIRED — unchanged, despite now having P1 regulatory backing in addition to P2/P3 internal evidence.
QUALIFICATION: Evidence for the underlying mechanism is now very strong (P1 legislation/guidance plus P2/P3 internal pattern). The open issue was never evidentiary strength — it is framing risk. If anything, citing the Rules directly makes the framing risk more acute, not less: describing what the Rules require edges closer to describing a legal obligation, and this report is explicitly not legal advice. Must not read as legal-duty advice; frame as a commercial/operational observation only.
STEVE INPUT: Yes — Q2.

### Page 7

CLAIM ID: ADM-007-01
CLAIM: Secure → Reconcile → Diagnose → Stabilise → Value → Decide.
LOCAL INTERNAL EVIDENCE: INT-09_special_situations_framework.md (explicit "Supports: ADM-007-01"; "advisory and divestment work may need to proceed in parallel... a sequential model of 'fix everything, then consider sale' is not always economically rational"); INT-06 (sequencing a transition to avoid unnecessary gaps).
PUBLIC EVIDENCE: None.
ASSESSMENT: SUPPORTED_WITH_QUALIFICATION
QUALIFICATION: INT-09 sharpens rather than simply confirms this claim — it suggests the six steps are not strictly sequential under time pressure, which should be reflected explicitly on page 7 (see that page's updated Draft copy direction).
STEVE INPUT: No (the parallel-vs-sequential nuance is a drafting refinement, not a Steve decision).

### Page 8 (reframed this pass — "From Maximum SDA Price to Actual Cash"; see ARCHITECTURE_CHANGELOG_v0.3_to_v0.4.md)

CLAIM ID: ADM-008-01
CLAIM: SDA pricing represents maximum prices, not guaranteed income.
LOCAL INTERNAL EVIDENCE: INT-03_contract_patterns.md ("Some agreements expressly state that occupancy, SDA funding and investment returns are not guaranteed" — corroborating only, not primary).
PUBLIC EVIDENCE: EV-PUB-03/EV-PUB-11, NDIS SDA Pricing Arrangements 2026–27, via PUB-02 — NDIA "describes the SDA pricing arrangements as setting the appropriate and reasonable maximum prices for SDA supports." Direct, near-verbatim match to the claim.
ASSESSMENT: SUPPORTED — RESOLVED this pass (previously PUBLIC_SOURCE_STILL_REQUIRED).
QUALIFICATION: State explicitly as maximum, not guaranteed, price. URL identified, not yet frozen as a local dated copy — freeze before final publication citation. This claim now anchors page 8's revenue chain (ends at "cash actually received," not sustainable NOI — see page 8 planning file).
STEVE INPUT: No.

CLAIM ID: ADM-008-02
CLAIM: Investors carry vacancy risk.
LOCAL INTERNAL EVIDENCE: INT-03 ("who bears vacancy exposure?" as a repeated contract question); INT-04_income_noi_patterns.md ("vacancy and lease-up allowance" in the NOI bridge).
PUBLIC EVIDENCE: EV-PUB-03/EV-PUB-11 (PUB-02) establishes the necessary predicate — pricing is a maximum, not guaranteed, and the price calculator is "an expected-income tool... not evidence that a particular participant, dwelling or investor will receive that amount." Note: PUB-02's own `supports_claims` list (evidence_index.csv) cites this note for ADM-008-01 and ADM-008-03 only — it does NOT explicitly list ADM-008-02. Neither PUB-02 nor PUB-03 states in terms who bears vacancy risk.
ASSESSMENT: SUPPORTED_WITH_QUALIFICATION — partially resolved this pass (previously PUBLIC_SOURCE_STILL_REQUIRED). A citable primary source for the necessary predicate now exists; this claim itself is SDAHC's reasonable but explicit inference from that predicate (no income guarantee stated anywhere in the pricing framework → the gap, if any, falls to the owner/investor), not a source's own explicit statement. Per this pack's rule against promoting a commercial judgement to factual status merely because related public evidence exists, this is recorded as an inference, not upgraded to plain SUPPORTED.
STEVE INPUT: No — this is an evidentiary/drafting judgement, not a Steve decision, but final copy should keep the inferential step visible (e.g. "because pricing is a maximum, not a guarantee, the owner carries the risk of it not being received") rather than stating it as a bare regulatory fact.

CLAIM ID: ADM-008-03
CLAIM: Sustainable NOI may differ from theoretical or accounting income.
LOCAL INTERNAL EVIDENCE: INT-04_income_noi_patterns.md (entire note; "a sale-purpose NOI may differ from accounting net profit after normalisation").
PUBLIC EVIDENCE: EV-PUB-03/EV-PUB-11 (PUB-02) corroborates the "theoretical/maximum price ≠ actual income" half of this claim; PUB-02's own note frames its relevance here as "only in combination with internal actual-income evidence" (i.e. it supports the starting point, not the full income-to-NOI reconciliation, which is INT-04's job).
ASSESSMENT: SUPPORTED — now doubly sourced (P1 + P2), previously P2 alone.
QUALIFICATION: No specific figures or ratios — general directional statement only. Per the page 8/11 split this pass, this claim's full reconciliation detail (the actual NOI bridge) now belongs on page 11, not page 8 — see ARCHITECTURE_CHANGELOG_v0.3_to_v0.4.md.
STEVE INPUT: No.

### Page 9

CLAIM ID: ADM-009-01
CLAIM: Physical occupancy does not guarantee full SDA income.
LOCAL INTERNAL EVIDENCE: INT-01 (§1); INT-04 ("Physical occupancy alone is insufficient to establish full SDA income" — direct match).
PUBLIC EVIDENCE: EV-PUB-05/EV-PUB-12, SDA Rules 2020, via PUB-03 — Part 3's multiple funding conditions (beyond mere residency: design-category alignment, other participant/dwelling conditions) reinforce that occupancy alone cannot satisfy the funding requirements.
ASSESSMENT: SUPPORTED — now doubly sourced (P1 + P2).
QUALIFICATION: Describe mechanism, not a specific asset.
STEVE INPUT: No.

CLAIM ID: ADM-009-02
CLAIM: Funding, occupancy, claimability and cash collection are separate variables.
LOCAL INTERNAL EVIDENCE: INT-04 (explicit "Supports: ADM-009-02"); INT-07 (explicit "Supports: ADM-009-02").
PUBLIC EVIDENCE: EV-PUB-01/EV-PUB-10 (PUB-01) and EV-PUB-05/EV-PUB-12 (PUB-03) both explicitly list this claim as supported — the SDA Rules' Part 3 conditions (provider, enrolment, residency, design alignment) map directly onto separable funding/occupancy/claimability variables, and the NDIA's own participant-vs-dwelling reporting (PUB-01) reinforces the same separation.
ASSESSMENT: SUPPORTED — upgraded this pass (previously SUPPORTED_WITH_QUALIFICATION). This claim is no longer only "the revenue chain's own construct" — it is now grounded in two independent P1 public sources plus P2 internal evidence.
QUALIFICATION: None beyond standard framing.
STEVE INPUT: No.

### Page 10

CLAIM ID: ADM-010-01
CLAIM: SDA providers carry regulatory responsibilities.
LOCAL INTERNAL EVIDENCE: INT-03 (registered provider status, compliance, certification as repeated contract questions — corroborating only).
PUBLIC EVIDENCE: EV-PUB-05/EV-PUB-12 (SDA Rules 2020, via PUB-03 — provider-specific requirements including service agreements and access to other support providers) AND EV-PUB-06/EV-PUB-13 (NDIS Guide to providing SDA, via PUB-04 — "SDA providers must be registered and SDA homes must be enrolled; provider responsibilities are governed by the SDA Rules"). Both explicitly list this claim as supported.
ASSESSMENT: SUPPORTED — RESOLVED this pass (previously PUBLIC_SOURCE_STILL_REQUIRED), now with two independent, explicit P1 sources.
QUALIFICATION: This is a regulatory-fact claim, now directly cited to the Rules and NDIA guidance. URLs identified, not yet frozen as local dated copies — freeze before final publication citation.
STEVE INPUT: No.

CLAIM ID: ADM-010-02
CLAIM: Commercial agreements allocate material economic responsibilities.
LOCAL INTERNAL EVIDENCE: INT-03_contract_patterns.md (entire note is directly on point — the 12 repeated commercial questions and the observed contract characteristics).
PUBLIC EVIDENCE: None required.
ASSESSMENT: SUPPORTED_WITH_QUALIFICATION
QUALIFICATION: General clause categories only — no specific contract terms, parties or pricing (unchanged from existing qualification).
STEVE INPUT: No.

CLAIM ID: ADM-010-03
CLAIM: Sale/insolvency/assignment/provider replacement can affect execution.
LOCAL INTERNAL EVIDENCE: INT-01 (§3, §6); INT-03 ("What happens on sale or transfer? What happens on material breach, loss of registration or insolvency?"); INT-06 (transition tasks).
PUBLIC EVIDENCE: None required.
ASSESSMENT: SUPPORTED_WITH_QUALIFICATION
QUALIFICATION: Aggregate framing only, consistent across three independent notes.
STEVE INPUT: No.

### Page 11

CLAIM ID: ADM-011-01
CLAIM: Buyer-underwritable NOI should be reconciled from actual economics.
LOCAL INTERNAL EVIDENCE: INT-04_income_noi_patterns.md (entire note is the method this claim describes).
PUBLIC EVIDENCE: None required.
ASSESSMENT: SUPPORTED
QUALIFICATION: None.
STEVE INPUT: No.

CLAIM ID: ADM-011-02
CLAIM: Vacancy/provider cost/R&M/CAPEX can materially affect normalised earnings.
LOCAL INTERNAL EVIDENCE: INT-04 ("the provider fee can be a material expense line and may vary by structure").
PUBLIC EVIDENCE: None required.
ASSESSMENT: SUPPORTED_WITH_QUALIFICATION
QUALIFICATION: No universal percentages — INT-04 explicitly states "Do not publish universal provider-fee, vacancy, operating-cost or CAPEX percentages from this sample," which is a direct guardrail against HOLD-05.
STEVE INPUT: No.

### Page 12 (reframed this pass — "Two Value Anchors, and the Recovery Gap"; the Three Value Lenses concept is retired, see ARCHITECTURE_CHANGELOG_v0.3_to_v0.4.md)

CLAIM ID: ADM-012-01
CLAIM: SDA and alternative-use values can differ materially.
LOCAL INTERNAL EVIDENCE: INT-05_valuation_patterns.md ("In-use SDA value and alternative-use value can be materially different" — near-verbatim support). Under the new framing this claim describes the gap between the two formal value anchors (upper: stabilised/in-use; lower: alternative-use), not a comparison among three lenses.
PUBLIC EVIDENCE: None required for the qualitative claim.
ASSESSMENT: STEVE_VALIDATION_REQUIRED — unchanged.
QUALIFICATION: The qualitative claim (the two anchors "can differ materially") is strongly evidenced. What remains open is not whether they differ but how the report should describe the scale of that gap without disclosing specific figures — Steve sign-off on safe language required. Note: Steve is NOT being asked to validate the existence of three equally weighted valuation lenses (that concept is retired) — only the safe language for describing the anchor-to-anchor gap.
STEVE INPUT: Yes — see steve_review_questions.md.

CLAIM ID: ADM-012-02
CLAIM: In-use valuations rely on operating assumptions.
LOCAL INTERNAL EVIDENCE: INT-05 (full assumption list: SDA design/enrolment status, participant number/funding mix, occupancy/vacancy, provider arrangement, operating expenses, sinking fund/CAPEX, lease-up allowance, discount/capitalisation assumptions, continuing eligibility).
PUBLIC EVIDENCE: None required.
ASSESSMENT: SUPPORTED
QUALIFICATION: General valuation methodology only.
STEVE INPUT: No.

CLAIM ID: ADM-012-03
CLAIM: Current appointments should verify assumptions before relying on headline valuations.
LOCAL INTERNAL EVIDENCE: INT-05 ("Certification/enrolment assumptions matter... internal DD has identified examples where the participant capacity or certification position used in an historical valuation required re-checking"; "a headline valuation should be treated as the output of assumptions that may change").
PUBLIC EVIDENCE: None required.
ASSESSMENT: SUPPORTED
QUALIFICATION: None.
STEVE INPUT: No.

### Page 13

CLAIM ID: ADM-013-01
CLAIM: Four impairment framework: Operational / Provider-Contractual / Capital Structure / Fundamental.
LOCAL INTERNAL EVIDENCE: INT-09_special_situations_framework.md (six workstream categories — portfolio/debt reconciliation, income/operating review, provider strategy, asset performance/stabilisation, debt/lender strategy, divestment decision); INT-01 (§5 location-specific risk).
PUBLIC EVIDENCE: None applicable — this is a diagnostic taxonomy, not a fact a public regulator publishes.
ASSESSMENT: STEVE_VALIDATION_REQUIRED — unchanged.
QUALIFICATION: Architecture clarification this pass: the Four Types of Impairment answers "what is actually impaired?" and is a DIFFERENT question from the Secure→Reconcile→Diagnose→Stabilise→Value→Decide operating pathway ("what should the appointee do?"). They are not being mapped 1:1 — INT-09's six workstreams are an operating/advisory structure, not a competing diagnostic taxonomy, so they do not validate or invalidate the four categories by comparison. Q3 has been reworded accordingly (see steve_review_questions.md): Steve validates the diagnostic categories themselves (do these four types correctly and exhaustively describe what can be wrong with an asset, and do they reliably assign real cases to a single dominant category), not whether they map onto INT-09's workstreams or the six operating stages. Do not publish as final until Steve confirms — this remains the single highest-priority open item in the pack.
STEVE INPUT: Yes — Q3, blocking.

### Page 14

CLAIM ID: ADM-014-01
CLAIM (updated wording this pass — see ARCHITECTURE_CHANGELOG_v0.3_to_v0.4.md): Value can move between the upper value anchor (stabilised/in-use) and the current recovery position through multiple operating factors. [Previous wording referenced "special-situation value," a retired Three Value Lenses term.]
LOCAL INTERNAL EVIDENCE: INT-05 (explicit "Supports: ADM-014-01"); INT-09 (explicit "Supports: ADM-014-01" — "balance value uplift against holding cost and time"); INT-01 (§2, §4).
PUBLIC EVIDENCE: None required.
ASSESSMENT: SUPPORTED_WITH_QUALIFICATION — unchanged in category; wording updated to match the new Two Value Anchors / Current Recovery Position framing (§6 of this task).
QUALIFICATION: List factors, do not quantify — three independent notes converge on the same qualitative point without offering (or permitting) a number. Current Recovery Position is explicitly a commercial/transaction assessment, not a third formal valuation methodology — see page 12 and 14 planning files.
STEVE INPUT: No for the general claim; Q9 (frequency ranking of causes) remains open — see page 14 planning file.

CLAIM ID: ADM-014-02
CLAIM: No universal percentage risk deduction should be assumed.
LOCAL INTERNAL EVIDENCE: INT-04 (explicit prohibition on universal percentages); INT-05 ("no client values/addresses").
PUBLIC EVIDENCE: None required.
ASSESSMENT: SUPPORTED
QUALIFICATION: Direct guardrail against HOLD-05, now doubly reinforced by the internal evidence notes themselves.
STEVE INPUT: No.

### Page 15

CLAIM ID: ADM-015-01
CLAIM: SDA sale readiness requires participant/funding/provider/income information as well as property DD.
LOCAL INTERNAL EVIDENCE: INT-02 (explicit "Supports: ADM-015-01"); INT-08_transaction_readiness_patterns.md (explicit "Supports: ADM-015-01" — matching readiness-issue list).
PUBLIC EVIDENCE: EV-PUB-06/EV-PUB-13, NDIS Guide to providing SDA, via PUB-04 — explicitly lists this claim as supported ("SDA administration needs to preserve and verify more than title and physical property records").
ASSESSMENT: SUPPORTED — now doubly sourced (P1 + P2), previously P2 alone.
QUALIFICATION: None.
STEVE INPUT: No.

CLAIM ID: ADM-015-02
CLAIM: Missing or inconsistent information can weaken buyer confidence and execution.
LOCAL INTERNAL EVIDENCE: INT-08 ("Evidence from transaction workflow" — an advanced sale process required provider agreement, transition notice, and enrolment sequencing coordinated around settlement); INT-10_portfolio_packaging_buyer_dd.md (buyer diligence themes).
PUBLIC EVIDENCE: None required.
ASSESSMENT: SUPPORTED_WITH_QUALIFICATION
QUALIFICATION: General pattern, no named transactions (INT-08's example is already described only as "an advanced sale process reviewed by SDAHC," with no identifying detail — keep it that way in final copy).
STEVE INPUT: No.

### Page 16

CLAIM ID: ADM-016-01
CLAIM: Packaging is a recovery decision, not simply a marketing format.
LOCAL INTERNAL EVIDENCE: INT-09 (Divestment decision workstream); INT-10 ("A portfolio should not automatically be sold as one line because it was financed or owned as one line... packaging decisions should consider execution certainty and recovery, not headline presentation alone" — near-verbatim support); INT-01 (§2).
PUBLIC EVIDENCE: None applicable.
ASSESSMENT: STEVE_VALIDATION_REQUIRED
QUALIFICATION: Evidence for the underlying principle is strong and consistent across three notes. The open question is not whether the principle is true but how much of SDAHC's packaging methodology is safe to publish without exposing commercial IP — Steve input required regardless of evidence strength.
STEVE INPUT: Yes — Q7, Q11.

CLAIM ID: ADM-016-02
CLAIM: Heterogeneous portfolios may justify segmentation.
LOCAL INTERNAL EVIDENCE: INT-10 ("Geography, operating state, provider structure and alternative-use characteristics can justify segmentation" — near-verbatim support); INT-09.
PUBLIC EVIDENCE: None required.
ASSESSMENT: SUPPORTED
QUALIFICATION: Already hedged with "may"; no specific portfolio referenced.
STEVE INPUT: No.

### Page 17

CLAIM ID: ADM-017-01
CLAIM: Stabilisation can create value or destroy value depending on time/carry/recovery potential.
LOCAL INTERNAL EVIDENCE: INT-09 ("balance value uplift against holding cost and time"; sequential-vs-parallel principle); INT-01 (§2).
PUBLIC EVIDENCE: None required.
ASSESSMENT: SUPPORTED_WITH_QUALIFICATION
QUALIFICATION: The symmetrical principle is supported, but none of the evidence notes supply the two concrete contrasting archetypes (value created by waiting / value destroyed by waiting) that page 17 needs — those remain open per steve_review_questions.md Q5/Q6.
STEVE INPUT: Yes — Q5, Q6 (for archetype selection, not the general principle).

CLAIM ID: ADM-017-02
CLAIM: Hold/stabilise/sell requires balancing recovery potential against cost of delay.
LOCAL INTERNAL EVIDENCE: INT-09 (same workstream text as ADM-017-01).
PUBLIC EVIDENCE: None required.
ASSESSMENT: SUPPORTED
QUALIFICATION: None. Primary-evidence reference updated this pass from "Three Value Lenses (report_brief.md)" to "Value Anchors framework (report_brief.md)" — see claims_register.csv and ARCHITECTURE_CHANGELOG_v0.3_to_v0.4.md.
STEVE INPUT: No.

### Page 18

CLAIM ID: ADM-018-01
CLAIM: Occupancy quality can matter more than occupancy percentage alone.
LOCAL INTERNAL EVIDENCE: INT-04 ("one occupied participant can contribute materially less income than another"); INT-07_occupancy_patterns.md ("Occupancy quality varies" — five explicit occupancy-state categories, from fully SDA-funded through vacant-without-a-pathway).
PUBLIC EVIDENCE: None applicable.
ASSESSMENT: STEVE_VALIDATION_REQUIRED
QUALIFICATION: The underlying phenomenon (occupancy quality varies materially) is now strongly evidenced by two independent notes. What is not yet evidenced is the comparative/ranking claim — that quality "can matter more than" rate. Neither note makes that ranking explicitly; it is currently SDAHC's inference from the pattern, not a stated finding. Keep at STEVE_VALIDATION_REQUIRED until Steve confirms the ranking against case experience.
STEVE INPUT: Yes — Q4.

CLAIM ID: ADM-018-02
CLAIM: Occupied but poorly aligned income can present different risk from fully evidenced SDA occupancy.
LOCAL INTERNAL EVIDENCE: INT-04; INT-07 (both directly support with concrete, evidenced categories, e.g. "occupied but with materially lower income" vs. "occupied and fully SDA funded").
PUBLIC EVIDENCE: None required.
ASSESSMENT: SUPPORTED
QUALIFICATION: Archetype framing only.
STEVE INPUT: No.

### Page 19

CLAIM ID: ADM-019-01
CLAIM: Reconcile material transaction issues before buyer launch.
LOCAL INTERNAL EVIDENCE: INT-08 ("Evidence from transaction workflow" section — settlement coordination requirement).
PUBLIC EVIDENCE: None required.
ASSESSMENT: SUPPORTED
QUALIFICATION: None.
STEVE INPUT: No.

CLAIM ID: ADM-019-02
CLAIM: Unresolved uncertainty can flow into buyer pricing and DD.
LOCAL INTERNAL EVIDENCE: INT-08 ("Information readiness and resolved transition mechanics reduce uncertainty that would otherwise appear in buyer DD or pricing" — near-verbatim support); INT-10 (buyer diligence themes).
PUBLIC EVIDENCE: None required.
ASSESSMENT: SUPPORTED
QUALIFICATION: General pattern only.
STEVE INPUT: No.

### Page 20

Former narrative claim ADM-020-01 retired on 2026-09-29. Its review metadata is preserved in the pre-edit archive. Replacement Page 21 claims: ADM-P21-01 to ADM-P21-08; see page21_evidence_review.md. No active confidentiality blocker.

### Page 21

CLAIM ID: ADM-021-01
CLAIM: Recovery pathway should respond to type of impairment.
LOCAL INTERNAL EVIDENCE: INT-06 (explicit "Supports: ADM-021-01" — staged provider-transition pathway); INT-09 (explicit "Supports: ADM-021-01" — provider strategy / asset performance workstreams tied to specific issues).
PUBLIC EVIDENCE: None applicable.
ASSESSMENT: STEVE_VALIDATION_REQUIRED — unchanged.
QUALIFICATION: The general principle (pathway should vary by impairment type) is supported. This claim connects the diagnostic taxonomy (page 13: "what is impaired?") to a recommended pathway — it is downstream of, and blocked by, Q3's validation of the four categories themselves. It does not depend on, and is not being validated against, the six-stage operating pathway (Secure→Reconcile→Diagnose→Stabilise→Value→Decide) — that pathway answers a different question ("what should the appointee do?") and page 21's decision tree sits after diagnosis (page 13) within that pathway, not as an alternative to it. See report_brief.md's clarified framework relationship.
STEVE INPUT: Yes — depends on Q3.

### Page 22

CLAIM ID: ADM-022-01
CLAIM: Appointment checklist spans participant, provider, enrolment, economics, contracts, property and strategy.
LOCAL INTERNAL EVIDENCE: INT-02 (information categories); INT-09 (workstream categories) — both comprehensively support the category spread.
PUBLIC EVIDENCE: EV-PUB-05/EV-PUB-12 (SDA Rules) and EV-PUB-06/EV-PUB-13 (NDIS provider guide), via PUB-03 and PUB-04, both explicitly list this claim as supported.
ASSESSMENT: SUPPORTED_WITH_QUALIFICATION — evidence base strengthened (now P1 + P2, previously P2 alone) but category unchanged.
QUALIFICATION: Category structure is now well evidenced by both public and internal sources; this page still cannot be finalised until pages 6, 7, 10, 15 and 19 (which it consolidates) are themselves stable — unchanged from the existing page 22 planning note. The qualification was always about drafting sequence, not evidence strength.
STEVE INPUT: Indirectly — inherits Q2 (page 6) and Q8 (page 10).

## HOLD claims: cross-check against new evidence

No HOLD claim is unblocked by this evidence pass — including the new public evidence.
If anything, both the internal and the new public evidence independently reinforce
every HOLD guardrail:

- **HOLD-01** (46% national vacancy) — INT-01's own guardrail list and INT-07 both
  explicitly warn against deriving a national/market-wide vacancy statistic from this
  kind of sample. PUB-01 adds its own explicit public-source guardrail: "Eligible/
  funded-but-not-using is not equivalent to vacant SDA stock." The NDIA's own workbook
  (EV-PUB-01/02) never publishes a single combined vacancy figure in this form.
- **HOLD-02** (SDA insolvencies increasing) / **HOLD-03** (named-lender distress) /
  **HOLD-07** (named provider distress) — INT-01's guardrail list explicitly excludes
  "named lender exposure," "named provider financial concerns," and "unverified distress
  estimates." PUB-05's own guardrail: "Do not write 'SDA insolvencies are increasing'
  from ASIC aggregate data unless SDAHC separately builds and validates an SDA company
  classification dataset" — ASIC's published series (now directly cited, EV-PUB-07/08)
  confirms it does not break insolvency out by industry/scheme in a way that would
  support this. No note in this pack, internal or public, asserts or evidences
  insolvency trends or named distress.
- **HOLD-04** (legislation stopping SDA approvals) — INT-01's guardrail list explicitly
  excludes this statement. PUB-06, now directly citing the amending Act, explicitly
  states the public sources do NOT establish "that the reform has stopped SDA
  approvals... that a particular SDA funding request would have succeeded under the
  prior regime... [or] that the reform is the sole or primary cause of observed SDA
  funding friction." This is now a stronger, more specific guardrail than before this
  pass, not merely an unresolved gap.
- **HOLD-05** (universal cost/vacancy/CAPEX percentages) — INT-04 and INT-05 both
  contain explicit internal instructions not to publish universal percentages from their
  samples. No public source in this pack publishes a usable universal percentage either.
- **HOLD-06** (buyer rankings) — INT-10 explicitly states its scope excludes buyer
  identity or proprietary underwriting model, and its boundary section explicitly
  prohibits buyer rankings, yield/return targets, and pricing formulas. No public source
  touches buyer-specific information at all.

No public source, local or newly identified, resolves any HOLD claim independently — the
new PUB-01–06 notes were prepared with explicit instructions not to do so (see
`public_evidence_notes/README.md`'s own rules). All seven remain blocked with
`status=HOLD`, `publicable=NO` in `claims_register.csv`, unchanged.

## Summary counts

| Assessment | Count | Change this pass |
|---|---|---|
| SUPPORTED | 21 | +7 |
| SUPPORTED_WITH_QUALIFICATION | 11 | -2 |
| STEVE_VALIDATION_REQUIRED | 8 | 0 |
| PUBLIC_SOURCE_STILL_REQUIRED | 0 | -5 |
| INSUFFICIENT | 0 | 0 |
| **Total non-HOLD claims assessed** | **40** | |

Claims that moved category this pass:

- **PUBLIC_SOURCE_STILL_REQUIRED → SUPPORTED:** ADM-004-04, ADM-004-05, ADM-008-01,
  ADM-010-01 (4 claims — resolved by PUB-06, PUB-05, PUB-02, and PUB-03/PUB-04
  respectively).
- **PUBLIC_SOURCE_STILL_REQUIRED → SUPPORTED_WITH_QUALIFICATION:** ADM-008-02 (1 claim
  — primary source now identified, but the claim itself requires an interpretive step
  the source doesn't state explicitly; deliberately not upgraded to plain SUPPORTED).
- **SUPPORTED_WITH_QUALIFICATION → SUPPORTED:** ADM-005-01, ADM-006-01, ADM-009-02
  (3 claims — each now grounded in a P1 public source in addition to P2 internal
  evidence, moving them beyond "SDAHC's own framework construct").

The 8 claims at `STEVE_VALIDATION_REQUIRED` are still exactly the same 8 claims flagged
`needs_steve=YES` / `status=STEVE` in `claims_register.csv` (ADM-004-03, ADM-006-02,
ADM-012-01, ADM-013-01, ADM-016-01, ADM-018-01, ADM-020-01, ADM-021-01). The new public
evidence did not surface any additional claim that needs Steve's judgement, nor did it
resolve any of the existing eight — consistent with this pack's rule that evidence
volume does not settle a judgement call. Several of the eight (ADM-006-02, ADM-013-01)
now have materially stronger underlying evidence, but the open question for each was
never evidentiary strength — see each entry above for what specifically still needs
Steve.
