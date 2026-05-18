# Roadmap De Implementación Limpia

## Principio

La nueva web debe construirse desde cero usando esta carpeta como única fuente. La idea es evitar contaminación de prototipos anteriores, código viejo o servicios que ya no encajan.

## Arquitectura Recomendada

- `/` Landing.
- `/servicios` listado de servicios.
- `/servicios/informes-tecnicos` o `/servicios/informes`.
- `/servicios/ite-iee`.
- `/servicios/certificados`.
- `/servicios/segunda-ocupacion`.
- `/servicios/rehabilitacion`.
- `/servicios/accesibilidad`.
- `/servicios/reformas`.
- `/servicios/ascensores`.
- `/sobre-pedro`.
- `/blog`.
- `/faq`.
- `/contacto`.

## Servicios Principales

No incluir legalizaciones como servicio principal.

Servicios aprobados:

- Informes técnicos.
- ITE / IEE.
- Rehabilitación.
- Certificados.
- Segunda ocupación.
- Accesibilidad.
- Reformas.
- Ascensores.

## Hero

El hero debe usar:

- Loops MP4:
  - `03-media/hero/videos/01-loop-normal.mp4`
  - `03-media/hero/videos/03-loop-aged.mp4`
  - `03-media/hero/videos/05-loop-balcony.mp4`
  - `03-media/hero/videos/07-loop-material-detail.mp4`

- Transiciones por frames:
  - `03-media/hero/frames/02-aging/`
  - `03-media/hero/frames/04-zoom-balcony/`
  - `03-media/hero/frames/06-material-detail/`

Motivo: el scrub directo de MP4 en navegador dio mal resultado. Las transiciones deben avanzar por imágenes ya extraídas.

## Módulos Mínimos De Landing

El header (pastilla fija con logo, navegación y CTA) está siempre presente. No figura en la secuencia numerada porque es navegación persistente, no un bloque de scroll.

Orden definitivo de bloques (2026-04-30):

1. Hero scroll-driven (loops + frames, según especificación en §Hero).
2. Texto marco:
   “Cada edificio plantea una situación distinta: patologías visibles, nuevas exigencias normativas o cambios de uso que requieren adaptación. Mi trabajo como técnico consiste en analizar cada caso, valorar su alcance y definir la actuación adecuada.”
3. Presentación breve de Pedro: foto, tres o cuatro líneas (qué hace, desde cuándo, enfoque), CTA discreto a /sobre-pedro. No duplicar contenido con la página extendida.
4. Servicios: bloque por las tres situaciones (patologías visibles, exigencias normativas, adaptación al uso actual), con enlace a las páginas de servicio.
5. Casos / publicaciones.
6. FAQ con sección propia y aire suficiente.
7. Contacto fuerte.

> **Nota sobre la presentación de Pedro en home:** el bloque del módulo 3 es un resumen corto —foto, tres o cuatro líneas y CTA— y no debe duplicar lo que se desarrolla en `/sobre-pedro`. La versión extendida (trayectoria, formación, enfoque, casos personales, cara visible grande) vive íntegramente en esa página.

## Media

Usar primero los assets de `03-media/`.

Si se regeneran vídeos `02`, `04` o `06`, ejecutar el extractor de frames equivalente al de `05-tools/extract-hero-frames.mjs`.

## Copy

El tono debe seguir:

- sobrio,
- técnico,
- cercano,
- primera persona cuando aporte responsabilidad profesional,
- trato de usted,
- sin poesía excesiva,
- sin autoelogio genérico.

Evitar:

- “soluciones integrales”,
- “legalizaciones” como servicio principal,
- “ponerse en regla” como fórmula central,
- lenguaje sentimental de hogar/familia/legado.
