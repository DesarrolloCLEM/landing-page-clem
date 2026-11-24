# Design

## Context

- Motivación y alcance: ver `proposal.md`. Requisitos: ver `specs/portfolio-cinematic/spec.md`.
- **Layout del portafolio:**
  - `src/app/portafolio/layout.tsx` envuelve todas las rutas del portafolio en `PortfolioLayout`: barra superior, encabezado `sticky` de 64 px (80 px desde `sm`) y footer propio.
  - Una ruta estática `src/app/portafolio/vista-previa/` hereda ese layout sin tocarlo.
  - Prevalece sobre el segmento dinámico `[unit]`, que solo genera las siete unidades.
- **Portada actual:** `PortfolioHomePage` compone Server Components con los datos de `data/portfolio-home.ts`. Las únicas islas cliente son `Tabs` (Quiénes somos) y el menú del portafolio.
- **Hero actual:** usa un video decorativo de 13,7 MB (`/videos/portafolio-portada.mp4`) con `autoPlay loop muted` y sin control de pausa.
- **Sistema de movimiento** (change `add-scroll-motion`):
  - Utilidades CSS en `globals.css` dentro de `@media (prefers-reduced-motion: no-preference)` y `@supports (animation-timeline: view())`.
  - Regla de `@media print` que las anula.
  - `CountUp` (isla cliente).
  - `ScrollProgress` (CSS puro).
  - Límite de 5 KB de JavaScript y prohibición de librerías de animación.
  - Las animaciones ligadas al scroll ignoran `animation-delay`; el escalonado se hace desplazando `animation-range`.
- **Imágenes:** la imagen de la pestaña "Presentación" mide 410 × 280 px, demasiado pequeña para mostrarse grande.
- **Línea base de `/portafolio/`** (build de producción local, Lighthouse 12.8.2 móvil, 3 corridas, 2026-11-24):

  | Métrica | Valor |
  |---|---|
  | Rendimiento | 88 / 90 / 96 (mediana 90) |
  | Accesibilidad | 100 |
  | LCP (mediana) | 3453 ms |
  | CLS | 0 |
  | TBT (mediana) | 148 ms |
  | JavaScript del cliente (`.next/static/chunks`) | 718 505 B |

## Goals / Non-Goals

**Goals:**
- **Efectos de la opción C sin librerías:** telón, apilado, galería horizontal y parallax con CSS: `position: sticky` y animaciones ligadas al scroll.
- **Reversible:** la composición sin animaciones es una página normal y completa. Las animaciones solo se suman encima.
- **Fácil de aprobar y reemplazar:** si se aprueba, basta con que `/portafolio/page.tsx` renderice el nuevo componente.

**Non-Goals:**
- **Componentes compartidos:** no se generaliza nada para el sitio público. Las utilidades nuevas son del portafolio.
- **Rediseño del layout:** no se rediseñan el encabezado ni el footer del portafolio.
- **Contenido:** no se optimiza el video ni se reemplazan imágenes.

## Decisions

### 1. Efectos "cinematográficos" con CSS y no con GSAP, Framer Motion o Lenis
La skill premium-frontend-ui sugiere GSAP ScrollTrigger o Framer Motion para Next.js, y Lenis para el scroll suave. Aquí se descartan por tres motivos:
- violan el límite de 5 KB y la regla sin dependencias de animación de `motion-accessibility`;
- obligan a marcar secciones enteras como `"use client"`;
- Lenis cambia el scroll nativo, que la spec prohíbe.

Con CSS:
- **Fijado:** `position: sticky` funciona en todos los navegadores.
- **Movimiento ligado al scroll:** `animation-timeline` (`scroll()`, `view()` y líneas de tiempo con nombre) solo anima `transform` y `opacity`.

Sin soporte, el fijado puede quedar, pero lo que depende de una línea de tiempo no se activa.
- *Alternativa descartada:* GSAP con carga diferida solo en la vista previa. Sigue sumando unos 70 KB y necesitaría su propio manejo de movimiento reducido.

### 2. Una capa de utilidades `cine-*` en el bloque de movimiento existente
Las reglas nuevas se agregan a `globals.css` con prefijo `cine-` y dentro de las mismas guardas que `add-scroll-motion`:
- `prefers-reduced-motion: no-preference`;
- `@supports (animation-timeline: view())` para lo que usa líneas de tiempo;
- `min-width` cuando el efecto es solo de escritorio.

Fuera de esas guardas, la clase no existe y queda la composición estática. Esto cumple la spec sin JavaScript.

Ajustes durante la implementación:
- **Impresión:** el bloque usa `@media screen and (prefers-reduced-motion: no-preference)`. La impresión queda fuera de entrada, sin regla de impresión que mantener; también se evita que la galería horizontal se aplique en papel de 768 px o más.
- **Encabezado:** su altura se expone como variable `--portfolio-header-h` (4rem, y 5rem desde `sm`), y la usan todos los `top` fijados.
- **Anclas:** no llevan `scroll-margin-top` propio, porque el `scroll-padding-top: 6rem` global ya las deja debajo del encabezado.
- *Alternativa descartada:* un módulo CSS de la feature. Separaría las guardas de movimiento en dos lugares y el proyecto no usa módulos CSS.

