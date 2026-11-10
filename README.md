# Muvbyyy Coding Studio

A responsive website for Muvbyyy Coding Studio, built with React, Vite, Tailwind CSS, and GSAP. Its animated background trails, project previews, navigation, and page-count estimate are interactive. The trails are black in light mode and lime in dark mode.

The site starts in a coordinated light theme and includes a persistent light/dark theme switch.

The full landing page remains at `/`. Separate pages are available at `/services`, `/process`, `/work`, `/pricing`, and `/contact`. They share the site's navigation, animated background, theme, and footer.
Internal navigation stays in the app, and page sections load on demand with a themed loading indicator. The animation respects reduced-motion preferences and pauses when the tab is hidden.

## Run locally

Use Node.js 20 or newer.

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

The static site is generated in `dist/`. Vercel can deploy it using the Vite framework preset, `npm run build`, and `dist` as the output directory.

Dashboard figures, project examples, testimonials, and pricing are illustrative; the site does not provide live integrations, checkout, or project-management services.
