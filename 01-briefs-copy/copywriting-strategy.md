# Estrategia de Copywriting — Web Pedro Antonio Gonzálvez Abadía

**Fecha:** 2026-04-19
**Estado:** Aprobada (pendiente de ejecución página a página)
**Alcance:** Toda la web — home, `/servicios`, las 7 subpáginas de servicio, `/sobre-pedro`, `/contacto`
**Relación con el resto de docs:** Este documento es la fuente maestra. Cualquier texto nuevo o reescritura debe partir de aquí antes de tocar `page.tsx`.

---

## 1. Manifiesto (concepto vertebrador de toda la web)

> El tiempo pasa.
> Los edificios envejecen.
> La normativa evoluciona y cambia.
> Y como técnico, mi trabajo es mantenerlos en plena forma — habitables, funcionales y seguros.

Este es el texto que abre la web y que debe poder recitarse mentalmente al leer cualquier otra sección. Los tres cierres (*habitables, funcionales, seguros*) son los tres términos exactos que la LOE (art. 3) y el CTE usan para definir las exigencias básicas de un edificio. No son adjetivos cualesquiera: son la columna vertebral normativa de la profesión.

---

## 2. Posicionamiento

**Antes:** "Arquitecto técnico que hace informes, ITE, reformas y trámites."

**Ahora:** **"El técnico que cuida del edificio a lo largo del tiempo: lo revisa, lo adapta, lo pone en regla y lo mantiene en plena forma."**

Pedro no es un proveedor de documentos sueltos. Es **el técnico de cabecera del edificio** — figura humana y cercana que conoce su historial, lee sus síntomas, interviene cuando toca y lo acompaña a lo largo de su vida útil.

**Precisión de la metáfora:** *el paciente es el edificio*; el propietario o la comunidad es quien lo trae a consulta. No se usa la figura "médico de familia" porque desplaza el foco hacia la persona. Cuando haga falta apoyar la metáfora, usar "técnico de cabecera del edificio" o "técnico de confianza del inmueble".

**Regla de coherencia (línea roja):** el objeto del cuidado es SIEMPRE el edificio, nunca las personas. Las personas son **beneficiarias** de un edificio bien mantenido, no **sujetos** del servicio técnico. Esta regla se verifica gramaticalmente: el sujeto o el complemento directo del verbo técnico (cuidar, revisar, mantener, adaptar) debe ser el edificio o una de sus partes.

---

## 3. Tres fuerzas, tres ejes de servicio

Todo servicio de la web se formula como respuesta a una de estas tres fuerzas que actúan sobre el edificio:

| Eje | Fuerza que lo empuja | Servicios que caen en este eje |
|---|---|---|
| **Estructural / Seguridad** | El tiempo físico (fisuras, humedades, patologías, desgaste) | Informes técnicos, revisión de patologías, ITE, IEE |
| **Normativo** | La ley que cambia y exige adaptarse | Certificados, legalizaciones, cédula de segunda ocupación, documentación técnica |
| **Funcional / Uso** | Las necesidades de uso que evolucionan (accesibilidad, habitabilidad, reforma) | Accesibilidad, ascensores, reformas, dirección de obra, obra nueva, seguridad y salud |

La página `/servicios` puede reorganizarse visualmente en torno a estos tres ejes en lugar de una rejilla plana.

---

## 4. Voz y tono

**Registro:** sobrio, técnico, cercano. Primera persona del singular (*"mi trabajo", "reviso", "le oriento"*). Nunca paternalista, nunca alarmista, nunca comercial agresivo.

**Regla de zonas (accionable):** el registro narrativo-emocional solo está permitido en tres zonas concretas de cada página:

- **Hero** (headline y/o subcopy).
- **Intros de sección** (una frase, máximo dos).
- **Microcopy de cierre** (banda CTA final, microcopy bajo botones).

Todo el resto de la página — cuerpo de descripciones de servicio, pasos del proceso, tarjetas de servicio, FAQs, labels y ayudas del formulario, textos de botones, avisos, footer — es **100% técnico-operativo**, sin metáfora ni adjetivación emocional. La metáfora del "edificio vivo / envejecer bien" es el **spine**, no el disfraz: aparece donde engancha al lector y desaparece donde el lector necesita precisión.

**Cliente en mente al escribir:**
- **Primario:** propietario particular y presidente de comunidad, no técnico. Lenguaje llano, ejemplos concretos.
- **Secundario:** administrador de fincas y pequeño promotor. Rigor normativo, referencias técnicas correctas (CTE, LOE, ITE, IEE) cuando aportan confianza.

---

## 5. Pilares de mensaje (los cuatro que se repiten a lo largo del site)

