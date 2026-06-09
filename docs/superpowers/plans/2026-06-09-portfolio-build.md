# Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a sleek, dark-mode single-page portfolio in the existing Next.js 16 + Tailwind v4 + TypeScript project.

**Architecture:** Single scrolling page assembled in `app/page.tsx` from six focused section components. All styling via Tailwind v4 utility classes and CSS variables. No external animation libraries — CSS keyframes and Tailwind transitions only.

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Bun, Google Fonts (Inter via `next/font/google`)

---

## File Map

| Action | File | Responsibility |
|--------|------|----------------|
| Modify | `app/globals.css` | Design tokens, base reset, keyframe animations |
| Modify | `app/layout.tsx` | Inter font, metadata, dark `<html>` class |
| Modify | `app/page.tsx` | Assemble all section components |
| Create | `components/Navbar.tsx` | Fixed top nav with scroll-blur effect |
| Create | `components/Hero.tsx` | Full-viewport hero section |
| Create | `components/About.tsx` | About me text section |
| Create | `components/Skills.tsx` | Tech stack badge grid |
| Create | `components/Projects.tsx` | Project cards grid |
| Create | `components/Contact.tsx` | Contact / footer section |
| Create | `lib/data.ts` | All hardcoded content (name, skills, projects, links) |

---

## Task 1: Design Tokens & Global Styles

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Replace `app/globals.css` with design tokens and animations**

```css
@import "tailwindcss";

/* ── Design tokens ─────────────────────────────────────────── */
:root {
  --bg:          #0a0a0f;
  --surface:     #111118;
  --border:      #1e1e2e;
  --text:        #f0f0f5;
  --muted:       #6b6b80;
  --accent:      #6366f1;
  --accent-hover:#818cf8;
}

@theme inline {
  --color-bg:           var(--bg);
  --color-surface:      var(--surface);
  --color-border:       var(--border);
  --color-text:         var(--text);
  --color-muted:        var(--muted);
  --color-accent:       var(--accent);
  --color-accent-hover: var(--accent-hover);
  --font-sans:          var(--font-inter);
}

/* ── Base reset ────────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; }

html {
  scroll-behavior: smooth;
  background: var(--bg);
  color: var(--text);
}

body {
  font-family: var(--font-sans), system-ui, sans-serif;
  background: var(--bg);
  color: var(--text);
  -webkit-font-smoothing: antialiased;
}

/* ── Keyframe animations ───────────────────────────────────── */

/* Hero background orb pulse */
@keyframes orb-pulse {
  0%, 100% { transform: scale(1);   opacity: 0.15; }
  50%       { transform: scale(1.2); opacity: 0.25; }
}

/* Fade-in + slide up for sections */
@keyframes fade-up {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Staggered fade for hero text */
@keyframes fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* ── Utility classes used across components ─────────────────── */
.animate-orb {
  animation: orb-pulse 6s ease-in-out infinite;
}

.animate-fade-up {
  animation: fade-up 0.6s ease forwards;
  opacity: 0;
}

.animate-fade-in {
  animation: fade-in 0.8s ease forwards;
  opacity: 0;
}

/* Section reveal via IntersectionObserver */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

- [ ] **Step 2: Verify file saved — no build step needed yet**

---

## Task 2: Layout & Font

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Replace `app/layout.tsx`**

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Your Name — Full-Stack Developer",
  description:
    "Full-stack developer specializing in MERN stack and Next.js. View my projects and get in touch.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-bg text-text antialiased">
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/globals.css app/layout.tsx
git commit -m "style: design tokens, Inter font, base layout"
```

---

## Task 3: Content Data File

**Files:**
- Create: `lib/data.ts`

All user-facing content lives here. One file to update when the user fills in real info.

- [ ] **Step 1: Create `lib/data.ts`**

```ts
export const siteData = {
  name: "Your Name",
  role: "Full-Stack Developer",
  tagline: "I build fast, scalable web apps — from database to deployment.",
  email: "you@email.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  resumeUrl: "/resume.pdf", // drop resume.pdf into /public when ready
  availableForWork: true,

  about: `I'm a full-stack developer who loves turning ideas into production-ready products.
