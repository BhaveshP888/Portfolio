# Minimalist Developer Portfolio

A highly polished, motion-aware developer portfolio built using Next.js 16 (App Router), Tailwind CSS v4, React 19, and Motion (Framer Motion). 

Designed following modern minimalist principles, featuring custom typography, a dynamic drifting background, glassmorphic card elements, and a floating navigation dock.

## Key Features

- **Atmospheric Background**: Slow-drifting radial gradient background orbs (indigo and violet) powered by GPU-accelerated CSS animations.
- **Glassmorphic Cards**: Project cards that mirror the floating dock's look with transparent backgrounds, subtle top-edge highlights, and a soft glow on hover.
- **Symmetrical Layout**: Balanced 2-column grid layout for projects that naturally matches description text length.
- **Single Source of Truth**: All visible content (skills, projects, bio, social links) is managed in a single data file: `lib/data.ts`.
- **Sensory Hover & Click Physics**: Elements like the floating navigation dock and cards react to hover states and physical click states (`scale-[0.92]`).
- **Dark/Light Mode**: Fully functional theme toggler matching browser preference automatically.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Animation**: Motion (`motion/react`)
- **Icons**: Phosphor Icons (`@phosphor-icons/react`)
- **Theme**: Next Themes (`next-themes`)
- **Package Manager**: Bun

## Development

This project uses **Bun** as the primary package manager.

First, install the dependencies:

```bash
bun install
```

Then, run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

To customize the details (e.g. your name, projects, tech stack, social URLs), modify `lib/data.ts`:

```typescript
export const siteData = {
  name: "Bhavesh Patil",
  role: "Full-Stack Developer",
  tagline: "I build fast, modern and scalable web apps",
  email: "plbhavesh88@gmail.com",
  github: "https://github.com/BhaveshP888",
  // ...
};
```
