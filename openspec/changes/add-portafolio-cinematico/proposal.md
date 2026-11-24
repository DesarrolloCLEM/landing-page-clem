# Proposal

## Why

El gerente proyecta el portafolio en conferencias y reuniones. La portada actual replica el WordPress: es correcta, pero es una página plana de secciones apiladas. La gerencia quiere evaluar una versión "cinematográfica" que se sienta más premium al recorrerla en pantalla grande o en el celular. Como es un cambio visual grande, debe poder verse y aprobarse en una ruta aparte, sin tocar el portafolio que ya se comparte.

## What Changes

- **Ruta de vista previa** `/portafolio/vista-previa/` con la portada cinematográfica. Usa el mismo layout del portafolio (barra superior, encabezado con logo y menú, footer) y la paleta de marca 2027. Es `noindex, nofollow` y no aparece en ningún menú, footer ni sitemap.
- **Una única entrada de texto:** el titular del hero aparece una sola vez al cargar, palabra por palabra dentro de una máscara, en menos de un segundo. El resto de los textos no se animan.
- **Hero fijado tipo telón:** el hero ocupa la pantalla y se queda fijo mientras la sección siguiente sube y lo cubre. El video de fondo se acerca levemente y el contenido se atenúa al bajar. El video tiene un botón para pausarlo.
- **Quiénes somos en dos columnas:** el texto queda fijo a un lado mientras al otro pasan la presentación, las cifras de capacidad (con conteo) y los motivos para elegir la clínica. Se muestran en secuencia, sin pestañas.
- **Servicios apilados:** las cinco unidades numeradas (01 a 05) se apilan como tarjetas fijas que se cubren unas a otras al bajar.
- **Galería horizontal de servicios:** las ocho tarjetas de servicio se desplazan en horizontal mientras se baja la página, en pantallas medianas y grandes. En celular son un carrusel que se desliza con el dedo.
- **Revelación de proyectos vinculada al scroll:** las fotos de la nueva infraestructura forman un collage con capas a distinta velocidad (parallax). Las cifras de crecimiento cuentan desde cero, y las tarjetas de infraestructura e historias aparecen al entrar en pantalla.
- **Movimiento reducido:** con `prefers-reduced-motion: reduce` no hay telón, apilado, galería horizontal, parallax, conteo ni entrada del titular, y el video no arranca solo. Todo se ve completo en una composición estática legible.
- **Sin preloader ni cursor personalizado.** La página es HTML prerenderizado: un preloader solo retrasaría el primer contenido. Además, el portafolio se usa en celulares (táctil) y en proyección, donde un cursor propio no aporta.

**Fuera de alcance:**
- Reemplazar `/portafolio/`. Si la gerencia aprueba la vista previa, el reemplazo y el retiro de la ruta se harán en un change aparte.
- Las subpáginas del portafolio (unidades, hospitalización, programas, especialidades, infraestructura): conservan su diseño. Los enlaces de la vista previa llevan a ellas, y sus botones "Volver" siguen apuntando a `/portafolio/`.
- Cambios de contenido: textos, cifras, imágenes y enlaces salen de los mismos datos de `portfolio-home.ts`.
- Librerías de animación (GSAP, Framer Motion, Lenis, Three.js), scroll suave secuestrado, WebGL, preloader y cursor personalizado.
- El sitio público y su sistema de movimiento (`add-scroll-motion`).

**Features y rutas afectadas:**
- Feature `portfolio`: nuevos componentes de la portada cinematográfica y su exportación en `index.ts`. Los componentes y datos actuales no cambian.
- Ruta nueva `src/app/portafolio/vista-previa/page.tsx`. Ninguna otra ruta cambia.
- `src/app/globals.css`: utilidades de movimiento del portafolio cinematográfico dentro del bloque de movimiento existente.

## Capabilities

### New Capabilities
- `portfolio-cinematic`: portada cinematográfica del portafolio en ruta de vista previa. Cubre la entrada del titular, las secciones fijadas, la galería horizontal, el parallax y la revelación ligada al scroll, el control del video y el comportamiento con movimiento reducido, táctil y teclado.

### Modified Capabilities
<!-- Ninguna en openspec/specs/. Cumple las reglas de motion-accessibility (change add-scroll-motion) y de portfolio-site (change add-portafolio), que aún no están archivadas. -->

## Impact

- **Código:** componentes nuevos en `src/features/portfolio/components/cinematic/`, una página nueva y utilidades CSS. Se reutilizan `CountUp`, `ScrollProgress`, `Container`, `Section`, `Heading` y `Text`.
- **Dependencias:** ninguna nueva. JavaScript del cliente añadido: una isla pequeña para el control del video (menos de 2 KB).
- **Rendimiento:** solo se anima `transform` y `opacity`. El Lighthouse móvil de la vista previa no debe quedar por debajo del de `/portafolio/` actual.
- **Navegadores:** Chrome/Edge 115+, Safari 26+ y Firefox reciente animan. Sin soporte de animaciones ligadas al scroll se ve la composición estática.
- **Depende de:** `add-portafolio` (datos y layout del portafolio) y `add-scroll-motion` (bloque de movimiento en `globals.css`, `CountUp`, `ScrollProgress`).
