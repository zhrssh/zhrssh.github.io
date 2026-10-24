---
name: Zherish Galvin Mayordo
description: Custom internal systems for small teams — a calm, ruled, ink-on-paper system.
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
  badge:
    backgroundColor: "transparent"
    textColor: "{colors.ledger-umber}"
    rounded: "{rounded.sm}"
    padding: "0.15em 0.6em"
  currency-switch:
    backgroundColor: "transparent"
    textColor: "{colors.ink-secondary}"
    rounded: "{rounded.sm}"
    padding: "0 1rem"
    height: "2.75rem"
    typography: "{typography.label}"
  currency-switch-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  impact-panel:
    backgroundColor: "{colors.paper-raised}"
    textColor: "{colors.ink}"
    typography: "{typography.headline}"
    padding: "{spacing.xl}"
  closing-band:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    padding: "{spacing.3xl} 0"
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
- **Ledger Umber**: links, active nav underline, the short accent rule under the home, contact and project-page H1s, italic margin notes, list markers, focus outlines, text selection, the outlined status badge ("Just handed over"), and the faint tint behind the form's sent confirmation. On dark it becomes **Ledger Brass**.
- **Deep Umber**: hover state for links and the accent button. On dark it becomes **Light Brass**.

### Neutral
- **Warm Paper**: the page background and default section band. On dark it becomes **Night Paper**.
- **Raised Paper**: alternate section band, used to separate sections without lines. On dark it becomes **Night Raised**.
- **Ledger Ink**: primary text, the primary button fill, and the closing call-to-action band (the inverse surface). On dark the band becomes **Night Band**, so it never turns into a bright slab.
- **Slate Ink**: secondary text: taglines, leads, descriptions, nav links at rest.
- **Faded Ink**: meta text, credentials, the status line, and the "who" line under each proof result.
- **Ruled Hairline**: every 1px border, divider and rule.
- **Correction Red**: form validation errors and the send-failed notice only. The sent confirmation is tinted Ledger Umber.

### Named Rules
**The One Ink Rule.** Ledger Umber is the only accent. It marks links, active states, stage labels and the occasional rule, and never fills large areas. The one exception is the accent button in the closing band.

**The Recorded, Not Celebrated Rule.** Success is not green. A sent message is recorded in the one ink: an 8% umber tint with a 45% umber border, mixed from the token so it follows the theme. Failure is the only state that earns its own color, mixed the same way from Correction Red.

## Typography

**Display Font:** Newsreader Variable (with Georgia)
**Body Font:** Space Grotesk Variable (with the system sans)

**Character:** A bookish, slightly condensed serif for headings against a crisp geometric grotesque for everything else, like a printed document with an engineer's handwriting in the margins.

### Hierarchy
- **Display** (560, fluid up to 3.75rem, 1.15): the page H1 only. It is balanced and kept to roughly 22ch.
- **Headline** (560, fluid up to 2rem, 1.15): section H2 titles, followed by a hairline rule. Larger standalone statements use the 3xl step (up to 2.5rem): the handover statement and the impact panel on wide screens.
- **Title** (Space Grotesk 600, fluid up to 1.5rem, 1.3): H3s in ledger rows, cards and sub-sections, and the retainer price ("From $300"), which is deliberately a title, not a display number.
- **Body** (400, fluid 1–1.125rem, 1.7): running text. The measure is 40–65ch; leads use the lg step at 1.6 line height.
- **Label** (500–600, 0.9375rem): buttons, nav, pills, tags and the currency switch. Project meta uses uppercase xs text with 0.08em tracking.
- **Marginal** (Newsreader italic 400, lg): margin notes in ledger rows and figure captions, such as "Free, 45 minutes" or "Solace of Christ Church".
- **Proof** (Newsreader 400, xl, 1.3): the result line in the hero proof strip ("10+ minutes saved on every song").

### Named Rules
**The Serif Speaks First Rule.** Newsreader is reserved for H1/H2, standout statements, proof results and short marginal notes. Every paragraph and UI label is Space Grotesk.

**The Quiet Number Rule.** No price is set as a hero figure. The only number on the site, the optional retainer, sits in the title style after the sentence that says it is optional.

