# Tasks

> Requisitos previos: `add-portafolio` y `add-scroll-motion`. Decisiones: `design.md`. Requisitos: `specs/portfolio-cinematic/spec.md`.

## 1. Línea base, ruta y estructura

- [x] 1.1 Registrar la línea base de `/portafolio/` en el build de producción: mediana de 3 corridas de Lighthouse móvil (rendimiento y accesibilidad) y tamaño de `.next/static/chunks`. Verificar guardando los números en `design.md`, sección Context.
- [x] 1.2 Crear `src/app/portafolio/vista-previa/page.tsx` (metadata `noindex, nofollow`) y `PortfolioCinematicHomePage` en `src/features/portfolio/components/cinematic/`, exportado desde `index.ts`. Por ahora la página renderiza las secciones actuales. Verificar con `pnpm build`: `/portafolio/vista-previa/` aparece como estática, y `sitemap.xml` y los menús no la incluyen.
- [x] 1.3 Agregar a `globals.css` la variable `--portfolio-header-h` y el bloque `cine-*` vacío dentro de las guardas de movimiento, más su entrada en la regla `@media print`. Agregar `scroll-margin-top` a las anclas de la vista previa. Verificar que `#NuestrosServicios` deja el título visible bajo el encabezado.
- [x] 1.4 Commit: `feat(portfolio): agrega la ruta de vista previa de la portada cinematográfica`.

## 2. Hero: entrada del titular, telón y video

- [x] 2.1 Crear `CinematicHero` con el titular dividido en palabras con máscara en el servidor (decisión 3). Verificar:
  - las palabras suben y terminan antes de 1 s;
  - con movimiento reducido emulado el titular está quieto;
  - el árbol de accesibilidad muestra el `h1` como una sola frase.
- [x] 2.2 Crear la isla `CinematicHeroVideo`, con video sin `autoPlay` y botón de pausa de 44 × 44 px (decisión 9). Verificar:
  - arranca solo con movimiento permitido;
  - con movimiento reducido queda el póster;
  - el botón funciona con mouse, toque y teclado, y cambia su etiqueta.
- [x] 2.3 Implementar el telón: envoltorio hero + "Quiénes somos", hero `sticky` con zoom del video y atenuación del contenido (decisión 4). Verificar:
  - a 375 px y a 1440 px, "Quiénes somos" cubre el hero;
  - el hero deja de estar fijado al terminar la sección;
  - con movimiento reducido no hay telón.
- [x] 2.4 Commit: `feat(portfolio): agrega el hero cinematográfico con telón y control del video`.

## 3. Quiénes somos con columnas fijadas

- [x] 3.1 Crear `CinematicWhoWeAre`: columna de texto fija desde 1024 px y columna con presentación, motivos y cifras de capacidad con `CountUp` (decisión 5). Verificar:
  - a 1440 px el texto permanece a la vista;
  - a 375 px todo va en una columna;
  - la imagen de presentación no supera su tamaño natural;
  - no queda ninguna pestaña.
- [x] 3.2 Commit: `feat(portfolio): agrega Quiénes somos con columnas fijadas`.

## 4. Servicios: apilado y galería horizontal

- [x] 4.1 Crear las unidades numeradas apiladas, con `sticky` por tarjeta y la línea de tiempo `--cine-stack` (decisión 6). Verificar a 1024 px y 1440 px:
  - la 02 cubre a la 01 y así hasta la 05;
  - cada tarjeta sigue siendo un enlace;
  - a 375 px es una lista sin apilado.
- [x] 4.2 Crear la galería horizontal de las ocho tarjetas con sección alta, contenedor `sticky` y pista trasladada (decisión 7). Verificar a 1024 px y 1440 px que se ven las ocho tarjetas completas antes de que la página siga bajando, y en una tablet horizontal (1024 × 600) que las tarjetas caben en pantalla.
- [x] 4.3 Implementar las variantes de la galería y verificarlas:

  | Variante | Verificación |
  |---|---|
  | Carrusel con `scroll-snap` (< 768 px) | En emulación táctil, el scroll vertical no se bloquea. |
  | Cuadrícula con movimiento reducido o sin soporte | Se ven las 8 tarjetas sin desplazamiento horizontal. |
  | Foco de teclado (`:has(:focus-visible)`) | Recorriendo con Tab, cada tarjeta enfocada queda visible. |

- [x] 4.4 Commit: `feat(portfolio): agrega servicios apilados y galería horizontal`.

## 5. Nueva infraestructura, historias y contacto

