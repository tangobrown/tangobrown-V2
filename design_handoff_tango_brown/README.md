# Handoff: Tango Brown — Freelance Consultant Website

## Overview
A marketing website for **Tim Brown**, a freelance digital growth consultant trading as **Tango Brown** (Exeter, Devon, UK). The site presents his services (Website Builds, Hosting, SEO, AI & Automation), selected work, an about page, a contact page, and a privacy policy. Tone: confident, plain-English, no agency jargon.

The design is a single-page app with client-side "routing" (state-driven view switching). Target build: **Next.js + Tailwind CSS**, kept **lightweight** — no heavy UI libraries, minimal dependencies.

## About the Design Files
The files in `design_reference/` are a **design reference created in HTML** — a working prototype showing the intended look, layout, copy, and interactions. **They are not production code to copy directly.** The prototype uses a small in-house component runtime (`support.js`, `<x-dc>` tags, `image-slot.js`) that you should **not** port — it exists only to make the mock interactive in the design tool.

Your task: **recreate these designs in a fresh Next.js + Tailwind project** using idiomatic React components, Next's routing, and Tailwind utility classes. Use the HTML purely as the source of truth for structure, spacing, color, type, and copy.

## Fidelity
**High-fidelity.** Colors, typography, spacing, and interactions are final. Recreate the UI pixel-accurately. Exact hex values, font stacks, and sizes are documented below and visible in the reference HTML.

## Recommended Project Setup
- **Next.js** (App Router). Each "page" below becomes a real route rather than a state switch:
  - `/` → Home
  - `/services/website-builds`, `/services/website-hosting`, `/services/seo`, `/services/ai-automation` → one dynamic route `app/services/[slug]/page.tsx` driven by a `services` data file
  - `/work` → Work
  - `/about` → About
  - `/contact` → Contact
  - `/privacy` → Privacy Policy
- **Tailwind CSS** — map the design tokens below into `tailwind.config` (`theme.extend.colors`, `fontFamily`).
- **Fonts** via `next/font/google`: **Inter Tight** (headings/labels/buttons) and **Manrope** (body). *(The prototype references "Stack Sans Text" first with Manrope as fallback; Stack Sans is not a free Google font — use **Manrope** as the body face.)*
- Keep the nav mega-menu, work carousel, testimonial marquee, and FAQ accordion as small client components (`"use client"`); everything else can stay as server components.
- Images: use `next/image`. Replace the prototype's drag-and-drop `<image-slot>` placeholders with real `<Image>` elements (or a simple styled placeholder until assets arrive).

## Design Tokens

