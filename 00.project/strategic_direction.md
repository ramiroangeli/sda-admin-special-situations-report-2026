# Strategic Direction — Round 1 (Steve Dawson Review)

Written before any architecture, copy or visual change in this round, per instruction.
Interprets `STEVE_FEEDBACK_SOURCE.md` into a single commercial direction that the
revised skeleton, draft and visual layer all have to serve consistently — this is a
repositioning brief, not a set of line edits.

## 1. What actually changed

Steve's review is not a set of corrections to existing sentences. It is a correction to
the report's *posture*. The report as locked at `draft_v0.3`/`visual_v0.2` reads as an
operational manual: here is the sequence of things an appointee does (secure, reconcile,
diagnose, decide). It is accurate, but it undersells SDAHC and underexplains *why* an
appointee who is not SDA-specialist would fail to do this well alone.

Steve's direction moves the report from:

> "Here is how to perform an SDA administration."

toward:

> "Here is why SDA requires a different commercial diagnosis, which factors can
> materially alter recovery, and when specialist SDA advice should be engaged."

That is a genuine repositioning, not a tone pass. It changes what earns a page, what
gets more space, and what gets deliberately less detail (see §4).

## 2. Central thesis (governs every page)

> SDA appointments cannot be approached as conventional property realisations. Value
> can depend on participant-specific funding, SDA provider arrangements, dwelling
> configuration, remaining SDA pricing tenure, buyer mandates, geography and hidden
> contractual or operational constraints. Specialist commercial vendor due diligence
> before sale can identify whether these constraints are remediable and materially
> affect the realisation strategy.

Every page in the revised architecture has to either (a) establish a reason conventional
property assumptions fail for SDA, (b) show a specific value driver a generic process
would miss, or (c) point toward Specialist SDA Commercial Vendor Due Diligence as the
mechanism that catches it. A page that does none of these is now off-thesis, regardless
of how good the v0.2 content was on its own terms.

## 3. The commercial journey, restated

Previous journey (`visual_v0.2`, roughly): Secure → Reconcile → Diagnose → Stabilise/
Value → Decide. Correct, but appointee-centric — reads as something the appointee does
themselves, unaided.

Revised journey:

```
APPOINTMENT
  ↓
SPECIALIST SDA COMMERCIAL ADVISER
  ↓
SPECIALIST SDA COMMERCIAL VENDOR DUE DILIGENCE
  ↓
IDENTIFY VALUE DRIVERS / CHOKEHOLDS
  ↓
REMEDY WHAT IS ECONOMICALLY REMEDIABLE
  ↓
DETERMINE REALISATION STRATEGY
  ↓
SPECIALIST SDA SALES AGENCY / TRANSACTION
```

The old journey is not wrong — it survives inside "Specialist SDA Commercial Vendor Due
Diligence" as the analytical content of that step (reconcile, diagnose, value-reference,
decide are still real work, still explained). What changes is that the report now names
the actor who typically does this work competently (a specialist adviser) before it
walks through what the work finds, rather than presenting the work as something any
appointee does unaided from a checklist.

## 4. What the report shows vs. what it protects

This is the single most consequential judgement call in this round, and it cuts against
the instinct to just "add more expertise" to every page:

- **Show**: enough of the diagnostic logic that a reader understands *why* a specialist
  is needed — the four impairment sources, the value-reference concept, the fact that
  occupancy/demand data can mislead, the categories of information that need
  reconciling, the segmentation factors that make packaging non-trivial.
- **Protect**: the complete proprietary information-request/vendor-DD checklist (old
  page 15), the full line-item appointment checklist (old page 22), any buyer-specific
  mandate detail, any scoring/matching logic.

Concretely: pages that used to *give away the method* (15, 22) are rewritten to *name
the categories* and *point at the adviser*. Pages that already argued *why specialist
diagnosis matters* (9, 12, 13, 17) get strengthened and, in one case (16), substantially
deepened, because depth there sells expertise without exposing IP — segmentation
factors are market knowledge, not SDAHC's proprietary process.

## 5. Two exposures, stated early

The report currently doesn't say, anywhere, that "the SDA asset" is actually two
things — a freehold property and a provider business/rights — with different economics
and different risk. Steve wants this established early (new page 2) precisely because
it's the clearest, fastest way to make a restructuring professional feel the difference
from a conventional property appointment in under a minute. This page does not attempt
a Management Rights-style provider-business valuation treatment — it exists only to
prevent the reader from treating the two as interchangeable.

## 6. Evidence discipline is the point, not an obstacle

Several of Steve's most persuasive observations (the >50% value-gap magnitude, the
$10k/$80k funding-vs-income example, the three-year ~9,000 cohort trend, the New Build
20-year tenure figure, sale-below-alternative-use public examples, remediation-cost
valuation allowances) are not independently supported by the current evidence pack at
the specific magnitude Steve stated. This is expected — Steve is the source of
commercial pattern-recognition the evidence pack was always going to lag behind, not a
failure of either side.

