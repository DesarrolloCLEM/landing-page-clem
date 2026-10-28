# Design

## Context

- Ya existen los tokens de marca en `src/app/globals.css` (spec `brand-theme`), `cn()` en `src/lib/cn.ts` y la arquitectura por capas verificada por ESLint (spec `code-architecture`).
- `src/components/ui/` y `src/components/layout/` están vacíos (solo `.gitkeep`).
- La skill `create-ui-component` ya define el patrón de referencia: `cva` + `cn`, props nativas extendidas, `ref` como prop (React 19) y exports nombrados.
- `globals.css` aplica `text-navy` a todos los `h1`–`h6`. Eso rompe los encabezados dentro de secciones con fondo navy o primario.
- Motivación en proposal.md. Requisitos en `specs/ui-components`, `specs/layout-primitives` y `specs/component-catalog`.

## Goals / Non-Goals

**Goals:**
- Construir el conjunto mínimo de componentes que necesitan todas las páginas del inventario del sitio actual (hero, tarjetas de servicio, encabezados de sección, testimonios, horarios, formularios de contacto y PQRS).
- Que los colores de texto se adapten solos al fondo de la sección, sin que cada feature tenga que pensarlo.
- Cero JavaScript de cliente.

**Non-Goals:**
- No hay un componente polimórfico genérico (`asChild`/Slot). Los enlaces reutilizan las clases con `buttonVariants()`.
- No se cubren todas las variantes imaginables, solo las que el contenido actual necesita.

## Decisions

### D1. Inventario y API

**`components/ui`**

| Componente | Elemento | Variantes / props clave |
|---|---|---|
| `Button`, `buttonVariants` | `button` | `variant`: primary, secondary, ghost, emergency, inverse · `size`: sm, md, lg · `type="button"` por defecto |
| `TextLink` | `next/link` | `withArrow` (ícono `ArrowRight` decorativo) · subrayado al hover/foco |
| `Heading` | `h1`–`h6` | `as` (nivel semántico, obligatorio) · `size`: display, xl, lg, md, sm (visual) |
| `Text` | `p` / `span` | `size`: lead, body, small · `tone`: default, muted |
| `Eyebrow` | `p` | antetítulo en mayúsculas, color primario |
| `SectionHeading` | `div` + `Eyebrow` + `Heading` + `Text` | `eyebrow?`, `title`, `description?`, `titleId` (para `aria-labelledby`), `as` (h1/h2), `align`: start, center |
| `Badge` | `span` | `tone`: primary, health, emergency, neutral |
| `Card` + `CardMedia`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter` | `article` / `div` | `Card.interactive` resalta con `hover:` y `has-[a:focus-visible]:` · `CardTitle` acepta `as` |
| `IconBox` | `span aria-hidden` | `tone`: primary, health, emergency, accent · `size`: md, lg · el ícono va como `children` |
| `Label` | `label` | `required` muestra `*` decorativo (`aria-hidden`) |
| `Input`, `Textarea`, `Select` | nativos | estilos comunes; `aria-invalid:` pinta el borde de error; `Select` con chevron decorativo |
| `FormField` | `div` | `id`, `label`, `hint?`, `error?`, `required?`, `children` como función que recibe `{ id, required, "aria-invalid", "aria-describedby" }` |

**`components/layout`**

| Componente | Props clave |
|---|---|
| `Container` | `size`: default (`max-w-7xl`), narrow (`max-w-3xl`) · `px-4 sm:px-6 lg:px-8` |
| `Section` | `tone`: white, surface, primary, navy · `spacing`: default (`py-16 lg:py-24`), compact (`py-10 lg:py-14`) · `as`: section, div |
| `Grid` | `cols`: 1, 2, 3, 4 (mobile-first: `sm:grid-cols-2`, `lg:grid-cols-3/4`) · `gap`: sm, md, lg |
| `Stack` | `direction`: vertical, horizontal (siempre `flex-wrap`) · `gap`: xs…xl · `align`, `justify` |

Cada carpeta tiene un `index.ts` (barrel) y se importa como `@/components/ui` y `@/components/layout`.

### D2. Colores de texto que se adaptan al fondo (variables con alcance)

Se agregan a `@theme` tres tokens semánticos: `--color-heading: var(--color-navy)` y los fondos suaves `--color-health-50: #e7f6ed` y `--color-emergency-50: #feeceb`. Los `h1`–`h6` pasan de `text-navy` a `text-heading`.

En `tone="primary"` y `tone="navy"`, `Section` redefine las variables en su propio elemento: `[--color-heading:#fff] [--color-foreground:#fff] [--color-muted:var(--color-brand-100)]`. Las utilidades de Tailwind v4 leen `var(--color-*)`, así que todo lo que está dentro de la sección cambia de color sin que los hijos hagan nada.

