# Aditya Mittal — Developer Portfolio

Personal portfolio web application built with React 19, TypeScript, Vite, and Tailwind CSS v4. Designed for fast initial load, readable structure, and straightforward maintenance without heavy third-party UI or animation libraries.

## Architecture & Key Decisions

- **Minimal runtime footprint:** Ships only `react`, `react-dom`, and `lucide-react` at runtime. Navigation, filtering, tabs, and modal behavior use native browser APIs and React hooks rather than external router or animation dependencies.
- **Typed content layer:** Profile metadata, project entries, skill groups, and milestones are isolated in `src/data/portfolio.ts` (`Project`, `SkillGroup`, `Achievement`), decoupling content updates from UI components.
- **Interactive UI state:**
  - `src/components/Projects.tsx` filters projects by category (`All`, `Full-Stack`, `AI / ML`) and toggles per-card architecture notes.
  - `src/components/Hero.tsx` manages tabbed profile views and copies contact email via the Clipboard API with a `mailto:` fallback.
  - `src/components/ContactModal.tsx` handles form validation, `mailto:` composition, backdrop click isolation (`stopPropagation`), body scroll locking, and `Escape` key dismissal with proper cleanup.
- **Design tokens:** Palette tokens (`#FFE01B`, `#241C15`, `#FFFFFF`, `#F6F6F4`) and shared button styles live in `src/index.css` alongside Tailwind CSS v4 utilities and Google Fonts (`Fraunces` + `DM Sans`).

## Project Structure

```text
.
├── index.html                   # Entry HTML and font preconnect/stylesheet links
├── package.json                 # Scripts and minimal dependency manifest
├── tsconfig.json                # Strict TypeScript configuration for src/
├── tsconfig.node.json           # TypeScript configuration for Vite config
├── vercel.json                  # Vercel build and SPA rewrite configuration
├── vite.config.ts               # Vite + React + Tailwind v4 + "@" path alias
├── public/
│   ├── favicon.svg              # Vector monogram favicon
│   └── resume.pdf               # Static resume asset served at /resume.pdf
└── src/
    ├── main.tsx                 # React 19 root mount with StrictMode
    ├── index.css                # Tailwind import, CSS variables, base & button styles
    ├── App.tsx                  # Page layout and shared contact modal state
    ├── data/
    │   └── portfolio.ts         # Strongly typed portfolio data
    └── components/
        ├── Navbar.tsx           # Sticky navigation bar with scroll border & mobile drawer
        ├── Hero.tsx             # Split hero and tabbed developer snapshot card
        ├── Projects.tsx         # Filterable project grid with expandable architecture notes
        ├── Skills.tsx           # Filterable technical skill categories
        ├── Achievements.tsx     # Hackathons, leadership, and certification cards
        ├── About.tsx            # Education summary and engineering background
        ├── ContactModal.tsx     # Accessible modal dialog and quick-message form
        └── Footer.tsx           # Footer links, resume action, and scroll-to-top anchor
```

## Local Development

Prerequisites: Node.js 20+ and `pnpm`.

```bash
# Install dependencies
pnpm install

# Start development server (http://localhost:3000)
pnpm dev

# Run TypeScript type check
pnpm check

# Type-check and build production bundle into dist/
pnpm build

# Preview production build locally
pnpm preview

# Format codebase with Prettier
pnpm format
```

## Updating Content

- Edit `src/data/portfolio.ts` to add or modify projects, skills, achievements, or contact links.
- Replace `public/resume.pdf` to update the downloadable resume (keeps `/resume.pdf` URL unchanged).

## Deployment

Configured for static deployment via `vercel.json`:

- **Build command:** `vite build`
- **Output directory:** `dist`
- **Rewrites:** All routes fall back to `/index.html`
