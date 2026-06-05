# Repository Context

This repository is for the `zhrssh.github.io` personal developer portfolio website.

## Developer Commands

- `npm run dev`: Starts the local development server.
- `npm run build`: Builds the production-ready static site.
- `npm run preview`: Previews the production build locally.

## Architecture & Tech Stack

- **Framework:** [Astro](https://astro.build/) (Static Site Generator)
- **Styling:** CSS Modules (scoped CSS files) with CSS Variables for theming.
- **Content:** Astro Content Collections (Markdown) for Blog and Projects.
- **Deployment:** Automated via GitHub Actions to GitHub Pages.
- **Interactivity:** Vanilla JavaScript for lightweight client-side features.

## Content Management

All content is managed via Markdown files in the following directories:
- `src/content/blog/`: Blog posts.
- `src/content/projects/`: Portfolio projects.

Each collection is schema-validated in `src/content.config.ts`.

## Workflow & Conventions

- **Theming:** Uses a `[data-theme]` attribute on the `<html>` element. Toggleable via vanilla JS in `MainLayout.astro`.
- **SEO:** Meta tags, Open Graph, and Twitter cards are managed via `src/components/BaseHead.astro`.
- **Configuration:** Site-wide metadata (links, contact info, social handles) is centralized in `src/config.ts`.
- **Images:** Use `src/assets/` for optimized images via Astro's `<Image />` component.
