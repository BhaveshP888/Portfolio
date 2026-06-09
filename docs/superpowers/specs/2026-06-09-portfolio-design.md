# Portfolio Website Design Spec

## Overview

A single-page, dark-mode personal portfolio for a fresher full-stack developer targeting
recruiters and companies hiring full-time. The site replaces the default Next.js scaffold
in an existing Next.js 16 + Tailwind v4 + TypeScript project.

The design aesthetic is **sleek dark** — minimal, modern, high contrast — with an
electric indigo (`#6366f1`) accent color and Inter typeface throughout.

---

## Tech Stack (Project)

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Package manager:** Bun

No additional runtime dependencies will be added. All animations via Tailwind + CSS.

---

## Design Tokens

| Token         | Value                        |
|---------------|------------------------------|
| Background    | `#0a0a0f`                    |
| Surface       | `#111118`                    |
| Border        | `#1e1e2e`                    |
| Text primary  | `#f0f0f5`                    |
| Text muted    | `#6b6b80`                    |
| Accent        | `#6366f1` (electric indigo)  |
| Accent hover  | `#818cf8`                    |
| Font          | Inter (Google Fonts)         |

---

## Pages & Routing

Single page — `app/page.tsx`. No sub-routes needed. All sections are anchor-linked.

---

## Sections (top → bottom)

### 1. Navbar
- Fixed top, full-width, minimal
- Logo/name on the left (text, not an image)
- Anchor links on the right: About · Skills · Projects · Contact
- Subtle blur backdrop on scroll (backdrop-filter)
- Hidden on mobile, hamburger menu optional (deprioritized)

### 2. Hero
- Full viewport height
- Centered layout
- Content:
  - Badge pill: "Available for opportunities"
  - H1: Your name (large, bold, tight tracking)
  - Subtitle: "Full-Stack Developer · MERN · Next.js"
  - Short tagline: one punchy sentence (e.g. "I build fast, scalable web apps — from database to deployment.")
  - Two CTAs: `View Projects` (indigo filled) · `GitHub` (ghost/outline)
- Subtle animated gradient orb in the background (CSS only, no JS library)

### 3. About
- Two-column layout (text left, optional photo right)
- 3–4 sentences: who you are, what you enjoy building, your approach
- No photo placeholder — text-only if no photo is provided
- Indigo accent on section heading underline

### 4. Skills / Tech Stack
- Section heading: "Tech Stack"
- Three groups displayed as labeled rows:
  - **Frontend:** HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, shadcn/ui
  - **Backend:** Node.js, Express.js, MongoDB, PostgreSQL, Prisma ORM
  - **Tools:** Docker, CI/CD, Git
- Each skill rendered as a small pill/badge with the skill name (no icons required, but icon support is a nice-to-have if SVG icons are available)

### 5. Projects
- Section heading: "Projects"
- Grid: 2 columns on desktop, 1 column on mobile
- 3–4 project cards, each containing:
  - Project title
  - Short description (2–3 sentences)
  - Tech tags (small pills, accent-colored outline)
  - Two link buttons: `Live Demo` · `GitHub` (icon + text)
- Card hover: subtle lift (translateY) + border glow in indigo
- Projects are hardcoded (no CMS). Placeholder data used during build; user replaces with real content.

### 6. Contact / Footer
- Centered, minimal
- Heading: "Let's work together" or "Get in touch"
- Email link (styled as a large text link)
- Social row: GitHub · LinkedIn (icon links)
- Copyright line at the very bottom

---

## Animations

All animations are CSS/Tailwind only — no Framer Motion or GSAP.

- **Hero orb:** CSS `@keyframes` radial gradient pulse
- **Scroll fade-in:** CSS `@keyframes` + `animation-timeline: view()` (modern CSS scroll animation) with a JS `IntersectionObserver` fallback
- **Card hover:** Tailwind `transition-transform hover:-translate-y-1` + box-shadow transition
- **Navbar:** `backdrop-blur` activates on scroll via a small `useEffect` adding a class

---

## File Structure

```
app/
  layout.tsx          ← add Inter font, meta tags, dark background
  page.tsx            ← assembles all section components
  globals.css         ← design tokens as CSS variables, base resets
components/
  Navbar.tsx
  Hero.tsx
  About.tsx
  Skills.tsx
  Projects.tsx
  Contact.tsx
public/
  (resume PDF will go here when user adds it)
```

---

## SEO

- Title: `[Your Name] — Full-Stack Developer`
- Meta description: `Full-stack developer specializing in MERN stack and Next.js. View my projects and get in touch.`
- Single `<h1>` in Hero (your name), proper heading hierarchy below
- Semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<footer>`)

---

## Out of Scope

- Blog / articles section
- GitHub stats widget
- Dark/light mode toggle (dark-only)
- CMS or database
- Authentication

---

## Open Items (user to fill in before/after build)

- [ ] Your real name
- [ ] Tagline sentence (or approve the placeholder)
- [ ] About section text (2–4 sentences)
- [ ] 3–4 project details: title, description, tech used, live URL, GitHub URL
- [ ] Email address for contact section
- [ ] LinkedIn URL
- [ ] GitHub username/URL
- [ ] Resume PDF (optional, drops into `/public`)