1. **Cuidar, no solo cumplir.** El edificio no es un papeleo: es un bien que hay que mantener.
2. **Leer antes de actuar.** Diagnóstico primero, intervención después. Nunca al revés.
3. **Adaptar al paso del tiempo.** Edificios y normativas cambian. Pedro ordena los cambios con criterio.
4. **Un técnico, un expediente.** Informes, licencias, obras, coordinación — todo bajo una misma mano para que nada se pierda entre trámites.

Cada página debe tocar al menos uno de estos pilares. El home los toca los cuatro.

---

## 6. Vocabulario — palabras sí / palabras no

| ✅ Usar | ❌ Evitar |
|---|---|
| cuidar, acompañar, mantener en plena forma | "soluciones integrales", "sinergias" |
| leer, diagnosticar, valorar, revisar | "ofertamos", "realizamos servicios de" |
| historial, expediente, estado del edificio | jerga vacía de marketing |
| habitabilidad, funcionalidad, seguridad (CTE/LOE) | "calidad premium", "excelencia" |
| envejecer bien, alargar vida útil, adaptarse al tiempo | lenguaje alarmista ("peligro", "ruina", "urgente") — salvo si el caso lo pide |
| patrimonio edificado, vida útil del inmueble | "inversión inteligente", "rentabilidad" |
| criterio, rigor, trato directo, sin vueltas | "disruptivo", "profesional" (autoelogio) |
| normativa, CTE, LOE, ITE, IEE | eufemismos legales ("adecuación administrativa") |

**Prohibido (pendiente resbaladiza hacia copy de autoayuda inmobiliaria):**

- "su hogar", "los suyos", "su familia"
- "legado", "memoria de la casa", "el hogar de siempre"
- "generaciones", "herencia familiar"
- cualquier metáfora donde el edificio guarda recuerdos, emociones o historia sentimental

**Nota sobre "patrimonio":** se usa exclusivamente en sentido técnico-jurídico (patrimonio edificado, régimen de propiedad horizontal, valor patrimonial del inmueble). Nunca como metáfora emocional.

**Regla general:** el lenguaje técnico se usa cuando aporta precisión (nombre de un certificado, referencia a CTE), no para impresionar.

---

## 7. Arquitectura narrativa por tipo de página

### 7.1 Home — el manifiesto completo

**Función:** presentar el concepto de los tres ejes, posicionar a Pedro como técnico de cabecera del edificio, generar primera consulta.

**Estructura recomendada:**
- **Hero:** manifiesto de 4 líneas (texto del §1) + subcopy operativo + CTAs.
- **Trust strip:** 4 bloques factuales (colegiado, cobertura, experiencia, trato directo).
- **Sección servicios:** presentación en 3 bloques según los ejes estructural / normativo / funcional. Cada bloque con su frase metafórica de apertura y las tarjetas de servicio que le corresponden.
- **Proceso:** 4 pasos en lenguaje hablado, primera persona.
- **Casos:** historias reales, con estructura problema → intervención → resultado.
- **FAQ:** dudas frecuentes antes de contratar.
- **Contacto + CTA banda final.**

### 7.2 `/servicios` (listado) — el mapa del cuidado

**Función:** dar visión completa y organizada de todos los servicios, agrupados por los tres ejes.

**Estructura recomendada:**
- Hero con headline que use el lente de los tres ejes.
- Tres secciones (estructural, normativo, funcional), cada una con una frase de apertura que conecte el eje con la realidad del propietario ("Cuando el edificio da señales...", "Cuando los papeles no están en orden...", "Cuando el uso cambia...").
- Dentro de cada sección, las tarjetas de servicio correspondientes.
- Proceso, FAQ, CTA final.

### 7.3 Subpáginas de servicio (las 7) — el momento vital

**Función:** convertir a quien ya busca algo concreto (ej. "certificado segunda ocupación Elche") en lead, sin sacrificar el posicionamiento SEO.

**Patrón H1 obligatorio (reconciliación SEO + narrativa):**

Cada subpágina de servicio tiene **eyebrow narrativo + H1 con keyword literal**. El eyebrow es el "momento vital" (kicker breve encima del H1, texto pequeño); el H1 contiene la keyword de SEO tal cual. Esto se mantiene en todas las subpáginas sin excepción.

*Ejemplo para `/servicios/ite-iee`:*

> **eyebrow:** Cuando llega la inspección técnica del edificio
> **H1:** ITE e IEE en Elche y Alicante

*Ejemplo para `/servicios/segunda-ocupacion`:*

> **eyebrow:** Cuando toca vender o alquilar y falta papel
> **H1:** Certificado de Segunda Ocupación en Elche y Alicante

