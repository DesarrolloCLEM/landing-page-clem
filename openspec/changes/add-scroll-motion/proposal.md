# Proposal

## Why

El sitio nuevo ya es correcto y accesible, pero se siente estático: las secciones aparecen todas a la vez y cambiar de página es un corte brusco. Los sitios institucionales de 2026 usan movimiento ligado al scroll para guiar la lectura y dar sensación de calidad, también en móvil, desde donde llega la mayor parte del tráfico de una clínica. Se puede lograr sin librerías de animación usando CSS moderno (animaciones ligadas al scroll) y las transiciones de vista que ya trae React 19.3 en Next 16.

## What Changes

- **Revelado al hacer scroll:** secciones, tarjetas, imágenes y cifras entran con un desvanecimiento y desplazamiento corto cuando llegan a pantalla. Las tarjetas de una misma rejilla entran escalonadas.
- **Hero con profundidad:** la foto del inicio se desplaza más lento que el texto (parallax suave) y el contenido se atenúa al salir.
- **Barra de progreso de lectura** fija bajo el header en las páginas largas (servicios, políticas, preguntas frecuentes, infraestructura).
- **Header que se compacta** al bajar: reduce su altura y gana sombra.
- **Cifras que cuentan:** las cifras de capacidad suben desde cero la primera vez que entran en pantalla.
- **Carrusel de testimonios con escala:** la tarjeta centrada se agranda levemente al deslizar en móvil, sin avance automático.
- **Transiciones entre páginas:** fundido suave al navegar y la imagen principal de una ficha de servicio "viaja" desde su tarjeta del catálogo.
- **Preferencia de movimiento:** con `prefers-reduced-motion: reduce` no hay ninguna animación; el contenido se ve completo desde el inicio.
- **Degradación:** en navegadores sin soporte el contenido se ve completo y sin animar, nunca oculto.

**Fuera de alcance:**
- Librerías de animación (GSAP, Framer Motion, Lenis) y scroll secuestrado ("scrolljacking").
- Carruseles o animaciones que avancen solas, vídeo de fondo, cursor personalizado y efectos 3D/WebGL.
- Cambios de contenido, de rutas o de la identidad visual.
- Animaciones en formularios y en el menú (ya tienen sus propias transiciones).

**Features y rutas afectadas:**
- Estilos globales en `src/app/globals.css` (utilidades de movimiento) y `src/app/layout.tsx`.
- Componentes de `components/layout` (`Header`, `Section`, `Footer` no cambia), `components/ui` (`Card`, `StatCard`, `TestimonialCard`) y nuevas islas mínimas: `ScrollProgress` y `CountUp`.
- Features `home`, `services` y `about` solo para marcar elementos animables; sin cambios de contenido.
- No se crea ni se mueve ninguna ruta.

## Capabilities

### New Capabilities
- `scroll-reveal`: revelado, escalonado, parallax del hero, carrusel con escala y cifras animadas al entrar en pantalla.
- `scroll-feedback`: barra de progreso de lectura y header que se compacta al desplazarse.
- `page-transitions`: transiciones de vista entre páginas y de la imagen principal de los servicios.
- `motion-accessibility`: reglas transversales de movimiento (preferencia del sistema, degradación, rendimiento, sin avance automático).

### Modified Capabilities
<!-- Ninguna. ui-modernization (change migrate-legacy-site) ya exige no animar con movimiento reducido; este change lo cumple y lo concreta. -->

## Impact

- **Código:** CSS global, ajustes de clases en componentes existentes y dos islas cliente pequeñas. Sin dependencias nuevas.
- **Rendimiento:** las animaciones usan solo `opacity` y `transform` (compositor). Se mide Lighthouse antes y después en inicio, hospitalización, contacto e informes; no se acepta una caída frente a la línea base.
- **Navegadores:** Chrome/Edge 115+, Safari 26+ y Firefox reciente animan; el resto ve el sitio sin animación.
- **Depende de:** `migrate-legacy-site` (páginas y componentes que se animan).
