# PAGE 03 — CONTENTS

**Reader question:** n/a (navigation page)

**Final design polish pass (2026-09-29) change type:** REPLACED. Retired the old
"When the Appointment Lands / How to Use This Report" nav/how-to page (the opening
paragraph, pull-quote, four-question breakdown and page-range table) in favour of a
proper one-page Contents, reusing page 3's allocation rather than adding a 25th page.
The disclaimer sentence this page used to carry ("This is a commercial guide, not
legal, tax, insolvency or investment advice") already lives independently on page 24
and did not need duplicating here. Adapted (not copied) from a stored design
reference (`00.project/design_refs/toc_reference.png`): large condensed section-range
numbers, thin dividing rules, restrained two-column page lists, no photography, no
icons.

Six section blocks, each with a large number/range, the section name, and its pages
in a two-column list:

**02–06 UNDERSTAND** — 02 Why SDA Is Different · 04 Common SDA Terms & Abbreviations ·
05 What the Headline Demand Data Does Not Tell You · 06 What Must Line Up for an SDA
Asset to Work

**07 ENGAGE SPECIALIST** — 07 The First 48 Hours

**08–14 COMMERCIAL VENDOR DUE DILIGENCE** — 08 The First 30 Days · 09 From Maximum SDA
Price to Actual Cash · 10 Occupied Does Not Necessarily Mean Performing · 11 The
Provider, Contractual and Participant Information Layer · 12 From Actual Income to
Sustainable NOI · 13 Value References, Remaining Pricing Tenure and Highest and Best
Use · 14 What Exactly Is Impaired?

**15–17 REMEDY / POSITION** — 15 Hidden Chokeholds: What Affects Recoverability · 16
Information Readiness · 17 One Portfolio or Several Transactions?

**18–23 REALISE** — 18 Stabilise, Hold or Sell? · 19 Occupancy Quality Through
Commercial Vendor Due Diligence · 20 From Vendor Due Diligence to Market · 21 What Due
Diligence May Reveal Before Realisation · 22 SDA Appointment / Realisation Decision
Tree · 23 Where Specialist SDA Commercial Advice Adds Value

**24 REFERENCE** — 24 Sources / Disclaimer / Contact

**Visual:** `visual_type: contents`. Group ranges and section names live in
`scripts/build.py`'s `TOC_GROUPS` constant; every page **title** shown above is looked
up live from `pages.yaml` at build time (`build_toc_data()`), never retyped in this
file or in the template, so this page cannot silently desynchronise from the actual
page titles in a future round. If a future round adds, removes or retitles a page,
update `TOC_GROUPS`' page-number lists (and this file's prose, for the editorial
record) — the titles themselves will follow automatically.

Evidence note: navigational page; no claims.