### 3. Entrada del titular: palabras con máscara, en el servidor
El servidor divide el titular en palabras. El `h1` contiene:
- un `span.sr-only` con la frase completa;
- un `span aria-hidden` con cada palabra dentro de una máscara (`overflow: hidden`).

Cada palabra sube con `@keyframes` de tiempo (no de scroll): 600 ms y retraso `calc(var(--i) * 50ms)`. Con siete palabras, termina en unos 900 ms. Solo corre con `no-preference`, así que con movimiento reducido el titular se ve quieto desde el inicio.
- *Alternativa descartada:* SplitType u otra división en el cliente. Requiere JavaScript y produce un parpadeo antes de hidratar.

### 4. Telón: hero fijado dentro de un envoltorio con "Quiénes somos"
El hero (`sticky`, `top: var(--portfolio-header-h)`, `height: calc(100svh - var(--portfolio-header-h))`) y "Quiénes somos" (`relative`, `z-10`, fondo opaco) comparten un envoltorio. Así el hero deja de estar fijado cuando el envoltorio termina, en lugar de quedar debajo de toda la página.
- **Video:** se acerca con `scale` 1 → 1,08.
- **Contenido:** baja a `opacity: 0`.

Ambos usan `animation-timeline: scroll(root)` en el rango `0 100svh`. Se usa `svh` para que la barra del navegador móvil no haga saltar la altura.

### 5. Columnas fijadas en "Quiénes somos" (≥ 1024 px)
Grid de dos columnas. La izquierda (título, subtítulo, descripción y accesos) es `lg:sticky` con `self-start`, y la derecha apila:
- la imagen de presentación con parallax interno;
- los motivos para elegir la clínica;
- las cifras de capacidad con `CountUp`.

La imagen de "Presentación" (410 × 280 px) se muestra con un tamaño máximo de unos 410 px de ancho, para que no se vea pixelada. Las cifras de "Crecimiento" son las mismas que las de la nueva infraestructura, así que se muestran una sola vez, en esa sección (la spec lo permite).

### 6. Unidades apiladas: `sticky` por tarjeta y línea de tiempo con nombre del contenedor (≥ 768 px)
Cada `li` es `sticky` con `top: calc(var(--portfolio-header-h) + 1.5rem + var(--i) * 0.75rem)` y una altura máxima que cabe en pantalla. Una tarjeta `sticky` no tiene una línea de tiempo `view()` útil, porque nunca sale de pantalla. Por eso:
- la lista declara `view-timeline: --cine-stack`;
- cada tarjeta se reduce (`scale` 1 → 0,92) y atenúa en el tramo `contain` que corresponde a la llegada de la siguiente, con rangos derivados de `--i`;
- la última tarjeta no se anima.

En celular es una lista con revelación simple.

### 7. Galería horizontal: sección alta, contenedor `sticky` y pista trasladada (≥ 768 px)
- **Sección:** su altura (`calc(var(--count) * 55svh)`) define cuánto scroll vertical dura el recorrido, y declara `view-timeline: --cine-hscroll`.
- **Contenedor:** es `sticky` y ocupa la pantalla bajo el encabezado, con `overflow: hidden`.
- **Pista** (`width: max-content`): anima `transform: translateX(calc(-100% + 100vw - 2 * gutter))` en el rango `contain`. El porcentaje se calcula sobre la propia pista, así que no se necesita medir con JavaScript.

Variantes según el contexto:

| Contexto | Comportamiento |
|---|---|
| Celular (< 768 px) | Sin esas reglas: es el carrusel `overflow-x: auto` + `scroll-snap` que ya usa el sitio, con `motion-carousel`. |
| Movimiento reducido o sin soporte | Cuadrícula de 2 o 4 columnas. |

**Teclado:** cuando hay foco visible dentro (`:has(:focus-visible)`), la pista pierde la animación, la sección vuelve a su altura natural y el contenedor pasa a `overflow-x: auto`. Así el navegador puede llevar la tarjeta enfocada a la vista. Es un salto visual solo para quien navega con teclado, a cambio de que el foco nunca quede fuera de pantalla.

### 8. Collage de la nueva infraestructura y revelación
Las fotos de `projectImages` se reparten en tres columnas. La columna central se desplaza más lento y las laterales más rápido (`translateY` de hasta ±60 px), con `animation-timeline: view()` sobre la sección. Las tarjetas de infraestructura institucional y de historias usan `motion-stagger`, que ya existe. Las cifras de crecimiento usan `CountUp`. Los títulos y párrafos no llevan animación, según la spec.

