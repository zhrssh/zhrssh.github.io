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

- **Client**: The business that hires Zherish to build an internal system. _Avoid_: customer, agency, agency client.
- **Internal system**: Software used only by the client's own team to run the business, such as a workflow automation, internal dashboard, admin panel, intake tool, or document processor. Customer-facing websites, public chatbots, and mobile apps are not internal systems. _Avoid_: automation (too narrow), app, solution.
- **Real project**: A system built for and used by an actual client. Demos, personal tools, and academic work are not real projects and don't appear as portfolio work. _Avoid_: demo, case study (for anything that isn't a real project).

### Engagement

The stages a client goes through, in order:

- **Discovery call**: A free first call to learn the client's needs and decide honestly whether a custom internal system is warranted at all. If an off-the-shelf tool fits, Zherish says so.
- **Proposal**: A written scope and project fee, sent within two business days of the discovery call. The project fee is never published on the site.
- **Agreement**: The signed contract that follows an accepted proposal.
- **Onboarding**: Gathering the access, accounts, and context needed to start building.
- **Build**: Building and testing the internal system.
- **Handover**: Delivery of the finished system with user documentation, technical documentation, and a short training session. The client owns everything, running in the client's own accounts.
- **Support month**: The free first month after handover, covering fixes to anything that doesn't work as agreed, plus questions and retraining. New features are change requests. _Avoid_: warranty, free support (as a noun).
- **Retainer**: An optional monthly plan after the support month, covering monitoring, fixes, and a fixed number of hours of small changes. Priced per client region. _Avoid_: maintenance plan, subscription.
- **Change request**: Any new feature or behavior beyond what the agreement covers.
- **Client region**: Local (the Philippines, priced in PHP) or foreign (everywhere else, priced in USD).
