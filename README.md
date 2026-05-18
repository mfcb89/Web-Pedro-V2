# Web-v2

**Fecha de creación:** 2026-04-30  
**Objetivo:** carpeta limpia para rehacer la web desde cero sin arrastrar decisiones, componentes o pruebas antiguas.

Esta carpeta reúne solo la línea final aprobada: brief, copy, dirección visual, media final y herramientas necesarias para reconstruir la web.

## Estructura

- `01-briefs-copy/`  
  Documentos de estrategia, copywriting y pack de copy. Es la fuente de tono, mensajes y estructura verbal.

- `02-visual-direction/`  
  Propuesta visual final V3.2. Usar como referencia de layout, proporciones, módulos y dirección de arte.

- `03-media/`  
  Assets visuales finales: vídeos del hero, frames para scroll, stills, logos, retrato de Pedro e imágenes generadas.

- `04-prompts/`  
  Prompts finales para imágenes y vídeos. Sirven para regenerar assets con continuidad.

- `05-tools/`  
  Herramientas auxiliares. Incluye el extractor de frames del hero.

- `06-implementation-notes/`  
  Notas prácticas para construir la nueva web sin depender del código actual.

## Regla De Uso

Para la nueva adaptación, partir de esta carpeta y no del estado actual de `src/`, `public/preview/` o propuestas intermedias.

Si falta algo, añadirlo aquí explícitamente antes de implementarlo.

## Fuentes Principales

1. `01-briefs-copy/final-web-brief-2026-04-29.md`
2. `01-briefs-copy/copywriting-strategy.md`
3. `01-briefs-copy/copywriter-pack-pedro-arquitecto-tecnico.md`
4. `02-visual-direction/web-visual-proposals-v3-2-2026-04-29/README.md`
5. `03-media/hero/README.md`

## No Usar Como Fuente Directa

- `public/preview/` fuera de los assets copiados aquí.
- Propuestas V1, V2, V3 o V3.1 salvo que el brief final las cite como antecedente.
- Código actual de la home si se quiere empezar de cero.
- Servicios antiguos que incluyan legalizaciones como servicio principal.
