# Müller Mekaniska AB — AI Agent Guide

This document is written for AI coding agents that need to work on the Müller Mekaniska AB website. It summarizes the project structure, technology stack, build process, conventions, and things to watch out for.

> **Scope note:** The actual source code lives in the `Mullersmekaniska/` directory, which is also the Git repository root. The parent `Mullers/` directory is just a workspace wrapper.

---

## Project overview

This is a static, single-page-application (SPA) corporate website for **Müller Mekaniska AB**, a Swedish precision-engineering company based in Borås. The site presents the company, its products, competencies, news, and a contact form.

- **Primary language of the UI content:** Swedish (`sv`).
- **Fallback language:** English (`en`) via `vue-i18n` (locale files exist, but the UI hard-codes Swedish; there is currently no language switcher in the header).
- **Default locale:** `sv`.
- **No backend** — the contact form posts to a third-party Formspree endpoint.
- **No runtime API or database** — shared data (products, news) lives in `src/data/`; page copy is hard-coded in the Vue components.

---

## Technology stack

| Layer | Technology | Version (from `package.json`) |
|-------|------------|-------------------------------|
| Framework | Vue 3 (Composition API + `<script setup>`) | `^3.5.40` |
| Build tool | Vite | `^8.1.5` |
| Language | TypeScript | `~6.0.0` |
| Styling | Tailwind CSS v4 (via `@tailwindcss/postcss`) | `^4.3.3` |
| Routing | Vue Router | `^5.2.0` |
| i18n | vue-i18n | `^11.4.8` |
| Type checker | vue-tsc | `^3.3.7` |
| Task runner | npm-run-all2 | `^9.0.2` |

Node engine requirement: `^22.18.0 || >=24.12.0`.

### Tailwind setup

- Tailwind CSS v4 is configured in CSS via `@theme` inside `src/styles/main.css`.
- A legacy `tailwind.config.js` still exists but is **not used by Tailwind v4**. Theme changes should be made in `src/styles/main.css`.
- Custom utility classes (e.g., `.btn-primary`, `.container-custom`, `.section-padding`) are defined in `src/styles/main.css`.

---

## Project structure

```text
Mullersmekaniska/
├── index.html                 # HTML entry point, Swedish language/SEO meta
├── package.json               # Dependencies and npm scripts
├── vite.config.ts             # Vite config, path alias, security headers
├── tsconfig.json              # Root project references
├── tsconfig.app.json          # App TypeScript config
├── tsconfig.node.json         # Node/tooling TypeScript config
├── postcss.config.js          # Tailwind v4 PostCSS plugin
├── tailwind.config.js         # Legacy Tailwind v3 config (unused)
├── env.d.ts                   # Vite client types
├── public/                    # Static assets copied as-is to dist
│   ├── favicon.ico
│   └── bilder/                # Images used in templates
├── src/
│   ├── main.ts                # App bootstrap: Vue + router + i18n + v-reveal + theme init
│   ├── App.vue                # Root layout (Header, RouterView, Footer, BackToTop)
│   ├── router/index.ts        # Route definitions, per-page meta titles, 404 catch-all
│   ├── i18n.ts                # vue-i18n setup, Swedish default
│   ├── directives/reveal.ts   # v-reveal scroll-animation directive (IntersectionObserver)
│   ├── data/                  # Shared hard-coded data
│   │   ├── products.ts        # Product catalog (type from ProductModal.vue)
│   │   └── news.ts            # News articles (full content + excerpt)
│   ├── styles/main.css        # Tailwind imports, @theme, custom utilities, reveal styles
│   ├── locales/               # Translation files
│   │   ├── sv.json
│   │   └── en.json
│   ├── components/            # Reusable UI components
│   │   ├── Header.vue         # Sticky nav, scroll state, dark/light theme toggle
│   │   ├── Footer.vue
│   │   ├── HeroSection.vue
│   │   ├── TrustSignals.vue   # Animated CountUp stats
│   │   ├── SectionHeader.vue  # Eyebrow + title + lead block
│   │   ├── PageHero.vue       # Shared subpage hero (image optional)
│   │   ├── ProductCard.vue    # Shared product card (emits select)
│   │   ├── ProductModal.vue   # Product detail modal
│   │   ├── ImageLightbox.vue  # Gallery lightbox (arrows + Escape)
│   │   ├── GallerySection.vue # Home page image mosaic
│   │   ├── LatestNews.vue     # News cards + article modal
│   │   ├── CountUp.vue        # Animated counter
│   │   └── BackToTop.vue
│   ├── views/                 # Page-level route components
│   │   ├── HomePage.vue
│   │   ├── AboutPage.vue
│   │   ├── ProductsPage.vue   # Category filter + modal
│   │   ├── CompetenciesPage.vue
│   │   ├── NewsPage.vue       # Article modals
│   │   ├── ContactPage.vue    # Formspree form, loading state, honeypot, FAQ
│   │   └── NotFoundPage.vue   # 404
│   └── bilder/                # Build-time image imports (e.g., HomePage bg)
│       ├── Bildpålokalen.jpg
│       ├── FärgOrange.jpg
│       ├── bildpåarbetare.jpg
│       ├── logomullers.jpg
│       └── precisioncnc.jpeg
└── dist/                      # Production build output
```

### Routing

Routes are defined in `src/router/index.ts`:

| Path | Name | View |
|------|------|------|
| `/` | `Home` | `HomePage.vue` |
| `/om-oss` | `About` | `AboutPage.vue` |
| `/produkter` | `Products` | `ProductsPage.vue` |
| `/kompetenser` | `Competencies` | `CompetenciesPage.vue` |
| `/nyheter` | `News` | `NewsPage.vue` |
| `/kontakt` | `Contact` | `ContactPage.vue` |
| `/:pathMatch(.*)*` | `NotFound` | `NotFoundPage.vue` |