I work across the entire stack — from crafting clean UIs in React and Next.js to designing
robust APIs with Node.js and managing databases with PostgreSQL and MongoDB.
I care about writing maintainable code and shipping things that actually work.`,

  skills: {
    Frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "shadcn/ui"],
    Backend:  ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Prisma ORM"],
    Tools:    ["Docker", "CI/CD", "Git"],
  },

  projects: [
    {
      title: "Project One",
      description:
        "A full-stack web application that does something cool. Built with Next.js on the frontend and Node.js + PostgreSQL on the backend.",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Prisma"],
      liveUrl: "https://project-one.vercel.app",
      githubUrl: "https://github.com/yourusername/project-one",
    },
    {
      title: "Project Two",
      description:
        "A real-time application with WebSocket support. Features user authentication, live updates, and a clean dashboard.",
      tech: ["React", "Express.js", "MongoDB", "Docker"],
      liveUrl: "https://project-two.vercel.app",
      githubUrl: "https://github.com/yourusername/project-two",
    },
    {
      title: "Project Three",
      description:
        "A REST API service with full CI/CD pipeline. Containerized with Docker and deployed automatically on push to main.",
      tech: ["Node.js", "PostgreSQL", "Docker", "CI/CD"],
      liveUrl: "",
      githubUrl: "https://github.com/yourusername/project-three",
    },
    {
      title: "Project Four",
      description:
        "A MERN stack application with JWT authentication, role-based access control, and a responsive frontend.",
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      liveUrl: "https://project-four.vercel.app",
      githubUrl: "https://github.com/yourusername/project-four",
    },
  ],
};
```

- [ ] **Step 2: Commit**

```bash
git add lib/data.ts
git commit -m "feat: add site content data file"
```

---

## Task 4: Navbar Component

**Files:**
- Create: `components/Navbar.tsx`

Fixed top navbar. Adds a `backdrop-blur` class on scroll via `useEffect`.

- [ ] **Step 1: Create `components/Navbar.tsx`**

```tsx
"use client";

import { useEffect, useState } from "react";
import { siteData } from "@/lib/data";

const navLinks = [
  { label: "About",    href: "#about"    },
  { label: "Skills",   href: "#skills"   },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact"  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-text font-semibold text-lg tracking-tight hover:text-accent transition-colors"
        >
          {siteData.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </a>

        {/* Links */}
        <ul className="hidden sm:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-muted text-sm hover:text-text transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Navbar.tsx
git commit -m "feat: add Navbar component"
```

---

## Task 5: Hero Component

**Files:**
- Create: `components/Hero.tsx`

Full-viewport section with name, tagline, and CTAs. Background orb is a CSS radial gradient with `animate-orb`.

- [ ] **Step 1: Create `components/Hero.tsx`**

```tsx
import { siteData } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      {/* Background orb */}
      <div
        aria-hidden="true"
        className="animate-orb absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #6366f133 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Available badge */}
        {siteData.availableForWork && (
          <span className="animate-fade-in inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-medium mb-8"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Available for opportunities
          </span>
        )}

        {/* Name */}
        <h1
          className="animate-fade-up text-5xl sm:text-7xl font-bold tracking-tight text-text mb-4"
          style={{ animationDelay: "0.2s" }}
        >
          {siteData.name}
        </h1>

        {/* Role */}
        <p
          className="animate-fade-up text-xl sm:text-2xl text-accent font-medium mb-6"
          style={{ animationDelay: "0.35s" }}
        >
          {siteData.role}
        </p>

        {/* Tagline */}
        <p
          className="animate-fade-up text-muted text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ animationDelay: "0.5s" }}
        >
          {siteData.tagline}
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-up flex flex-col sm:flex-row gap-4 justify-center"
          style={{ animationDelay: "0.65s" }}
        >
          <a
            href="#projects"
            className="px-7 py-3 rounded-lg bg-accent text-white font-medium text-sm hover:bg-accent-hover transition-colors"
          >
            View Projects
          </a>
          <a
            href={siteData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 rounded-lg border border-border text-text font-medium text-sm hover:border-accent/50 hover:text-accent transition-colors"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Hero.tsx
git commit -m "feat: add Hero component"
```

---

## Task 6: About Component

**Files:**
- Create: `components/About.tsx`

- [ ] **Step 1: Create `components/About.tsx`**

```tsx
import { siteData } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto reveal">
        {/* Section label */}
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
          About
        </p>

        <h2 className="text-3xl sm:text-4xl font-bold text-text mb-8">
          Who I am
        </h2>

        <div className="max-w-2xl">
          {siteData.about.split("\n").filter(Boolean).map((para, i) => (
            <p key={i} className="text-muted text-base sm:text-lg leading-relaxed mb-4 last:mb-0">
              {para.trim()}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/About.tsx
git commit -m "feat: add About component"
```

---

## Task 7: Skills Component

**Files:**
- Create: `components/Skills.tsx`

- [ ] **Step 1: Create `components/Skills.tsx`**

```tsx
import { siteData } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto reveal">
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
          Skills
        </p>

        <h2 className="text-3xl sm:text-4xl font-bold text-text mb-12">
          Tech Stack
        </h2>

        <div className="space-y-8">
          {Object.entries(siteData.skills).map(([group, items]) => (
            <div key={group}>
              <p className="text-muted text-xs font-semibold uppercase tracking-widest mb-4">
                {group}
              </p>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-surface border border-border text-text text-sm font-medium hover:border-accent/50 hover:text-accent transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Skills.tsx
git commit -m "feat: add Skills component"
```

---

## Task 8: Projects Component

