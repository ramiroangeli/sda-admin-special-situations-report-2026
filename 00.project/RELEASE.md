# SDA Administration & Special Situations Report 2026

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


---

## v1.2 (integration of the Claude Design cover, Contents and print artwork)

Status: RELEASE CANDIDATE. Not tagged. Awaiting Ramiro's review of the validated build.
Branch: `integration/v1.2-print-pipeline`

- 28-page digital edition and provisional print artwork built by one command: `python3 03.production/scripts/build_release.py`
- Interior still generated from `pages.yaml` + templates (WeasyPrint); Contents data derived from the same source
- v1.0 and v1.1 (tags, history, PDFs) unchanged
- Print files are PROVISIONAL: ICC/CMYK profile and binding/spine pending printer preflight (see `03.production/print/README.md`)
- Deliverables in `05.outputs/` (not stored in Git; rebuild with the command above, which is byte-reproducible):

| File | SHA-256 |
|---|---|
| `digital/SDA_Admin_SS_Report_2026.pdf` | `bb643b8c4dc7461afe300c577218b44b8d07ddc74040a5b9b818504051b932eb` |
| `print/cover/Back_Cover.pdf` | `0ddaeb183d680a3ac1cbd2a88cbc2da89a050a8a7f24b652903cce89b604e1ab` |
| `print/cover/Cover_Spread.pdf` | `a7b547533223c608e0849e7db18a3202320cd89ff255ab94d418a49f64d9f275` |
| `print/cover/Front_Cover.pdf` | `16680144fdf2f5e49383f60671139cf95c0ede27f31664f69f8735f7ce616510` |
| `print/cover/Spine.pdf` | `f33d57358d565f096e07b40b81c4956fed6bf4fc139a3f884e86e5560ecb8fcc` |
| `print/interior/Interior.pdf` | `bbc11e090dde675d06bc2b1fde41131d07f0e3b56d37c97c14f647cf6627795f` |

- Validated: 28 pages in the approved order, printed folios unchanged, QR codes decode to /report2026, 0.0000% pixel difference against the approved reference PDFs (checksums in `00.project/reference_artifacts.sha256`)
- Print status: PROVISIONAL, printer preflight pending (ICC/CMYK profile and binding/spine unconfirmed)
