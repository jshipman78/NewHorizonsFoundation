# Codebase Review — New Horizons Foundation Website

**Date:** February 27, 2026
**Reviewer:** Claude (automated review)
**Stack:** Next.js 16 + React 19 + TypeScript + Tailwind CSS v4 + Vercel

---

## Executive Summary

This is a well-structured nonprofit marketing website for the New Horizons Foundation (NHF). The codebase follows modern Next.js App Router conventions, uses a consistent component library, and implements solid SEO practices. The project is in an early stage (v0.1.0) with no tests, but the foundation is clean and maintainable.

**Overall Assessment: Good** — The code is clean, organized, and follows React/Next.js best practices. There are several areas for improvement, mostly around code duplication, dynamic Tailwind classes, missing tests, and a few accessibility gaps.

---

## 1. Architecture & Project Structure

### Strengths
- **Clean App Router usage:** All routes use `src/app/` with proper `page.tsx` files, `layout.tsx`, `not-found.tsx`, `sitemap.ts`, and `robots.ts`.
- **Component organization:** Logical separation into `ui/`, `layout/`, `forms/`, and `seo/` directories.
- **Barrel exports:** `index.ts` files in `components/ui`, `components/layout`, and `components/seo` for clean imports.
- **TypeScript strict mode** enabled in `tsconfig.json`.
- **Path aliases** (`@/*`) configured for clean imports.

### Issues
- **No tests at all.** No testing framework configured (no Jest, Vitest, Playwright, or Cypress). For a nonprofit site this may be acceptable short-term, but any growth will benefit from at least component smoke tests.
- **No shared page layout component.** Every page manually wraps content in `<Header />`, `<main className="flex-1">`, and `<Footer />`. This should be a layout component or nested layout in the App Router to reduce repetition.
- **`Container` component is underutilized.** It's defined but most pages use raw `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8` directly instead.
- **`PageHero` component is underutilized.** It's defined in `src/components/ui/PageHero.tsx` but no page actually uses it — every page has its own inline hero section with duplicated markup.

---

## 2. Component Quality

### Strengths
- **`Button` component** — Well-typed with discriminated union (`ButtonAsButton | ButtonAsLink`), supports multiple variants and sizes, auto-renders as `<Link>` or `<button>`.
- **`Card` component family** — Composable pattern (`Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`) provides flexibility.
- **`Section` component family** — Good abstraction for consistent section styling with background variants and container sizing.
- **`HeroSlider`** — Proper carousel with auto-play, pause-on-hover, keyboard-accessible nav arrows, and ARIA attributes (`aria-roledescription="carousel"`, `aria-label`, `aria-current`).
- **`SectionDivider`** — Clever SVG-based divider with multiple variants and color mapping.

### Issues
- **`Logo` component accepts `theme` prop but never uses it.** `LogoProps` declares `theme?: "light" | "dark"` but the implementation ignores it — the Footer passes `theme="dark"` which has no effect. (`src/components/ui/Logo.tsx:8`, `src/components/layout/Footer.tsx:36`)
- **Inline SVG icons are duplicated extensively.** The same SVG paths (heart, shield, graduation cap, people, checkmark) appear 30+ times across pages. These should be extracted into a shared icon component or icon utility.
- **`HeroSlider` has both named and default export.** Lines 29 and 177 export the same component two different ways, which is inconsistent with other components (most use only named exports).
- **`ImpactStats` has both named and default export** — same issue at lines 44 and 121.

---

## 3. SEO & Metadata

### Strengths
- **Comprehensive metadata** on every page with `title`, `description`, `openGraph`, and `alternates.canonical` where appropriate.
- **JSON-LD structured data** for Organization, Website, Services, BreadcrumbList, and Person schemas. Well-organized in `src/components/seo/JsonLd.tsx`.
- **Sitemap and robots.txt** properly generated via Next.js API.
- **Title template** (`%s | New Horizons Foundation`) configured in root layout.