Contrastes verificados: blanco sobre primario 5.85, `brand-100` sobre primario 4.75 y sobre navy 14.1.
- *Alternativa:* selectores descendientes del tipo `[&_h2]:text-white`. Se descarta porque son frágiles y no cubren `Text tone="muted"`.
- *Alternativa:* redefinir `--color-navy`. Se descarta porque también cambiaría el `bg-navy` de la propia sección.

### D3. Paletas de `Badge` e `IconBox`

| Tono | Badge (texto / fondo) | IconBox (ícono / fondo) |
|---|---|---|
| primary | `brand-700` / `brand-50` (8.7:1) | `primary` / `brand-50` (5.4:1) |
| health | `health-strong` / `health-50` (4.9:1) | `health` / `health-50` (3.2:1) |
| emergency | `emergency-strong` / `emergency-50` (4.9:1) | `emergency` / `emergency-50` (3.3:1) |
| neutral / accent | `foreground` / `surface` (14:1) | `navy` / `sky-accent` (8.3:1) |

Los íconos solo requieren 3:1 (contraste de elementos no textuales, WCAG 1.4.11).

### D4. Asociación de campos sin hooks

`FormField` recibe un `id` explícito y le pasa a su `children` (función) las props de accesibilidad: `aria-describedby` apunta a `${id}-hint` y/o `${id}-error`, y `aria-invalid` se activa cuando hay error. El error no usa `role="alert"`: se renderiza en el servidor junto con la página, así que basta con `aria-describedby`. El anuncio en vivo de errores será responsabilidad de la isla de cliente del formulario cuando exista (features de contacto y PQRS).
- *Alternativa:* `useId()` dentro del componente. Se descarta para mantener componentes de servidor sin hooks y con ids predecibles en el HTML.

### D5. Tarjeta interactiva sin JavaScript

`Card` con `interactive` usa `transition-shadow hover:shadow-card-hover has-[a:focus-visible]:shadow-card-hover has-[a:focus-visible]:ring-2 ring-primary`. La tarjeta no se vuelve un enlace gigante: el enlace sigue siendo "Más información", para no repetir todo el contenido de la tarjeta en el lector de pantalla.

### D6. Catálogo `/ui`

- La ruta `src/app/(dev)/ui/page.tsx` es delgada y compone `UiCatalog` desde `@/features/ui-catalog`.
- La feature `ui-catalog` tiene una sección por familia: acciones, texto, tarjetas, formularios y layout. Los textos de muestra viven en `data/`.
- Guardia en la página: `if (process.env.NODE_ENV === "production" && process.env.ENABLE_UI_CATALOG !== "true") notFound();`. Como la página es estática, se evalúa en build: sin la variable, la ruta queda como 404 y Next agrega `noindex`.
- `metadata.robots = { index: false, follow: false }` siempre.
- El grupo `(dev)` deja la ruta fuera del futuro layout público `(site)`.

### D7. Componentes `"use client"`

Ninguno. Todos los componentes son presentacionales; la interactividad visual (hover, foco, `has-[]`, `aria-invalid:`) se resuelve con CSS.

### D8. Sin tests unitarios en este change

Los componentes no tienen lógica, solo clases y atributos. Se verifican así:
- Inspeccionando el HTML generado: atributos `type`, `aria-*`, niveles de encabezado.
- Capturas del catálogo en 375 y 1440 px.
- Lighthouse Accessibility sobre `/ui` con un build de producción habilitado (`ENABLE_UI_CATALOG=true`).
- Navegación con teclado.

La infraestructura de tests (Vitest + Testing Library + axe, o Playwright) se propondrá en un change de QA.

### D9. Skill actualizada

`create-ui-component` agrega:
- El inventario de D1.
- La regla de colores semánticos de D2: usar `text-heading`, `text-foreground` y `text-muted` en lugar de `text-navy` o `text-white` dentro de componentes, para heredar el fondo.
- La obligación de añadir cada componente nuevo al catálogo.

## Risks / Trade-offs

- [Sobrescribir variables de color en `Section` podría afectar a componentes que esperan el valor original (p. ej. una `Card` blanca dentro de una sección navy mostraría texto blanco sobre blanco)] → `Card` restablece las variables a sus valores de marca en su propio elemento. Se verifica en el catálogo con una tarjeta dentro de una sección navy.
- [`has-[]` no funciona en navegadores muy antiguos] → solo afecta al resaltado decorativo; el foco del enlace se mantiene visible gracias a `:focus-visible` global.
- [La variable `ENABLE_UI_CATALOG` podría quedar activada por error en producción] → la página siempre lleva `noindex` y no aparecerá en el sitemap. El riesgo es solo de exposición de muestras, sin datos sensibles.
- [Cambiar `h1`–`h6` de `text-navy` a `text-heading`] → el valor por defecto es idéntico (`navy`), así que la página provisional no cambia. Se verifica con una captura.
