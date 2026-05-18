# Prototipo del hero — V0

Prototipo autocontenido del hero scroll-driven. Sirve para validar la mecánica antes de montar el proyecto Next.js definitivo.

## Cómo verlo

Hay que servirlo por HTTP (no `file://`) para que el navegador permita autoplay y la carga de assets relativos.

```bash
# desde la raíz del repo Web_PedroAT-v2
npx serve . -l 5173
# luego abrir http://localhost:5173/07-prototype/
```

O cualquier servidor estático equivalente (`python -m http.server`, etc.).

## Qué hace

- Header en pastilla flotante con logo y navegación.
- Hero con `position: sticky` que ocupa **5 viewports** de scroll.
- 4 vídeos en loop superpuestos (`01`, `03`, `05`, `07`) con `object-fit: cover`.
- 3 transiciones scrub por secuencias JPG ya extraídas:
  - `02-aging` (181 frames)
  - `04-zoom-balcony` (91 frames)
  - `06-material-detail` (91 frames)
- Las transiciones se dibujan en `<canvas>`. El frame se calcula a partir del progreso de scroll dentro de cada segmento.
- Crossfade implícito: entre cambios de fase el canvas se mantiene a opacity 1 mientras el siguiente loop entra en los últimos %.
- Pre-carga de frames en dos pasadas: primero 1 de cada 6 más el último (vista esqueleto rápida), luego el resto en `requestIdleCallback`.
- Indicador de fase a la derecha y eyebrow contextual a la izquierda que cambia con el segmento.
- Sección "marco" debajo del hero con el texto de posicionamiento aprobado.

## Línea de tiempo del scroll

| Progreso | Fase            |
|----------|-----------------|
| 0–10%    | Loop normal     |
| 10–30%   | Trans aging     |
| 30–40%   | Loop aged       |
| 40–55%   | Trans zoom      |
| 55–65%   | Loop balcony    |
| 65–85%   | Trans material  |
| 85–100%  | Loop detail     |

Editable en `SEGMENTS` dentro de [hero.js](hero.js).

## Notas técnicas

- Si los MP4 de transición se reemplazan, hay que volver a extraer frames. El script original está en [../05-tools/extract-hero-frames.mjs](../05-tools/extract-hero-frames.mjs); apunta a rutas `public/videos/hero/...` del proyecto destino, no a este repo.
- La altura del hero (`500vh` en CSS) controla cuán "lento" es el scrub. Subirla suaviza, bajarla acelera.
- Tipografías serif y sans usadas como fallback de sistema. El proyecto definitivo deberá cargar las fuentes reales (GT Sectra / Source Serif + Inter o equivalentes).
- Paleta extraída por aproximación de los mockups V3.2 (fondo cálido editorial). Validar contra los PNG de [../02-visual-direction/](../02-visual-direction/).

## Pendiente para la versión definitiva

- Reemplazo de tipografías por las fuentes finales una vez decididas.
- Carga responsive de frames (servir versión más pequeña en móvil).
- Posters de fallback por fase usando los PNG de `03-media/images-final/` para conexiones lentas o `prefers-reduced-motion`.
- Migración a Next.js / framework con CSS modules o tokens del design system.
