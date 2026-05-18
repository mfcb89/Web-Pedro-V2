# Prompts para Kling / Seedance 2.0 — Hero animado

**Fecha:** 2026-04-29  
**Assets base:** `docs/strategy/final-assets-2026-04-29/images/hero-sequence-controlled/`  
**Objetivo:** generar el vídeo del hero inicial con continuidad visual y sin barras ni elementos de interfaz visibles.

---

## Imágenes de referencia

Usar estas cuatro imágenes como referencia/frames:

1. `01-normal-master.png`
2. `02-envejecido-master-edit.png`
3. `03-zoom-senal-from-aged.png`
4. `04-detalle-diagnostico-from-aged.png`

Formato:

- 16:9.
- 1672 x 941 px.
- Sin texto.
- Sin personas.
- Sin coches.

---

## Prompt general de estilo

Usar en todos los tramos:

```text
Photorealistic architectural editorial video, Mediterranean residential building in Elche/Alicante, warm natural daylight, sober technical mood, realistic plaster, iron balconies, roller shutters, humidity traces and fine cracks. Smooth scroll-driven website hero feeling. No text overlays, no progress bars, no interface elements, no people, no cars, no dramatic disaster, no luxury real estate style, no medical imagery. Camera movement must be slow, stable and architectural.
```

Negative prompt:

```text
No text, no labels, no UI, no progress bar, no arrows, no people, no vehicles, no collapse, no fire, no extreme mold, no horror, no sci-fi HUD, no glowing lines, no shaking camera, no fisheye distortion, no luxury real estate gloss, no cartoon look.
```

---

## Tramo 1 — Normal a envejecido

**Input recomendado:**  
Start frame: `01-normal-master.png`  
End frame: `02-envejecido-master-edit.png`

Duración:

- 5-7 segundos.

Prompt:

```text
The camera remains almost fixed on the same Mediterranean residential facade. Over the shot, time subtly affects the building: the plaster loses freshness, fine cracks appear, humidity traces and rainwater marks emerge near balconies and the drainpipe, and cornice edges show natural wear. Keep the facade geometry, balconies, shutters, drainpipe and camera angle consistent. The building remains dignified and safe, not abandoned or ruined. Smooth architectural scroll animation, warm daylight, photorealistic.
```

Uso en web:

- Texto inicial: "El tiempo pasa para todos."
- Texto tras scroll: "Para los edificios también."

---

## Tramo 2 — Envejecido a zoom de señal

**Input recomendado:**  
Start frame: `02-envejecido-master-edit.png`  
End frame: `03-zoom-senal-from-aged.png`

Duración:

- 5-6 segundos.

Prompt:

```text
Start from the aged facade and slowly push in toward the right-center balcony and drainpipe area. The motion should feel like a controlled architectural inspection zoom. The final frame focuses on a fine crack, humidity trace and worn plaster near the balcony edge. Preserve the same building identity, warm daylight, facade color, balcony geometry and material texture. No interface, no labels, no dramatic damage.
```

Uso en web:

- Texto: "Antes de intervenir, hay que entender qué dicen las señales."

---

## Tramo 3 — Zoom de señal a detalle diagnóstico

**Input recomendado:**  
Start frame: `03-zoom-senal-from-aged.png`  
End frame: `04-detalle-diagnostico-from-aged.png`

Duración:

- 4-6 segundos.

Prompt:

```text
Continue the slow inspection movement from the cracked balcony/facade area into a closer diagnostic material detail. The camera should reveal worn plaster, fine crack, humidity trace and a small exposed construction layer. The transition feels analytical through focus, light and material texture only. No labels, no sci-fi overlay, no glowing technical marks, no text. Keep the same warm daylight and Mediterranean material palette.
```

Uso en web:

- Texto: "Cada edificio cuenta su historia en materiales, usos, reformas y señales."

---

## Tramo Completo — Una sola generación

Si Kling / Seedance permite usar múltiples referencias o keyframes, usar las 4 imágenes como keyframes en este orden:

1. `01-normal-master.png`
2. `02-envejecido-master-edit.png`
3. `03-zoom-senal-from-aged.png`
4. `04-detalle-diagnostico-from-aged.png`

Duración:

- 12-16 segundos.

Prompt:

```text
Create a smooth scroll-driven hero video for an architecture technical website. Begin with a maintained Mediterranean residential building facade. As time passes, the same facade subtly ages: plaster fades, fine cracks and humidity traces appear. Then the camera slowly zooms toward a specific signal near a balcony and drainpipe. Finally, the shot becomes a close diagnostic material detail showing the crack, humidity trace, worn plaster and exposed construction layer. Keep the same building identity, facade geometry, warm daylight and sober editorial style throughout. No text, no UI, no progress bars, no people, no cars, no dramatic ruin.
```

Negative prompt:

```text
Do not change the building into a different facade. Do not change balcony shapes, window positions, facade color, drainpipe location or daylight direction. No labels, no text overlays, no interface elements, no disaster, no collapse, no extreme mold, no people, no vehicles.
```

---

## Recomendación de producción

Primero probar con tres vídeos cortos:

1. Normal a envejecido.
2. Envejecido a zoom.
3. Zoom a diagnóstico.

Si los tres funcionan, se pueden unir en web o en edición. Si la herramienta pierde continuidad en el tramo completo, usar tramos cortos con keyframes separados.
