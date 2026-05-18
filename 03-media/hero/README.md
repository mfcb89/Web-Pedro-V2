# Videos del hero

Colocar aquí los vídeos finales con estos nombres exactos:

- `01-loop-normal.mp4`
- `02-transition-aging.mp4`
- `03-loop-aged.mp4`
- `04-transition-zoom-balcony.mp4`
- `05-loop-balcony.mp4`
- `06-transition-material-detail.mp4`
- `07-loop-material-detail.mp4`

El hero ya está preparado para usar esos archivos. Si falta algún vídeo, muestra como fallback los posters de `public/preview/uploads/hero/`.

Funcionamiento actual:

- `01`, `03`, `05` y `07` son loops y se reproducen durante las pausas del scroll.
- `02`, `04` y `06` son transiciones, pero en web no se scrubea el MP4 directamente.
- Las transiciones usan secuencias JPG en `public/videos/hero/frames/` para que el scroll avance fotograma a fotograma sin saltos de seek del navegador.
- Los frames se precargan en segundo plano: primero inicio/medios/finales de cada tramo, después el resto cuando el navegador queda libre.
- Todos los vídeos están superpuestos en capas 16:9 con `object-fit: cover`.
- El paso entre capas usa crossfade de opacidad para evitar cortes visibles.
- El header queda fijo y no cambia de tamaño/estado durante el scroll del hero.

Recomendación de exportación:

- MP4 H.264.
- 16:9.
- Sin texto dentro del vídeo.
- Sin barras, flechas ni elementos de interfaz.
- Movimiento suave y estable.

Para regenerar los frames después de sustituir algún MP4:

```bash
npm run hero:frames
```
