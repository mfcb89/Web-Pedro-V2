# Revisión creativa de copywriting — Web Pedro Antonio Gonzálvez Abadía

**Fecha:** 2026-04-28  
**Documento revisado:** `docs/strategy/copywriting-strategy.md`  
**Alcance de esta revisión:** estrategia, tono, narrativa, coherencia con la web actual y propuestas de mejora editorial.  
**Importante:** este documento no modifica la web, su programación ni sus componentes. Es una guía de dirección para una siguiente iteración.

---

## 1. Diagnóstico rápido

La estrategia base es sólida: ha encontrado una idea diferencial clara para un arquitecto técnico local, evita el copy inmobiliario genérico y convierte servicios dispersos en una promesa comprensible: **mantener el edificio en plena forma a lo largo del tiempo**.

La web actual ya ha empezado a ejecutar esa idea, pero lo hace con dos capas que todavía no hablan exactamente el mismo idioma:

- La **home real** está servida por rewrite desde `public/preview/Landing.html`, no por `src/app/page.tsx`.
- Las páginas Next de servicios, contacto y sobre Pedro ya recogen buena parte del concepto de "técnico de cabecera".
- La home preview es más visual y experimental: fotos de edificios, envejecimiento al hacer scroll, acordeón de servicios y casos con estructura problema / solución / resultado.
- Las páginas interiores son más sobrias, SEO-operativas y sistemáticas.

La oportunidad no está en cambiar la idea, sino en afilarla: pasar de "el edificio envejece" como metáfora general a un sistema narrativo más propio, más técnico y más memorable.

---

## 2. Vuelta de tuerca: del "técnico de cabecera" al "expediente vivo del edificio"

La estrategia actual tiene un buen eje humano: **Pedro como técnico de cabecera del edificio**. La vuelta creativa propuesta es añadir una segunda capa más técnica y más accionable:

> **Cada edificio tiene un expediente. Mi trabajo es mantenerlo al día: leer lo que le pasa, ordenar lo que exige la normativa y documentar cada intervención para que nada se pierda con el tiempo.**

Esta idea conserva el cuidado, pero lo baja a tierra. Evita que la metáfora médica se vuelva demasiado blanda y conecta mejor con lo que Pedro vende de verdad: informes, certificados, inspecciones, dirección de obra, legalizaciones, trazabilidad y criterio técnico.

### Nuevo concepto vertebrador

**El expediente vivo del edificio.**

No como claim visible en todas partes, sino como sistema interno de escritura:

- El edificio da señales.
- Pedro las lee técnicamente.
- El expediente ordena el diagnóstico, la normativa y la intervención.
- Cada trámite deja de ser un documento suelto y pasa a formar parte del historial técnico del inmueble.

### Por qué funciona

- Es más propio de un arquitecto técnico que una metáfora puramente emocional.
- Encaja con comunidades, administradores, propietarios y promotores.
- Da continuidad entre ITE, certificados, reformas, legalizaciones y accesibilidad.
- Convierte el "trato directo" en algo más concreto: **una sola persona que conoce el expediente y responde de él**.

---

## 3. Nueva fórmula de posicionamiento

### Versión actual

> El técnico que cuida del edificio a lo largo del tiempo: lo revisa, lo adapta, lo pone en regla y lo mantiene en plena forma.

### Versión afilada

> **El arquitecto técnico que mantiene el expediente del edificio en orden: revisa su estado, documenta lo necesario, dirige las intervenciones y lo adapta al paso del tiempo.**

### Versión más humana para hero

> **El tiempo pasa. Los edificios cambian. Su expediente técnico también debería estar al día.**

### Versión más directa para SEO / metadata

> Arquitecto técnico en Elche y Alicante para revisar, documentar y adaptar edificios, viviendas y comunidades con criterio técnico y trato directo.

---

## 4. Cómo encaja con el estado actual de la web

### Home preview

La home actual ya tiene una idea visual potente: el edificio envejece al hacer scroll. Esto es diferencial y conviene conservarlo como gesto de marca.

Lo que falta es que el copy acompañe con más precisión. Algunas frases actuales usan bien el manifiesto, pero otras bajan a fórmulas más genéricas:

- "Cuatro áreas para que tu edificio o vivienda esté en regla."
- "Pedir cita."
- "Llamar ahora."
- "Te explico siempre con criterio claro."

La home debería hablar con una sola voz: sobria, cercana y en tratamiento de usted, salvo decisión expresa de cambiar todo el site a tuteo.

### Servicios Next

`/servicios` está más alineada con la estrategia de tres ejes:

- Cuando el edificio da señales.
- Cuando los papeles no están en regla.
- Cuando el edificio necesita adaptarse.

La estructura funciona. La oportunidad está en resolver una tensión: la estrategia habla de 7 subpáginas, pero el sistema actual contiene más servicios y subservicios, especialmente dentro de rehabilitación.