### Issues
- **Hardcoded URLs in JSON-LD and breadcrumbs.** Breadcrumb schemas use `"https://newhorizonsfoundation.org"` hardcoded, while `sitemap.ts` and `robots.ts` correctly use `process.env.NEXT_PUBLIC_SITE_URL`. This inconsistency means the JSON-LD won't match the actual deployment URL if it differs.
- **`metadataBase` in root layout** uses `"https://newhorizonsfoundation.org"` (without `www`) but `.env.example` defines `NEXT_PUBLIC_SITE_URL=https://www.newhorizonsfoundation.org` (with `www`). This mismatch could cause canonical URL issues.
- **Social media links in `organizationSchema.sameAs`** appear to be placeholder URLs (e.g., `https://facebook.com/newhorizonsfoundation`) that likely don't exist yet. These should be removed until actual profiles are created, as invalid `sameAs` values hurt SEO.
- **Missing `alternates.canonical`** on several pages: about, programs index, partners, support, support/founders-circle, support/sponsorships, contact.

---

## 4. Styling & Design System

### Strengths
- **Well-defined design tokens** in `globals.css` with CSS custom properties for colors, shadows, fonts, and states.
- **Tailwind v4** with `@theme inline` block properly exposing brand colors, fonts, and shadows.
- **Consistent color palette** with tonal scales for all brand colors (horizons-green, foundation-blue, hope-gold).
- **Good typography setup** — Inter for body, Montserrat for headings, with appropriate line-heights and letter-spacing.
- **Custom focus styles** for accessibility with brand-colored outlines.

### Issues
- **Duplicate color definitions.** The same color values are defined three times: in `:root`, in `@theme inline`, and many are also hardcoded as inline styles. The `:root` and `@theme inline` blocks contain identical values — one of these is redundant.
- **Dynamic Tailwind class names in `founders-circle/page.tsx`.** Lines 148-150 use template literals for Tailwind classes: `` bg-${level.color}/10 `` and `` text-${level.color} ``. Tailwind's JIT compiler cannot detect these dynamically constructed class names, so they will **not be included in the built CSS**. These need to be refactored to use a lookup map with complete class strings.
- **Privacy and Terms pages use extensive inline styles** instead of Tailwind classes (e.g., `style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1A5336" }}`). This is inconsistent with the rest of the codebase and bypasses the design system.
- **Google Fonts loaded via `<link>` in `<head>`** — Next.js provides `next/font/google` which is more performant (eliminates flash of unstyled text, enables font subsetting, and avoids extra network requests to Google). This is the recommended approach for Next.js.

---

## 5. Accessibility

### Strengths
- **Skip link** implemented in `SkipLink.tsx` and rendered in root layout.
- **`lang="en"`** set on `<html>` element.
- **Proper form accessibility** — labels associated with inputs via `htmlFor`/`id`, `aria-required`, screen-reader-only text for required indicators.
- **ARIA attributes on interactive elements** — `aria-expanded` on menu buttons, `aria-label` on icon buttons, `aria-haspopup` on dropdown trigger.
- **Carousel ARIA** — `aria-roledescription="carousel"`, `aria-label` on slides, `aria-current` on dots.

### Issues
- **Header dropdown is hover-triggered on desktop** (`onMouseEnter`/`onMouseLeave`) which is not keyboard-accessible. Users navigating with Tab cannot trigger the programs dropdown — they'd need to click the button. The dropdown should open on Enter/Space and close on Escape.
- **Missing Escape key handler** on both the mega-menu dropdown and mobile menu. Pressing Escape should close them.
- **Mobile menu has no focus trap.** When the mobile menu is open, Tab can escape to elements behind it.
- **Hero slider navigation arrows are `hidden md:flex`** — mobile users have no way to manually navigate slides (they must wait for auto-play). The dots at the bottom are available, but prev/next arrows should be accessible on all screen sizes.
- **`<Link>` used as import in `not-found.tsx`** but the import is correct — however, the `Link` component from `next/link` is imported but doesn't have proper handling for the `aria-current` attribute for screen readers to indicate current page.

