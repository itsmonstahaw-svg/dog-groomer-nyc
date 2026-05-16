# GHL AI Studio — Site Template

Reusable React/Vite template with shadcn/ui, SSG prerendering, and Netlify deployment.
Every new client site needs only ~8 custom files changed.

## What changes per site

| File | What to update |
|------|---------------|
| `index.html` | `<title>` and `<meta name="description">` |
| `prerender.js` | `routes` array (add any extra pages) |
| `public/sitemap.xml` | Domain URL and page list |
| `public/robots.txt` | Sitemap URL |
| `src/pages/Index.tsx` | Assemble custom components |
| `src/App.tsx` | Add routes if multi-page |
| `src/components/` | Paste the 8 custom components from GHL |
| `public/favicon.svg` | Replace with client's brand icon |

## Custom components to copy from GHL

- `Hero.tsx`
- `Navbar.tsx`
- `Services.tsx`
- `Footer.tsx`
- `About.tsx`
- `Reviews.tsx`
- `Gallery.tsx`
- `CTA.tsx` / `Process.tsx` / `QuoteForm.tsx` (site-specific)

## Commands

```bash
# Install dependencies
npm install   # or: bun install

# Dev server
npm run dev

# Production build (includes SSG prerender)
npm run build

# Preview production build
npm run preview
```

## How the SSG works

`npm run build` runs three steps:
1. `vite build` — builds the client bundle to `dist/client/`
2. `vite build --ssr` — builds the server-side render entry to `dist/server/`
3. `node prerender.js` — renders each route to a static HTML file

Netlify serves `dist/client/` — every page has real HTML visible to Google.

## Netlify deploy settings

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Publish directory | `dist/client` |

These are already set in `netlify.toml` — no manual config needed.
