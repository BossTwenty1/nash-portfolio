# Nash Mapula · Developer Portfolio

My personal portfolio as a Full-Stack Developer and fourth-year BS Information Technology student. It brings together my project work, technical skills, experience, certifications, and résumé in a responsive Next.js application.

**[View live portfolio](https://nashmapula.vercel.app/)** · [Projects](https://nashmapula.vercel.app/projects) · [Résumé](https://nashmapula.vercel.app/resume.pdf) · [LinkedIn](https://www.linkedin.com/in/nash-mapula-a54034444/)

## Highlights

- **Project case studies** — GraveNav, S.A.F.E, and TILEMATCH, with project context, contributions, technologies, and current status.
- **Experience and credentials** — academic and collaborative work, verified credential links, and a downloadable résumé.
- **Responsive navigation** — a desktop dock and mobile menu with keyboard navigation and focus management.
- **Light, dark, and system themes** — a persistent theme preference and self-hosted Geist Mono typography.
- **Motion with accessibility in mind** — a typing entrance, section reveals, and an interactive grid background with reduced-motion support.
- **GitHub activity** — a server-rendered contribution calendar with keyboard controls, six-hour caching, and an unavailable state when GitHub cannot be reached.

## Built with

| Area | Technology |
| --- | --- |
| Application | Next.js 16 App Router, React, TypeScript |
| Styling | Custom CSS, responsive layouts, CSS animations |
| Icons and background | Lucide React, React Bits ShapeGrid |
| Quality checks | TypeScript, ESLint, contribution-calendar parser checks |
| Runtime and hosting | Node.js 24, Vercel |

The portfolio uses public GitHub contribution data without an API token. No environment variables or database setup are required to run it locally.

## Run locally

**Prerequisites:** Node.js 24.x and npm. The tested Node patch is recorded in [.nvmrc](.nvmrc).

```bash
git clone https://github.com/BossTwenty1/nash-portfolio.git
cd nash-portfolio
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000).

To preview a production build, stop the development server first, then run:

```bash
npm run build
npm start
```

## Project structure

```text
app/                    Routes, metadata, styles, and application layout
components/             Page sections, navigation, themes, and project cards
content/portfolio.ts    Profile, projects, experience, skills, and credentials
lib/                    GitHub calendar parsing, data fetching, and metadata
public/                 Portrait, résumé, project images, gear images, and fonts
scripts/                Contribution-calendar regression checks
docs/licenses/          Required third-party license notices
```

The public routes are `/`, `/projects`, `/projects/[slug]`, `/experience`, `/stack`, `/gear`, and `/certifications`. The recommendations route is reserved and currently returns 404.

## Validation

```bash
npm run typecheck
npm run lint
npm run build
```

The contribution-calendar parser also has a dependency-free regression check. In PowerShell:

```powershell
$calendarCheckDir = Join-Path $env:TEMP 'nash-github-calendar-check'
node node_modules/typescript/bin/tsc lib/github-calendar.ts --outDir $calendarCheckDir --module commonjs --target ES2021 --skipLibCheck
node scripts/check-github-calendar.mjs (Join-Path $calendarCheckDir 'github-calendar.js')
```

For interface changes, check mobile and desktop layouts, keyboard navigation, light/dark themes, and reduced-motion behavior.

## Content and maintenance

Edit [content/portfolio.ts](content/portfolio.ts) to update the portfolio's shared content. Keep project statuses and individual contributions accurate. Replace `public/resume.pdf` when publishing a revised résumé; certificate entries need an image and a viewing or verification link.

Deployment uses Vercel's Next.js preset with Node.js 24, `npm ci`, and `npm run build`. Next.js development and production builds currently use Webpack. Search indexing remains disabled in [app/layout.tsx](app/layout.tsx).

ESLint 9 is retained because the current lint plugins do not support ESLint 10 throughout their published peer ranges. Framework and development-tooling updates are maintained separately from content changes.

## Credits and asset rights

Third-party notices and asset provenance are documented in [ATTRIBUTION.md](ATTRIBUTION.md), including the font license, React Bits component license, and design-language license. Those licenses remain with their respective files.

This repository is available for reviewing my work. No repository-wide reuse license is granted. Personal photographs, résumé, credentials, and project imagery are not offered as reusable portfolio assets.

## Contact

[Nash A. Mapula on LinkedIn](https://www.linkedin.com/in/nash-mapula-a54034444/) · [nashmapula.dev@gmail.com](mailto:nashmapula.dev@gmail.com)
