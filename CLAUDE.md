# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Repository Is

This is **not** an application codebase. It is a curated source-of-truth folder used to rebuild Pedro's website (architect/technical services) from scratch. It contains only the final approved line: brief, copy, visual direction, media and tooling. There is no `package.json`, no build, no test suite at this root.

When asked to "build the web", treat this folder as the **only** input. Do not pull from the legacy `src/`, `public/preview/`, or earlier V1/V2/V3/V3.1 proposals — those are explicitly out of scope per [README.md](README.md).

## Authoritative Sources (read these first)

1. [01-briefs-copy/final-web-brief-2026-04-29.md](01-briefs-copy/final-web-brief-2026-04-29.md) — final brief
2. [01-briefs-copy/copywriting-strategy.md](01-briefs-copy/copywriting-strategy.md) and [copywriter-pack-pedro-arquitecto-tecnico.md](01-briefs-copy/copywriter-pack-pedro-arquitecto-tecnico.md) — tone & copy
3. [02-visual-direction/web-visual-proposals-v3-2-2026-04-29/README.md](02-visual-direction/web-visual-proposals-v3-2-2026-04-29/README.md) — layout, proportions, art direction
4. [03-media/hero/README.md](03-media/hero/README.md) and [03-media/MEDIA-MANIFEST.md](03-media/MEDIA-MANIFEST.md) — final assets
5. [06-implementation-notes/implementation-roadmap.md](06-implementation-notes/implementation-roadmap.md) — site map, modules, hero spec

## Site Architecture (from roadmap)

Routes: `/`, `/servicios` + per-service pages (`informes-tecnicos`, `ite-iee`, `certificados`, `segunda-ocupacion`, `rehabilitacion`, `accesibilidad`, `reformas`, `ascensores`), `/sobre-pedro`, `/blog`, `/faq`, `/contacto`.

**Approved services** (listed above). **Do not** add "legalizaciones" as a primary service.

## Hero (non-obvious)

Direct MP4 scrubbing in the browser produced bad results. The hero must combine:
- **Loop MP4s** for steady states: `01-loop-normal`, `03-loop-aged`, `05-loop-balcony`, `07-loop-material-detail` in [03-media/hero/videos/](03-media/hero/videos/)
- **Pre-extracted JPG frame sequences** for scroll-driven transitions: `02-aging`, `04-zoom-balcony`, `06-material-detail` under [03-media/hero/frames/](03-media/hero/frames/)

If transition videos `02/04/06` are regenerated, re-run the frame extractor.

## Tooling

[05-tools/extract-hero-frames.mjs](05-tools/extract-hero-frames.mjs) extracts JPG frames from transition MP4s using `@ffmpeg-installer/ffmpeg` (fps=18, scale=1440 wide, q:v=4). It expects inputs at `public/videos/hero/*.mp4` and writes to `public/videos/hero/frames/*` — paths are relative to the **implementation project's** cwd, not this repo. Run from inside the new web project after copying the source MP4s into its `public/videos/hero/`.

## Copy & Tone Rules

- Sobrio, técnico, cercano. Trato de **usted**. Primera persona cuando aporte responsabilidad profesional.
- Avoid: "soluciones integrales", "legalizaciones" as headline service, "ponerse en regla" as central frame, sentimental hogar/familia/legado language, generic self-praise, excessive poetry.

## Prototype

A standalone scroll-driven hero prototype lives at [07-prototype/](07-prototype/) (`index.html`, `hero.css`, `hero.js`). Serve with `npx serve . -l 5173` from the repo root and open `http://localhost:5173/07-prototype/`. Asset paths are relative to that location (`../03-media/...`). The segment timeline is editable via the `SEGMENTS` array in [07-prototype/hero.js](07-prototype/hero.js).

## Working Rule

If something needed for implementation is missing here, **add it to this folder first** (in the appropriate numbered subfolder) before writing implementation code elsewhere.
