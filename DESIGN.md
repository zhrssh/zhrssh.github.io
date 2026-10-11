---
name: Zherish Galvin Mayordo
description: Client-operations automation for digital agencies — a calm, ruled, ink-on-paper system.
colors:
  paper: "#FAFAF8"
  paper-raised: "#F3F1EA"
  ink: "#1F2328"
  ink-secondary: "#4A535E"
  ink-muted: "#636C76"
  hairline: "#E3E1DA"
  ledger-umber: "#6E5A3C"
  ledger-umber-deep: "#5A4A2F"
  danger: "#B42318"
  night-paper: "#15171A"
  night-raised: "#1E2126"
  night-band: "#2A2E35"
  night-ink: "#E6E4DD"
  night-ink-secondary: "#B4BAC3"
  night-ink-muted: "#8B929C"
  night-hairline: "#2A2E36"
  brass: "#BFA574"
  brass-light: "#D4BC8A"
  night-danger: "#F28B82"
typography:
  display:
    fontFamily: "Newsreader Variable, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.802rem, 1.6rem + 2.5vw, 3.75rem)"
    fontWeight: 560
    lineHeight: 1.15
    letterSpacing: "-0.005em"
  headline:
    fontFamily: "Newsreader Variable, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.424rem, 1.35rem + 0.75vw, 2rem)"
    fontWeight: 560
    lineHeight: 1.15
    letterSpacing: "-0.005em"
  title:
    fontFamily: "Space Grotesk Variable, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(1.266rem, 1.15rem + 0.5vw, 1.5rem)"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Space Grotesk Variable, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(1rem, 0.95rem + 0.25vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Space Grotesk Variable, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(0.889rem, 0.84rem + 0.175vw, 0.9375rem)"
    fontWeight: 500
    lineHeight: 1.4
  marginal:
    fontFamily: "Newsreader Variable, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.125rem, 1.05rem + 0.375vw, 1.266rem)"
    fontWeight: 400
    lineHeight: 1.35
rounded:
  sm: "3px"
  md: "4px"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  2xl: "3rem"
  3xl: "4rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "0.5rem 1.125rem"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.ledger-umber}"
    textColor: "{colors.paper}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.5rem 1.125rem"
  button-secondary-hover:
    textColor: "{colors.ledger-umber}"
  button-accent:
    backgroundColor: "{colors.ledger-umber}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "0.5rem 1.125rem"
  button-accent-hover:
    backgroundColor: "{colors.ledger-umber-deep}"
  input:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.625rem 0.75rem"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.ink-secondary}"
    rounded: "{rounded.sm}"
    padding: "0.125rem 0.5rem"
  card:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  link-pill:
    backgroundColor: "transparent"
    textColor: "{colors.ink-secondary}"
    rounded: "{rounded.sm}"
    padding: "0.375rem 0.75rem"
---

# Design System: Zherish Galvin Mayordo

## Overview

**Creative North Star: "The Engineer's Ledger"**

The site reads like a well-kept ledger: warm paper, dark ink, ruled hairlines, and a single umber ink for anything that matters. Serif headings give it the weight of a document. A geometric grotesque body keeps it technical and legible. Nothing is decorative; every line, rule and border records structure. The look carries the pitch: work that is recorded, checked and accounted for.

Density is calm and editorial. Sections band between paper and raised paper, and content is arranged in ruled rows and columns rather than boxes. Depth is almost absent: surfaces are flat, and only interactive cards lift on hover.

There is a light ledger and a dark ledger. Dark mode swaps paper for night paper and umber for a soft brass, keeping the same restraint.

**Key Characteristics:**
- Warm paper and ink, one umber accent
- Newsreader serif display over Space Grotesk body
- Hairline rules and dividers instead of boxes
- Barely-there corners (3–4px)
- Flat at rest; lift only on hover
- Banded sections: paper, raised paper, ink

## Colors

A near-monochrome paper-and-ink palette with one earthy accent. Every color token is a CSS custom property in `src/styles/global.css` and is redefined under `[data-theme='dark']`.

### Primary
- **Ledger Umber**: links, active nav underline, the short accent rule under the hero H1, italic stage labels, list markers, focus outlines, text selection, and the "Start here" badge outline. On dark it becomes **Ledger Brass**.
- **Deep Umber**: hover state for links and the accent button. On dark it becomes **Light Brass**.

### Neutral
- **Warm Paper**: the page background and default section band. On dark it becomes **Night Paper**.
- **Raised Paper**: alternate section band, used to separate sections without lines. On dark it becomes **Night Raised**.
- **Ledger Ink**: primary text, the primary button fill, and the closing call-to-action band (the inverse surface). On dark the band becomes **Night Band**, so it never turns into a bright slab.
- **Slate Ink**: secondary text: taglines, leads, descriptions, nav links at rest.
- **Faded Ink**: meta text, credentials, status line.
- **Ruled Hairline**: every 1px border, divider and rule.
- **Correction Red**: form validation errors only.

### Named Rules
**The One Ink Rule.** Ledger Umber is the only accent. It marks links, active states, stage labels and the occasional rule, and never fills large areas. The one exception is the accent button in the closing band.

## Typography

**Display Font:** Newsreader Variable (with Georgia)
**Body Font:** Space Grotesk Variable (with the system sans)

**Character:** A bookish, slightly condensed serif for headings against a crisp geometric grotesque for everything else, like a printed document with an engineer's handwriting in the margins.

### Hierarchy
- **Display** (560, fluid up to 3.75rem, 1.15): the page H1 only. It is balanced and kept to roughly 22ch.
- **Headline** (560, fluid up to 2rem, 1.15): section H2 titles, followed by a hairline rule. Larger standalone statements use the 3xl step (up to 2.5rem).
- **Title** (Space Grotesk 600, fluid up to 1.5rem, 1.3): H3s in ledger rows, cards and sub-sections. The lead row in a set may promote its title to the serif headline style.
- **Body** (400, fluid 1–1.125rem, 1.7): running text. The measure is 40–65ch; leads use the lg step at 1.6 line height.
- **Label** (500–600, 0.9375rem): buttons, nav, pills and tags. Project meta uses uppercase xs text with 0.08em tracking.
- **Marginal** (Newsreader italic 400, lg): margin notes in ledger rows, such as "When a client signs".

### Named Rules
**The Serif Speaks First Rule.** Newsreader is reserved for H1/H2, standout statements and short marginal notes. Every paragraph and UI label is Space Grotesk.

## Layout

- **Container:** content sits in a 1200px container with 2rem side padding. Single-column reading pages use a 65ch measure.
- **Section rhythm:** sections stack with 4rem block padding and alternate paper / raised paper bands. Every page ends on the ink closing band. A section header is an H2, a hairline rule, and an optional "View all →" link.
- **Ledger rows:** the signature layout is a ruled row on a three-column grid (margin note 1fr, title 2fr, detail 2.4fr) with 2rem gaps and 3rem block padding. A two-column split (statement 1fr, ruled list 1.4fr) is used for principle-style content.
- **Responsive:** at 900px and below, rows and splits collapse to a single column. At 768px the hero portrait hides and a 56px round avatar moves beside the status line. The page never scrolls horizontally on a 390px-wide screen.

## Elevation & Depth

Flat by default. Depth comes from tonal section bands and hairlines, not shadows. Only two shadows exist: a faint one under the sticky header once the page scrolls, and a soft lift under project cards on hover (with a 4px upward move). Their exact values are in `.impeccable/design.json`.

### Named Rules
**The Flat Ledger Rule.** Surfaces are flat at rest. A shadow appears only in response to hover or scroll.

**The Ruled Line Rule.** Group content with hairline rules and whitespace before reaching for a box. A bordered card is reserved for clickable items such as projects.

## Shapes

Barely-there corners: 3px on buttons, inputs, tags and pills, and 4px on cards and framed images. The only circles are the status pulse dot and the mobile avatar. Borders are always 1px hairlines. The accent rule (a 2.5rem, 2px umber line) is the one heavier stroke.

## Components

### Buttons
- **Shape:** gently squared (3px).
- **Primary:** an ink fill with paper text, weight 600, 0.5rem × 1.125rem. It turns umber on hover with a 150ms color transition.
- **Secondary:** transparent with a hairline border and ink text. The border and text turn umber on hover.
- **Accent:** an umber fill, used only on the ink closing band. It deepens on hover.
- **Text link action:** an umber link ending in "→", used for secondary calls to action inside rows ("Book a call →", "Read the full case study →").

### Chips (tags and link pills)
- **Style:** transparent with a hairline border, slate text and 3px corners. Project cards show at most three tags.
- **Link pills** carry a 16px stroke icon and turn umber, text and border, on hover.

### Cards / Containers
- **Corner Style:** 4px.
- **Background:** paper, with a 1px hairline border and a 16:9 image area on raised paper.
- **Hover:** lifts 4px with the card shadow. The border and title turn umber.
- **Internal Padding:** 1.5rem.
- **Impact line:** an umber 0.9375rem line above the title states the result.

### Inputs / Fields
- **Style:** transparent with a hairline border, 3px corners and 0.625rem × 0.75rem padding.
- **Focus:** the border turns umber. Keyboard focus adds a 2px umber outline with a 2px offset.
- **Error:** Correction Red message text with a matching border.

### Navigation
- **Bar:** a solid paper top bar, sticky, with a bottom hairline and a faint shadow once scrolled.
- **Links:** slate, weight 500, 0.9375rem. A 2px umber underline draws in from the left on hover and stays on the active page.
- **Right side:** a theme toggle (a 2rem square with a hairline border) and a compact "Book a call" primary button.
- **Mobile:** links collapse into a drawer behind a hairline-bordered menu button.

### Ledger Row (signature)
A ruled row on the three-column grid: an italic umber marginal note, a title with a one-line problem in slate, and a detail column with umber-marked bullets, a bold outcome line and an action. The lead row may promote its title to the serif headline style and carry a small outlined umber badge such as "Start here".

## Do's and Don'ts

### Do:
- **Do** alternate section bands (paper → raised paper → paper) and end every page with the ink closing band.
- **Do** lay out lists of services, principles and steps as ruled rows (1px hairline top and bottom) with 3rem block padding.
- **Do** use the italic Newsreader marginal note in Ledger Umber for row context, like a ledger's margin note.
- **Do** keep the body measure at 40–65ch and secondary text in Slate Ink.
- **Do** theme browser surfaces from the palette: umber text selection, and a 2px umber focus outline with a 2px offset.

### Don't:
- **Don't** add a second accent color or gradients. Umber (brass in dark mode) is the only accent.
- **Don't** use corners rounder than 4px, pill shapes, or heavy drop shadows.
- **Don't** turn content sections into grids of same-size icon cards.
- **Don't** put eyebrow labels above headings. Context goes in the margin column.
- **Don't** set paragraphs or UI labels in the serif.
