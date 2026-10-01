# Final design reconciliation

> Superseded in part on 1 October 2026 by Ramiro's approved decisions (v1.1): cover is now the reference artwork embedded as an image; page 24 follows the reference closing block (research@ contact, QR, Steve Dawson name and phone); circa 46% approved; page 2 title italicised; pages 20 and 21 bands inset. The analysis below is the pre-decision record.

Reference: `00.project/design_refs/FINAL_DESIGN_REFERENCE.pdf` (24 pages, A4, WeasyPrint 70, fonts Source Sans 3 / Playfair Display / Barlow Condensed, the same families as the production system).
Compared against the previous canonical PDF (SHA-256 `deaed70a...4bfc84`, the v1.0 tagged build), then against the rebuilt PDF.

Method: per-page text extraction and word-level diff (reference vs canonical), plus side-by-side rasters at 110 dpi.

## Result in one line

Body copy, titles, statistics, sources, glossary, disclaimer, QR destination and footer text are identical across all 24 pages. There are three items that are not pure design (rows marked CONTENT_CHANGE / CONTACT_CHANGE / POTENTIAL_ERROR below). Two of them are left as approved; one needs Ramiro's decision.

## Differences

| PAGE | CURRENT CANONICAL | NEW REFERENCE | DIFFERENCE TYPE | RECOMMENDATION | ACTION |
|---|---|---|---|---|---|
| 1 | Dark cover, small title, eyebrow "SDAHC Research", mark top-left | Warm grey cover, huge condensed "SDA / ADMINISTRATION & / SPECIAL SITUATIONS / Report", "2026 EDITION" top-left, mark top-right, house line-art, "SPECIALIST DISABILITY ACCOMMODATION" badge, "© SDAHC RESEARCH" | VISUAL_COMPONENT, TYPOGRAPHY | Adopt | Ported (new cover component). The approved full title is carried as badge + line breaks. Subtitle kept (see row below) |
| 1 | Subtitle "A Commercial Guide for Administrators, Receivers, Secured Lenders and Restructuring Advisers" | Not present anywhere on the cover | CONTENT_CHANGE | Keep. Approved subtitle in `pages.yaml` | Kept on cover, small, under the badge. Ramiro to confirm whether the reference intentionally drops it |
| 1 | Cover title string "Specialist Disability Accommodation Administration & Special Situations Report 2026" | "SDA Administration & Special Situations Report" with "Specialist Disability Accommodation" as a badge; no "2026" in title (edition tag only) | CONTENT_CHANGE (presentation of the title) | Adopt as a lockup, decision noted | Ported as `report.cover_lockup` in `pages.yaml`. The HTML `<title>` and metadata still carry the full approved title |
| 2–24 | Running head = section-specific label / plain text | Letter-spaced small caps "SDA ADMINISTRATION & SPECIAL SITUATIONS" with hairline | DESIGN_ONLY, TYPOGRAPHY | Adopt | Ported. Text identical to the approved header from the last pass |
| 2–24 | Footer "(c) 2026 SDAHC Research" left, plain number right | Same text; number in bold condensed navy with a short blue rule to its left | DESIGN_ONLY | Adopt | Ported |
| 2–24 | Kicker plain blue caps | Blue caps with a short blue rule | DESIGN_ONLY | Adopt | Ported. Section names only, no page numbers |
| 2 | Two tinted cards, `A.` `B.` inline, companion callout | Tint (A) / warm paper (B) panels, large blue condensed A. / B., serif titles, ruled lists; QR + "Read alongside" + companion text in a ruled strip | LAYOUT, VISUAL_COMPONENT | Adopt | Ported (`two_exposures`) |
| 2 | A/B list order in source | A/B list order in reference PDF text extracts as interleaved | DESIGN_ONLY (extraction artefact) | None | Source order kept; visually identical items and order |
| 3 | Contents in six stacked blocks | Navy page: large 01–06 rail with nodes, two-column contents, "p#" page references | LAYOUT, VISUAL_COMPONENT | Adopt (supersedes the earlier "keep Contents unchanged" rule, since the reference replaces the design) | Ported (`contents`), still generated from `pages.yaml` by `build_toc_data()` |
| 3 | Group ranges "02–06", "07"... shown | Only 01–06 section numbers and "p2", "p4"... references; group page ranges not shown | DESIGN_ONLY | Adopt | Ranges dropped from display only (still computed) |
| 4 | Glossary cards | Two-column ruled glossary; acronym expansions in italic | LAYOUT, TYPOGRAPHY | Adopt | Ported. The expansion is italicised where the definition begins with "Expansion: ...". Wording untouched |
| 4 | Column order Housing/Support and Geography under column 1 | Same groups, same order | MATCH | None | None |
| 5 | Three stat cards, "≈46%" highlight, small bar | Navy data panel: three big figures, "circa 46%", place-utilisation bar (16,644 of 31,065), four-quarter chart of 9,880 / 9,577 / 9,370 / 9,014, sources inside the panel | VISUAL_COMPONENT | Adopt | Ported (`stat_cards`). Chart and bar draw only on figures already in the page body |
| 5 | "≈46%" | "circa 46%" | TYPOGRAPHY (wording of a symbol) | Adopt: matches the approved data-point spelling "circa 46%" | `pages.yaml`: `prefix: circa`, `value: 46%`. Flagging because it is text |
| 6 | Vertical boxes with arrows | Numbered rail 01–09 with nodes; "Sustainable NOI" node blue, "Transaction Value" navy bar | VISUAL_COMPONENT | Adopt | Ported (`process_chain` vertical) |
| 7 | Six cards + callout | Large blue-rule lead quote, six numbered rows | LAYOUT | Adopt | Ported (`six_box`) |
| 8 | Chain of cards | Numbered navy squares 01–06 on a vertical rule, serif label + description | VISUAL_COMPONENT | Adopt | Ported (`process_chain_detailed`); note callout gets blue bar |
| 9 | Stacked boxes | Tinted band with six node cards on a horizontal rule; last card amber | VISUAL_COMPONENT | Adopt | Ported (`process_chain`, `emphasis_last`) |
| 10 | 2x2 with pale cells | Larger cells, green-top "Healthy", amber "Occupied but not performing" | LAYOUT | Adopt | Ported (`quad_2x2`). Cell texts unchanged |
| 11 | Two coloured layer boxes, numbered list | Tint/paper layer panels with coloured top rules, 12 numbered questions in ruled grid | LAYOUT | Adopt | Ported (`split_and_numbered`) |
| 12 | Boxes with arrows | Node rail, navy result bar, dashed "considered separately" box | VISUAL_COMPONENT | Adopt | Ported (`dual_block`) |
| 13 | Two boxes, amber note | Navy / blue reference blocks, tenure note, dashed amber Current Recovery Position | VISUAL_COMPONENT | Adopt | Ported (`reference_points`); markers on the three defined terms are `marker:` on paragraphs |
| 14 | Four cards | 2x2 numbered cards | LAYOUT | Adopt | Ported (`diagnostic_cards`) |
| 15 | Centre box + grid | Navy hub with four factors each side, large italic question | VISUAL_COMPONENT | Adopt | Ported (`factor_center`). The question is the first sentence of the existing note; the sub-line is the second |
| 16 | Card grid | Ruled numbered rows with bracket at right | LAYOUT | Adopt | Ported (`category_list`) |
| 17 | List + boxes | Square-bullet factor grid, dash list, single/segmented fork | VISUAL_COMPONENT | Adopt | Ported (`segmentation_grid`) |
| 18 | Two columns + chips | Green / red tinted columns, options strip, red-rule display sentence | LAYOUT | Adopt | Ported (`decision_balance`, `style: display-red`) |
| 19 | Table rows | Five coloured-stripe rows, big numerals | VISUAL_COMPONENT | Adopt | Ported (`triage_matrix`) |
| 20 | Horizontal chips | Navy band with five numbered nodes; amber-bar callout | VISUAL_COMPONENT | Adopt | Ported (`process_chain` horizontal) |
| 21 | Four lens cards, dark sequence bar | Four tinted lens cards (Tax card amber), navy sequence band with two accent rules; closing paragraph before band | LAYOUT | Adopt | Ported (`diligence_lenses`) |
| 22 | Light page, boxed tree | Deep navy page, blue root, boxed questions, dark leaf cards, 7-cell options strip | VISUAL_COMPONENT | Adopt | Ported (`decision_tree`, theme `deep`) |
| 23 | 3x2 capability cards | Numbered top-ruled items over a full-bleed tint quote band | LAYOUT | Adopt | Ported (`capability_grid`) |
| 24 | Sources + Steve Dawson contact band | Sources + deep-navy band; contact reads "sdahomechoices.com.au / research@sdahomechoices.com.au" | CONTACT_CHANGE | **Do not adopt without confirmation** | Approved contact kept (see below) |
| 24 | Contact name "Steve Dawson, Managing Director" | Not shown | CONTACT_CHANGE | as above | as above |

