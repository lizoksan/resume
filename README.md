# Resume

A one-page resume built as an actual coded site instead of a PDF template — HTML/SCSS/JS, same stack as my other landing page projects.

- Live version doubles as a portfolio piece (proof of markup skills)
- "Download PDF" uses a dedicated print stylesheet (`@media print`) so the browser's own print-to-PDF produces a clean, properly paginated resume — no separate export tool needed

## Stack

HTML, SCSS (BEM, partials), vanilla JS, [Vite](https://vitejs.dev/)

## Getting started

```bash
npm install
npm run dev       # dev server
npm run build      # production build into dist/
npm run preview    # preview the production build locally
```

## Before publishing

Replace the placeholder Telegram and LinkedIn links in `src/index.html` (search for `TODO`).
