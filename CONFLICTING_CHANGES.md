# NHF Website - Conflicting Change Requests

## Current Tech Stack Reference
| Component | Current | Notes |
|-----------|---------|-------|
| Framework | Next.js 16.0.10 | App Router |
| React | 19.2.1 | |
| CSS | Tailwind CSS v4 | `@tailwindcss/postcss` - no tailwind.config file (v4 uses CSS-based config) |
| Fonts | Inter (body) + Montserrat (headings) | Loaded via Google Fonts `<link>` in layout.tsx |
| CMS | Sanity (`@sanity/client` ^7.20.0) | |
| Payments | Stripe (`stripe` ^20.4.0 + `@stripe/stripe-js` ^8.8.0) | |
| Hosting | Vercel | |
| UI Library | None (custom components) | |
| Animation | CSS keyframes only | No Framer Motion, GSAP, etc. |
| Brand Colors | Horizons Green (#1A5336), Foundation Blue (#1565C0), Hope Gold (#E8A730) | Full tonal scales defined in globals.css |

---

## Conflicting Changes Log

| # | Date | Email Subject/Source | Requested Change | Conflict Type | Why It Conflicts | Resolution |
|---|------|---------------------|-----------------|---------------|-----------------|------------|
| | | | *No entries yet* | | | |

---

## Conflict Categories

- **Font Change**: Requests a font swap that would override the Inter/Montserrat system
- **Dependency Addition**: Requests adding a library that duplicates existing functionality or conflicts with the stack
- **Global Style Override**: CSS/design changes that would break the established design token system
- **Framework Conflict**: Requests something incompatible with Next.js App Router or React 19
- **Tailwind Conflict**: Requests custom CSS approaches that fight against Tailwind v4
- **Brand Identity Conflict**: Changes to colors/logo/identity that contradict the established brand system
- **Performance Concern**: Adds heavy dependencies (animation libs, UI frameworks) without clear justification
- **Hosting/Deploy Conflict**: Changes incompatible with Vercel deployment

---

## Running Tally

| Conflict Type | Count |
|---------------|-------|
| Font Change | 0 |
| Dependency Addition | 0 |
| Global Style Override | 0 |
| Framework Conflict | 0 |
| Tailwind Conflict | 0 |
| Brand Identity Conflict | 0 |
| Performance Concern | 0 |
| Hosting/Deploy Conflict | 0 |
| **TOTAL** | **0** |