All views are lazy-loaded. Each route carries a `meta.title` used for `document.title` via `router.afterEach`. `scrollBehavior` scrolls to the top, supports hash anchors (`/om-oss#certifieringar`), and restores saved positions.

### Interactions

- **Dark mode:** the header toggles the `.dark` class on `<html>`, persisted in `localStorage` (`theme`). Initialized in `main.ts` before mount (respects `prefers-color-scheme` when no saved preference exists).
- **`v-reveal`:** directive that fades/slides elements in on scroll. Optional value sets the transition delay in ms: `v-reveal="150"`. Respects `prefers-reduced-motion`.
- **Modals/lightbox:** lock body scroll while open and close on Escape; product/news modals and the gallery lightbox all live in `src/components/`.

---

## Build and development commands

All commands run from the `Mullersmekaniska/` directory.

```bash
# Install dependencies
npm install

# Start dev server with hot reload
npm run dev

# Production build: type-check + Vite build
npm run build

# Type-check only
npm run type-check

# Build without type-checking
npm run build-only

# Preview the production build locally
npm run preview
```

The `build` script runs `type-check` and `build-only` in parallel.

---

## Code style and conventions

### Vue / TypeScript

- Use the **Composition API** with `<script setup lang="ts">`.
- Components are functional: data is defined as local reactive arrays/objects rather than fetched from an API.
- Import order in components:
  1. Vue / router / i18n imports
  2. Local image assets (when needed)
  3. Local reactive data definitions
  4. Helper functions
- Path alias `@/` maps to `src/`.

### Styling

- Utility-first with Tailwind CSS v4.
- Custom shared utilities live in `src/styles/main.css`:
  - `.btn-primary`, `.btn-secondary`, `.btn-outline`
  - `.container-custom`
  - `.section-padding`
  - `.card-hover`
  - `.eyebrow` / `.eyebrow-centered` (section label with orange rule)
  - `.animate-fade-in`, `.animate-slide-up`, `.animate-float`
- Dark mode is implemented manually with the `.dark` class (see `@custom-variant dark` in `main.css`).
- Color tokens:
  - `--color-dark: #0a0e27`
  - `--color-metal-gray: #1a1f3a`
  - `--color-accent-orange: #e85d04`
  - `--color-accent-orange-dark: #d74d00`
- Typography: Inter, loaded from Google Fonts in `index.html` (allowed by the CSP in `vite.config.ts`).

### Naming

- Vue components: PascalCase (`Header.vue`, `ProductCategories.vue`).
- Views: suffixed with `Page.vue`.
- Image assets: mixed case with Swedish characters preserved in filenames.

### Internationalization

- Translations are centralized in `src/locales/sv.json` and `src/locales/en.json`.
- The UI hard-codes Swedish strings in components; the locale files are wired to `vue-i18n` but only partially used.
- There is currently no language switcher in the header. If you add one, prefer wiring the full UI through `$t()` instead of translating only the chrome.

---

## Testing instructions

There is **no test framework currently installed or configured**. `tsconfig.app.json` excludes `src/**/__tests__/*`, but no test files exist.

To verify changes:

1. Run `npm run build` — it must pass both `vue-tsc` type-checking and Vite bundling.
2. Run `npm run preview` and manually check affected routes.
3. Verify responsive behavior in mobile/tablet widths (the site is mobile-first and uses Tailwind breakpoints).

If you add tests, prefer the standard Vite/Vitest path and update `tsconfig.app.json` accordingly.

---

## Deployment process

The project produces a static `dist/` folder:

```bash
npm run build
```

Deploy the contents of `dist/` to any static host (e.g., Azure Static Web Apps, Netlify, Vercel, Cloudflare Pages, or an ordinary web server).

### Security headers

`vite.config.ts` already sets several security headers for the dev server and the production preview server:

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Content-Security-Policy` allowing `self`, Google Fonts (`fonts.googleapis.com` / `fonts.gstatic.com`), and `https://formspree.io` for the contact form

Ensure the production host applies equivalent headers.

---

## Security considerations

- **Untracked SSH key files:** `y` and `y.pub` in the repository root are untracked SSH key files. Unless they are intentionally required, they should be removed from the working directory and added to `.gitignore` so they are never committed.
- **Third-party form endpoint:** `ContactPage.vue` submits to `https://formspree.io/f/xwpddvqv`. Do not change this URL unless you intend to switch form backends.
- **No secrets in source code:** There are no API keys in the source, but be careful not to introduce any.
- **Static site:** There is no server-side rendering or API in this repo; all data is public and embedded in the bundle.

---

## Known issues / things to verify

- `PK168` has no real product photo; `public/bilder/produkter/PK168.svg` is a technical-drawing style placeholder. Replace it with a real photo when one is available (keep the `.svg` filename or update the references in `src/data/products.ts`).
- The UI text is Swedish-only; the `en.json` translations are not fully wired through `vue-i18n` and there is no language switcher.
- `Bildpålokalen.jpg` (440×330) and `precisioncnc.jpeg` (250×167) are low-resolution — keep them in small cards/sections rather than full-width heroes.
- The `y` / `y.pub` SSH key files (see Security considerations) are still untracked in the repo root.

---

## Useful references

- [Vite Configuration Reference](https://vite.dev/config/)
- [Vue 3 Guide](https://vuejs.org/guide/)
- [Vue Router](https://router.vuejs.org/)
- [vue-i18n](https://vue-i18n.intlify.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/docs/v4-beta)
