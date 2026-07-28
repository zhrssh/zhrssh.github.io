# zhrssh.github.io

My personal developer portfolio website.

## 🚀 Built With
- **Framework:** [Astro](https://astro.build/)
- **Styling:** CSS Modules with CSS Variables (Light/Dark mode)
- **Content:** Astro Content Collections (Blog & Projects)
- **Deployment:** GitHub Pages

## 💻 Commands

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts local dev server |
| `npm run build` | Build production site |
| `npm run preview` | Preview production build |

---

## 🎨 Design System
This portfolio utilizes a **minimalist, typography-driven** design:
- **Fluid Typography:** Uses CSS `clamp()` for responsive text scaling.
- **Color System:** Variable-driven high-contrast neutral palette with a blue accent.
- **Layout:** Content-focused, structured with generous whitespace.

## 🎥 Video Embeds

To embed a Loom or YouTube video in a blog post or project, place its URL on a line by itself:

```md
https://www.loom.com/share/VIDEO_ID
https://www.youtube.com/watch?v=VIDEO_ID
https://youtu.be/VIDEO_ID
https://www.youtube.com/shorts/VIDEO_ID
```

Accepted YouTube URL forms: `watch?v=`, `/embed/`, `/live/`, `/shorts/`, and `youtu.be/` short links, across `youtube.com`, `www.youtube.com`, and `m.youtube.com`. YouTube embeds use `youtube-nocookie.com`. Shorts render vertically (9:16, capped width, centred); every other embed renders 16:9.

The URL is converted into a responsive, lazy-loaded player. Video URLs used in regular paragraphs remain normal links.