El H1 nunca se sacrifica por narrativa. El eyebrow nunca sustituye al H1. Las keywords que mandan el H1 se sacan de `docs/seo-market-research-pedro-arquitecto-tecnico.md`.

**Estructura recomendada por cada subpágina:**
1. **Hero con eyebrow + H1 + subcopy operativo** (patrón de arriba).
2. **Qué es y para quién.** Lenguaje técnico pero llano. Aquí sí baja la metáfora y sube la precisión.
3. **Cuándo se necesita.** Casos concretos. Ayuda al cliente a autoidentificarse.
4. **Cómo trabajo este encargo.** Proceso específico (no el genérico del home).
5. **Qué incluye / qué documento entrego.** Concreto, verificable.
6. **FAQ específica del servicio.**
7. **CTA hacia contacto** con contexto preseleccionado.

### 7.4 `/sobre-pedro` — humanizar la figura

**Función:** pasar de "arquitecto técnico genérico" a "Pedro, técnico de cabecera".

**Estructura recomendada:**
- Quién es Pedro y por qué hace lo que hace.
- Cómo entiende la profesión (conexión explícita con el manifiesto).
- Formación, colegiación, años de experiencia — pero al servicio de la historia, no como CV plano.
- Foto de Pedro (elemento clave de confianza).
- CTA hacia contacto.

### 7.5 `/contacto` — conversación, no trámite

**Función:** bajar la fricción de la primera consulta.

**Estructura recomendada:**
- Headline que invite a conversar ("Cuénteme en qué momento está su edificio").
- Info de contacto directa (tel, email, zona).
- Formulario breve con campo libre de descripción del caso.
- Microcopy de expectativas: "Respondo en menos de 48 horas. Primera orientación sin compromiso."

---

## 8. Patrones de copy reutilizables

### 8.1 Heroes
- **Headline:** situación, tensión o momento vital. No descripción de servicio.
- **Subcopy:** aterrizaje técnico concreto — qué hace Pedro en ese momento.
- **CTAs:** primaria = "Cuénteme su caso" / "Pedir revisión". Secundaria = "Ver servicios" o similar.
- **Microcopy:** trust signal corto ("Elche y Alicante · Arquitecto técnico colegiado").

### 8.2 Intros de sección
Fórmula: **una frase metafórica + una frase operativa**. La primera engancha, la segunda orienta.

*Ejemplo:* "Todo edificio escribe su historial con el tiempo. Un informe técnico lo lee antes de que los problemas se escriban solos."

### 8.3 CTAs
Verbos de conversación, no de transacción:

- ✅ "Cuénteme su caso", "Hablar sobre mi edificio", "Pedir revisión", "Consultar viabilidad".
- ❌ "Solicitar presupuesto", "Pide ya", "Contrata ahora", "Descúbrelo".

### 8.4 Trust signals integrados
No aparecen como badges sueltos, sino dentro de la frase: *"Trabajo en Elche y Alicante desde hace X años, como arquitecto técnico colegiado, con trato directo y sin intermediarios."*

### 8.5 Microcopy de confianza (para formularios, CTAs, pie de hero)
- "Primera orientación sin compromiso."
- "Respondo en menos de 48 horas."
- "Sin lenguaje confuso ni vueltas innecesarias."
- "Arquitecto técnico colegiado — Elche y Alicante."

---

## 9. Tratamiento de obra nueva y reformas

Aunque el hilo principal de la web es "cuidar edificios que envejecen", Pedro también hace obra nueva y reformas. Estos servicios entran bajo el mismo marco con una formulación coherente:

> **Construir para que envejezca bien. La vida útil de un edificio empieza en la mesa de proyecto.**

No se desenfocan del hilo: simplemente añaden una cuarta dimensión temporal — *"lo que hoy se proyecta, mañana será el edificio que cuidar"*. Esto se refleja en el copy de `/servicios/reformas` y en los casos de obra nueva sin romper la coherencia con el resto del site.

---

## 10. Cómo encaja la accesibilidad (caso paradigmático del eje funcional)

La accesibilidad es el ejemplo más claro del eje funcional y merece tratamiento específico porque resume la estrategia:

> Un bloque de los años 70 se proyectó para un uso que ya no es el actual: escaleras sin ascensor, accesos con peldaño, portales sin rampa. El edificio no ha cambiado; lo que se le pide, sí. **Adaptarlo es cuidarlo.**

Este párrafo, o una variante, aparece en `/servicios/reformas` y en la sección funcional de `/servicios`. El sujeto gramatical es siempre el edificio; las personas aparecen solo como motivo del cambio de uso, nunca como objeto del cuidado técnico. Esta regla se verifica leyendo cada frase del párrafo con la pregunta: *¿el verbo técnico tiene como complemento directo el edificio o una parte suya?* Si no, se reescribe.