## Layout

- **Container:** content sits in a 1200px container with 2rem side padding. Single-column reading pages use a 65ch measure. The container also bounds the footer, whose links sit in one wrapping row beside the brand.
- **Section rhythm:** sections stack with 4rem block padding and alternate paper / raised paper bands. The home, about and project pages end on the ink closing band; contact, blog and the privacy policy end at the footer. A section header is an H2 with an optional "View all →" link on the same line, over a hairline rule. A ruled list placed straight under the header uses that rule as its top rule, so the line is never doubled.
- **Ledger rows:** the signature layout is a ruled row on a three-column grid (margin note 1fr with a 9rem floor, title 1.4fr, detail 2.4fr) with 2rem gaps and 2rem block padding. A two-column split (statement 1fr, ruled list 1.4fr) holds principle-style content, and a two-column swap table ("Today" / "Once it's built") holds before-and-after pairs.
- **Figure:** a real artifact sits on a 2.4fr / 1fr grid, the framed image beside a bottom-aligned caption with a margin note.
- **Responsive:** at 900px and below, rows, splits and figures collapse to a single column. At 768px the hero portrait hides, a 56px round avatar moves beside the status line, the swap table stacks with an italic "Once it's built:" lead-in, and scroll snapping turns off. At 480px form fields stack and the contact form drops its frame so fields use the full width. The proof strip starts inside the first 844px screen on a phone, and the page never scrolls horizontally at 390px.

## Elevation & Depth

Flat by default. Depth comes from tonal section bands and hairlines, not shadows. Only two shadows exist on the page: a faint one under the sticky header once the page scrolls, and a soft lift under project cards on hover (with a 4px upward move). The image lightbox carries its own heavier shadow because it floats over a dimmed page. Exact values are in `.impeccable/design.json`.

Motion is one quiet gesture: section content rises into place as it scrolls into view (40px, 20px on phones), driven by scroll timelines with an observer fallback, while the bands themselves stay put. Pages cross-fade on navigation. Reduced motion turns all of it off.

### Named Rules
**The Flat Ledger Rule.** Surfaces are flat at rest. A shadow appears only in response to hover or scroll.

**The Ruled Line Rule.** Group content with hairline rules and whitespace before reaching for a box. A bordered card is reserved for clickable items such as projects.

## Shapes

Barely-there corners: 3px on buttons, inputs, tags, pills, badges, focus outlines and the currency switch, and 4px on cards and framed images. The only circles are the status pulse dot and the two avatars (the mobile hero avatar and the About portrait). Borders are always 1px hairlines. The accent rule (a 2.5rem, 2px umber line) is the one heavier stroke.

## Components

### Buttons
- **Shape:** gently squared (3px).
- **Primary:** an ink fill with paper text, weight 600, 0.5rem × 1.125rem. It turns umber on hover with a 150ms color transition.
- **Secondary:** transparent with a hairline border and ink text. The border and text turn umber on hover.
- **Accent:** an umber fill, used only on the ink closing band. It deepens on hover.
- **Text link action:** an umber link ending in "→", weight 500, used for secondary calls to action inside rows and captions ("Read how it was built →", "All projects →").
- **Labels:** every booking button in the page body reads "Book a free discovery call". Only the compact header button says "Book a call".

### Chips (tags, link pills and badges)
- **Tags:** transparent with a hairline border, slate text and 3px corners. They appear only on blog posts; projects list their tools once, as a plain "Built with" line at the end of the write-up.
- **Link pills** carry a 16px stroke icon and turn umber, text and border, on hover. A plain umber text link with a download icon sits after them for the CV, so the primary button stays the only filled action.
- **Status badge:** an umber outline and umber text, xs, weight 600, used for a single state such as "Just handed over".

### Currency Switch
A two-option segmented control (₱ PHP / $ USD) beside the retainer price. It has a hairline frame, 3px corners, label type and a 44px height for thumbs. The active option takes the ink fill with paper text and `aria-pressed`, and the inactive one is slate and turns umber on hover. It stays hidden without JS, which shows USD plus a plain PHP line instead.

