# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
npm run start    # Start production server
```

## What This Is

DZAMA is a marketing/showcase website for a premium Madagascan rum brand. It is a static, single-page site with no backend, no database, no auth, and no API routes. All content is hardcoded in React components.

## Architecture

- **Framework**: Next.js 15 with App Router (`/src/app`)
- **Styling**: Tailwind CSS with a custom DZAMA color palette + custom utility classes in `globals.css`
- **Fonts**: Playfair Display (headings), Great Vibes (decorative script), Montserrat (body) — loaded via Google Fonts in `layout.tsx`
- **Language**: Entire UI is French; the language switcher in the Navbar is a visual placeholder only

### Key conventions

- Path alias `@/*` maps to `./src/*`
- Almost all components are Server Components. The only `"use client"` component is `Navbar` (for mobile menu state)
- Custom Tailwind tokens: `dzama-dark`, `dzama-gold`, `dzama-cream`, `dzama-teal`
- Reusable utility classes (`.section-label`, `.section-title`, `.btn-primary`, `.btn-gold`, `.divider-gold`) are defined in `src/app/globals.css`
- Images live in `/public/images/`; use Next.js `<Image>` with `priority` on above-the-fold assets

### Page structure

`src/app/page.tsx` composes the full landing page by assembling these section components from `src/app/components/`:

`Navbar` → `Hero` → `Stats` → `Values` → `Products` → `Quote` → `Footer`

All product data, brand values, and stats are defined as plain JS objects inside their respective component files — there is no CMS or data-fetching layer.

## Git

Never add Claude as a contributor in commit messages.
