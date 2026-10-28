# Proposal

## Why

Las páginas de la clínica (home, servicios, sobre nosotros, usuarios, contacto...) repiten los mismos bloques: botones de llamada a la acción, tarjetas de servicio, encabezados de sección, campos de formulario y secciones con fondo de color. Si no existen componentes genéricos antes de construirlas, cada feature reinventará estilos y la UI terminará inconsistente. Además, la skill `create-ui-component` ya exige este patrón, pero no hay ningún componente que lo siga.

## What Changes

- Se agregan componentes genéricos en `src/components/ui/`, exportados desde `@/components/ui`:
  - **Acciones y texto:** `Button` (+ `buttonVariants` para enlaces), `TextLink`, `Heading`, `Text`, `Eyebrow`, `SectionHeading`.
  - **Contenido:** `Badge`, `Card` (`Card`, `CardMedia`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`), `IconBox`.
  - **Formularios:** `Label`, `Input`, `Textarea`, `Select`, `FormField`.
- Se agregan primitivas de maquetación en `src/components/layout/`, exportadas desde `@/components/layout`: `Container`, `Section`, `Grid` y `Stack`.
- Se agrega un catálogo interno de componentes en `/ui`, que muestra cada componente con sus variantes y estados. **No está disponible en producción** salvo que se habilite de forma explícita.
- Se actualiza la skill `create-ui-component` con el inventario real de componentes.

**Fuera de alcance:**
- Header, TopBar, navegación, menú móvil y Footer (change `add-site-layout`).
- Componentes con estado propio, como carrusel o acordeón con estado. Se crean cuando una feature los necesite.
- Validación de formularios y Server Actions (llegan con las features de contacto y PQRS).
- Infraestructura de tests automatizados (change de QA posterior).
- Contenido real de la clínica.

**Features y rutas afectadas:**
- Feature nueva `src/features/ui-catalog/`, que contiene las secciones de demostración del catálogo.
- Ruta nueva `src/app/(dev)/ui/page.tsx`.
- No se toca ninguna ruta pública del sitio.

## Capabilities

### New Capabilities
- `ui-components`: comportamiento visible y accesible de los componentes genéricos de interfaz: acciones, texto, tarjetas y controles de formulario.
- `layout-primitives`: reglas de ancho, márgenes laterales, espaciado vertical y fondos de sección que comparten todas las páginas.
- `component-catalog`: página interna para revisar los componentes y su disponibilidad según el entorno.

### Modified Capabilities
<!-- Ninguna. brand-theme no cambia: los componentes consumen sus tokens sin alterar requisitos. -->

## Impact

- **Código:** archivos nuevos en `src/components/ui/`, `src/components/layout/`, `src/features/ui-catalog/` y `src/app/(dev)/ui/`; se actualiza `.claude/skills/create-ui-component/SKILL.md`.
- **Dependencias:** ninguna nueva. Se usan `class-variance-authority`, `clsx`, `tailwind-merge` y `lucide-react`, ya instalados.
- **Variable de entorno nueva (opcional):** `ENABLE_UI_CATALOG=true` publica el catálogo en un build de producción (para revisiones o Lighthouse).
- **Rendimiento:** todos son Server Components, así que no agregan JavaScript al cliente.