## Page 24 contact discrepancy

| | Details |
|---|---|
| Current canonical / approved in project source (`pages.yaml`, changelog round 1) | Steve Dawson, Managing Director. 0408 550 441. steve@sdahomechoices.com.au. sdahomechoices.com.au |
| Reference PDF | sdahomechoices.com.au. research@sdahomechoices.com.au. No name, no phone |
| Built into the generated PDF now | The approved Steve Dawson block, laid out in the reference's new band design |

Decision needed from Ramiro: keep Steve's direct contact, or switch to the research@ block. To switch, edit `contact_*` under page 24 in `03.production/content/pages.yaml` (drop name/title/phone; the macro already hides empty lines) and rebuild.

## Other drift checks (reference vs approved copy)

- Page titles (24): identical.
- Body copy, all pages: identical after normalising letter-spacing and hyphenation artefacts.
- 16,644 / 9,014 / 31,065 / circa 46%: identical. Reference adds no new figure. The chart values (9,880, 9,577, 9,370, 9,014) already appear in page 5 body copy.
- Source notes and the 12-item sources list: identical. Per-page source lines match the approved `public_source_ids`.
- Glossary definitions: identical.
- Provider transition wording (pages 8, 11, 21), GST/tax wording (page 21): identical.
- Disclaimer: identical.
- QR destination: `https://sdahomechoices.com.au/report2026` on pages 2 and 24 in both.
- Em dashes: none in either PDF.
- Old contact details / review text / stale sources: none reintroduced. Only the page 24 contact differs (above).
- Page count and numbering: 24, unchanged.

## Observation (not changed, editorial)

Page 2 companion text shows literal asterisks around the report title ("*SDA Market Report 2026*") in both the approved build and the reference. The source contains markdown italics that the inline renderer does not convert. Left as-is because both PDFs match; a one-line renderer fix can italicise it if wanted.

## Not reproduced exactly

- Cover house line-art is drawn as vector strokes, close but not pixel-identical to the reference artwork.
- Cover top-right mark is the existing SDAHC house-and-figure logo in brand blue; the reference uses a simplified navy house mark. Original artwork was not available in the project.
- Cover "2026 EDITION": kept as the approved `report.edition` value.
- Navy pages carry a faint dot texture in the reference (pages 3, 5, 22, 24). Not reproduced.
- Line breaks differ by a word here and there on a few pages (slightly different body measure).