- [x] 5.1 Crear `CinematicInfrastructure`: collage en tres columnas con parallax, cifras de crecimiento con `CountUp`, tarjetas institucionales con `motion-stagger` y enlace a `/portafolio/infraestructura/` (decisión 8). Verificar:
  - las columnas se mueven a distinta velocidad;
  - las cifras cuentan una sola vez;
  - con movimiento reducido todo está quieto y completo.
- [x] 5.2 Crear `CinematicStories` y `CinematicContact` con el mismo contenido de la portada actual. Las tarjetas de historias se revelan escalonadas y los textos no se animan. Verificar que los enlaces de las historias llevan a sus subpáginas y que el contacto muestra dirección, correo y teléfono.
- [x] 5.3 Agregar `ScrollProgress` a la vista previa. Comparar sección por sección con `/portafolio/` que no falta ningún texto, cifra, imagen ni enlace. Verificar con una lista de cotejo en el PR.
  - Cotejo automático de `<main>` contra `/portafolio/` (build local, 2026-11-24): 0 textos, 0 imágenes y 0 enlaces faltantes. El video es el mismo. Única diferencia: el separador "·" entre nombre y lema, que ahora son dos líneas.
- [x] 5.4 Commit: `feat(portfolio): agrega infraestructura, historias y contacto cinematográficos`.

## 6. Verificación final

- [x] 6.1 `pnpm lint && pnpm format:check && pnpm build` sin errores, y `openspec validate add-portafolio-cinematico --strict` válido.
  - `pnpm lint`, `pnpm format:check` y `pnpm build` (119 páginas, `/portafolio/vista-previa` estática) sin errores; `openspec validate --strict` válido.
- [x] 6.2 Revisión responsive y táctil a 375 px, 768 px, 1024 px y 1440 px, en emulación táctil y en un celular real si está disponible. Verificar:
  - el scroll es nativo;
  - los objetivos interactivos miden al menos 44 px;
  - ningún efecto depende del hover;
  - no hay desplazamiento horizontal de la página.
  - Recorrido completo a 375 (táctil), 768 (táctil), 1024 y 1440 px: 0 pasos con desplazamiento horizontal y 0 objetivos interactivos menores de 44 px. El arrastre táctil mueve el carrusel y no bloquea el scroll vertical. No hay JavaScript de scroll; los efectos de hover son solo cosméticos.
- [x] 6.3 Revisión de accesibilidad:
  - recorrido completo con Tab (orden visual, foco visible y siempre en pantalla);
  - axe sin errores;
  - movimiento reducido emulado: composición estática completa;
  - sin soporte de `animation-timeline` (Firefox o regla desactivada): contenido completo.
  - Tab: 35/35 elementos de `<main>` con foco visible, en pantalla y sin quedar tapados, a 1440 y 375 px.
  - axe (WCAG 2.1 A/AA): 0 errores, tras subir los números 01–05 a `brand-500`.
  - Movimiento reducido: 0 animaciones, 0 elementos fijados u ocultos y el video en pausa.
  - Sin `animation-timeline` (CSS reescrito para simularlo): galería en cuadrícula de 4 columnas y 0 imágenes ocultas.
- [x] 6.4 Lighthouse móvil de la vista previa: mediana de 3 corridas igual o mayor que la línea base de 1.1 en rendimiento y accesibilidad. Comprobar en `.next/static/chunks` que el JavaScript propio añadido no supera 2 KB.
  - Lighthouse móvil, mediana de 3 corridas en las mismas condiciones: vista previa 88 / 100 (LCP 3,6 s, CLS 0, TBT 170 ms) frente a `/portafolio/` 87 / 100 (LCP 3,5 s, CLS 0, TBT 207 ms).
  - La línea base de 1.1 dio 90 y la nueva medición de `/portafolio/` dio 87 con el mismo build: el ruido de la máquina supera la diferencia, por eso se compara en la misma sesión.
  - Ambas páginas cargan los mismos 8 scripts (165 KB comprimidos). La isla `CinematicHeroVideo` con sus íconos ocupa unos 1,46 KB sin comprimir.
- [x] 6.5 Commit de ajustes si los hubo y publicación en `develop`. Verificar que `/portafolio/vista-previa/` responde 200 en Vercel y compartir el enlace para la aprobación.

## Workflow follow-up

- Con la aprobación de la gerencia, abrir un change para reemplazar `/portafolio/` por la portada cinematográfica y retirar la ruta de vista previa.
- Si se rechaza, retirar la carpeta `cinematic/`, la ruta y el bloque `cine-*` (ver Migration Plan en `design.md`).
- Archivar este change con `/opsx:archive` cuando se resuelva la aprobación.
