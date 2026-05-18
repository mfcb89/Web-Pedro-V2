# Assets finales generados — Pedro Gonzálvez

**Fecha:** 2026-04-29  
**Estado:** tanda de producción visual ampliada para revisar.  
**Base:** `docs/strategy/final-image-prompts-2026-04-29.md`

---

## Cobertura actual

Esta carpeta contiene la tanda principal de `final-image-prompts-2026-04-29.md`:

- hero en estados sueltos,
- lámina consistente del hero en 4 estados,
- imágenes por servicio,
- imágenes para casos/blog,
- publicaciones tipo Instagram,
- imagen provisional de Pedro basada en referencia.

Las animaciones Kling / Seedance no son imágenes locales; sus prompts están en `docs/strategy/final-image-prompts-2026-04-29.md`.

---

## Regla de continuidad

Cuando varias imágenes pertenezcan a una misma secuencia, deben generarse como una serie consistente.

Esto aplica especialmente al hero:

- mismo edificio,
- misma cámara,
- misma distancia focal,
- misma hora del día,
- misma dirección de luz,
- misma composición,
- mismos balcones/cornisas/huecos,
- solo cambia el estado: normal, envejecido, zoom o detalle.

Si una herramienta no permite mantener referencia visual entre imágenes, hay que usar una de estas vías:

- generar primero una imagen base y usarla como referencia para edición/variación,
- usar vídeo/animación desde una única imagen base,
- regenerar la serie completa hasta que se vea como el mismo edificio.

No sirve que el hero parezca una colección de edificios parecidos.

---

## Hero animado por scroll

Estas cuatro imágenes forman la secuencia inicial de la landing:

1. `images/01-hero-edificio-normal.png`  
   Estado inicial. Texto previsto: "El tiempo pasa para todos."

2. `images/02-hero-edificio-envejecido.png`  
   Primer scroll. Texto previsto: "Para los edificios también."

3. `images/03-hero-zoom-senal.png`  
   Segundo scroll. Texto previsto: "Antes de intervenir, hay que entender qué dicen las señales."

4. `images/04-hero-detalle-diagnostico.png`  
   Tercer scroll. Texto previsto: "Cada edificio cuenta su historia..."

Nota de revisión: comprobar si los estados 1 y 2 parecen suficientemente conectados entre sí. Si no, habrá que regenerarlos con un prompt más estricto de continuidad.

### Hero consistente en una sola lámina

11. `images/11-hero-secuencia-consistente-4-estados.png`  
   Lámina con cuatro estados del mismo edificio. Es la referencia preferente para continuidad del hero, porque mantiene mejor composición, huecos y fachada.

Uso recomendado: usar esta lámina como referencia para animación, recorte o regeneración controlada. Los cuatro estados sueltos pueden servir para maqueta, pero deben validarse visualmente antes de implementación.

### Hero consistente separado en 4 imágenes

Se han extraído las cuatro franjas de la lámina en:

- `images/hero-sequence-split/01-normal.png`
- `images/hero-sequence-split/02-envejecido.png`
- `images/hero-sequence-split/03-zoom-senal.png`
- `images/hero-sequence-split/04-detalle-diagnostico.png`

También hay versiones normalizadas en canvas 16:9:

- `images/hero-sequence-split/01-normal-16x9-canvas.png`
- `images/hero-sequence-split/02-envejecido-16x9-canvas.png`
- `images/hero-sequence-split/03-zoom-senal-16x9-canvas.png`
- `images/hero-sequence-split/04-detalle-diagnostico-16x9-canvas.png`

Para vídeo, conviene probar primero las versiones `*-16x9-canvas.png`, porque comparten dimensiones. Para crop web o referencia visual, usar las franjas limpias.

### Hero completo 16:9 en 4 imágenes

Nueva serie generada como imágenes completas, no franjas:

- `images/hero-sequence-full-16x9/01-edificio-normal-full.png`
- `images/hero-sequence-full-16x9/02-edificio-envejecido-full.png`
- `images/hero-sequence-full-16x9/03-zoom-senal-full.png`
- `images/hero-sequence-full-16x9/04-detalle-diagnostico-full.png`

Estas son las candidatas principales para vídeo porque todas tienen el mismo tamaño: 1672 x 941 px.

Nota de revisión: comprobar visualmente si la continuidad del edificio es suficiente. Aunque el prompt fuerza mismo edificio, una herramienta generativa puede variar detalles. Si la continuidad no convence, usar estas imágenes como referencia de dirección y generar vídeo desde una única imagen base con transformación progresiva.

