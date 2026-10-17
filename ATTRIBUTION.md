# Design reference & attribution

Current visual inspiration: [switberto.com](https://www.switberto.com/). Phase 1 is an independently authored React/CSS implementation informed by public screenshots and computed design measurements. No proprietary code, personal text, portraits, project images or branding from that reference is redistributed.

Historical visual/design-system inspiration: [Bryl Lim — bryllim.com](https://bryllim.com/), superseded by the owner's approved Phase 1 brief.

MIT-licensed design language: [bryllim/bryl-minimal-design](https://github.com/bryllim/bryl-minimal-design) — Copyright (c) 2026 Bryl Lim. The complete license is preserved for publication at [docs/licenses/bryl-minimal-design.LICENSE](docs/licenses/bryl-minimal-design.LICENSE). The original local skill remains under `.agents/skills/bryl-minimal-design/` and is excluded from the proposed repository.

Self-hosted Geist, Geist Mono, and Geist Pixel Square fonts are from [Vercel's official Geist 1.7.0 release](https://github.com/vercel/geist-font/releases/tag/geist%401.7.0). They are distributed under the SIL Open Font License included at `public/fonts/OFL.txt`.

The current interface uses the existing self-hosted Geist Mono font. The unused Geist and Geist Pixel Square files are preserved locally and excluded from the proposed publication inventory; the full OFL remains with the published Geist Mono font. Project SVGs are independently authored concept illustrations, explicitly labeled as such; they are not product screenshots.

Profile portrait: supplied by the owner as `Confident Monochrome Stage Portrait.png`
on 17 October 2026, copied unchanged to `public/nash-mapula-portrait.png`.
The display crop is controlled by CSS; no ownership or authorship beyond this
supplied provenance is asserted.

Gear imagery: 11 owner-supplied files in `GEARS IMAGES/`, inspected on
17 October 2026. Original files are unchanged. Copies in `public/images/gear/`
preserve dimensions and product proportions; PNGs use high-quality WebP,
and keyboard alpha is composited onto white. Product/brand rights remain with
their respective owners; supplied provenance does not establish image authorship.
The Phase 2 evidence directory contains source/output hashes and file mappings.

ShapeGrid: the owner requested the React Bits JS-CSS registry component from
https://reactbits.dev/r/ShapeGrid-JS-CSS.json on 17 October 2026. Its source and
CSS are installed in `components/react-bits/`, with the upstream MIT + Commons
Clause license and David Haz copyright in `components/react-bits/LICENSE.md`.
Use is subject to that complete license; do not redistribute the component as
a standalone/bundled component product. Local adjustments add optional-prop
typing, live reduced-motion handling, touch filtering and hidden-tab cleanup.
The registry declares no additional dependencies. The unmodified fetched JSON
and hashes are retained in the external ShapeGrid evidence directory.
