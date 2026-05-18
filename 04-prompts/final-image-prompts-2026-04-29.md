# Prompts finales de imagen y animación — Pedro Gonzálvez

**Fecha:** 2026-04-29  
**Relacionado con:** `docs/strategy/final-web-brief-2026-04-29.md`  
**Objetivo:** definir prompts de producción para generar imágenes estables, coherentes y útiles para la web aprobada.

---

## 1. Reglas generales de imagen

Todas las imágenes deben seguir estas reglas:

- Arquitectura mediterránea realista de Elche, Alicante y provincia.
- Luz natural cálida, sin dramatismo.
- Texturas materiales: enfoscado, ladrillo, hormigón, piedra, cerámica, hierro, baldosín catalán.
- Tono técnico, sobrio y profesional.
- No usar estética inmobiliaria de lujo.
- No usar ruina, desastre, edificios colapsados ni moho extremo.
- No usar familia, hogar emocional, niños, recuerdos ni sentimentalismo.
- No usar simbología médica.
- No usar texto dentro de la imagen salvo que se pida explícitamente.
- No usar marcas de agua.

Estilo base:

```text
Photorealistic architectural editorial photography, Mediterranean Spain, Elche and Alicante atmosphere, warm natural daylight, tactile construction materials, sober technical mood, premium but grounded, no luxury real estate look, no people unless explicitly requested, no text, no watermark.
```

---

## 2. Hero animado por scroll

La secuencia del hero necesita cuatro estados visuales del mismo edificio o de un edificio muy consistente.

### 2.0 Regla estricta de continuidad para hero

Para los cuatro estados del hero no sirven franjas estrechas ni edificios parecidos. Cada imagen debe ser una imagen completa 16:9 del mismo edificio, con:

- misma cámara,
- mismo encuadre,
- misma luz,
- mismos balcones,
- mismos huecos,
- misma fachada,
- mismo punto de vista,
- misma zona de aire para texto.

Si se usa IA generativa sin control por imagen de referencia, generar una lámina o serie puede no ser suficiente. La vía preferente para producción es:

1. Generar o elegir una imagen base.
2. Crear las variantes mediante edición o image-to-image usando esa base.
3. Usar esas variantes como frames para Kling / Seedance.

Prompt maestro para serie:

```text
Create a coherent four-image hero sequence for a scroll-driven architecture website. Each image must be a complete wide 16:9 frame of the exact same Mediterranean residential building in Elche/Alicante, Spain, same facade geometry, same balconies, same windows, same cornices, same camera angle, same lens, same daylight, same composition, and same negative space on the left for text. Only the building condition and camera distance change according to each state. No people, no cars, no text, no labels, no watermark, no disaster, no luxury real estate look.
```

### 2.1 Hero estado 1 — edificio normal

Uso:

- Primera pantalla de la landing.
- Texto: "El tiempo pasa para todos."

Prompt:

```text
Photorealistic editorial wide shot of a Mediterranean residential building in Elche or Alicante, Spain. The building is in good maintained condition, cream plaster facade, subtle stone or ceramic details, iron balconies, calm street context, warm morning daylight, no people, no cars, no text. Straight-on architectural composition with enough negative space on the left for website headline. Sober technical mood, not luxury real estate, not old ruin, not generic stock.
```

### 2.2 Hero estado 2 — edificio envejecido

Uso:

- Primer cambio al hacer scroll.
- Texto: "Para los edificios también."

Prompt:

```text
Same Mediterranean residential building as the previous image, same camera angle, same composition, same daylight and framing. The building has aged naturally: faded plaster, subtle humidity traces near balcony edges, fine cracks, worn cornices, slight discoloration, minor staining from rainwater. It remains dignified and safe, not abandoned and not ruined. No people, no cars, no text, no watermark. Photorealistic architectural editorial photography.
```

### 2.3 Hero estado 3 — zoom a señal

Uso:

- Segundo cambio al hacer scroll.
- Texto: "Antes de intervenir, hay que entender qué dicen las señales."

Prompt:

```text
Photorealistic close-up zoom from the same Mediterranean building facade, focusing on a specific technical signal: a fine crack near a balcony edge, subtle humidity trace, worn plaster and material junction. Keep the same warm daylight and material palette as the previous building images. The image must feel like a precise architectural inspection detail, not an emergency. No people, no text, no watermark, no dramatic mold, no disaster.
```

### 2.4 Hero estado 4 — detalle diagnóstico

Uso:

- Tercer cambio al hacer scroll.
- Texto: "Cada edificio cuenta su historia..."

Prompt:

```text
Photorealistic architectural diagnostic detail of a Mediterranean building facade: worn plaster, fine crack, humidity trace, exposed construction layer in a small area, subtle repair marks. Add very subtle technical visual emphasis through light, shadow and composition only; no sci-fi holograms, no labels, no text. Warm natural daylight, tactile material detail, sober professional mood, no people, no watermark.
```

---

## 3. Animaciones para Kling / Seedance

### 3.1 Hero — envejecimiento del edificio

Uso:

- Vídeo o transición inicial.
- Duración recomendada: 5-7 segundos.

Prompt:

```text
A fixed camera facing a Mediterranean residential building facade in Elche or Alicante, Spain. The building starts in good maintained condition. Over 6 seconds, time subtly affects the facade: plaster fades, fine cracks appear, humidity traces form near balcony edges, rainwater marks become visible, and edges show natural wear. The building remains dignified and safe, not ruined. No people, no cars, no text, no dramatic destruction. Warm natural daylight, realistic architectural material aging, calm editorial style.
```

Negative prompt:

```text
No collapse, no disaster, no extreme mold, no fire, no people, no cars, no text, no logos, no medical imagery, no horror atmosphere, no luxury real estate gloss.
```

### 3.2 Hero — zoom a señal

Uso:

- Transición de edificio completo a detalle.

Prompt:

```text
Start with a wide fixed shot of a Mediterranean residential facade. The camera slowly pushes in toward a small area near a balcony edge where a fine crack and humidity trace become visible. The movement is smooth, precise and architectural. The final frame is a close-up diagnostic detail of the material surface. No text overlays, no progress bars, no people, no dramatic damage. Warm daylight, sober technical mood, photorealistic.
```

Negative prompt:

```text
No sci-fi interface, no glowing HUD, no labels, no medical visuals, no disaster, no shaky camera, no people, no text.
```

### 3.3 Hero — señal a diagnóstico

Uso:

- Transición visual del detalle material a una lectura técnica.

Prompt:

```text
A close-up of a Mediterranean building facade detail with a fine crack and humidity trace. Over 5 seconds, the camera holds steady while light and focus reveal the material layers and the origin of the signal. The image becomes clearer and more analytical, as if the surface is being read technically. Use only subtle focus, lighting and material contrast. No text, no labels, no holograms, no medical imagery. Photorealistic, warm daylight, architectural editorial style.
```

### 3.4 Rehabilitación — antes/después

Uso:

- Bloque de rehabilitación.

Prompt:

```text
A stable architectural shot of an aged Mediterranean residential facade slowly transitions into a carefully rehabilitated version of the same facade. Cracks are repaired, plaster becomes clean, humidity traces disappear, balcony edges are restored, and the building keeps its original character. It should not become a luxury new-build. No people, no vehicles, no text. Calm photorealistic architectural style, warm daylight.
```

---

## 4. Imágenes para servicios

### 4.1 Informes técnicos / patologías

```text
Photorealistic architectural detail in a Mediterranean residential building: fine cracks, humidity trace, worn plaster and a construction joint near a balcony or wall corner. Calm daylight, precise material texture, technical inspection mood, not alarming, no people, no text, no watermark.
```

### 4.2 ITE / IEE

```text
Photorealistic exterior of a mid-size residential community building in Alicante province, built between the 1970s and 1990s, with balconies, common facade, visible wear but no danger. The image should suggest building inspection and evaluation. Warm daylight, realistic urban context, no people, no text, no luxury real estate style.
```

### 4.3 Certificados

```text
Photorealistic interior of a used apartment in Elche or Alicante, sober and lived-in but tidy, showing technical measurement context: window, wall, floor, natural light, maybe measuring tool on a table, no readable paperwork, no people, no text. Technical documentation mood, calm and professional.
```

### 4.4 Segunda ocupación

```text
Photorealistic interior of a used Spanish apartment prepared for habitability review: kitchen or bathroom area, natural light, clean but not new, typical materials from Alicante province. The image should suggest checking habitability and existing use, not decoration. No people, no text, no luxury style.
```

### 4.5 Rehabilitación

```text
Photorealistic Mediterranean residential building facade under careful rehabilitation, with scaffold or repair areas visible but orderly. Warm daylight, technical and professional mood, no danger, no dramatic ruin, no people posing, no text. The building should feel existing, local and worth maintaining.
```

### 4.6 Accesibilidad

```text
Photorealistic entrance portal of a residential community in Elche or Alicante with accessibility issue or adaptation: steps, ramp, handrail, lift access or threshold. Sober technical composition, warm daylight, no people, no text. The image should focus on the building access, not on users.
```

### 4.7 Reformas

```text
Photorealistic interior renovation of a used apartment in Alicante province, controlled work in progress, exposed materials, clean site, technical direction mood. No workers posing, no luxury interior design, no text. Warm natural light, realistic construction detail.
```

### 4.8 Ascensores

```text
Photorealistic residential building stairwell or interior patio in Alicante province, suitable for studying lift installation. Show stairs, central void or patio, existing structure and access constraints. Technical composition, no people, no text, no dramatic decay.
```

---

## 5. Imágenes para blog, casos y publicaciones

### 5.1 Cubierta de baldosín catalán

```text
Photorealistic roof terrace in Elche or Alicante with traditional red ceramic baldosin catalan tiles, flat walkable roof, parapet, drain, subtle water stains and aging. Warm Mediterranean daylight, technical architectural detail, no people, no text, no disaster.
```

### 5.2 Edificio caravista años 80-90

