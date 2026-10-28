# Design

## Context

- Motivación y alcance: ver `proposal.md`. Requisitos: ver `specs/`.
- Estado actual: Server Components prerenderizados, Tailwind v4 con tokens en `globals.css`, header `sticky` en `components/layout/header.tsx`, carrusel de testimonios con `scroll-snap` nativo en la feature `home`, `Section` y `Card` como bloques repetidos.
- Línea base de Lighthouse móvil (mediana de 3 corridas, medida el 2026-10-28 en esta máquina con ruido alto): inicio 86, hospitalización 90, contacto 93, informes financieros 92. Accesibilidad, buenas prácticas y SEO: 100. JavaScript del cliente (`.next/static/chunks`): 697 774 B.
- Next 16.4 con React 19.3: `<ViewTransition>` funciona sin configuración y se activa en cada navegación (guía `view-transitions.md`).

## Goals / Non-Goals

**Goals:**
- Que el 90 % de las animaciones sean CSS puro, sin JavaScript.
- Que desactivar el movimiento sea una sola regla y que el contenido nunca dependa de una animación para verse.

**Non-Goals:**
- Un sistema de animación genérico con configuración por elemento; se ofrecen pocas utilidades fijas.
- Animar cada página al detalle: se aplica a los patrones repetidos (`Section`, `Card`, `StatCard`, hero).

## Decisions

### 1. Animaciones ligadas al scroll con CSS (`animation-timeline: view()`)
Las utilidades `motion-reveal`, `motion-stagger` y `motion-parallax` se definen en `globals.css` dentro de `@supports (animation-timeline: view())` y de `@media (prefers-reduced-motion: no-preference)`. Sin soporte o con movimiento reducido no existen, así que el estado por defecto ya es el contenido visible (degradación "gratis"). `animation-range: entry 0% entry 35%` hace que el revelado termine pronto y nunca deje contenido a medias.
- *Alternativa descartada:* `IntersectionObserver` con clases. Requiere JavaScript por elemento, oculta el contenido hasta hidratar y genera parpadeo.
- *Alternativa descartada:* Framer Motion/GSAP. Decenas de KB y viola el límite de 5 KB.

### 2. El revelado no oculta el contenido inicial
Los elementos ya visibles al cargar quedan dentro del rango `entry` ya cumplido, por lo que se muestran completos. Solo `opacity` y `transform` cambian; el layout no se mueve.

### 3. Escalonado con una variable CSS
`motion-stagger` usa `animation-delay` calculado con `calc(var(--i) * 80ms)`, topado a 400 ms. El índice `--i` lo pone `Grid` con `style` para sus hijos directos (Server Component, sin JS).

### 4. Parallax del hero con dos capas
La imagen usa `animation-timeline: scroll(root)` con `translateY` de hasta 80 px y el bloque de texto atenúa con `opacity` al salir. Se limita al hero del inicio.

### 5. Barra de progreso con CSS puro (sin prop por página)
`ScrollProgress` es un `div` decorativo (`aria-hidden`) con `animation: grow linear; animation-timeline: scroll(root)` y `transform: scaleX`. No necesita JavaScript, así que **no** es isla cliente: es un Server Component. Se muestra solo si la página supera 1,5 pantallas, con `@container`/`@supports` sobre la altura del documento no disponibles; para ocultarla en páginas cortas se usa una prop `enabled` que cada página larga activa a través de `PageHeader`.

### 6. Header compacto con CSS
Se usa `animation-timeline: scroll(root)` con `animation-range: 0 48px`, animando `transform`/`opacity` de una capa de fondo y escalando el logo con `transform`. La altura real del header se mantiene constante para evitar CLS; el "compactarse" es visual (escala del contenido y sombra). Un `position: sticky` ya existente no cambia.
- *Alternativa descartada:* cambiar `height` con una clase por JavaScript. Provoca recálculo de layout y CLS.

### 7. Cifras que cuentan: única isla cliente de conteo
`CountUp` (`"use client"`, ~1 KB) recibe el valor final como texto del servidor, lo deja en el HTML y, tras hidratar y entrar en pantalla (`IntersectionObserver`), anima con `requestAnimationFrame` hasta el valor y se detiene. Para lectores de pantalla el nodo animado es `aria-hidden` y un `span.sr-only` conserva el valor final. Con movimiento reducido no anima.
- Justificación de `"use client"`: el conteo necesita temporización y observar la visibilidad, que CSS no puede hacer con números.

### 8. Carrusel con escala por `animation-timeline: view(inline)`
Cada tarjeta del carrusel de testimonios anima `scale` y `opacity` según su posición dentro del contenedor con scroll horizontal (`view-timeline` del eje inline). Mantiene el `scroll-snap` actual. Solo móvil (donde el carrusel existe).

### 9. Transiciones de página: solo imagen compartida
Se usa `<ViewTransition name={...} share="auto" default="none">` en la imagen de las tarjetas de servicio y en la imagen de `PageHeader` de la ficha, con un nombre derivado de la URL (`transitionName(href)`). Estilos `::view-transition-*` en `globals.css` de 150 ms bajo `prefers-reduced-motion: no-preference`; con movimiento reducido las animaciones se anulan.
- *Descartado tras probarlo:* un `<ViewTransition>` general en el layout o en `template.tsx` para hacer un fundido en toda navegación. En el build de producción rompía la restauración del scroll con el botón atrás (2619 → 25 px en lugar de volver a ~2868) y añadía ~170 ms a cada navegación. Sin ese envoltorio el scroll se restaura y la navegación por menú es instantánea.

### 10. Componentes de `ui` y `layout`
- **Se reutilizan:** `Section`, `Container`, `Grid`, `Card`, `StatCard`, `TestimonialCard`, `PageHeader`, `Header`.
- **Se crean:** `ScrollProgress` (layout, Server Component) y `CountUp` (ui, isla cliente).
- **Islas `"use client"`:** solo `CountUp`.

## Risks / Trade-offs

- [Lighthouse ya está en el límite y es ruidoso] → Se mide una línea base de 3 corridas por página antes de empezar y la comparación se hace con la mediana; si una animación empeora el LCP se retira.
- [Soporte desigual de `animation-timeline`] → Todo bajo `@supports`; sin soporte el sitio queda como hoy.
- [Animaciones que ocultan contenido a motores de búsqueda o impresión] → El estado base es visible; se agrega regla `@media print` que anula las animaciones.
- [Fatiga o mareo por exceso de movimiento] → Recorridos cortos (≤ 32 px), duración ≤ 600 ms, solo al entrar, sin bucles.
- [View Transitions con enlaces externos o descargas] → Solo afectan navegaciones internas de Next.

## Migration Plan

1. Medir la línea base de Lighthouse y de tamaño de JavaScript.
2. Implementar por grupos, cada uno con su commit; todo detrás de utilidades CSS, así que se puede retirar quitando una clase.
3. **Rollback:** eliminar el bloque `@layer motion` de `globals.css` apaga todas las animaciones CSS; `CountUp` y `ViewTransition` se retiran sin tocar contenido.

## Open Questions

- Intensidad del movimiento (sutil vs. marcado). Se parte de valores sutiles; se ajustan tras verlo en el celular.