### Cards / Containers
- **Corner Style:** 4px.
- **Background:** paper, with a 1px hairline border and a 16:9 image area on raised paper.
- **Hover:** lifts 4px with the card shadow. The border and title turn umber.
- **Internal Padding:** 1.5rem.
- **Impact line:** an umber 0.9375rem line above the title states the result.
- **Impact panel:** a project with no cover image never fakes one. Its impact line is set in the serif headline (3xl on wide screens) on raised paper in the image slot, bottom-aligned and capped at 18ch, and the small impact line is then left out.
- **Layout:** on screens 1024px and wider, project cards sit image | text side by side, with a hairline between the panel and the text.

### Closing Band
The inverse section every marketing page ends on: an ink band (Night Band on dark) holding a centered serif H2, one sentence at 85% opacity, and the umber accent button "Book a free discovery call". It is one shared component, so the copy changes per page but the shape never does.

### Swap Table
Before-and-after pairs on a ruled two-column grid. An italic umber serif header row ("Today" / "Once it's built") sits over hairline-ruled rows. The left cell is the slate "today" problem; the right is the fix at weight 500 in ink. Each cell is capped at 46ch. Under 768px the header hides, each pair stacks, and the fix gains an italic umber "Once it's built:" lead-in, so the pairing still reads without columns.

### Proof Strip
Two ruled results under the hero, split by a vertical hairline (stacked on phones). Each result is a single link: a serif result line over a faded "who" line ending in an umber "→". On hover the result turns umber and the who line underlines. A faded credential line follows under its own hairline.

### Inputs / Fields
- **Style:** transparent with a hairline border, 3px corners and 0.625rem × 0.75rem padding.
- **Focus:** the border turns umber. Keyboard focus adds a 2px umber outline with a 2px offset.
- **Error:** Correction Red message text with a matching border. Focus moves to the first bad field, and the form keeps what was typed.
- **Form notices:** the sent and failed notices are 3px-cornered tinted boxes following the Recorded, Not Celebrated Rule.

### Navigation
- **Bar:** a solid paper top bar, sticky, with a bottom hairline and a faint shadow once scrolled.
- **Links:** slate, weight 500, 0.9375rem. A 2px umber underline draws in from the left on hover and stays on the active page.
- **Right side:** a theme toggle (a 2rem square with a hairline border) and a compact "Book a call" primary button.
- **Mobile:** links collapse into a drawer behind a hairline-bordered menu button. The drawer holds the full "Book a free discovery call" button, a WhatsApp shortcut and the theme toggle.

### Ledger Row (signature)
A ruled row on the three-column grid: an italic umber margin note ("Within 2 business days"), a title, and a slate detail column. A detail column may also hold umber-marked bullets, a price row and fine print in faded ink.

## Do's and Don'ts

### Do:
- **Do** alternate section bands (paper → raised paper → paper) and end every marketing page with the shared closing band.
- **Do** lay out lists of services, principles and steps as ruled rows (1px hairline top and bottom) with 2rem block padding.
- **Do** show a real artifact (a before/after, a screenshot of the actual system) when a section needs an image, framed with a 1px hairline and 4px corners.
- **Do** make a whole result or card the link target, not a few words inside it, with touch targets at least 44px.
- **Do** use the italic Newsreader marginal note in Ledger Umber for row context, like a ledger's margin note.
- **Do** keep the body measure at 40–65ch and secondary text in Slate Ink.
- **Do** theme browser surfaces from the palette: umber text selection, and a 2px umber focus outline with a 2px offset.

### Don't:
- **Don't** add a second accent color or gradients. Umber (brass in dark mode) is the only accent.
- **Don't** use corners rounder than 4px, pill shapes, or heavy drop shadows.
- **Don't** turn content sections into grids of same-size icon cards.
- **Don't** put eyebrow labels above headings. Context goes in the margin column.
- **Don't** set paragraphs or UI labels in the serif.
- **Don't** use green, or any color besides Correction Red, for a state. Success is recorded in umber.
- **Don't** fake a cover image for a project that has none. Use the typeset impact panel.
