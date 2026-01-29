# Responsive Design Guide

This document summarizes **where** responsive changes were made and **what** to do for remaining pages. Use breakpoints: **480px** (small phones), **768px** (tablets), **1024px** (small desktops). Tailwind `sm` = 640px, `md` = 768px, `lg` = 1024px.

---

## Changes already made

### 1. **Navigation** (`src/components/Navigation/`)
- **What:** Mobile hamburger menu; desktop links hidden below `md`; menu closes on route change.
- **Where:** `Navigation.tsx`, `Navigation.css`
- **Details:** Hamburger (FaBars/FaTimes) toggles a fixed dropdown. Uses `nav-links`, `nav-menu-btn`, `mobile-menu` plus Tailwind `hidden md:flex`, `md:hidden`. Mobile menu `top` tuned in `Navigation.css`.

### 2. **Global layout** (`src/index.css`)
- **What:** Responsive overrides for shared utilities.
- **Where:** Inside `@media (max-width: 768px)` and `@media (max-width: 480px)`.
- **Details:**
  - `global-padding`: 110px → 24px (768px) → 16px (480px). Affects About, Technology, Services, Products, Careers, Privacy, Terms, Refund, Shipping, and several sections.
  - `global-hero`: min-height 800px → 100vh (768px).
  - `component-hero`: min-height 600px → 50vh (768px).

### 3. **Hero** (`src/components/Hero/`)
- **What:** Responsive hero titles, inner padding, and background attachment.
- **Where:** `Hero.tsx` (added `hero-inner`, `hero-title-main`), `Hero.css`.
- **Details:**
  - `hero-inner`: padding 36px → 20px (768px) → 16px (576px); `background-attachment: scroll` on mobile (avoids `bg-fixed` issues).
  - `hero-title-main`: 63px → 40px (768px) → 28px (576px) → 24px (480px). All hero titles use this.

### 4. **Contact** (`src/pages/contact/`)
- **What:** Single-column layout on mobile; responsive form; spacing.
- **Where:** `Contact.tsx`
- **Details:** Main grid `grid-cols-1 md:grid-cols-2`; form rows `grid-cols-1 md:grid-cols-2`; `px-4 md:px-[36px]`; `gap-8 md:gap-[60px]`; container `min-h` and `py` adjusted for mobile.

### 5. **Footer** (`src/components/Footer/`)
- **What:** Responsive CTA title, padding, button layout, and copyright/links row.
- **Where:** `Footer.tsx`
- **Details:** “Ready to build…” `text-[28px] sm:text-[36px] md:text-[52px]`; `pt`/`px`/`pb` with `md:` variants; CTA buttons `flex-col sm:flex-row`; bottom row `flex-col sm:flex-row`, links `flex-wrap justify-center sm:justify-end`. `footer-grid` already responsive in `index.css`.

### 6. **About** (`src/pages/about/`)
- **What:** Responsive headings and company grid.
- **Where:** `About.tsx`
- **Details:** Large headings `text-[28px] sm:text-[40px] md:text-[51px]`; company info `grid-cols-1 md:grid-cols-2`. `grid-3` (team) uses existing `index.css` breakpoints.

---

## Where to make further changes

Apply the same patterns (responsive type, grids, padding) to these files:

| File | What to change |
|------|----------------|
| **`Technology.tsx`** | `text-[51px]` → `text-[28px] sm:text-[40px] md:text-[51px]`; `text-[40px]` → `text-[24px] md:text-[40px]`. Add `grid-cols-1 md:grid-cols-2` (or similar) for any 2‑col grids. |
| **`Services.tsx`** | Same as Technology for `text-[51px]` and `text-[40px]` headings. |
| **`Products.tsx`** | `text-[51px]` and `text-[40px]` responsive; ensure product grids use `grid-cols-1 md:grid-cols-2` (or existing `grid-*` classes that already break at 768px). |
| **`Careers.tsx`** | `text-[51px]` → responsive scale. Job cards already use `job-card-header` / `job-apply-btn` etc. from `index.css`. |
| **`ProductsSection.tsx`** | `text-[51px]` → `text-[28px] sm:text-[40px] md:text-[51px]`. |
| **`ServicesSection.tsx`** | Same for `text-[51px]`; `min-h-[600px]` could use `min-h-[400px] md:min-h-[600px]` if needed. |
| **`TestimonialsSection.tsx`** | `text-[51px]` responsive; `text-[60px]` quote size → e.g. `text-[32px] md:text-[60px]`; `min-h-[600px]` similar to above. |
| **`ImpactSection.tsx`** | `grid-cols-4` → `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`; `text-[42px]` → responsive; `p-[60px]` → `p-6 md:p-[60px]`. |
| **`CTASection.tsx`** | `text-[51px]` responsive; `min-h-[600px]` and padding as above. |
| **`BenefitsSection.tsx`** | `text-[51px]` responsive. `benefits-grid` already handled in `index.css`. |

---

## Global patterns (reference)

- **Large headings (51px, 63px):**  
  `text-[28px] sm:text-[40px] md:text-[51px]` or `md:text-[63px]` as appropriate.
- **Grids:**  
  `grid-cols-1 md:grid-cols-2` or `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` instead of fixed `grid-cols-2` / `grid-cols-4`.
- **Padding:**  
  `px-4 md:px-[36px]`, `p-6 md:p-10`, etc. Match existing `global-padding` breakpoints where relevant.
- **Min heights:**  
  `min-h-[400px] md:min-h-[600px]` so sections don’t force huge height on small screens.
- **Backgrounds:**  
  Prefer `background-attachment: scroll` on small viewports (see `hero-inner` in `Hero.css`).

---

## Breakpoints and utilities

- **`index.css`:** `480px`, `768px`, `1024px` for `.grid-*`, `.section-padding`, `.footer-grid`, `.global-padding`, etc.
- **Tailwind:** Use `sm:`, `md:`, `lg:` for component-level overrides.
- **Hero / layout:** `Hero.css` uses `576px` and `480px` for `hero-inner` and `hero-title-main`.

---

## Quick checklist for new or updated pages

1. Use `global-width` and `global-padding` (or equivalent) so layout respects existing responsive rules.
2. Avoid fixed large font sizes; use responsive `text-*` or utility classes.
3. Use `grid-cols-1 md:grid-cols-2` (or similar) for multi-column layouts.
4. Use responsive padding (`px-4 md:px-6`, etc.) instead of large fixed `px-[36px]` on small screens.
5. Test at **375px**, **768px**, and **1280px** widths.