### 9. Video del hero: única isla cliente nueva (`CinematicHeroVideo`)
`"use client"` (~1 KB). El servidor renderiza `<video muted loop playsInline preload="metadata" poster>`, sin `autoPlay`. Tras hidratar:
- si `prefers-reduced-motion` es `no-preference`, llama a `play()`;
- en caso contrario, se queda en el póster.

El botón pausa y reanuda, con `aria-pressed` y la etiqueta "Pausar video" o "Reproducir video", y mide 44 × 44 px.
- **Justificación de `"use client"`:** reproducir y pausar un video y leer la preferencia de movimiento para decidir si arranca requieren JavaScript. Además, WCAG 2.2.2 exige poder pausar contenido en movimiento de más de 5 s.
- *Alternativa descartada:* mantener `autoPlay` como la portada actual. Ignora el movimiento reducido y no se puede pausar.

### 10. Sin preloader ni cursor personalizado
- **Preloader:** la página es HTML prerenderizado, y el póster del video y la primera imagen llevan `priority`. Un preloader solo taparía contenido ya listo y empeoraría el LCP.
- **Cursor personalizado:** no aporta en pantallas táctiles ni con el control remoto de una presentación, y obliga a JavaScript permanente.

### 11. Estructura de archivos
- `src/features/portfolio/components/cinematic/` (Server Components salvo el video):
  - `cinematic-home-page.tsx`
  - `cinematic-hero.tsx`
  - `cinematic-hero-video.tsx`
  - `cinematic-who-we-are.tsx`
  - `cinematic-services.tsx` (apilado y galería)
  - `cinematic-infrastructure.tsx`
  - `cinematic-stories.tsx`
  - `cinematic-contact.tsx`
- **Barril:** `src/features/portfolio/index.ts` exporta `PortfolioCinematicHomePage`.
- **Página:** `src/app/portafolio/vista-previa/page.tsx` es delgada: metadata `noindex, nofollow` y el componente.
- **Datos:** sin archivos nuevos, se reutiliza `data/portfolio-home.ts`.

### 12. Componentes de `components/ui` y `components/layout`
- **Se reutilizan:** `Container`, `Section`, `Heading`, `Text`, `Eyebrow`, `Badge`, `IconBox`, `CountUp`, `ScrollProgress`.
- **Se crean:** ninguno. Los componentes nuevos son específicos de la feature `portfolio`.
- **Islas `"use client"` nuevas:** solo `CinematicHeroVideo`.

## Risks / Trade-offs

- **[Soporte desigual de `animation-timeline`]** → Todo lo que depende de una línea de tiempo está bajo `@supports`. Sin soporte, la galería es cuadrícula o carrusel y nada queda oculto. Se prueba en Chrome, Safari y Firefox.
- **[Mareo o fatiga por exceso de movimiento]** → Recorridos cortos: zoom ≤ 8 %, parallax ≤ 60 px y escala de apilado ≥ 0,92. Sin bucles ni avance automático, salvo el video, que se puede pausar.
- **[Galería horizontal en pantallas medianas con poca altura (tablet horizontal)]** → La altura de las tarjetas se limita con `min()` respecto de `svh`. Si no caben, la regla se limita a `min-height` de pantalla mediante `@media (min-height: 640px)`.
- **[LCP del titular animado]** → El póster del video es el elemento mayor del hero. Si Lighthouse muestra que el titular se vuelve el LCP y empeora, se acorta la entrada o se reduce a solo `transform` sin máscara.
- **[Video de 13,7 MB]** → No cambia respecto de `/portafolio/`; queda igual en la comparación. Optimizarlo queda fuera de alcance y se anota para el reemplazo.
- **[El menú del portafolio apunta a `/portafolio/#...`]** → Desde la vista previa, el menú lleva a la portada actual. Es aceptable para una revisión. Las anclas de la vista previa usan los mismos `id`, así que funcionarán al reemplazar.
- **[Salto visual al tabular en la galería]** → Es intencional (decisión 7). Solo pasa con foco de teclado.

## Migration Plan

1. Medir la línea base de Lighthouse móvil de `/portafolio/` (mediana de 3 corridas) y el tamaño de JavaScript del cliente.
2. Implementar por grupos, cada uno con su commit en `develop`. La vista previa se publica en Vercel en `/portafolio/vista-previa/` y se comparte con la gerencia.
3. **Si se aprueba** (change aparte):
   - `/portafolio/page.tsx` pasa a renderizar `PortfolioCinematicHomePage`;
   - se elimina la ruta `vista-previa`;
   - se retiran `PortfolioHero`, `PortfolioWhoWeAre` y la portada anterior si quedan sin uso.
4. **Si se rechaza:** se borran la carpeta `cinematic/`, la ruta y el bloque `cine-*` de `globals.css`, sin afectar nada más.

## Open Questions

- **Intensidad del movimiento:** se parte de valores moderados y se ajusta después de que la gerencia lo vea en el proyector y en el celular.
