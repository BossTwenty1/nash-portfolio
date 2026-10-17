# Nash — Full-Stack Developer Portfolio

An independently implemented Next.js/React portfolio inspired by [switberto.com](https://www.switberto.com/). The approved Phase 1 redesign replaces the previous Bryl-inspired direction with warm terminal surfaces, Geist Mono, an immersive centered hero and floating navigation. Light, dark and system themes remain available.

The primary public identity is **Full-Stack Developer**. The homepage presents About, core skills and project work; factual BSIT background appears under Education on the Experience page.

## Getting started (Windows / Codex desktop)

1. Extract the zip into a new directory, such as `Documents\\nash-portfolio-starter`.
2. Open that directory as a new project in VS Code or Codex.
3. Use Node.js 24 LTS (`.nvmrc` records the tested 24.14.0 patch) and run:

   ```powershell
   npm ci
   npm run dev
   ```

4. Open `http://localhost:3000`.
5. Maintain verified content in `content/portfolio.ts`. The profile photograph, contact details, 11-item Gear inventory and two credentials are supplied; recommendations and the final résumé remain pending.

## Pages included

- `/` — hero, About, featured projects, experience and education, technical stack, gear, certifications, GitHub activity and contact
- `/projects` — GraveNav and S.A.F.E, status and contribution disclosure
- `/experience` — project/capstone contributions and factual education background, not falsely described as employment
- `/stack` — categories of technologies used
- `/gear` — 11 owner-supplied products in Computing & Peripherals, Workspace & Ergonomics, Audio, and Mobile & Everyday Carry
- `/recommendations` — temporarily hidden (404); recommendation data is retained for later
- `/certifications` — image cards for certificates and awards; entries stay unpublished until image and viewing link are supplied

## Principles

- Public identity and content belong to Nash. No Switberto or Bryl personal assets, branding or proprietary implementation is copied.
- Recommendations remain blank. Certificate/award drafts contain only owner-supplied details and remain unpublished until the original image and viewing link are supplied. The owner-supplied social profiles and professional email appear in Let's connect. Gear uses original supplied images with concise descriptions; the homepage previews three items.
- SVG project graphics are generic concept artwork, **not screenshots**.
- Work-in-progress projects are not described as fully deployed.
- Third-party logos, copy, photography, and the actual proprietary website code were not copied.
- Search indexing remains disabled until the owner explicitly approves launch. Set canonical URLs and a sitemap only after choosing the actual production origin.

## Certifications & Awards

Maintain structured entries in `content/portfolio.ts`. HTML Fundamentals/CodeCred
uses the owner-supplied Drive image directly and links to its CodeCred URL. The
3rd Place — Handiong Track award records Heroes of Innovation Challenge2026
and Team Mind Goblins; its supplied Drive image opens the event gallery folder.
No year or issuer is inferred beyond supplied fields.

Both the homepage preview and dedicated page use CertificateCard and the same
publishedCertificates filter. An entry requires image src/alt and a viewing URL
before publication. Intrinsic dimensions are optional metadata: the shared fill
image reserves a4:3 stage and uses contain without guessing image dimensions.
Record the actual image URL or public path, alt and external viewing URL. Drive images load directly
in the visitor's browser using unoptimized Next Image, without an iframe or
server image proxy. The Drive file must remain publicly accessible. No placeholder
image or guessed URL is used. Images fit a4:3 stage using contain and remain
fully visible. The whole image and View Certificate/View Award link open the
same URL in a new tab. No iframe, modal or embedded viewer is used.

## LakbayAlbay hackathon experience

The Experience timeline and homepage preview include the owner-supplied
Project Initiator & Sole Prototype Developer role for LakbayAlbay, August2026,
Team Mind Goblins, Heroes of Innovation Challenge2026 — Ibalong Festival
Hackathon. It is explicitly a hackathon prototype and carries a subtle
3rd Place · Handiong Track badge. The full page preserves all three supplied
description paragraphs. Existing GraveNav and S.A.F.E entries remain unchanged.
An optional galleryUrl renders View Event Gallery in both surfaces only when
the owner supplies the actual URL; the supplied event gallery is now linked.

## Quality checks

```powershell
npm run typecheck
npm run lint
npm run build
```

Check 360px, 390px, 768px, 1024px, and 1440px widths, keyboard navigation, mobile menu focus, reduced-motion preference, and contrast in both themes.

## Reference and acknowledgment

Switberto is the current visual reference; implementation is original. The earlier **bryl-minimal-design** MIT license is retained as historical attribution. See `ATTRIBUTION.md` for design and font provenance.

Dependencies are locked in `package-lock.json`. Typecheck, lint, parser checks and production build have been verified locally. Full interactive browser verification remains a release check; the remaining tooling advisories are described below.

The theme control offers system, light, and dark preferences and persists the selection. Geist Mono is self-hosted under `public/fonts/`; rendering does not depend on Google Fonts. The desktop dock appears at 1200px and above. Below that, a floating button opens native modal navigation with focus wrapping, Escape dismissal, focus restoration and background scroll locking. Complete hero text is present in server HTML; the Phase 3A entrance below controls its visual reveal.

Phase 1 adds no dependency or external service. Dedicated résumé and project case-study pages remain outside this phase.

Phase 2 implements only Gear & Setup. Source images in `GEARS IMAGES/` remain
untouched; optimized copies are in `public/images/gear/`. The same GearCard and
data power both the page and homepage preview. Reference labels distinguish
Apple's general manufacturer page and Lenovo's unconfirmed generation link.
Product links are informational, with no prices, affiliate links or purchases.

To preview a production build locally:

```powershell
npm run build
npm run start -- --hostname 127.0.0.1
```

Open `http://127.0.0.1:3000`. Stop the development server before building or starting production, since both use `.next/` and port 3000.

## GitHub contribution calendar

The homepage's Coding in public section replaces Recommendations in its original
position before Contact. It reads BossTwenty1's public GitHub contribution
calendar on the server, validates the daily dates/counts/intensity levels and
total, then caches the parsed result for six hours with Next.js `unstable_cache`.
The homepage also revalidates after six hours on traffic. Updates are eventual,
not immediate, and GitHub's own processing may add a delay.

No token, third-party proxy, new dependency or private repository permission is
used. The public HTML endpoint is not a versioned API: if its markup changes or
GitHub cannot be reached, an unavailable message and profile link remain. During
revalidation Next.js can continue serving the last successful cached result.
Only data visible in the public contribution calendar is represented.

The graph scrolls internally on mobile and starts at recent weeks after
hydration. One day is in the tab order; arrows inspect dates, Home/End select the
first/latest day, and each button exposes its count and full date. A persistent
text readout supports pointer, touch and keyboard inspection. No animation is
added. Recommendations is removed from desktop/mobile navigation and its route
returns 404 until re-enabled.

Parser self-check (no test dependency needed):

```powershell
$calendarCheckDir = Join-Path $env:TEMP 'nash-github-calendar-check'
node node_modules/typescript/bin/tsc lib/github-calendar.ts --outDir $calendarCheckDir --module commonjs --target ES2021 --skipLibCheck
node scripts/check-github-calendar.mjs (Join-Path $calendarCheckDir 'github-calendar.js')
```

An optional third argument to the check script accepts saved public GitHub
calendar HTML. Synthetic fixtures exist only in this check script and never
ship as portfolio activity. No credentials are required for local preview.

## Phase 3A homepage entrance

The owner corrected the hero name to **NASH MAPULA**; About and metadata
retain Nash A. Mapula. After a 300ms initial delay, the name types once from left
to right, with 170ms character spacing, an extra 300ms pause between words and
120ms blur/opacity/2px letter movement. The complete name box is reserved
throughout. A thin caret follows the prefix, holds through the word pause and
disappears at 2490ms. Badge, role, introduction, actions and Explore then enter
in sequence, settling by 3610ms. No backspacing, typing loop or extra
background motion is added.

On the homepage, the desktop navigation dock and theme controls are hidden at
the top. Scrolling beyond 24px reveals them with a 240ms fade and hides Explore;
returning to the top reverses these states. Keyboard focus immediately reveals
the controls. Reduced motion removes the fade; no-script states and other routes
show navigation immediately. The mobile menu trigger remains available.

The owner also authorized homepage section reveals: offscreen sections rise
32px and fade over 700ms, with 70ms stagger between content groups (210ms cap).
Each section runs once per mount. Already-visible content, keyboard focus,
anchor navigation, reduced motion and missing JavaScript remain immediately
readable. No service/data integration is changed. The skill marquee Pause/Resume
button is removed; hover, keyboard focus, offscreen/tab pausing and reduced
motion remain.

Owner-requested glow refinement: existing bordered cards/panels gain a soft
monochrome glow on pointer hover, with a focus equivalent on interactive cards.
The Available for Work pill has a masked 4-second orbiting border highlight.
It runs only while in view and the tab is visible; reduced motion keeps a static
border. No extra service or animation library is used.

The hero typing itself is CSS only, with no timers or animation dependency;
scroll/visibility enhancement uses the small client controller. Typing replays on a new
homepage mount or refresh and keeps its completed state across theme updates.
Reduced motion, disabled scripting and browsers without the scripting media
feature show complete static content. Keyboard focus immediately reveals delayed
actions and Explore. The name has one full accessible heading label, rather than per-letter
announcements. Verify keyboard, motion preferences and responsive behavior before release.

## React Bits ShapeGrid background

The owner requested the JS-CSS ShapeGrid component, fetched from its exact
registry JSON and rendered as a fixed viewport background across existing
routes. It replaces the static star layer without changing content or layout.
Configuration matches the supplied square/diagonal grid:40px cells, speed0.5,
line #2a2734, white hover/fill, fillOpacity0.15, zero tilt and no rainbow.
The background is aria-hidden and ignores pointer hit testing; passive window
listeners retain the supplied hover/click lighting without blocking controls.
Layer opacity is0.65 in dark and0.16 in light to keep reading contrast.

The requested shadcn command was attempted but stalled and was canceled. With
no configured components.json and no registry dependencies, the exact JSX/CSS
files were installed directly. No project packages or lockfiles changed.
See ATTRIBUTION.md and components/react-bits/LICENSE.md for provenance/license.
Local lifecycle safeguards render a static grid for reduced motion, respond
to preference changes and pause requestAnimationFrame when the tab is hidden.
Without JavaScript or a2D canvas, the warm base background remains readable.

## Production preparation (Phase 4A)

The application remains a full Next.js App Router build, with six-hour GitHub
calendar caching/revalidation and runtime image optimization. No static export,
hosting connection, Git initialization or deployment has been performed.

Use `npm ci` with the committed lockfile for reproducible installs. A narrowly
scoped npm override updates Next's PostCSS dependency to 8.5.30 while retaining
Next 15.5.28. Review/remove that override when a future compatible Next release
includes a fixed PostCSS version. The braces 3.0.3 advisory remains in development
lint tooling and needs a separate risk/compatibility review before deployment.

Gear provenance sidecars are preserved under ignored
`artifacts/asset-provenance/gear/`, rather than `public/`. Shipping images and
the original `GEARS IMAGES/` folder are unchanged. Local research, agent guidance,
verification reports, original assets and backups are excluded from publication.

Baseline headers disable MIME sniffing, restrict framing to the same origin,
reduce cross-origin referrer information and disable unused camera/microphone/
geolocation permissions. The powered-by header is disabled. No untested script
policy is imposed. Metadata includes per-page descriptions and text social cards;
no canonical URL, sitemap host or social image is invented. Indexing remains off.

Deploy as a normal Next.js application with Node 24 and `npm ci` followed by
`npm run build`. Vercel's Next.js preset manages serving; a Node web service uses
`npm run start -- --hostname 0.0.0.0 --port "$PORT"` in its Linux shell.
Confirm provider eligibility and framework/dependency support before launch.
Deployment planning and the publication allowlist remain private local documents.
