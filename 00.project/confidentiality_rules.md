# Confidentiality Rules

Status: PLANNING DRAFT. These rules govern everything drafted for the NDIS Specialist
Disability Accommodation Administration Report 2026, across `claims_register.csv`,
`evidence_register.csv`, `source_manifest.yaml`, and every file in `content/`.

## Never expose publicly without explicit approval

The following must never appear in public-facing report copy without explicit,
documented approval from Steve (and, where relevant, from the affected party):

- client names
- property addresses where doing so identifies a confidential engagement
- lender identities tied to distress
- exact confidential debt amounts
- confidential sale prices or negotiations
- buyer rankings
- buyer underwriting methodology
- named provider financial concerns
- transaction-specific Management Rights pricing
- confidential market intelligence attribution

This list is not exhaustive. If a piece of information would let a reasonably informed
reader identify a specific client, matter, lender, provider, buyer or transaction, treat
it as covered even if it isn't literally on the list above.

## Internal vs. public evidence

Internal raw evidence — the Market Intelligence database, SDAHC Information Request /
VDD checklists, provider agreements, P&Ls, valuations, provider-transition
documentation, occupancy histories, Vendor DD/IM/transaction material,
special-situations portfolio advisory material, and portfolio packaging/underwriting
material — **may contain** every item on the list above. That is expected and fine for
internal use. It is the publication step, not the possession of the evidence, that
these rules control.

See `evidence_register.csv` for the `confidentiality` field (`PUBLIC` /
`CONFIDENTIAL_INTERNAL`) and `claims_register.csv` for the `confidentiality` and
`publicable` fields on each individual claim. A claim's evidence being internal does not
automatically block publication of the claim — it means the claim must be reframed
before publication per the rules below.

## How public content must be produced from internal evidence

Public content must use one of the following, never raw internal detail directly:

1. **Aggregated patterns** — a statement drawn from multiple (P4) independent
   observations, described as a pattern ("SDAHC has repeatedly observed...") rather than
   as a count, ratio, or single-instance fact. See evidence class P4 in
   `report_brief.md`.
2. **Anonymised evidence** — a single-source (P3) observation with every identifying
   detail removed (no address, no name, no date specific enough to identify the matter,
   no numbers precise enough to be reverse-identifiable).
3. **Clearly labelled composite examples** — a narrative example explicitly presented as
   a composite/archetype (e.g. "a stabilised SDA asset," "an occupied but
   income-misaligned property," "a provider transition") rather than as a specific real
   matter. The current report contains no such narrative. Historical review metadata is archived; there is no active case-study confidentiality blocker.

P5 (single-source/unverified) evidence is internal decision support only and must never
be the sole basis for a public claim, aggregated or otherwise — see the evidence
taxonomy in `report_brief.md`.

## Relationship to the claims register

Every claim in `claims_register.csv` carries its own `confidentiality` and `publicable`
status. Where a claim's `publicable` field is `CONDITIONAL`, the qualification in
`qualification_required` states what must happen (aggregation, anonymisation,
composite framing, Steve sign-off) before it can move from draft to public copy. Where a
claim's `status` is `HOLD`, it is blocked from any public-facing use until the
conditions in its `notes` field are resolved — see `claims_register.csv` HOLD-01 through
HOLD-07.

## Working practice for this pack

- No confidential document has been copied into this project (`b.admin-and-special-situations-report-2026/`, formerly `ADMIN_REPORT_WORKING_PACK/`). Internal
  source families in `source_manifest.yaml` are recorded as placeholders
  (`TO_BE_CONFIRMED_WITH_DATA_OWNER`), not as file copies.
- Page content files in `content/` describe archetypes, not real client examples, per
  the instruction in the report brief. Where a real SDAHC case is relevant to a page,
  the file names the archetype (e.g. "provider transition," "capital-structure
  impairment") rather than the matter.
- Anyone drafting final copy from this pack should re-check each sentence against this
  file's "never expose" list before it leaves the planning stage.
