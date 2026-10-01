# Final design match QA

Generated PDF: `05.outputs/public/SDA_Administration_Special_Situations_Report_2026.pdf`
Reference: `00.project/design_refs/FINAL_DESIGN_REFERENCE.pdf`
Method: both PDFs rasterised at 110 dpi, compared side by side page by page, by eye, plus per-page text diff.

Verdicts: MATCH / MINOR ACCEPTABLE DIFFERENCE / MATERIAL DIFFERENCE.

| Page | Verdict | Notes |
|---|---|---|
| 1 | MATERIAL DIFFERENCE | Layout, fonts, colours, badge, house art match closely. Differences: the approved subtitle is kept under the badge (reference has none); top-right mark is the existing brand logo, not the reference's simplified navy mark; house strokes not pixel-identical. Retained because subtitle is approved copy and the mark artwork is unavailable |
| 2 | MINOR ACCEPTABLE DIFFERENCE | Panels a little taller in the reference; list set slightly tighter here, so the companion strip lands slightly lower |
| 3 | MINOR ACCEPTABLE DIFFERENCE | Rail and columns align; reference adds a faint dot texture and its rows are marginally taller |
| 4 | MATCH | Column split and typography match; small vertical offset |
| 5 | MINOR ACCEPTABLE DIFFERENCE | Panel, figures, chart and bar match. Body copy ends marginally lower; the panel's dot texture is omitted; sources sit in the panel at the same place |
| 6 | MATCH | Rail, nodes, navy result bar |
| 7 | MINOR ACCEPTABLE DIFFERENCE | Lead quote wraps onto three lines vs two in the reference, so the rows start lower and the first row wraps differently |
| 8 | MATCH | |
| 9 | MINOR ACCEPTABLE DIFFERENCE | Band slightly higher; card text marginally smaller |
| 10 | MINOR ACCEPTABLE DIFFERENCE | Row labels and divider sit slightly differently; matrix sits higher |
| 11 | MATCH | |
| 12 | MATCH | |
| 13 | MATCH | |
| 14 | MATCH | |
| 15 | MINOR ACCEPTABLE DIFFERENCE | Hub aligned; connector ticks between factors and hub omitted; question line sits slightly higher |
| 16 | MATCH | |
| 17 | MATCH | |
| 18 | MATCH | |
| 19 | MATCH | |
| 20 | MINOR ACCEPTABLE DIFFERENCE | Step band marginally higher; label wrapping identical |
| 21 | MINOR ACCEPTABLE DIFFERENCE | Densest page. Lens body text is set slightly smaller than the reference; sequence labels wrap to one line rather than two in some steps |
| 22 | MINOR ACCEPTABLE DIFFERENCE | Tree connector geometry slightly different; leaf cards marginally shorter |
| 23 | MATCH | |
| 24 | MATERIAL DIFFERENCE | Contact block deliberately not adopted: the reference shows sdahomechoices.com.au / research@... but the approved source is Steve Dawson's direct contact. Layout of the band matches the reference. Awaiting Ramiro's decision |

Totals: 11 MATCH, 11 MINOR ACCEPTABLE DIFFERENCE, 2 MATERIAL DIFFERENCE (pages 1 and 24, both content-driven).

## Rule checks

| Check | Result |
|---|---|
| Pages | 24 |
| U+2014 in public PDF | 0 |
| Internal review content (public purity check in build) | passed |
| "· PAGE" kicker occurrences | 0 |
| QR codes (pages 2, 24) | both decode to https://sdahomechoices.com.au/report2026 |
| Footer | "(c) 2026 SDAHC Research" left; page number right on pages 2–24 |
| Running head | "SDA Administration & Special Situations" on pages 2–24 |
| Clipping / overflow | none visible on any page at 110 dpi; pages 5, 21 and 24 are tightest |
| Title | approved full title retained in metadata; cover shows the lockup |
| Evidence claims | unchanged (word-level diff vs the previous PDF: only formatting artefacts, plus "circa 46%" replacing "≈46%") |
