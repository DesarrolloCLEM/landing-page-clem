# Design

## Context

El sitio ya tiene una feature `services` con toda la data de unidades, especialidades, programas y habitaciones en `src/features/services/data/`. Las imágenes están optimizadas en `public/images/`. Los componentes UI genéricos (`Card`, `Badge`, `ImageGallery`, `Breadcrumbs`, `StatCard`, etc.) y los componentes de layout (`Container`, `Section`, `Grid`, `Stack`, `PageHeader`, `CtaBand`) ya existen. El portafolio necesita reutilizar esta infraestructura sin romper el aislamiento de features (ver `code-architecture` spec).

El layout público del sitio vive en `src/app/(site)/layout.tsx` y usa `SiteLayout` (TopBar + Header + Footer + FloatingWhatsApp). El portafolio necesita un layout distinto: más limpio, sin la navegación principal, orientado a presentación.

## Goals / Non-Goals

**Goals:**
- Portafolio funcional como micrositio independiente con las 38 páginas prerenderizadas.
- Reutilización máxima de data y componentes existentes sin importar la feature `services`.
- Layout propio pensado para presentación (limpio, impactante, sin distracciones de navegación del sitio).
- Corrección de todos los defectos heredados del WordPress.

**Non-Goals:**
- No crear componentes UI nuevos si los existentes cubren el caso.
- No duplicar imágenes; se referencian las mismas de `public/images/`.
- No añadir interactividad más allá de la navegación (sin formularios, búsqueda ni filtros en el portafolio).
- No diseñar para impresión o descarga como PDF.

## Decisions

### 1. Grupo de rutas `portafolio` fuera de `(site)`

**Decisión:** Crear `src/app/portafolio/layout.tsx` como grupo de rutas de nivel superior, al mismo nivel que `(site)` y `(dev)`, con su propio layout.

**Alternativa descartada:** Meter el portafolio dentro de `(site)` con un layout anidado que oculte el header/footer. Descartada porque el layout de `(site)` ya renderiza `SiteLayout` y no es trivial condicionar su contenido; además, semánticamente el portafolio no es parte del sitio público.

**Alternativa descartada:** Route group `(portafolio)` sin segmento de URL. Descartada porque el portafolio necesita la URL `/portafolio/` como segmento visible.

### 2. Layout del portafolio: `PortfolioLayout`

**Decisión:** Crear un componente `PortfolioLayout` dentro de `src/features/portfolio/components/` que incluya:
- Logo de la clínica (enlaza a `/portafolio/`)
- Botón "Volver a servicios" con chevron (enlaza a `/portafolio/` desde cualquier sub-página)
- Footer mínimo: nombre de la clínica, dirección, teléfono, correo
- Sin TopBar, NavMenu, MobileNav, FloatingWhatsApp ni footer completo

**"use client":** No se necesita. El layout es un Server Component porque no tiene interactividad (no hay menú hamburguesa ni submenús desplegables). La navegación es solo enlaces estáticos.

### 3. Data compartida vía `src/config/` — no importar `services`

**Decisión:** La data de servicios que necesita el portafolio se accede de dos formas:
1. **Datos institucionales** (`site.ts`, `stats.ts`, `testimonials.ts`, `navigation.ts`): ya están en `src/config/`, el portafolio los importa directamente.
2. **Datos de contenido de servicios** (unidades, especialidades, programas, habitaciones): se crea `src/config/services-data.ts` que re-exporta la data cruda de servicios como un módulo de configuración compartido. La feature `services` y la feature `portfolio` importan ambos desde `src/config/`, no entre ellas.

**Alternativa descartada:** Duplicar toda la data en `src/features/portfolio/data/`. Descartada porque son ~2300 líneas de TypeScript idénticas que se desincronizarían.

**Alternativa descartada:** Importar directamente de `@/features/services`. Descartada porque viola la regla de aislamiento de features.

**Migración:** Mover los archivos de data (`units.ts`, `specialties.ts`, `programs.ts`, `hospitalization.ts`, `catalog.ts`, `types.ts`) de `src/features/services/data/` a `src/config/services/`. Actualizar los imports de `src/features/services/` para leer desde `src/config/services/`. La feature `portfolio` también importa desde `src/config/services/`.

### 4. Datos exclusivos del portafolio en `src/features/portfolio/data/`

