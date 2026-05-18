# Design Context — Web Pedro Gonzálvez Abadía

## Users

**Quiénes:** propietarios particulares, comunidades de propietarios, administradores de fincas y pequeños promotores en Elche y provincia de Alicante.

**Cuándo entran:** ante una incidencia técnica visible (fisura, humedad), un trámite (ITE/IEE, segunda ocupación, certificado), una compraventa, una reforma o una intervención de rehabilitación. La pregunta interna es siempre "¿qué hago ahora con mi edificio/vivienda?".

**Trabajo a resolver:** convertir una duda técnica en un siguiente paso claro. Saber **qué necesito** (informe, certificado, proyecto), **quién me ayuda** y **qué recibo**. Reducir fricción y miedo a tomar la decisión equivocada.

**Contexto de uso:** consulta diurna, ordenador o móvil. Edad media 40–65, con responsabilidad legal o económica sobre el inmueble. No son perfiles técnicos.

## Brand Personality

**3 palabras:** sobrio, técnico, cercano.

**Voz:** trato de **usted**. Primera persona cuando aporta responsabilidad profesional ("le respondo personalmente"). Sin tecnicismos innecesarios pero sin paternalismo.

**Emociones a evocar:** confianza, tranquilidad, criterio claro. La sensación de "este señor sabe lo que hace y me lo va a explicar".

**Concepto vertebrador:** "El expediente vivo del edificio." Pedro no solo cuida edificios — mantiene ordenado su expediente técnico a lo largo del tiempo.

**Anti-tells (evitar):**
- "Soluciones integrales", "líderes del sector", "compromiso máximo".
- Tono inmobiliario o de plantilla SaaS.
- Autoelogio genérico ("soy serio", "trabajo rápido").
- Lenguaje sentimental de hogar/familia/legado.
- Urgencias inventadas; "Llamar ahora" como CTA principal.
- Legalizaciones como servicio principal (decisión del brief).

## Aesthetic Direction

**Línea:** Editorial técnico mediterráneo. La web se siente como una revista de arquitectura técnica con criterio, oficio y cercanía — no como una landing page de captación.

**Anti-referencias visuales:**
- NO plantilla SaaS / dashboard.
- NO web inmobiliaria con gradientes y CTAs gigantes.
- NO estética médica ni sci-fi en los detalles del hero.
- NO terracota / naranja saturado (descartado expresamente — la versión anterior fue rechazada).
- NO sparklines decorativas, no glassmorphism por defecto, no border-left de 3-4px de acento.

**Paleta (cerrada):** Azulejo claro y costa.
- BG cálido cream `#F1E8D8` — alma editorial mediterránea, se conserva.
- BG profundo `#E8DDC4`, BG card `#EAE0CA`.
- Tinta navy de costa `#1B3552`.
- Tinta soft `#4A6580`, mute `#7A8AA0`.
- Acento azulejo `#3D7AA8` (CTA primario, iconos, links).
- Acento deep `#2A5C8A` (hover, énfasis).
- Acento warm sand `#A57E4F` — uso muy moderado, sólo para variar texturas.

Inspiración: cerámica de Manises, fachadas de Elche con carpintería azul, balcones de barandilla pintada, Mediterráneo a mediodía con luz alta.

**Tema:** light. La web se consume de día por usuarios maduros que necesitan leer denso.

**Tipografía:**
- Display serif para titulares y frase del hero (carácter editorial). Familia preferida con Source Serif 4 / GT Sectra como objetivo, fallback a Cormorant Garamond y Georgia. Evitar Playfair Display, Cormorant fina, Crimson, Fraunces (reflex AI).
- Sans cuerpo: Inter como fallback. Idealmente usar una sans menos defaulteada (TWK Lausanne, Söhne, ABC Diatype, o Geist), pero respetar fallbacks de sistema en este prototipo.
- Escala fluida con `clamp()` en titulares; ratio mínimo 1.25 entre pasos.

**Imágenes:**
- Edificios locales: caravista 80-90, baldosín catalán, portal comunitario, patio interior, fachadas enfoscadas de Elche.
- Pedro visible trabajando, con la cara — no sólo manos.
- Detalle constructivo cercano cuando refuerce el discurso de "leer el edificio".
- No usar imágenes genéricas de stock con personas riendo. Nada de "smiling architects with hard hats".

## Design Principles

1. **Editorial sobre comercial.** Se trata como una revista técnica, no como una landing de venta. Eyebrows, reglas finas, generoso aire blanco vertical. La fotografía y la tipografía hacen el trabajo emocional.

2. **El edificio habla, Pedro lo lee, el expediente lo ordena.** Cada sección debe hilvanarse con esta narrativa. La sección de servicios es un triaje técnico, no una lista de productos. El blog son notas de campo, no marketing.

3. **Ritmo asimétrico, sin cards-clones.** Cada sección busca su propia composición: split editorial, grid 3+8, fila de casos, FAQ tabuladas, contacto a tres columnas. Variar márgenes y proporciones para crear cadencia.

4. **El hero es el gesto de marca.** Edge-to-edge, scroll-driven, bidireccional. Nada de la web aparece hasta que se ha leído la transformación del edificio. Sin barras visibles, sin etiquetas de fase, sin botón saltar. La copy se mueve sobre capas de imagen.

5. **Aire para que respire la responsabilidad.** FAQ y contacto tienen sección propia con peso editorial. Los formularios no se comprimen. Los entregables se nombran (informe, certificado, dirección de obra), no se diluyen en "soluciones".

6. **Acento azul azulejo, parco.** El azul `#3D7AA8` aparece sólo donde hay acción o jerarquía: CTA, links, iconos finos, números de servicio, marcadores de progreso. La masa cromática es el cream cálido y la tinta navy. La regla 60-30-10 se cumple a rajatabla.