---

## 6. Performance

### Strengths
- **`priority` on logo image** for LCP optimization.
- **Preconnect hints** for Google Fonts (`fonts.googleapis.com`, `fonts.gstatic.com`).
- **No unnecessary client components.** Only `Header`, `HeroSlider`, and `ContactForm` use `"use client"` — everything else is server-rendered.

### Issues
- **Google Fonts loaded via external `<link>`** — migrating to `next/font/google` would eliminate the external request and improve CLS/LCP scores.
- **Large inline SVGs.** Many SVG icons are inlined directly in JSX across multiple files. Consider using a small icon library or SVG sprite sheet to reduce JavaScript bundle size.
- **Logo uses `priority` on every page** (it's always rendered in Header and Footer). This is correct for Header (above the fold) but unnecessary in the Footer's Logo component. The `Logo` component unconditionally sets `priority`, which could hurt performance by prioritizing off-screen images.

---

## 7. Security

### Strengths
- **No API routes with exposed secrets.** The site is mostly static with only a Formspree integration.
- **Environment variables** for sensitive endpoints, with `.env.example` documenting expected vars.
- **`.gitignore`** properly excludes `.env` files.
- **`dangerouslySetInnerHTML`** used only for JSON-LD (`JSON.stringify(schema)`) which is safe since the data is static and controlled.

### Issues
- **Contact form has no CSRF protection or rate limiting.** The form submits directly to Formspree which handles spam filtering, but there's no client-side honeypot field or reCAPTCHA. Formspree recommends adding a honeypot for spam reduction.
- **Formspree fallback URL contains placeholder** `YOUR_FORM_ID`. If `NEXT_PUBLIC_FORMSPREE_ENDPOINT` is not set, the form will POST to an invalid endpoint. This should fail more gracefully or be validated at build time.

---

## 8. Code Quality & Maintainability

### Strengths
- **Consistent code style** across all files.
- **Good use of TypeScript** with proper interfaces for all component props.
- **Discriminated union types** in Button component for type-safe link vs button usage.
- **Data-driven pages** — page content is defined as typed arrays/objects at the top of files and rendered via `.map()`, making content updates easy.

### Issues
- **Massive page duplication.** Almost every page repeats the same hero section pattern:
  ```tsx
  <section className="bg-gradient-to-r from-horizons-green to-foundation-blue text-white py-24 md:py-32">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1>...</h1>
        <p>...</p>
      </div>
    </div>
  </section>
  ```
  The existing `PageHero` component should be used for this.
- **CTA sections are copy-pasted.** Every page ends with nearly identical "gradient section with two buttons" CTA blocks. This should be a shared component.
- **Unused `index` variable** in `ProgramsPage` divisions `.map((division, index)` — `index` is declared but never used (`programs/page.tsx:139`).
- **No eslint rules for import ordering** or other code quality checks beyond the Next.js defaults.

---

## 9. Recommendations (Priority Order)

### High Priority
1. **Extract a shared page layout** — Create a layout component (or Next.js nested layout) that includes Header/Footer/main wrapper. This eliminates ~100 lines of duplication.
2. **Fix dynamic Tailwind classes** in `founders-circle/page.tsx` — The `bg-${level.color}/10` pattern will produce broken styles in production.
3. **Use the existing `PageHero` component** across all pages instead of duplicating hero sections.
4. **Fix URL inconsistency** — Align `metadataBase`, JSON-LD URLs, and `NEXT_PUBLIC_SITE_URL` to use the same canonical domain.

### Medium Priority
5. **Extract shared icon components** — Create a small icon set from the frequently-used SVGs.
6. **Extract a `CtaSection` component** from the repeated call-to-action pattern at the bottom of every page.
7. **Migrate Google Fonts to `next/font/google`** for better performance.
8. **Fix the `Logo` component** to actually use the `theme` prop, or remove it.
9. **Add keyboard support to Header dropdown** — Escape to close, proper focus management.
10. **Use Tailwind classes on Privacy/Terms pages** instead of inline styles.

### Low Priority
11. **Add basic testing** — At minimum, a build test and component rendering tests.
12. **Remove placeholder social media URLs** from JSON-LD until real profiles exist.
13. **Add `canonical` alternates** to all pages missing them.
14. **Add a honeypot field** to the contact form for spam reduction.
15. **Conditional `priority` on Logo** — Only set `priority` when the Logo is likely above the fold.
16. **Clean up dual exports** (`export function X` + `export default X`) in HeroSlider, ImpactStats, SectionDivider, Logo, PageHero, SkipLink, ContactForm.

---

## File-by-File Summary

| File | LOC | Assessment |
|------|-----|------------|
| `src/app/layout.tsx` | 95 | Good. Consider `next/font/google`. |
| `src/app/page.tsx` | 351 | Good but large. Inline SVGs add bulk. |
| `src/app/globals.css` | 213 | Good. Remove duplicate `:root` / `@theme` definitions. |
| `src/app/not-found.tsx` | 77 | Good. Clean 404 page. |
| `src/app/sitemap.ts` | 31 | Good. |
| `src/app/robots.ts` | 14 | Good. |
| `src/components/layout/Header.tsx` | 335 | Good functionality. Needs keyboard a11y fixes. |
| `src/components/layout/Footer.tsx` | 134 | Good. |
| `src/components/layout/Container.tsx` | 27 | Good but underutilized. |
| `src/components/ui/Button.tsx` | 73 | Excellent. Well-typed. |
| `src/components/ui/Card.tsx` | 99 | Good. Clean composable API. |
| `src/components/ui/Section.tsx` | 92 | Good. |
| `src/components/ui/HeroSlider.tsx` | 177 | Good. Solid carousel with a11y. |
| `src/components/ui/ImpactStats.tsx` | 121 | Good. |
| `src/components/ui/SectionDivider.tsx` | 108 | Good. Creative SVG approach. |
| `src/components/ui/Logo.tsx` | 66 | Has unused `theme` prop. |
| `src/components/ui/PageHero.tsx` | 42 | Good but completely unused. |
| `src/components/ui/SkipLink.tsx` | 12 | Good. |
| `src/components/forms/ContactForm.tsx` | 208 | Good. Proper form handling. |
| `src/components/seo/JsonLd.tsx` | 215 | Good. Comprehensive schemas. |
| `src/app/about/page.tsx` | 206 | Good. Should use PageHero. |
| `src/app/contact/page.tsx` | 211 | Good. Should use PageHero. |
| `src/app/leadership/page.tsx` | 308 | Good. Rich content, proper JSON-LD. |
| `src/app/partners/page.tsx` | 281 | Good. Should use PageHero. |
| `src/app/programs/page.tsx` | 249 | Good. `index` var unused in map. |
| `src/app/programs/mental-health/page.tsx` | 195 | Good. Has breadcrumbs + JSON-LD. |
| `src/app/programs/veterans-first-responders/page.tsx` | 242 | Good. Has breadcrumbs + JSON-LD. |
| `src/app/programs/cultural-enrichment/page.tsx` | 282 | Good. Has breadcrumbs + JSON-LD. |
| `src/app/programs/youth-leadership/page.tsx` | 252 | Good. Has breadcrumbs + JSON-LD. |
| `src/app/support/page.tsx` | 366 | Good. Pricing cards well-done. |
| `src/app/support/founders-circle/page.tsx` | 254 | **Has broken dynamic Tailwind classes.** |
| `src/app/support/sponsorships/page.tsx` | 282 | Good. |
| `src/app/privacy/page.tsx` | 165 | Uses inline styles instead of Tailwind. |
| `src/app/terms/page.tsx` | 150 | Uses inline styles instead of Tailwind. |
