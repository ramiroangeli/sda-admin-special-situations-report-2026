# SDA Home Choices — Design System

A complete design language for **SDA Home Choices**, a premium specialist
advisory and brokerage business focused on completed Specialist Disability
Accommodation (SDA) and disability housing assets in Australia.

The aesthetic is **clean, expert, and quietly confident** — closer to a
boutique private-bank or property-fund prospectus than a public-service
website. It avoids rigid corporate templates and AI-trope visual patterns
(busy multi-column grids, purple gradients, emoji cards) in favour of
generous white space, asymmetrical editorial layouts, and a restrained
two-family type system.

---

## Sources used

No codebase, Figma, or screenshot assets were attached when this system was
generated. It was built **directly from the written brand brief** —
typography, palette, and component rules supplied in the project kickoff.

> ⚠️ **Flagged for follow-up:**
> - **Logo & marks** — placeholder wordmark only. Please share the official
>   SDA Home Choices logo (SVG preferred) so it can replace `assets/logo.svg`.
> - **Photography** — the system specifies the *style* of imagery
>   (warm-lit Australian residential, golden hour, accessibility-aware) but
>   no real photos are included. UI kits use neutral placeholder slots.
> - **Fonts** — Playfair Display (serif), Source Sans 3 (sans) and Barlow
>   Condensed (condensed) are loaded via Google Fonts. No self-hosted files.

---

## CONTENT FUNDAMENTALS

**Voice — expert, calm, low-volume.** The reader is almost always an
investor, advisor, or family decision-maker; never a casual browser.
Copy speaks with quiet authority — *no* salesy adjectives, *no* exclamation
points, *no* "Get started today!" energy.

