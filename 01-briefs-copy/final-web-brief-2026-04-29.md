# Brief final web — Pedro Gonzálvez

**Fecha:** 2026-04-29  
**Estado:** V3.2 aprobada como dirección visual base  
**Referencia visual aprobada:** `docs/strategy/web-visual-proposals-v3-2-2026-04-29/README.md`  
**Objetivo:** convertir la dirección visual aprobada en una guía de producción para copy, imágenes, animaciones y programación.

---

## 1. Dirección aprobada

La web se construye sobre la línea **Editorial Técnico Mediterráneo** de la V3.2:

- fondo cálido editorial,
- tipografía sobria con aire,
- imágenes mediterráneas reales o generadas con textura local,
- header integrado en pastilla/barra,
- servicios organizados por situaciones del edificio,
- FAQ y contacto con peso propio,
- blog/casos/publicaciones como contenido vivo,
- animación inicial por scroll en el hero.

La web no debe parecer una plantilla SaaS ni una web inmobiliaria. Debe sentirse como una web de arquitecto técnico con criterio, oficio y cercanía.

---

## 2. Copy base aprobado

Texto de posicionamiento:

> Cada edificio plantea una situación distinta: patologías visibles, nuevas exigencias normativas o cambios de uso que requieren adaptación. Mi trabajo como técnico consiste en analizar cada caso, valorar su alcance y definir la actuación adecuada.

Tratamiento:

- Se mantiene la **primera persona** cuando aporte responsabilidad profesional.
- Se habla de **usted**.
- Evitar tono poético excesivo.
- Evitar autoelogio tipo "soy serio", "soy muy riguroso", "trabajo rápido".

---

## 3. Arquitectura del sitio

### Páginas principales

- `/` — Landing / Home.
- `/servicios` — Listado de servicios.
- `/servicios/informes-tecnicos` — Informes técnicos y patologías.
- `/servicios/ite-iee` — ITE / IEE.
- `/servicios/certificados` — Certificados.
- `/servicios/segunda-ocupacion` — Segunda ocupación.
- `/servicios/rehabilitacion` — Rehabilitación.
- `/servicios/accesibilidad` — Accesibilidad.
- `/servicios/reformas` — Reformas.
- `/servicios/ascensores` — Ascensores.
- `/sobre-pedro` — Sobre Pedro.
- `/blog` o `/casos-publicaciones` — Blog, casos y publicaciones.
- `/faq` — Preguntas frecuentes.
- `/contacto` — Contacto.

### Servicios

Rehabilitación debe aparecer como servicio dentro de `/servicios`, al mismo nivel que informes técnicos, ITE/IEE o certificados.

La estructura de servicios no debe esconder rehabilitación como una sección secundaria. Debe ser una entrada clara y navegable:

- Informes técnicos.
- ITE / IEE.
- Rehabilitación.
- Certificados.
- Segunda ocupación.
- Accesibilidad.
- Reformas.
- Ascensores.

Legalizaciones no aparece como servicio principal.

---

## 4. Naming: Blog, Casos Y Publicaciones

La sección no debe llamarse "Caos". El nombre debe resolver tres tipos de contenido:

1. Casos reales.
2. Artículos / notas técnicas.
3. Publicaciones tipo Instagram.

Opciones de naming:

- **Blog** — claro, común, SEO-friendly.
- **Casos y publicaciones** — más descriptivo.
- **Notas técnicas** — más profesional, menos comercial.
- **Casos, notas y publicaciones** — más completo.

Recomendación:

> **Blog**

Dentro del blog se pueden usar categorías:

- Casos reales.
- Notas técnicas.
- Publicaciones.
- Antes / después.
- Patologías.
- Rehabilitación.
- Accesibilidad.
- ITE / IEE.

Razón: "Blog" es más reconocible en navegación, permite SEO y no limita el contenido. En la página se puede titular:

> Casos, notas y publicaciones técnicas.

Así el menú queda simple y la página explica mejor el contenido.

---

## 5. Landing: estructura final

### 5.1 Header

Header integrado en una sola barra/pastilla:

- logo dentro de la barra,
- navegación,
- CTA.

No usar logo suelto separado arriba.

Items:

- Servicios.
- Blog.
- Sobre Pedro.
- FAQ.
- Contacto.

CTA:

- Cuénteme su caso.

### 5.2 Hero animado por scroll

El hero inicial es la pieza principal de la web.

Debe funcionar como una secuencia de scroll, no como una imagen estática:

#### Estado 1 — Edificio normal