**Decisión:** Los datos que NO existen en el sitio público se definen en la feature del portafolio:
- `portfolio-home.ts`: hero slides, sección quiénes somos, accesos rápidos, historias que inspiran
- `portfolio-infrastructure.ts`: tabla de capacidad por servicio, datos de los 3 edificios (lote, área construida, pisos)
- `portfolio-equipment.ts`: equipos del Centro de Intervencionismo (confirmados y pendientes), equipos de Ginecología (Voluson, Logiq Totus)

### 5. Componentes del portafolio: reutilizar UI existente

**Decisión:** No se crean componentes nuevos en `components/ui/` ni `components/layout/`. El portafolio usa los existentes:

**De `components/ui/`:** `Card`, `Badge`, `Heading`, `Text`, `Button`, `ImageGallery`, `Breadcrumbs`, `StatCard`, `ExternalLink`, `SocialIcon`.

**De `components/layout/`:** `Container`, `Section`, `Grid`, `Stack`, `PageHeader`, `CtaBand`, `SiteLogo`.

**Componentes específicos del portafolio** (en `src/features/portfolio/components/`):
- `PortfolioLayout`: layout con logo y footer mínimo (Server Component).
- `PortfolioHomePage`: composición de las 6 secciones del landing.
- `PortfolioServicePage`: plantilla genérica de ficha de servicio (hero, intro, secciones, galería, cierre). Recibe un `ServiceEntry` y lo renderiza.
- `PortfolioInfrastructurePage`: tabla de capacidad, edificios y galería.
- `PortfolioRoomComparison`: tabla comparativa de habitaciones (reutiliza la misma data de `roomComparison`).
- `PortfolioBackLink`: botón "Volver a servicios" con chevron.

**"use client":** Ningún componente del portafolio necesita `"use client"`. Todo el contenido es estático. Si se necesita un carrusel en el hero se puede reutilizar la isla existente del home, pero no es un requisito del spec.

### 6. Rutas del portafolio y generación estática

**Decisión:** Estructura de archivos en `src/app/portafolio/`:

```
portafolio/
  layout.tsx                              ← PortfolioLayout
  page.tsx                                ← PortfolioHomePage
  [unit]/page.tsx                         ← PortfolioServicePage (7 unidades)
  hospitalizacion/
    [option]/page.tsx                     ← PortfolioServicePage (pediatrica, suite-vip, habitaciones)
  programas/
    page.tsx                              ← índice de programas
    [slug]/page.tsx                       ← PortfolioServicePage (3 programas)
  especialidades/
    [slug]/page.tsx                       ← PortfolioServicePage (22 especialidades)
  infraestructura/page.tsx                ← PortfolioInfrastructurePage
```

Cada ruta dinámica exporta `generateStaticParams()` para prerenderizar en build. La función `notFound()` se invoca si el slug no existe.

### 7. Metadata: noindex y títulos

**Decisión:** Cada página exporta metadata con `robots: "noindex, nofollow"`. El título sigue el patrón `"<Nombre de servicio> | Portafolio | Clínica La Esperanza"`. No se incluyen estas rutas en `src/app/sitemap.ts`.

### 8. Corrección de defectos

**Decisión:** Los defectos se corrigen en la data, no en los componentes:
- Errores ortográficos: la data compartida en `src/config/services/` ya tiene los textos corregidos (la corrección se hizo en `migrate-legacy-site`).
- Botones `#`: se eliminan o se apuntan a la ruta del portafolio correspondiente.
- Texto duplicado: cada tarjeta de servicio usa su `summary` propio.
- Cifras inconsistentes: se leen de `src/config/stats.ts`.

## Risks / Trade-offs

- **[Data movida a config]** Mover los archivos de data de `services` a `src/config/services/` toca muchos imports de la feature `services`. → Mitigación: el cambio es mecánico (buscar-reemplazar de ruta de importación), se verifica con `pnpm build`.
- **[38 páginas prerenderizadas]** El build crece en ~10-15 s. → Aceptable para el tamaño del proyecto. Si escala, se puede pasar a ISR, pero el contenido es estático.
- **[Datos desincronizados]** Si alguien cambia la data en `src/config/services/` sin revisar el portafolio, podría verse contenido incorrecto. → Mitigación: es la misma data, así que el portafolio se actualiza automáticamente. Los datos exclusivos del portafolio (historias, equipos, edificios) no cambian con frecuencia.
- **[URL descubrible]** El portafolio no está protegido con contraseña; cualquiera con la URL puede verlo. → Aceptado por el usuario: la privacidad es por no publicar el enlace, no por restricción de acceso.