**Person.** Write in **second person** for direct address ("your portfolio",
"your client") and **first-person plural** for the firm ("we broker", "our
specialists"). Avoid "I" — this is a firm, not a personality.

**Casing.**
- **Sentence case** for headings and buttons. ("Browse completed assets" — not
  "Browse Completed Assets").
- **Title Case** reserved for proper nouns and product names
  (*Specialist Disability Accommodation*, *NDIS*, *SDA Home Choices*).
- Acronyms always spelled out on first use: *Specialist Disability
  Accommodation (SDA)*.

**Tone examples — do / don't.**

| ✅ Do | ❌ Don't |
| --- | --- |
| "Twelve completed SDA dwellings, fully tenanted and ready to settle." | "🏠 Amazing investment opportunities you'll LOVE!" |
| "We advise on every step — from due diligence to settlement." | "Let us hold your hand through the journey!" |
| "Yields are real, audited, and modelled conservatively." | "Insane 12%+ returns guaranteed 🚀" |
| "Speak with a specialist" | "Get in touch now!" |

**Numbers & data.** Always *specific*, never *vague*. "12.3% target yield"
not "high yields". "NDIS-certified High Physical Support" not "top-tier
classification". Investors trust precision.

**Emoji.** **Never.** No emoji anywhere — including informal copy, marketing,
or feature lists. Use icons from the Lucide set instead.

**Punctuation.** Em-dash (—) preferred for asides; en-dash (–) for ranges
(*2024–2025*). Oxford comma on. One space after periods.

**Length.** Headings are short and confident (3–8 words). Body paragraphs
are 2–4 sentences max. Long-form is broken with eyebrows and pull quotes,
never with bullet-list dumps.

---

## VISUAL FOUNDATIONS

**Colors.** The palette is anchored on a single confident blue
(`#0476D9`) for action, a deeper navy family (`#1B57A6` → `#06336B` →
`#00162B`) for dark sections and footers, and a slate body colour
(`#3C5468`) for text. Backgrounds are almost always pure white or an
ultra-light slate tint (`#F7F9FC`). Coloured surfaces are used **sparingly**
— typically one navy or gradient panel per page, never more than two.

**Typography.** Three families (typography v2), loaded via Google Fonts.
- **Playfair Display** (serif) for display, hero H1, major page headings,
  editorial H2/H3, pull quotes, and listing/asset names. High-contrast
  editorial serif — H1 at 800, H2 at 700, H3/`.asset-title` at 600. Georgia
  is the serif fallback.
- **Source Sans 3** (sans) for body copy, UI labels, forms, buttons, cards,
  navigation, tables, badges, and all functional interface text. Body at
  Regular (400); nav/labels at Medium (500); buttons, badges, eyebrows and
  functional headings at SemiBold/Bold (600/700). Helvetica Neue, Arial and
  system-ui are the sans fallbacks.
- **Barlow Condensed** (condensed) for covers, section openers, the stats
  hero, and large numbers — uppercase, heavy (700/800), tight tracking. Use
  the `.condensed`, `.cover-title`, and `.stat-hero` helpers. Source Sans 3
  is the fallback.

**When serif vs. sans.** Headings are Playfair *where editorial* (page
titles, section intros, listing/asset names, quotes) and Source Sans 3
SemiBold *where functional* (dashboard headers, table headings, dense UI) —
use the `.heading-ui` helper for the latter. Big numbers and stat heroes use
Barlow Condensed. Per-asset yields and inline data stay Source Sans 3
SemiBold so they read as trustworthy data, not decoration.

**Listing / asset cards — the canonical rule.**
- **Property / asset name → Playfair Display SemiBold**, via the
  `.asset-title` helper. Kept *restrained*: 22px (26px only for hero/detail
  headers), `line-height: 1.2`, gentle `-0.005em` tracking, never large or
  decorative. It is the single editorial moment on the card.
- **Everything else → Source Sans 3** (Medium/SemiBold): yield, location,
  status, tags/badges, buttons, and all metadata. This keeps the property
  name feeling premium while the supporting data stays functional.
- **If a card becomes very data-heavy,** demote secondary groupings to Source
  Sans 3 sub-headings (`.asset-subhead`) — but the main asset name always
  stays in Playfair. Reserve the serif for that one line.

Headings sit on `--lh-tight` (1.08) with `letter-spacing: -0.01em`. Body
sits at 1.6 line-height in slate `#3C5468`. Eyebrows are 13px Source Sans 3
SemiBold, uppercase, +0.04em tracking, in the primary blue. Letter-spacing
is kept restrained throughout — no decorative tracking.

**Layout.**
- **Asymmetry over symmetry.** A 12-column grid is *available* but
  rarely used at full density. Prefer 60/40 splits, off-centre images,
  pull quotes that break the gutter, and intentional negative space.
- **Generous gutters.** Container widths: 880 (narrow editorial),
  1180 (default), 1320 (wide marketing). Horizontal padding scales
  fluidly with `clamp(20px, 4vw, 64px)`.
- **One idea per band.** Sections are vertically generous (96–128px
  padding top/bottom). Crowded sections are a red flag — split them.

**Backgrounds.** Almost always solid: white, `--bg-tint`, or one of
the brand navies. The only gradient permitted is the footer/closing
panel (`#06336B → #00162B`) and the optional hero panel
(`#1B57A6 → #06336B`). No repeating textures, no patterns, no noise.

**Imagery.** Warm-lit photographic. Australian residential interiors and
exteriors, natural daylight, golden-hour tones. People should appear
naturally — never staged stock. Black & white is acceptable for portraits
of advisors/team. Avoid: hero stock photography of handshakes, cityscapes,
or generic "diverse team in office".

**Animation.** Restrained.
- Standard ease: `cubic-bezier(0.22, 1, 0.36, 1)` (a settled ease-out).
- Durations: 140ms (micro), 220ms (default), 420ms (slow reveals).
- **Fades and slow vertical reveals** preferred. No bounce, no overshoot,
  no spring physics. Scroll-driven reveals should feel like the page
  *settling* into place, not performing.

**Hover states.**
- **CTAs:** background shifts to `--brand-primary-hover` (#035FB0) +
  `shadow-md` lifts in.
- **Links:** underline at 3px offset, colour shifts to `--brand-link-hover`.
- **Cards:** 2px translateY up, shadow goes from `sm` to `md`.
- **Icons in nav:** opacity 0.7 → 1.

**Press states.** `transform: translateY(1px)` and the darker
`--brand-primary-press` (#024A8C). No "shrink to 0.95" — that reads too
playful for this brand.

**Borders.** Hairline only — 1px in `--border` (#E1E8EF). Stronger
borders (`--border-strong` #C8D3DE) reserved for form fields and table
rules. No double borders, no dashed, no thick accent borders.

**Shadows.** Soft, blue-tinted. All shadows use `rgba(6, 51, 107, 0.06–0.18)`
— *never* neutral grey, which would feel generic. Five steps from `xs` to
`xl`. Cards default to `sm`, lift to `md` on hover, `lg` for modals,
`xl` for the rare floating panel.

**Transparency & blur.** Used very sparingly. Acceptable: a frosted
sticky header (`backdrop-filter: blur(12px)` over white at 0.8 alpha) and
a translucent overlay on hero photography (navy at 0.4 alpha). Not used
inside content.

**Corner radii.**
- **CTAs / pills / badges:** 100px (fully rounded — spec mandated).
- **Cards & panels:** 20px (`--r-lg`).
- **Inputs:** 12px (`--r-md`).
- **Imagery:** 28px (`--r-xl`) for hero crops, 20px for thumbnails.
- **Never** square corners — those feel utilitarian.

**Cards.** White surface, 1px `--border`, 20px radius, 32px padding,
`--shadow-sm` resting, `--shadow-md` on hover with a 2px lift. No coloured
left-borders. No icon-in-corner-pastel-circle.

**Fixed elements.** Header is sticky with frosted blur and a 1px bottom
border on scroll. Footer is non-sticky. Floating CTA blocks ("speak with a
specialist") are positioned inline within page bands, never as fixed
overlays.

---

## ICONOGRAPHY

**Library.** [Lucide](https://lucide.dev) icons, loaded via CDN
(`https://unpkg.com/lucide@latest/dist/umd/lucide.js`). Lucide's
thin-stroke, geometric humanist style matches the editorial-meets-
financial tone perfectly.

> ⚠️ **Flagged substitution:** No icon set was provided, so Lucide is
> being used as the default. If SDA Home Choices uses a different set
> (e.g. Phosphor, Heroicons, or a custom set), drop the SVGs in
> `assets/icons/` and update `ICON_LIBRARY` in the UI kit.

**Usage rules.**
- **Stroke weight: 1.5px** (Lucide default). Never thicker — heavy strokes
  break the editorial feel.
- **Size:** 16px (inline with text), 20px (button affordances), 24px
  (standalone UI), 32–48px (feature blocks).
- **Color:** inherits from `currentColor`. Default to `--fg-muted` in
  navigation, `--brand-primary` for active/accent, `--fg` for body.
- **Alignment:** vertically centered with text using flexbox + `gap`,
  never absolute-positioned.

**Emoji & unicode.** **Not used.** Anywhere. Even in informal contexts.
Replace with Lucide icons or omit entirely.

**Logos & brand marks.** The wordmark in `assets/logo.svg` is a
placeholder — `SDA Home Choices` set in Playfair Display Bold
(no divider between "SDA" and "Home Choices") above a Source Sans 3 advisory
line. Replace with the official mark when available. A favicon-sized monogram
(`SDA`) is in `assets/mark.svg`.

---

## Index — what's in this folder

```
SDA Home Choices Design System/
├── README.md                  ← this file
├── SKILL.md                   ← agent-skill manifest
├── colors_and_type.css        ← CSS variables + base element styles
├── assets/
│   ├── logo.svg               ← wordmark (placeholder)
│   ├── mark.svg               ← monogram (placeholder)
│   └── icons.html             ← Lucide cheatsheet
├── fonts/
│   └── README.md              ← font sourcing notes
├── preview/                   ← design-system tab cards
│   ├── type-display.html
│   ├── type-headings.html
│   ├── type-body.html
│   ├── colors-brand.html
│   ├── colors-neutrals.html
│   ├── colors-semantic.html
│   ├── colors-gradients.html
│   ├── spacing-scale.html
│   ├── radii.html
│   ├── shadows.html
│   ├── buttons.html
│   ├── badges.html
│   ├── inputs.html
│   ├── cards.html
│   ├── nav.html
│   ├── logo.html
│   └── iconography.html
└── ui_kits/
    └── marketing-site/        ← the SDA Home Choices marketing website
        ├── README.md
        ├── index.html         ← full interactive page (homepage)
        ├── Header.jsx
        ├── Hero.jsx
        ├── AssetCard.jsx
        ├── ListingsBand.jsx
        ├── StatsBand.jsx
        ├── ProcessBand.jsx
        ├── QuoteBand.jsx
        ├── ContactBand.jsx
        └── Footer.jsx
```

## How to use this system

For **any new artifact** (deck slide, prototype, marketing mock),
start by including the token sheet:

```html
<link rel="stylesheet" href="../colors_and_type.css" />
```

Then reach for the UI kit components when you need a header, hero,
listing card, or footer. The token sheet provides CSS variables for
everything else — never hard-code a colour or radius outside the
token set.

See `SKILL.md` for guidance when this system is loaded as an Agent Skill.