Recomendación editorial: no forzar "7 servicios" si la web ya ha crecido. Conviene reformular la estrategia como:

> **3 ejes principales + servicios troncales + subservicios de rehabilitación.**

### Páginas de servicio

El componente `ServicePage` favorece una estructura clara:

- Eyebrow.
- H1 SEO.
- Intro.
- Para quién.
- Qué incluye.
- Siguiente paso.
- FAQ.

Eso encaja muy bien con la estrategia. La mejora sería añadir un campo editorial futuro de "documento que se entrega" o "resultado técnico", porque ahora los pasos explican proceso, pero no siempre concretan el entregable.

### Contacto

La página `/contacto` está muy cerca del tono correcto. "Cuénteme en qué estado está su edificio" es una buena frase. El formulario también está bien planteado.

Hay que vigilar consistencia de emails, horarios y tratamiento:

- Home preview usa `estudio@pedrogonzalvez.es`.
- Next usa `pedroagonzalvez@gmail.com`.
- Home preview mezcla "tu" y "usted".
- Next usa más "usted".

Eso no es un problema de programación ahora, pero sí debe quedar como criterio de copy antes de publicar.

---

## 5. Ajuste creativo de los tres ejes

La estrategia actual define tres fuerzas: estructural, normativa y funcional. Mantendría esa arquitectura, pero con nombres más memorables para escritura interna:

| Eje estratégico | Nombre operativo | Pregunta del cliente | Respuesta de Pedro |
|---|---|---|---|
| Estructural / seguridad | **Cuando el edificio da señales** | "¿Esto es grave?" | Lo reviso, lo diagnostico y documento qué conviene hacer. |
| Normativo | **Cuando el expediente no está en regla** | "¿Qué papel me falta?" | Identifico el trámite, preparo la documentación y la dejo lista para presentar. |
| Funcional / uso | **Cuando el uso ya no encaja** | "¿Se puede adaptar?" | Valoro viabilidad, proyecto la intervención y dirijo la ejecución. |

La palabra clave nueva es **expediente**. Debe usarse con moderación, pero puede ordenar el discurso mejor que "papeles".

---

## 6. Nuevo manifiesto, versión más madura

La versión aprobada funciona. Esta alternativa conserva su ritmo, pero incorpora la vuelta de tuerca:

> El tiempo pasa.  
> Los edificios envejecen.  
> La normativa cambia.  
> Y cada intervención deja una huella en su expediente.  
>  
> Mi trabajo es leer ese estado, ordenar lo necesario y mantener el edificio en plena forma: habitable, funcional y seguro.

Uso recomendado:

- Home: puede usarse completo o por fragmentos.
- Sobre Pedro: usarlo como declaración profesional.
- Servicios: usar solo la lógica, no repetir el manifiesto.

---

## 7. Nuevos patrones de copy

### 7.1 Hero home

**Opción A — más conceptual**

> El tiempo pasa.  
> Los edificios envejecen.  
> Su expediente técnico también debe estar al día.

Subcopy:

> Arquitecto técnico colegiado en Elche y Alicante. Reviso, documento y adapto edificios y viviendas para que sigan siendo habitables, funcionales y seguros.

CTA:

- Cuénteme su caso
- Ver servicios

### 7.2 Hero servicios

> Revisar, documentar y adaptar el edificio en cada etapa.

Subcopy:

> Informes, ITE, certificados, legalizaciones, rehabilitación y accesibilidad organizados según lo que necesita el inmueble: diagnóstico, normativa o intervención.

### 7.3 CTA final

> Si el edificio da señales, falta documentación o toca intervenir, el primer paso es ordenar el caso.

Botón:

- Cuénteme su caso

Microcopy:

> Respondo personalmente en menos de 48 horas. Arquitecto técnico colegiado en Alicante.

### 7.4 Intro para casos

> Un caso bien resuelto no empieza por la obra, sino por el diagnóstico.

Subcopy:

> Estos ejemplos siguen el mismo orden: qué le pasaba al inmueble, cómo se valoró técnicamente y qué resultado quedó documentado.

---

## 8. Correcciones de tono recomendadas

### Tratamiento

Elegir **usted** como tratamiento principal. Es más coherente con:

- propietario particular de cierta edad,
- presidente de comunidad,
- administrador de fincas,
- encargo técnico con responsabilidad legal.

Cambiar en futuras iteraciones:

- "tu edificio" -> "su edificio"
- "te respondo" -> "le respondo"
- "te explico" -> "le explico"
- "Pedir cita" -> "Cuénteme su caso" o "Pedir revisión"

### CTAs

Revisar los CTAs actuales que suenan demasiado transaccionales o genéricos:

