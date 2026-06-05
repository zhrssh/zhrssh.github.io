# Domain Glossary

## Core Concepts

- **Content Collections**: Astro's built-in way to manage, validate, and query Markdown/MDX content files. Managed in `src/content.config.ts`.
- **MainLayout**: The primary wrapper component for all pages, providing the common HTML structure, Navbar, and Footer.
- **BaseHead**: A component used within layouts to manage SEO meta tags, Open Graph, and Twitter card metadata.
- **Site Config**: A centralized configuration object in `src/config.ts` containing site-wide metadata (social links, contact info, etc.).

## UI & Styling

- **CSS Modules**: Scoped CSS implementation where styles are written in `.module.css` files (or standard CSS files used within Astro components) to prevent global namespace collisions.
- **Theme System**: A light/dark mode implementation driven by a `[data-theme]` attribute on the `<html>` element and CSS variables. Controlled via vanilla JavaScript in `MainLayout.astro`.
- **Vanilla JS Interactivity**: Client-side logic (like the theme toggle or project filtering) is implemented using standard JavaScript within `<script>` tags in Astro components.
