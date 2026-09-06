# Portfolio

A sleek, high-precision personal developer portfolio built with **Next.js 16 (Turbopack)**, **React 19**, **Tailwind CSS v4**, and **Motion**. Designed following modern studio showcase principles — leading with full-width working software artifacts, tactile matte textures, and confident typography.

---

## ✨ Key Features

- **Studio Showcase Architecture**: Prominent full-width project showcases with 16:10 / 16:9 cinematic screenshot viewports, direct live demo and source code links, and branded tech stack trays.
- **Studio Matte & Atmospheric Lighting**: Ultra-fine SVG matte film grain overlay to eliminate color banding, paired with hardware-interpolated pointer torch lighting and slow-drifting dual-stop ambient lighting orbs.
- **Pre-Colored Brand Icons**: Official developer brand icons integrated via `devicons-react` and Phosphor Icons (`@phosphor-icons/react`).
- **Single Source of Truth**: All visible portfolio content (projects, tech stack, biography, contact information) is centrally managed in [`lib/data.ts`](lib/data.ts).
- **Responsive Floating Dock**: Adaptive navigation dock that rests centered at the bottom on mobile viewports and transitions to a right-aligned vertical dock on desktop screens.
- **Dark & Light Mode**: Fluid theme engine powered by `next-themes` with custom tokenized contrast ratios exceeding WCAG AA standards.
- **Accessible & Motion-Aware**: Native keyboard navigation with visible focus rings (`focus-visible:ring-2`) and full `prefers-reduced-motion` compliance.
- **Automated CI/CD Quality Pipeline**: GitHub Actions workflow powered by **Bun** that verifies ESLint, TypeScript compilation, and production builds on push/PRs.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation**: [Motion](https://motion.dev/) (`motion/react`)
- **Icons**: [Devicons React](https://github.com/mkabumattar/devicons-react) & [Phosphor Icons](https://phosphoricons.com/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Package Manager**: [Bun](https://bun.sh/)
- **CI/CD**: GitHub Actions (`.github/workflows/ci.yml`)

---

## 📁 Project Structure

```text
├── .github/
│   └── workflows/
│       └── ci.yml               # Automated CI/CD pipeline (Bun)
├── app/
│   ├── globals.css              # Design tokens, keyframes & matte textures
│   ├── layout.tsx               # Root layout, font definitions & metadata
│   └── page.tsx                 # Main portfolio page structure
├── components/
│   ├── Dock.tsx                 # Adaptive floating navigation dock
│   ├── Footer.tsx               # Minimalist closing section & social links
│   ├── Hero.tsx                 # Personal introduction & dual-action contact CTA
│   ├── InteractiveBackground.tsx# Studio atmospheric lighting & cursor torch
│   ├── Projects.tsx             # Full-width cinematic project showcases
│   ├── Skills.tsx               # 3-column architectural technical stack
│   ├── TechIcon.tsx             # Pre-colored brand icon mapper
│   └── ThemeProvider.tsx        # Next-themes wrapper
├── lib/
│   └── data.ts                  # Single source of truth for site content
├── public/                      # Screenshot assets & static media
├── DESIGN.md                    # Impeccable design system specification
├── PRODUCT.md                   # Product truth & target audience context
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/BhaveshP888/Portfolio.git
   cd Portfolio
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Run the development server:
   ```bash
   bun dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### 🐳 Running with Docker

You can run the entire portfolio containerized using Docker and Docker Compose.

**Using Docker Compose (Recommended):**
```bash
docker compose up -d --build
```

**Using Docker CLI:**
```bash
# Build the production image
docker build -t portfolio-app .

# Run the container
docker run -d -p 3000:3000 --name portfolio portfolio-app
```

Then navigate to [http://localhost:3000](http://localhost:3000).

---

## 📜 Available Scripts

| Script | Command | Description |
|---|---|---|
| `dev` | `bun dev` | Starts the development server with Turbopack |
| `build` | `bun run build` | Builds the optimized production application |
| `start` | `bun start` | Starts the production server |
| `lint` | `bun run lint` | Runs ESLint to check for code quality issues |
| `typecheck` | `bunx tsc --noEmit` | Validates TypeScript types across the codebase |

---

## ✏️ Customization

To personalize the portfolio with your own details, edit [`lib/data.ts`](lib/data.ts):

```typescript
export const siteData = {
  name: "Your Name",
  role: "Your Role",
  tagline: "Your value proposition statement",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  resumeUrl: "/resume.pdf",
  availableForWork: true,
  // Add your projects, skills, and about copy...
};
```

---

## 📄 License

MIT © [Bhavesh Patil](https://github.com/BhaveshP888)