- "Llamar ahora" puede mantenerse si está junto al teléfono, pero no como CTA principal de marca.
- "Pedir cita" debería sustituirse por "Pedir revisión" o "Cuénteme su caso".
- "Solicitar visita" en header es aceptable, pero "Pedir revisión" encaja mejor con la estrategia.
- "Enviar consulta" es correcto en formularios.

### Accesibilidad

La estrategia dice que el objeto del cuidado es el edificio, no las personas. En la web actual hay frases donde la accesibilidad se formula como autonomía de las personas. No es incorrecto, pero rompe parcialmente la regla.

Versión más alineada:

> Adaptar un edificio para eliminar barreras arquitectónicas exige estudiar accesos, recorridos, pendientes, ascensores y normativa aplicable. El resultado beneficia al uso diario, pero la intervención técnica actúa sobre el inmueble.

---

## 9. Mapa editorial propuesto

### Home

Función: convertir la idea de envejecimiento en una experiencia memorable.

Debe responder a esta secuencia:

1. El tiempo actúa sobre el edificio.
2. Pedro lee su estado.
3. El expediente se ordena.
4. La intervención se decide con criterio.
5. El propietario sabe el siguiente paso.

### Servicios

Función: ayudar a elegir servicio sin abrumar.

La página debe funcionar como un triaje técnico:

- Si hay señales físicas: informes, patologías, ITE, rehabilitación estructural.
- Si falta documentación: certificados, segunda ocupación, legalizaciones.
- Si el uso cambió: accesibilidad, reformas, ascensores, rehabilitación de vivienda.

### Subservicios de rehabilitación

Función: capturar búsquedas concretas sin perder sistema.

Cada subservicio debe añadir una frase de "pieza del edificio":

- Fachada: la piel exterior.
- Cubierta: el primer plano de defensa frente al agua.
- Estructura: lo que sostiene el edificio.
- Patios y medianeras: puntos ciegos donde suelen aparecer filtraciones.
- Ascensores: adaptación funcional del edificio existente.
- Viviendas: puesta al día del uso interior.

Usar estas metáforas con control: solo en hero o intro.

---

## 10. Frases nuevas para el banco de copy

- "Antes de intervenir, conviene saber qué está diciendo el edificio."
- "Un informe técnico no es un trámite: es una lectura ordenada del estado del inmueble."
- "El expediente del edificio debe explicar qué se hizo, cuándo se hizo y por qué se hizo."
- "La normativa cambia; el edificio debe adaptarse sin perder criterio constructivo."
- "Cuando una comunidad no sabe por dónde empezar, el primer trabajo es ordenar prioridades."
- "No todo problema visible exige una obra grande. Primero se diagnostica; después se decide."
- "Poner un edificio en regla no es acumular documentos, sino preparar el trámite correcto."
- "Una rehabilitación bien planteada no tapa síntomas: corrige causas."
- "El edificio no necesita más papeles. Necesita el documento adecuado, firmado y útil."
- "La vida útil de un inmueble se alarga con decisiones técnicas tomadas a tiempo."

---

## 11. Riesgos actuales detectados

1. **Doble home:** la estrategia habla de `src/app/page.tsx`, pero la home actual se sirve desde `public/preview/Landing.html`. Antes de ejecutar copy final hay que decidir si se migra la home preview a Next o si se mantiene como está.

2. **Inconsistencia tú / usted:** la home preview usa tuteo en varios puntos y las páginas Next tienden a usted. Recomendación: unificar a usted.

3. **Sistema de servicios desactualizado:** la estrategia menciona 7 subpáginas, pero `src/lib/services.ts` incluye más slugs y subservicios. Actualizar la estrategia futura a la realidad del árbol actual.

4. **Algunos CTAs se salen del marco:** "Pedir cita", "Llamar ahora" y "Solicitar visita" son funcionales, pero menos propios que "Cuénteme su caso", "Pedir revisión" o "Consultar viabilidad".

5. **Accesibilidad con foco humano directo:** conviene reescribir algunas frases para que la intervención técnica recaiga sobre el edificio y las personas aparezcan como beneficiarias.

6. **Datos de contacto no consolidados:** revisar email, horario y nomenclatura antes de producción.

---

## 12. Recomendación final

No cambiaría la estrategia de raíz. La reforzaría con una capa más técnica:

> **Pedro no solo cuida edificios. Mantiene ordenado su expediente técnico a lo largo del tiempo.**

Ese matiz permite que la web sea más madura, menos metafórica y más defendible. La creatividad no debería añadir más adorno; debería hacer que cada servicio parezca parte de una misma responsabilidad profesional.

El próximo paso editorial recomendado es crear una matriz página por página con:

- H1 final.
- Eyebrow.
- Subcopy.
- CTA principal.
- CTA secundario.
- Frase de expediente / diagnóstico / intervención.
- Riesgo de tono a evitar.

Esa matriz puede servir como puente antes de tocar componentes o contenido de producción.