Visual:

- edificio mediterráneo en buen estado,
- sobrio, realista,
- sin señales graves,
- imagen amplia, estable.

Texto:

> El tiempo pasa para todos.

#### Estado 2 — Edificio envejecido

Trigger:

- primer scroll.

Visual:

- el mismo edificio envejece,
- aparecen desgaste, manchas, fisuras sutiles, pérdida de color,
- no debe parecer ruina ni emergencia.

Texto:

> Para los edificios también.

#### Estado 3 — Zoom a detalle

Trigger:

- segundo scroll.

Visual:

- la cámara hace zoom a una zona del edificio,
- aparece una señal: humedad, fisura, encuentro constructivo, borde de balcón, peto o fachada.

Texto:

> Antes de intervenir, hay que entender qué dicen las señales.

#### Estado 4 — Detalle diagnóstico

Trigger:

- tercer scroll.

Visual:

- detalle técnico de patología,
- se puede usar overlay sutil, líneas finas o foco material,
- sin estética médica ni sci-fi.

Texto:

> Cada edificio cuenta su historia en materiales, usos, reformas y señales. Mi trabajo consiste en analizar el caso, valorar su alcance y definir la actuación adecuada.

### 5.3 Servicios

Sección con tres rutas visuales:

1. Patologías visibles.
2. Exigencias normativas.
3. Adaptación al uso actual.

Debe parecer más visual y moderna que una tabla, pero mantener claridad.

### 5.4 Blog / Casos / Publicaciones

Bloque de contenido vivo:

- entradas de blog,
- casos reales,
- publicaciones tipo Instagram.

Debe mostrar variedad de imágenes:

- cubierta de baldosín catalán,
- edificio de caravista años 80-90,
- portal con ascensor,
- patio interior,
- cubierta plana,
- detalle de humedad,
- interior de vivienda,
- acceso con barrera arquitectónica.

### 5.5 Sobre Pedro

> **Actualización 2026-04-30:** el bloque "Sobre Pedro" en la home ha sido reubicado en posición 3 (antes de Servicios) y reducido a resumen corto —foto, tres o cuatro líneas y CTA a /sobre-pedro—. La sección extendida permanece en `/sobre-pedro`. El orden vigente de bloques de la home está en `06-implementation-notes/implementation-roadmap.md`.

Debe mostrar a Pedro trabajando y con la cara visible.

No basta con manos o herramientas.

### 5.6 FAQ

FAQ con sección propia, aire suficiente y lectura cómoda.

No pegada al contacto.

### 5.7 Contacto

Contacto con bloque fuerte:

- datos directos,
- formulario,
- zona de actuación,
- microcopy de respuesta.

Headline:

> Cuénteme en qué momento está su edificio.

---

## 6. Sistema visual de imágenes

### Landing

La landing puede usar un edificio protagonista estable para la secuencia de hero.

Estados necesarios:

1. Edificio normal.
2. Edificio envejecido.
3. Zoom a señal.
4. Detalle diagnóstico.

### Servicios / Blog / Subpáginas

Fuera del hero, no repetir siempre el mismo edificio.

Necesitamos variedad local:

- cubierta transitable de baldosín catalán típica de Elche/Alicante,
- edificio de ladrillo caravista de los años 80-90,
- edificio enfoscado sencillo,
- portal comunitario con escalera o ascensor,
- patio interior,
- cubierta plana con sumidero/peto,
- detalle de hormigón o estructura,
- vivienda usada,
- acceso con rampa o barrera arquitectónica.

---

## 7. Animación del hero

Implementación deseada:

- scroll-driven animation,
- parallax de capas,
- transición entre imágenes del mismo edificio,
- zoom progresivo al detalle,
- cambio de textos en posiciones fijas,
- sin barras visibles,
- sin indicadores de progreso,
- sin "etapas" escritas en pantalla.

Tecnologías posibles:

- CSS scroll-timeline si se decide usar APIs modernas con fallback.
- Framer Motion / GSAP si se prioriza control.
- CSS keyframes + IntersectionObserver si se busca algo más ligero.

La experiencia debe sentirse suave, pero no pesada.

---

## 8. Próximo paso

Crear un documento de prompts finales:

`docs/strategy/final-image-prompts-2026-04-29.md`

Debe incluir:

- prompts para imágenes estáticas,
- prompts para variantes del hero,
- prompts para animaciones Kling / Seedance,
- prompts para imágenes de blog/publicaciones,
- reglas de consistencia visual.