The correct handling, applied throughout `../draft/`, is: publish the *mechanism*
Steve is describing (which is usually well-supported or at minimum a defensible
SDAHC-observed pattern), and gate the *specific magnitude* behind attribution,
hedged language, or an explicit internal flag — never invent the missing evidence to
make a stronger sentence. See `CLAIMS_AND_EVIDENCE_IMPACT.md` for the full item-by-item
treatment. This is what "SDAHC has observed cases where..." language is *for* — it lets
the report state Steve's real pattern honestly without dressing it as a market
statistic.

## 7. Companion positioning

The revised report introduces itself, early, as meant to be read alongside SDAHC's
existing published flagship report — confirmed in-repository as **SDA Market Report
2026** (the title used as the flagship's own section-divider watermark throughout
`ndis-python-v2/templates/report.html`; body prose there also uses "SDA Report 2026"
interchangeably, so both forms are attributable to the flagship, but the watermark form
is used here as the more deliberately "designed" canonical form). The flagship covers
market evolution and scale over the asset class's first decade; this report covers
administration, distress, recovery and realisation. Explicitly not a re-summary of the
flagship — one cross-reference on the new page 2, not a running comparison.

## 8. Cover

Spelled-out title, per instruction:

> Specialist Disability Accommodation
> Administration & Special Situations Report 2026

This extends (does not replace) the `visual_v0.2` canonical short title — it adds the
full term ahead of the acronym rather than reopening the earlier title A/B decision.
Subtitle unchanged ("A Commercial Guide for Administrators, Receivers, Secured Lenders
and Restructuring Advisers"). SDA is used freely after its first full-term
introduction on page 2, as before.

## 9. Terminology discipline (applied editorially, not by find-replace)

- **Specialist SDA Commercial Vendor Due Diligence** — the owner/appointee's pre-sale
  investigation and preparation. This is the report's central value-protection concept
  from this round forward.
- **Buyer Due Diligence** — a purchaser's diligence specifically (used once, page 3
  concept table, to distinguish from the above).
- **Commercial Due Diligence** — investigation before a vendor/sale pathway has been
  selected (used where the report is describing the earlier, undecided state — e.g.
  page 7).
- **legal review / legal due diligence** — reserved for genuinely legal content (page
  10's provider-agreement clause list, page 22's appointment-continuity references).

## 10. Tone envelope (unchanged from Steve's brief, restated as a drafting constraint)

More commercially confident; never alarmist; never a guaranteed-recovery claim; never
"every conventional agent will fail" or "every asset is distressed" or "every provider
is conflicted"; SDAHC observations never dressed as national statistics; no legal
advice; no formal valuation advice; no confidential buyer intelligence. Preferred
vocabulary: *may, can, SDAHC has observed, commercial vendor due diligence can
identify, requires assessment, asset-specific, where supported by the evidence.*

## 11. What does not change

Per instruction, this is a strategic/content-architecture revision, not a brand
redesign and not a research task:

- Visual system unchanged: Playfair Display / Source Sans 3 / Barlow Condensed, SDAHC
  blue, restrained institutional presentation, public/review dual-mode build.
- ~24 pages, fast-reading objective preserved — depth is added by displacing weaker
  material (old pages 15, 22's line-item detail), not by lengthening the report.
- `draft_v0.3` and `visual_v0.2` remain untouched as the previous locked version.
- Claims/evidence registers at the pack root are not edited in place this round — new
  claims arising from this round are tracked in `CLAIMS_AND_EVIDENCE_IMPACT.md` and
  proposed for formal registration when this round itself locks.
- No external research was performed and no live data source was queried this round
  (see `CLAIMS_AND_EVIDENCE_IMPACT.md` §Data currency) — the existing local evidence
  pack is treated as authoritative, consistent with instruction not to guess where
  network verification isn't being performed.

## 12. How this reads against the self-test (worked answers)

Anticipating the nine self-test questions before drafting, so the draft is built to
pass them rather than checked against them afterward:

1. *Why SDA is different* — new page 2, reinforced by pages 4, 8, 12.
2. *Freehold vs. provider-business* — page 2 explicitly, referenced again at page 10.
3. *Funded/not-using ≠ viable demand* — page 4, the round's strongest new thesis.
4. *Commercial Vendor DD at the centre* — named on the new page 2 journey, developed
   through pages 7, 13–15, 18–19, closing on page 22.
5. *Expertise without giving away the process* — pages 15 and 22 rewritten as category
   lists + adviser CTA, not checklists; page 16 deepened with market-level segmentation
   factors, not SDAHC methodology.
6. *Remaining pricing tenure as a value driver* — new content on page 12, referenced at
   page 16.
7. *Page 16 complexity without buyer IP* — expanded factor list, general mandate
   *behaviour* examples, no named mandates/rankings/cap rates.
8. *Appointment → diagnosis → remediation → specialist sale* — the whole architecture,
   explicit in the new page 2 journey and page 19's going-to-market sequence.
9. *Attribution/evidence-gating* — see §6 and `CLAIMS_AND_EVIDENCE_IMPACT.md`.

(Q10, conciseness, is a build-time check against the final word/page count, reported at
the end.)
