# Domain Glossary

## Core Concepts

- **Content Collections**: Astro's built-in way to manage, validate, and query Markdown/MDX content files. Managed in `src/content.config.ts`.
- **MainLayout**: The primary wrapper component for all pages, providing the common HTML structure, Navbar, and Footer.
- **BaseHead**: A component used within layouts to manage SEO meta tags, Open Graph, and Twitter card metadata.
- **Site Config**: A centralized configuration object in `src/config.ts` containing site-wide metadata (social links, contact info, experience, etc.).

## UI & Styling

- **Design System**: A minimalist, typography-driven approach prioritizing readability and accessibility.
- **Fluid Typography**: Uses CSS `clamp()` functions for responsive font scaling without media queries.
- **CSS Variables**: Global variables defined in `src/styles/global.css` handle colors, type scales, and spacing for consistent design.
- **Theme System**: A light/dark mode implementation driven by a `[data-theme]` attribute on the `<html>` element and CSS variables. Controlled via vanilla JavaScript in `MainLayout.astro`.
- **Vanilla JS Interactivity**: Client-side logic (like the theme toggle, tab switching, and project/blog filtering) is implemented using standard JavaScript within `<script>` tags.

## Business Domain

- **Agency**: The buyer — a digital marketing, creative, or web development agency (roughly 10–50 people) that hires Zherish. Owners or operations managers make the decision. _Avoid_: "client" on its own, which is ambiguous.
- **Agency client**: The agency's own customer, whose onboarding and delivery the automation handles. On the site, address the agency in the second person ("your client") so the reader isn't left wondering whose client is meant.
- **Client operations**: The work that takes a newly signed agency client through to a delivered, tracked, and reported project — onboarding, task coordination across tools, handoffs, and status reporting.
- **B2B service firm**: The wider market beyond agencies (consultancies, studios, and similar). It is secondary positioning, kept so the site can widen if validation points elsewhere.