### Colors
- Ink / primary: `#131313`
- Accent (orange): `#ff751f` — used as hover fill on buttons/links via an animated background-size wipe
- Page background: `#ffffff`
- Warm off-white section bg: `#faf9f6`
- Card/panel border: `#e6e3dc`; lighter divider border: `#ececE6` (note the odd casing — it's `#ececE6`, i.e. `#ececE6` → treat as `#ECECE6`)
- Muted borders: `#d9d5cc`, input border `#e0ddd4`
- Body text muted: `#55554f`; secondary muted `#6b6b66`; faint label grey `#9a9a93`; extra-light `#b4b2aa`
- Dark-section text: heading `#ffffff`, body `#c8c6be` / `#a4a39b`, labels `#8a8a83`
- Dark-section card bg `#1d1d1b`, border `#2c2c2a`
- Selection: bg `#131313`, text `#fff`

### Typography
- **Headings / eyebrows / buttons / tags:** `Inter Tight`, usually `text-transform: uppercase`, `font-weight: 700`, tight tracking (`letter-spacing: -0.02em` to `-0.03em`).
- **Body:** `Manrope` (prototype lists `'Stack Sans Text','Manrope'`), weights 300–700.
- **Buttons** are additionally `font-style: italic` (Inter Tight italic) — a signature detail; keep it.
- Type scale (px, as used):
  - Hero H1: 60 (home/services/contact), 64 (work), 58 (about); line-height ~1.04, weight 700
  - Section H2: 45 ("What I do", "Selected work", statement); 32 on service sub-sections
  - CTA band headline: 54
  - Eyebrow label: 13, weight 700, `letter-spacing: 0.1em`, uppercase, color `#9a9a93`
  - Body lead: 18–19 / line-height 1.55–1.6
  - Body copy: 15–17
  - Card title: 20–24; card body: 13.5–16
  - Nav links: 15; nav button: 14
- Minimum body size 15px; nothing smaller than 13px except the 11–12px uppercase tag labels.

### Spacing & layout
- Content max-width: **1320px**, centered, horizontal padding **56px** (`px-14` ≈ 56px).
- Section vertical rhythm: ~88–100px top/bottom padding on major bands.
- **Border radius: 0 everywhere.** This is a hard-edged design — no rounded corners on cards, buttons, inputs, or images. The only circles are the "TB" logo badge and the carousel arrow buttons (`border-radius: 50%`).
- Borders are **2px solid** consistently (cards, dividers, inputs, nav).
- Card image aspect ratio: `1000 / 606`.

### Shadows
- Cards: `0 1px 3px rgba(0,0,0,.04)` (very subtle).
- Mega-menu dropdown: `0 20px 54px rgba(0,0,0,.12)`.
- Nav bar: sticky, `background: rgba(255,255,255,.86)` + `backdrop-filter: blur(12px)`, 2px bottom border `#ECECE6`.

## Screens / Views

### Global — Header / Nav
- Sticky top bar, full width, blurred translucent white, 2px bottom border.
- Left: circular 34px black badge with white "TB" + wordmark "Tango Brown" (Manrope 600, 16px). Clicking logo → Home.
- Center: nav links `Services` (with a caret + hover **mega-menu**), `Work`, `About`. Active link gets `#131313` color, weight 600, 1.5px black bottom-border underline.
- Right: **"Get in touch"** button — black bg, white italic Inter Tight text, arrow icon; on hover an orange (`#ff751f`) fill wipes in left→right via `background-size` transition (0%→100% over .18s). Radius 0, padding 11px 22px.
- **Mega-menu:** appears on hover over Services (with a ~160ms close delay so the pointer can travel). White panel, 2px border, 4-column grid, one cell per service: animated line-icon, uppercase Inter Tight title, one-line description. Cell hover bg `#f7f5f0`. Each cell → that service page.

### Global — Footer
- White, 2px top border. Left column: "Tim Brown", email `tim@tangobrown.com`, phone `07594 404 388`, "Exeter, Devon", plus a signature image (`sig.png`, 180px wide). Two link columns: site pages (About/Work/Contact/Privacy) and services. Bottom row: `© 2026 Tango Brown — Tim Brown` and "Digital Growth Consultant". Link hover → `#131313`.

### The signature button (used across the whole site)
Reusable primary CTA. Two variants:
- **On light bg:** black button, white text; hover wipes orange fill in.
- **On dark bg:** white button, black text; hover wipes orange fill in AND text turns white.
Implementation in the prototype: `background-color` is the base, a `linear-gradient(accent,accent)` is layered with `background-size: 0% 100%` animating to `100% 100%` on hover (`transition: background-size .18s ease`). Reproduce with a Tailwind component + `group-hover`/pseudo, or a simple absolutely-positioned overlay that scales on hover. Always: radius 0, Inter Tight italic 700, arrow icon (the "arrow-up-right" glyph).

### Home (`/`)
1. **Hero** — two-column grid (`1fr 720px`), min-height 680px. Left: eyebrow "DIGITAL GROWTH CONSULTANT", H1 "Your growth is my mission." (uppercase, 60px), lead paragraph, "Start a project" CTA. Right: **two vertical columns of project cards auto-scrolling in opposite directions** (left column drifts up, right drifts down), infinite loop, masked top & bottom with a linear-gradient fade. Cards: white, 2px border, small image (1000/606), name + uppercase tag.
   - Animations: `translateY(0)→translateY(-50%)` (up) and reverse (down), 34s linear infinite. Duplicate the card list twice for a seamless loop.
2. **About band (dark)** — full-bleed `#131313`. Two columns (`500px 1fr`): left a full-height photo, right eyebrow "About me", H2 "Hi, I'm Tim Brown.", two paragraphs, "More about me" CTA (dark-variant button). Min-height 620px.
3. **Statement** — large 45px two-tone sentence: first clause in `#131313`, remainder in `#b4b2aa`. Max-width 880px.
4. **What I do** — H2 + "All services" link (animated underline). 4-column grid of service cards: line-icon top, title + description bottom, `min-height: 300px`, 2px border, hover border → `#8f8d83`. Each → its service page.
5. **Selected work** — H2 + "View all" link + prev/next circular arrow buttons. A **horizontal carousel** showing 2 cards per view; clicking arrows slides the track (`margin-left` in −50% steps, `.55s cubic-bezier(.4,0,.2,1)`), with wrap-around by duplicating the list and snapping. Each card: image, name, tag (services joined by " · "), overview paragraph, "Visit website" link.
6. **CTA band (dark)** — "Let's grow your business online." headline (54px) + "Start a project" CTA, space-between.

### Service detail (`/services/[slug]`)
Four services share one layout, differing only in data (see **Service Data** below). Sections top→bottom:
1. **Hero** — grid (`1fr 500px`), 2px bottom border. Left: eyebrow "`NN` / 04 · Services", H1 = service title (uppercase 60px), lead paragraph, "Start a project" CTA. Right: 500px-tall service image.
2. **Centred quote** — eyebrow "In short", large blockquote (Manrope 700, 36px, line-height 1.3) in quotation marks, max-width 60%, centered.
3. **Recent examples** — H2 "Recent examples" (32px) + "View all work" link. 3-column grid of example cards: image (1000/606), name + tag, one-line description.
4. **What makes it different (bg `#faf9f6`)** — H2 + 4-column grid of cards (white, 2px border, `min-height: 210px`): 52px square icon chip (`#f2f0ea` bg), uppercase title, description.
5. **Testimonials (dark)** — `#131313` band. A large quote-mark SVG, then a **horizontal auto-scrolling marquee** of testimonial cards (each `flex: 0 0 440px`, `#1d1d1b` bg, 2px `#2c2c2a` border): 21px bold quote, author (white 15px 600), role (`#8a8a83`). Marquee `translateX(0→-50%)` 45s linear infinite; **pause on hover**. Duplicate the list for seamless loop.
6. **FAQs** — max-width 900px. H2 "Frequently asked" + accordion: each row 2px top border, uppercase Inter Tight question + a plus icon that **rotates 45° when open**; answer paragraph expands below. One open at a time.
7. **CTA band (dark)** — "Let's talk about your `<Service>` project." + "Get in touch" CTA.

### Work (`/work`)
- Header: eyebrow "Selected work", H1 "A few projects I'm proud of." (64px), lead paragraph.
- 2-column grid of project cards (image 1000/606, name, tag, one-line description). First card is Devon Joinery with a real image; the rest are placeholders in the prototype.
- CTA band (dark): "Your project could be next." + "Start a project".

### About (`/about`)
- Grid (`1.1fr .9fr`): left eyebrow "About", H1 "Hi, I'm Tim Brown." (58px), three body paragraphs; right a 520px portrait image.
- **Values row** — 2px top border, 3-column grid: "One point of contact", "Built to last", "No jargon", each with a heading + description.
- CTA band (dark): "Let's have a chat." + "Get in touch".

### Contact (`/contact`)
- Grid (`1fr 1fr`), gap 80px. Left: eyebrow "Contact", H1 "Let's start something." (60px), lead, then contact details (Email / Phone / Based in) as labeled blocks. Right: a **form card** (2px border, 36px padding): Name, Email, Service (text inputs with bottom-border-only styling, 2px `#e0ddd4`), "About your project" textarea (full 2px border), and a full-width "Send message" primary button.
- No footer CTA band on this page (form is the CTA).

### Privacy (`/privacy`)
- Max-width 820px. Eyebrow "Legal", H1 "Privacy Policy" (52px), "Last updated July 2026". Four sections (Who I am / What I collect / How I use it / Your rights), each an uppercase 22px H2 + paragraph. Copy is in the reference file — reuse verbatim.

## Interactions & Behavior
- **Routing:** in the prototype, `state.page` switches views and `window.scrollTo(0,0)` runs on nav. In Next, use real routes; keep scroll-to-top (Next does this by default on route change).
- **Mega-menu:** open on `mouseenter`, close on `mouseleave` with ~160ms delay; caret rotates 180° when open; panel fades + slides down 8px→0.
- **Work carousel:** prev/next slide the track by 50% with wrap-around (duplicate list, snap after transition). Two cards visible per viewport.
- **Testimonial marquee:** CSS keyframe translateX loop, `animation-play-state: paused` on hover.
- **FAQ accordion:** single-open; plus icon rotates 45°→"×".
- **Hover states:** button orange wipe (.18s), link underline grow (`background-size 0%→100% 2px`, .18s), service-card border darken, nav link color.
- **Marquee/scroll animations:** all pure CSS keyframes (`tbUp`, `tbDown`, `tbMarquee`) — see the `<style>` block in the reference for exact frames. Mask fades applied via `mask-image: linear-gradient(...)`.

## State Management
Minimal, all local component state:
- Mega-menu open/closed (+ close-delay timer ref).
- Work carousel index (+ wrap timer ref, animate-on/off flag).
- Open FAQ index (nullable).
No global store, no data fetching. The contact form is presentational in the mock — wire it to whatever backend/email service you prefer (e.g. a Next route handler + a transactional email API); validate name + email required, email format.

## Service Data (drives the 4 service pages)
Each service object has: `slug`, `num` ("01".."04"), `title`, `lead`, `quote`, `examples[]` (name, tag, description), `differentiators[]` (icon, title, description), `testimonials[]` (quote, author, role), `faqs[]` (q, a). **All copy is in the reference file's logic script (`serviceData()`)** — lift it verbatim rather than rewriting. Services: Website Builds (01), Website Hosting (02), SEO (03), AI & Automation (04).

The line-icons for differentiators are simple stroked SVG paths defined in the `ICONS` map in the same script (pencil, bolt, target, refresh, gauge, shield, headset, search, pin, chart, clock, link, sparkle, check) — reuse those path strings, or swap for an icon set you prefer (e.g. Lucide) matching the same concepts.

## Assets
Copied into `design_reference/`:
- `devon-joinery.png` — real screenshot of the Devon Joinery project (used in hero cards, home carousel, work grid, Website Builds examples).
- `sig.png` — Tim Brown handwritten signature (footer).
- `clients-bg.jpg` — a background texture (present in project; not currently placed in the main layout — include if you want it).
All other images are drag-and-drop placeholders in the mock (`<image-slot>`), meaning **the client will supply real project photos / portrait / service images**. Use `next/image` with a neutral placeholder box (`#ebe8e1` / `#f2f0ea` fill, 2px border, radius 0) until those arrive.

## Files
- `design_reference/Tango Brown.dc.html` — the complete site prototype (all views, copy, animations, and the `serviceData()` content). **Primary source of truth.**
- `design_reference/Tango Brown - Directions.dc.html` — earlier direction exploration (reference only).
- `design_reference/Button Hover Options.dc.html` — the button hover-wipe explorations (reference for the CTA interaction).
- `design_reference/devon-joinery.png`, `sig.png`, `clients-bg.jpg` — assets.

> Ignore `support.js`, `image-slot.js`, and the `<x-dc>` / `<helmet>` / `{{ }}` template syntax — those are the prototype runtime, not part of the design.
