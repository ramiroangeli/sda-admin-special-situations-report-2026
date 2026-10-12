# SDA Administration & Special Situations Report 2026

Version: v1.2
Status: FINAL (digital edition and artwork). Print artwork is PROVISIONAL: not printer-approved.
Release date: 12 October 2026
Release tag: `sda-admin-special-situations-report-2026-v1.2`

Contents of this release: the approved 24-page interior (unchanged from v1.1) with the Claude Design cover, 2-page Contents,
air pages and back cover, assembled as a 28-page digital report plus separate print artwork, built by one command:

```bash
python3 03.production/scripts/build_release.py
```

Deliverables (in `05.outputs/`, not stored in Git; the build is byte-reproducible):

| File | SHA-256 |
|---|---|
| `digital/SDA_Admin_SS_Report_2026.pdf` | `a78e6056984922064abf10d168487ea517bcbff8f9f136f1f45176bd986300ed` |
| `print/cover/Back_Cover.pdf` | `d49d82a3896e1f281ea6c3eb756b3284265806c66a5638333fac5b97e50bdc53` |
| `print/cover/Cover_Spread.pdf` | `aca89728d5d22ad5ec3943bc3e68a07b9bc864b29b441ef6716ada51249b7df4` |
| `print/cover/Front_Cover.pdf` | `16680144fdf2f5e49383f60671139cf95c0ede27f31664f69f8735f7ce616510` |
| `print/cover/Spine.pdf` | `f33d57358d565f096e07b40b81c4956fed6bf4fc139a3f884e86e5560ecb8fcc` |
| `print/interior/Interior.pdf` | `bbc11e090dde675d06bc2b1fde41131d07f0e3b56d37c97c14f647cf6627795f` |

Validation (`validate_release.py`, 43 checks, all passed): 28 pages in the approved order, printed folios unchanged, interior text
identical to the WeasyPrint output, QR codes decode (pages 2 and 24 to /report2026; back cover to the tagged URL), dimensions / Trim /
BleedBox, no RGB left, 0.0000% pixel difference against the approved reference PDFs outside the back-cover contact band.
Reference artifact checksums: `00.project/reference_artifacts.sha256`.

## Outstanding items before print (all PENDING, none resolved by this release)

1. **Back-cover QR update (distribution task).** The back-cover QR currently points to the tagged URL
   `https://sdahomechoices.com.au/research/sda-market-report-2026/?utm_source=print&utm_medium=qr&utm_campaign=admin_report_back_cover`.
   A central SDAHC Research hub is planned at `https://sdahomechoices.com.au/research/` (NOT yet published). Once it is live,
   set `qr_url` in `03.production/print/data/back-cover.json`, rebuild, re-validate and re-register the hashes of
   `digital/SDA_Admin_SS_Report_2026.pdf`, `print/cover/Back_Cover.pdf` and `print/cover/Cover_Spread.pdf` before sending to print.
   The page 2 and page 24 QR codes (`/report2026`) are unchanged.
2. **ICC / CMYK profile.** Not confirmed (e.g. FOGRA39, GRACoL). CMYK values are hand-set approximations; no ICC, OutputIntent or PDF/X.
3. **Binding and spine.** Binding type and spine width not confirmed. The 3 mm solid-navy spine is a provisional placeholder.
4. **Printer preflight approval.** Required for all `05.outputs/print/` files (see `PREFLIGHT_PENDING.txt`).
5. Printer's preference for the 26-page interior vs the 28-page complete file, and slug/crop-mark requirements.

## History

Supersedes v1.0 and v1.1 (tags, history and sources unchanged). The v1.1 canonical 24-page PDF is no longer kept in `05.outputs/`;
it is reproducible byte-for-byte from tag `sda-admin-special-situations-report-2026-v1.1` with `python3 03.production/scripts/build.py --pdf`
(SHA-256 below).

### v1.1 record

Version: v1.1
Status: FINAL
Release date: 1 October 2026

Canonical PDF:
`05.outputs/public/SDA_Administration_Special_Situations_Report_2026.pdf`

SHA-256:
`2b90788a835b79c3ae34d057185554add3ddd9d18eb96c896cc2d158ae48a4bd`

Final status:
- Steve Dawson review complete
- 0 active review items
- editorial review complete
- evidence QA complete
- visual QA complete
- 24 pages
- public purity check passed
- QR verification passed
- final Ramiro visual approval complete

Release tag:
`sda-admin-special-situations-report-2026-v1.1`

Future changes:
Supersedes v1.0 (tag sda-admin-special-situations-report-2026-v1.0, unchanged). v1.1 adopts the final design reference: cover as image asset, page 24 closing block, inset navy bands on pages 20-21, circa 46%, italic report title on page 2.
Output PDFs are not stored in the repository; the SHA-256 above identifies the released file.

Any substantive change after this release must be versioned as v1.2 or later.