**Files:**
- Create: `components/Projects.tsx`

- [ ] **Step 1: Create `components/Projects.tsx`**

```tsx
import { siteData } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3 reveal">
          Work
        </p>

        <h2 className="text-3xl sm:text-4xl font-bold text-text mb-12 reveal">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {siteData.projects.map((project) => (
            <article
              key={project.title}
              className="reveal group flex flex-col p-6 rounded-xl bg-surface border border-border hover:border-accent/40 hover:-translate-y-1 transition-all duration-300"
              style={{
                boxShadow: "0 0 0 0 transparent",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 24px 0 #6366f120";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 0 0 transparent";
              }}
            >
              {/* Title */}
              <h3 className="text-text font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md border border-accent/30 text-accent text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 text-sm font-medium">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text hover:text-accent transition-colors"
                  >
                    Live Demo ↗
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-text transition-colors"
                >
                  GitHub ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Projects.tsx
git commit -m "feat: add Projects component"
```

---

## Task 9: Contact Component

**Files:**
- Create: `components/Contact.tsx`

- [ ] **Step 1: Create `components/Contact.tsx`**

```tsx
import { siteData } from "@/lib/data";

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="py-24 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto text-center reveal">
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
          Contact
        </p>

        <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
          Let&apos;s work together
        </h2>

        <p className="text-muted text-base mb-10 max-w-md mx-auto">
          I&apos;m actively looking for full-time opportunities. If you think I&apos;d be
          a good fit, I&apos;d love to hear from you.
        </p>

        {/* Email CTA */}
        <a
          href={`mailto:${siteData.email}`}
          className="inline-block text-2xl sm:text-3xl font-semibold text-text hover:text-accent transition-colors mb-12 underline underline-offset-4 decoration-accent/30 hover:decoration-accent"
        >
          {siteData.email}
        </a>

        {/* Social links */}
        <div className="flex justify-center gap-6 text-sm font-medium mb-16">
          <a
            href={siteData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-text transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href={siteData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-text transition-colors"
          >
            LinkedIn ↗
          </a>
          {siteData.resumeUrl && (
            <a
              href={siteData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-text transition-colors"
            >
              Resume ↗
            </a>
          )}
        </div>

        <p className="text-muted text-xs">
          © {year} {siteData.name}. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Contact.tsx
git commit -m "feat: add Contact component"
```

---

## Task 10: Assemble Page + Scroll Reveal

**Files:**
- Modify: `app/page.tsx`

The page assembles all components and sets up the `IntersectionObserver` for `.reveal` elements.

- [ ] **Step 1: Replace `app/page.tsx`**

```tsx
"use client";

import { useEffect } from "react";
import Navbar    from "@/components/Navbar";
import Hero      from "@/components/Hero";
import About     from "@/components/About";
import Skills    from "@/components/Skills";
import Projects  from "@/components/Projects";
import Contact   from "@/components/Contact";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
```

- [ ] **Step 2: Run dev server and visually verify all sections render**

```bash
bun run dev
```

Open `http://localhost:3000` and check:
- Navbar appears fixed, blurs on scroll
- Hero shows name, role, tagline, two buttons, orb in background
- About, Skills, Projects, Contact sections all render
- Section reveals animate as you scroll

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: assemble portfolio page with scroll reveal"
```

---

## Task 11: Final Polish & Dividers

**Files:**
- Modify: `components/About.tsx`, `components/Skills.tsx`

Add subtle horizontal dividers between sections to visually separate them.

- [ ] **Step 1: Add a divider line between sections in `globals.css`**

Append to `app/globals.css`:

```css
/* Subtle section divider */
.section-divider {
  border: none;
  border-top: 1px solid var(--border);
  max-width: 80rem;
  margin: 0 auto;
  opacity: 0.5;
}
```

- [ ] **Step 2: Add `<hr className="section-divider" />` in `app/page.tsx` between About/Skills and Skills/Projects**

In `app/page.tsx`, update the return to:

```tsx
  return (
    <main>
      <Navbar />
      <Hero />
      <hr className="section-divider" />
      <About />
      <hr className="section-divider" />
      <Skills />
      <hr className="section-divider" />
      <Projects />
      <Contact />
    </main>
  );
```

- [ ] **Step 3: Final visual check in browser — scroll through all sections**

- [ ] **Step 4: Commit**

```bash
git add app/globals.css app/page.tsx
git commit -m "style: add section dividers"
```

---

## Definition of Done

- [ ] Dev server runs without errors (`bun run dev`)
- [ ] All 6 sections render with correct content from `lib/data.ts`
- [ ] Navbar blurs on scroll
- [ ] Hero orb animation plays
- [ ] Sections fade up on scroll into view
- [ ] Project cards lift + glow on hover
- [ ] All external links open in new tab with `rel="noopener noreferrer"`
- [ ] `lib/data.ts` is the single source of truth for all content