```text
Photorealistic residential building from the 1980s or 1990s in Alicante province, brick caravista facade, balconies, typical community architecture, subtle aging in joints and edges. Warm daylight, realistic urban context, no people, no cars, no text, no luxury style.
```

### 5.3 Patio interior

```text
Photorealistic interior courtyard of a Spanish residential building in Elche or Alicante, with light wells, walls, pipes or drains, subtle humidity or aging, technical maintenance mood. No people, no text, no dramatic decay.
```

### 5.4 Portal comunitario

```text
Photorealistic entrance portal of a residential community in Alicante province, built in the 1980s or 1990s, showing stairs, mailboxes, lift door or space for lift adaptation. Warm but sober light, technical architectural composition, no people, no text.
```

### 5.5 Detalle de hormigón / estructura

```text
Photorealistic close-up of reinforced concrete in an existing residential building: beam, column, balcony slab or edge with subtle wear and repair context. Technical material detail, no dramatic structural failure, no people, no text, warm natural light.
```

### 5.6 Acceso con barrera arquitectónica

```text
Photorealistic residential entrance with a small step or uneven threshold creating an accessibility barrier, Alicante province, warm daylight, sober composition. Focus on the building element and possible adaptation, no people, no text.
```

### 5.7 Publicación tipo Instagram — plantilla visual

```text
High-end square social media post design for an architect technical professional in Spain. Editorial Mediterranean style, warm off-white background, deep ink typography, terracotta accent, architectural material photo crop, clean technical layout. Topic: [INSERT TOPIC]. No brand copying, no clutter, no cartoon icons.
```

Temas:

- "3 señales que no conviene ignorar"
- "Antes de reparar una humedad"
- "Qué mira un técnico en una ITE"
- "Adaptar un portal existente"
- "Cubierta plana: dónde empieza el problema"
- "Caravista y juntas deterioradas"

---

## 6. Imagen de Pedro

### 6.1 Pedro trabajando — exterior

```text
Photorealistic editorial portrait of a Spanish architect technical professional in his 40s-50s inspecting a Mediterranean residential building facade in Elche or Alicante. He is visible and recognizable, holding a notebook or tablet, looking at the building with a focused professional attitude. Warm daylight, sober clothing, no hard hat posing, no corporate stock look, no text, no logo.
```

### 6.2 Pedro trabajando — estudio

```text
Photorealistic editorial portrait of a Spanish architect technical professional in a studio reviewing architectural plans, material samples and inspection notes. His face is visible, natural and trustworthy, not posing like a corporate executive. A Mediterranean building facade is softly visible through a window or in a reference photo. Warm natural light, sober technical mood, no readable text, no watermark.
```

Nota: lo ideal es usar fotografía real de Pedro y no imagen generada para su rostro.

---

## 7. Prompts para mockups web finales

### 7.1 Landing final

```text
High-fidelity vertical full-page website landing mockup for Pedro Gonzálvez, architect technical professional in Elche and Alicante. Editorial Mediterranean visual style, warm off-white paper background, deep ink typography, terracotta accents, integrated pill header with logo, navigation and CTA. The hero is a scroll-driven animated sequence implied through parallax: normal building, aged building, zoom to signal, diagnostic detail. No visible progress bars. Services appear as three visual routes: Patologías visibles, Exigencias normativas, Adaptación al uso actual. Include blog/cases/publications, Sobre Pedro, standalone FAQ and strong contact section. Spacious, expert, not generic, not luxury real estate.
```

### 7.2 Servicios final

```text
High-fidelity vertical full-page services page mockup for Pedro Gonzálvez. Editorial Mediterranean style. Services organized into three visual routes: Patologías visibles, Exigencias normativas, Adaptación al uso actual. Include Informes técnicos, ITE/IEE, Rehabilitación, Certificados, Segunda ocupación, Accesibilidad, Reformas and Ascensores. No Legalizaciones as main service. Use varied local building images: facade pathology, caravista 80s/90s, portal, roof terrace, apartment interior. Spacious FAQ and contact modules.
```

### 7.3 Blog / casos final

```text
High-fidelity vertical full-page blog and cases page for Pedro Gonzálvez. Editorial Mediterranean style, combining blog-like case entries and Instagram-style technical publication cards. Use varied local architecture images: baldosin catalan roof terrace, brick caravista facade, portal with lift, interior patio, concrete structure, accessibility threshold. Categories: Casos reales, Notas técnicas, Publicaciones, Antes/después, Patologías, Rehabilitación, Accesibilidad, ITE/IEE.
```

---

## 8. Producción recomendada

Orden de generación:

1. Hero estado 1.
2. Hero estado 2.
3. Hero zoom a señal.
4. Hero detalle diagnóstico.
5. Imagen de Pedro real o generada temporal.
6. Set de servicios.
7. Set de blog/casos/publicaciones.
8. Animaciones Kling / Seedance.

Validar cada imagen antes de usarla en diseño:

- ¿parece local?
- ¿parece técnica?
- ¿evita dramatismo?
- ¿no parece inmobiliaria de lujo?
- ¿mantiene coherencia con la web?