### Hero controlado desde master frame

Serie corregida para producción del hero/video:

- `images/hero-sequence-controlled/00-contact-sheet-hero-controlled.png`
- `images/hero-sequence-controlled/01-normal-master.png`
- `images/hero-sequence-controlled/02-envejecido-master-edit.png`
- `images/hero-sequence-controlled/03-zoom-senal-from-aged.png`
- `images/hero-sequence-controlled/04-detalle-diagnostico-from-aged.png`

Esta es la serie preferente para el hero animado.

Motivo:

- los frames 1 y 2 mantienen la misma perspectiva, fondo, fachada, balcones, huecos, bajantes y composición;
- el frame 2 solo cambia el estado de conservación del edificio;
- los frames 3 y 4 salen como recortes 16:9 completos desde el frame 2 envejecido;
- la patología del balcón, las manchas y las grietas se mantienen en la misma zona durante el zoom.

Usar esta carpeta para pruebas en Kling / Seedance o para implementar el hero con parallax/CSS. La carpeta `hero-sequence-full-16x9` queda como referencia visual secundaria porque tiene más riesgo de inconsistencias generativas entre estados.

---

## Casos, blog y publicaciones

5. `images/05-caso-cubierta-baldosin-catalan.png`  
   Caso/blog sobre cubierta transitable con baldosín catalán.

6. `images/06-caso-edificio-caravista-80-90.png`  
   Caso/blog sobre edificio de ladrillo caravista años 80-90.

9. `images/09-caso-patio-interior.png`  
   Caso/blog sobre patio interior, humedades, ventilación o mantenimiento.

17. `images/17-caso-estructura-hormigon.png`  
   Caso/blog sobre estructura, hormigón, fisuras o reparación.

18. `images/18-caso-cubierta-plana-sumidero.png`  
   Caso/blog sobre cubierta plana, sumidero, peto o filtraciones.

19. `images/19-post-3-senales.png`  
   Publicación tipo Instagram: "3 señales que no conviene ignorar".

20. `images/20-post-antes-reparar-humedad.png`  
   Publicación tipo Instagram: "Antes de reparar una humedad".

21. `images/21-post-ite.png`  
   Publicación tipo Instagram: "Qué mira un técnico en una ITE".

23. `images/23-post-adaptar-portal.png`  
   Publicación tipo Instagram: "Adaptar un portal existente".

24. `images/24-post-caravista-juntas.png`  
   Publicación tipo Instagram: "Caravista y juntas deterioradas".

---

## Servicios

7. `images/07-servicio-portal-ascensor.png`  
   Accesibilidad / ascensores / adaptación de portal.

8. `images/08-servicio-vivienda-usada-interior.png`  
   Certificados / segunda ocupación / vivienda usada.

12. `images/12-servicio-ite-iee-edificio-comunidad.png`  
   ITE / IEE / edificio comunitario.

13. `images/13-servicio-rehabilitacion-fachada.png`  
   Rehabilitación / fachada existente.

14. `images/14-servicio-accesibilidad-barrera.png`  
   Accesibilidad / barrera arquitectónica.

15. `images/15-servicio-reformas-interior.png`  
   Reformas / interior en obra controlada.

16. `images/16-servicio-ascensores-hueco-escalera.png`  
   Ascensores / hueco de escalera o patio interior.

---

## Sobre Pedro

10. `images/10-sobre-pedro-trabajando.png`  
   Imagen provisional para sección "Sobre Pedro".

22. `images/22-sobre-pedro-referencia.png`  
   Variante generada usando `Imagenes base/Pedro_reunido.png` como referencia visual.

Nota de revisión: si se va a publicar la web, lo ideal es sustituir esta imagen por fotografía real de Pedro. Una imagen generada puede servir para maqueta, pero no debería representar a una persona real en producción sin validación explícita.

---

## Pendiente

Queda pendiente fuera de esta carpeta:

- selección/aprobación visual de cada asset,
- posible recorte de la lámina `11-hero-secuencia-consistente-4-estados.png`,
- fotografía real final de Pedro si se decide no usar imagen generada,
- generación externa de animaciones Kling / Seedance.

Animaciones pendientes:

- envejecimiento del edificio,
- zoom a señal,
- señal a diagnóstico,
- rehabilitación antes/después.
