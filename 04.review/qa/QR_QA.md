# QR Code QA — Round 2

Both QR codes in this report (page 2, page 24) point to the same canonical public URL
and were tested per Steve's round-2 instruction: same URL both places, sufficient
resolution, quiet zone maintained, decoded from the rendered PDF/PNG (not only the
source PNG), destination recorded here.

## Destination

`https://sdahomechoices.com.au/report2026`

Located in the existing, already-published flagship report's own back-cover QR script
(`ndis-python-v2/scripts/build_qr_overlay.py`) — not invented. Live-checked this round:
resolves (HTTP 308 → 200) to
`sdahomechoices.com.au/research/sda-market-report-2026/` with `utm_medium=qr` tracking
already built into the destination, confirming it is the flagship report's own intended
print/QR landing link. See
`../../01.evidence/evidence_gap_resolution_round2.md` §6 for the full check.

## Asset

`../../03.production/static/img/qr_sda_market_report_2026.png` — 410×410px, 1-bit,
quiet zone present. Embedded into both builds as a base64 data URI by
`scripts/build.py` (`qr_uri`), so no external file dependency at render or print time.

## Decode tests

| Test | Method | Result |
|---|---|---|
| Source PNG | OpenCV `QRCodeDetector` direct on `qr_sda_market_report_2026.png` | `https://sdahomechoices.com.au/report2026` ✅ |
| Rendered PDF → page 2 PNG | `pdftoppm -r 150` on the published public PDF, page 2, then OpenCV decode | `https://sdahomechoices.com.au/report2026` ✅ |
| Rendered PDF → page 24 PNG | Same method, page 24 | `https://sdahomechoices.com.au/report2026` ✅ |

Both rendered-PDF decodes were re-run against the final, published
`05.outputs/public/SDA_Administration_Special_Situations_Report_2026.pdf` after all
round-2 content and layout fixes were locked in — not only against an earlier draft
build.

## Placement / restraint check

- **Page 2** — small `qr-callout` component (16mm × 16mm code) beneath the two-exposure
  visual, labelled "Read alongside / SDA Market Report 2026." Does not dominate the
  page; sits below the report's own substantive content.
- **Page 24** — same-size code inside the navy contact band, labelled "Continue
  reading / SDA Market Report 2026," alongside Steve Dawson's contact details, not
  replacing them.

No broken or local-file QR destination. No fabricated URL.
