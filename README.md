# Final Year Project Portfolio

A single-page-app style portfolio built with **Vue 3 + Vite + Tailwind CSS v4**, styled around a
deep-navy glassmorphic design system (Instrument Serif + Inter, liquid-glass surfaces, fade-rise
motion).

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Structure

```
src/
  components/
    Navbar.vue       # responsive glass navbar; collapses to a sidebar on mobile, has an "Others" dropdown
    ProjectCard.vue   # card with a live embedded iframe preview + graceful fallback
    Footer.vue
  views/
    Home.vue          # hero + featured projects
    About.vue
    Projects.vue      # full project grid with tag filters
    Journal.vue        # optional "Others" page
    Contact.vue
  data/
    projects.js       # <-- EDIT THIS to add your own project links
  router/index.js
  style.css           # design tokens, liquid-glass, animations
```

## Customize

1. **Projects** — edit `src/data/projects.js`. Each entry needs a `url`; the card embeds it
   live in an iframe. If a site blocks embedding (most do, via `X-Frame-Options`), the card
   automatically falls back to a simple placeholder after ~4 seconds so nothing looks broken.
   For a guaranteed preview, consider hosting a static screenshot instead and swapping the
   `<iframe>` in `ProjectCard.vue` for an `<img>`.
2. **Hero video** — drop an mp4 at `public/videos/hero-bg.mp4`. Until you do, the hero falls
   back to a gradient background automatically (see `src/views/Home.vue`).
3. **Name, copy, socials** — replace the `[Your Name]` placeholder in `About.vue`, the footer
   links in `Footer.vue`, and the `Contact.vue` email link.
4. **Colors/fonts** — all design tokens live at the top of `src/style.css` under `:root`.
5. **Nav links** — edit the `primaryLinks` / `moreLinks` arrays in `Navbar.vue`. Links in
   `moreLinks` render inside the "Others" dropdown on desktop and inline in the mobile sidebar.
6. **Contact form** — `Contact.vue` currently just logs the submission to the console. Wire it
   to a backend, Formspree, or EmailJS before deploying.

## Deploying

This is a static Vite build — `npm run build` outputs to `dist/`, which can be deployed to
Vercel, Netlify, GitHub Pages, or any static host. If deploying to a subpath (e.g. GitHub Pages
project sites), set `base` in `vite.config.js` accordingly.