---

## 11. Checklist de validación — para aplicar en cada página reescrita

Antes de dar por buena la reescritura de cualquier página, se comprueba:

- [ ] ¿El copy toca al menos uno de los cuatro pilares de mensaje (§5)?
- [ ] ¿En subpáginas de servicio, el H1 contiene la keyword literal y el eyebrow aporta la narrativa (§7.3)?
- [ ] ¿En el home y `/servicios`, el hero plantea un momento vital o tensión?
- [ ] **Test gramatical:** en todo verbo técnico (cuidar, revisar, mantener, adaptar, valorar, intervenir), ¿el sujeto o el complemento directo es el edificio o una de sus partes? Las personas solo pueden aparecer como motivo o beneficiarias, nunca como objeto.
- [ ] ¿El registro narrativo se limita a las tres zonas permitidas (hero / intros de sección / microcopy de cierre) y el resto es técnico-operativo (§4)?
- [ ] ¿El vocabulario respeta las listas sí / no y no cae en la lista de términos prohibidos (§6)?
- [ ] ¿Los CTAs son conversacionales, no transaccionales (§8.3)?
- [ ] ¿Aparece un trust signal integrado en la frase en algún punto de la página (§8.4)?
- [ ] ¿Los términos técnicos (CTE, LOE, ITE, IEE) se usan por precisión, no para impresionar?

---

## 12. Microcopy de sistema (zonas fuera de las páginas principales)

Estos textos no son páginas, pero son los momentos donde más fácil se resbala al copy genérico. Cada uno tiene plantilla propia para no improvisar.

### 12.1 Metadata SEO (title + description)

**Fórmula para `<title>` de subpáginas de servicio:**
`[Servicio con keyword literal] en Elche y Alicante · Pedro Gonzálvez, arquitecto técnico`

**Fórmula para `<meta description>` (150–160 caracteres):** una frase técnica con keyword + una frase de cierre con verbo de cuidado.

*Ejemplo:* "Certificado de Segunda Ocupación en Elche y Alicante. Documentación técnica para vender o alquilar su vivienda usada con todas las garantías."

### 12.2 Alt text de imágenes

Fórmula: **[elemento del edificio o tipo de intervención] + [ubicación si aplica] + [acción técnica si aplica]**.

- ✅ "Edificio residencial en Elche con fachada inspeccionada" / "Fisura estructural en muro de carga revisada durante informe técnico"
- ❌ "Casa bonita", "Foto de Pedro trabajando"

### 12.3 Mensajes del formulario de contacto

- **Éxito al enviar:** *"Gracias, he recibido su consulta. Respondo personalmente en menos de 48 horas."*
- **Error genérico:** *"No se ha podido enviar la consulta. Puede reintentarlo o llamar directamente al [teléfono]."*
- **Error de validación (email):** *"El formato del correo no es correcto. Revise que no falte la arroba o el dominio."*
- **Error de validación (campo obligatorio):** *"Este dato hace falta para poder responder al caso."*

### 12.4 Página 404

- **Headline:** *"No encuentro esta página."*
- **Subcopy:** *"El enlace ha cambiado o no existe. Puede volver al inicio o ir directamente a los servicios."*
- **CTAs:** "Volver al inicio" + "Ver servicios".

### 12.5 Banner de cookies

Sobrio y literal. Sin metáforas. Cumple con LOPDGDD y no intenta ser gracioso.

*"Esta web usa cookies técnicas y de analítica para funcionar y medir su uso. Puede aceptar, rechazar o configurar desde aquí. [Más información en la política de cookies]."*

### 12.6 Breadcrumbs

Formato simple: `Inicio › Servicios › [Servicio]`. Sin decoración narrativa.

### 12.7 Footer

Datos factuales: dirección de despacho, teléfono, email, horario, número de colegiación, enlaces legales. Una sola frase de cierre permitida en registro narrativo: *"Arquitecto técnico colegiado en Alicante. Trato directo en Elche, Alicante y provincia."* — ahí acaba el tono narrativo del footer.

---

## 13. Próximos pasos

Esta estrategia queda cerrada y aprobada. La ejecución sigue este orden para validar el tono antes de propagarlo:

1. **Home** (`src/app/page.tsx`) — el manifiesto y los tres ejes.
2. **`/servicios`** (`src/app/servicios/page.tsx`) — reorganización por ejes.
3. **Las 7 subpáginas** de `/servicios/[servicio]/`.
4. **`/sobre-pedro`** y **`/contacto`**.

Cada paso pasa por el checklist del §11 antes de considerarse terminado.
