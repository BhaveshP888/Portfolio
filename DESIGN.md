# Design System

<!-- impeccable:design-schema 1 -->

## Direction & Aesthetic World
- **Direction:** Studio Showcase
- **Mode:** Experience / Persuade
- **Philosophy:** Lead with prominent, full-width project artifacts and verified software. Restrained luxury with high typography contrast, deep obsidian ground, and subtle ambient studio lighting.

## Color Tokens
- **Background (`--bg`):** `#08080a` (Dark) / `#ffffff` (Light)
- **Surface (`--surface`):** `#101014` (Dark) / `#f6f6f8` (Light)
- **Surface Hover (`--surface-hover`):** `#16161c` (Dark) / `#ececf0` (Light)
- **Border (`--border-color`):** `rgba(255, 255, 255, 0.08)` (Dark) / `rgba(0, 0, 0, 0.08)` (Light)
- **Border Hover (`--border-hover`):** `rgba(255, 255, 255, 0.18)` (Dark) / `rgba(0, 0, 0, 0.16)` (Light)
- **Text Primary (`--text`):** `#f4f4f6` (Dark) / `#09090b` (Light)
- **Text Muted (`--muted`):** `#8e8e9c` (Dark) / `#52525b` (Light)
- **Accent (`--accent`):** `#10b981` (Emerald)

## Typography
- **Display Font:** `Syne` (`font-display`) — geometric character, tight tracking (`tracking-tight`), crisp hierarchy.
- **Body Font:** `DM Sans` (`font-body`) — high legibility, clean neutral proportions.
- **Mono:** System Monospace — used strictly for category tags, tech metadata, and timestamps.

## Layout & Spatial Rhythm
- **Page Container:** `max-w-[880px]` with `px-6 sm:px-10` padding.
- **Section Spacing:** Generous whitespace (`py-16 sm:py-24`), allowing full-width showcases to breathe.
- **Project Cards:** Full-width studio showcase artifacts with 16:10 / 16:9 cinematic screenshot frames, high-contrast action pills (`Live Demo ↗`, `Source ↗`), and framed brand icon trays.
- **Skills Grid:** 3-column architectural layout without generic card fluff.

## Interaction & Motion
- **Physics:** Spring-based micro-interactions (`type: "spring", stiffness: 100, damping: 20`).
- **Tactile Feedback:** Active scale `active:scale-[0.98]` on buttons and `active:scale-[0.92]` on dock items.
- **Accessibility:** Full `prefers-reduced-motion` compliance.
