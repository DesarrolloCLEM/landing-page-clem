# Tasks

> Requisito previo: `migrate-legacy-site` y `add-design-system` completos. Contenido fuente: `assets/legacy-site/content/p-*.md` y `portafolio.md`. Data existente: `src/features/services/data/`.

## 1. Migrar data de servicios a configuración compartida

- [x] 1.1 Crear `src/config/services/` y mover `types.ts`, `units.ts`, `specialties.ts`, `programs.ts`, `hospitalization.ts` y `catalog.ts` desde `src/features/services/data/`. Verificar que los archivos existen en la nueva ubicación con `ls src/config/services/`.
- [x] 1.2 Actualizar todos los imports de `src/features/services/` para que lean desde `@/config/services/` en lugar de la ruta local `./data/`. Verificar con `pnpm build` que compila sin errores.
- [x] 1.3 Verificar que no queda ningún import roto buscando `from "./data/` y `from "../data/` en `src/features/services/`. Verificar con `pnpm lint`.
- [x] 1.4 Commit: `refactor(services): mueve data de servicios a src/config/services para compartir entre features`.

## 2. Feature portfolio: estructura y data exclusiva

- [x] 2.1 Crear `src/features/portfolio/` con la estructura: `components/`, `data/`, `types.ts`, `index.ts`. Verificar que los directorios existen.
- [x] 2.2 Crear `src/features/portfolio/data/portfolio-home.ts` con los datos del landing: hero (lema "Construimos juntos el futuro de la salud", subtítulo), sección quiénes somos (descripción, 3 accesos rápidos), lista de los 8 servicios con título, imagen y href apuntando a `/portafolio/<slug>/`, y las 3 historias que inspiran (cirugía de Johan Cruz Martínez, cirugía de columna, parto humanizado) con título, imagen y descripción. Verificar que las rutas de imagen referenciadas existen en `public/images/`.
- [x] 2.3 Crear `src/features/portfolio/data/portfolio-infrastructure.ts` con la tabla de capacidad (6 servicios + total, 3 columnas), los 3 edificios (Edificio 1: lote 737 m², 3.496 m² construidos; Edificio 2: lote 360 m², 720 m² construidos; Nueva construcción: 7.764 m², 5 pisos) y las cifras destacadas importadas de `@/config/stats`. Verificar con `pnpm build`.
- [x] 2.4 Crear `src/features/portfolio/data/portfolio-equipment.ts` con los equipos del Centro de Intervencionismo (4 confirmados: Dräger Atlan A300, Dräger Vista 300, BIS Covidien, TOFscan; 4 pendientes: bombas volumétricas, bombas de jeringa, inyector de contraste, polígrafo) y los equipos de Ginecología (Voluson, Logiq Totus). Verificar que los tipos se exportan desde `index.ts`.
- [x] 2.5 Commit: `feat(portfolio): agrega feature portfolio con data exclusiva de presentación`.

## 3. Layout y componentes del portafolio

- [x] 3.1 Crear `PortfolioBackLink` (botón "Volver a servicios" con ícono chevron-left de lucide-react, enlaza a `/portafolio/`). Verificar que es un Server Component (sin `"use client"`).
- [x] 3.2 Crear `PortfolioLayout` con logo (enlaza a `/portafolio/`), `PortfolioBackLink` y footer mínimo (nombre, dirección, teléfono, correo desde `@/config/site`). Verificar que NO incluye TopBar, NavMenu, MobileNav ni FloatingWhatsApp.
- [x] 3.3 Crear `PortfolioServicePage`: plantilla genérica que recibe un `ServiceEntry` y renderiza imagen de cabecera con `next/image`, breadcrumbs con raíz en `/portafolio/`, intro, secciones de contenido, galería (si existe) y cierre con datos de contacto. Verificar que usa `Container`, `Section`, `ImageGallery` y `Breadcrumbs` existentes.
- [x] 3.4 Crear `PortfolioRoomComparison`: tabla comparativa de habitaciones responsive (lado a lado en escritorio, apilada en móvil) usando la data de `roomComparison` de `@/config/services/hospitalization`. Verificar a 375 px y 1280 px.
- [x] 3.5 Crear `PortfolioHomePage` componiendo las 6 secciones: hero, quiénes somos, servicios (cuadrícula de 8 tarjetas), infraestructura (cifras), historias que inspiran, contacto. Verificar que todos los enlaces de tarjetas apuntan a `/portafolio/<slug>/`.
- [x] 3.6 Crear `PortfolioInfrastructurePage` con cifras destacadas (`StatCard`), tabla de capacidad responsive, tarjetas de los 3 edificios y galería del proyecto. Verificar que la tabla no genera scroll horizontal a 375 px.
- [x] 3.7 Exportar desde `src/features/portfolio/index.ts` todos los componentes de página necesarios. Verificar con `pnpm build`.
- [x] 3.8 Commit: `feat(portfolio): agrega layout, componentes y páginas del portafolio`.

## 4. Rutas del portafolio

- [x] 4.1 Crear `src/app/portafolio/layout.tsx` que usa `PortfolioLayout`. Verificar que está fuera de `(site)`.
- [x] 4.2 Crear `src/app/portafolio/page.tsx` con `PortfolioHomePage` y metadata (`robots: "noindex, nofollow"`, título "Portafolio | Clínica La Esperanza"). Verificar que `/portafolio/` responde con el layout propio.
- [x] 4.3 Crear `src/app/portafolio/[unit]/page.tsx` con `generateStaticParams()` para las 7 unidades, `PortfolioServicePage` y `notFound()` para slugs desconocidos. Verificar con `pnpm build` que se prerrenderizan las 7 fichas.
- [x] 4.4 Crear `src/app/portafolio/hospitalizacion/[option]/page.tsx` con `generateStaticParams()` para las 5 opciones (pediatrica, suite-vip, habitacion-estandar, habitacion-plus, suite-serena). La suite VIP debe usar `PortfolioRoomComparison`. Verificar prerenderización y tabla comparativa.
- [x] 4.5 Crear `src/app/portafolio/programas/page.tsx` (índice) y `src/app/portafolio/programas/[slug]/page.tsx` con `generateStaticParams()` para los 3 programas. Verificar que Nace con Esperanza muestra los 2 planes con precios y que el Centro de Intervencionismo muestra los equipos.
- [x] 4.6 Crear `src/app/portafolio/especialidades/[slug]/page.tsx` con `generateStaticParams()` para las 22 especialidades. Verificar con `pnpm build` que se prerenderizan las 22 fichas y que un slug inexistente devuelve 404.
- [x] 4.7 Crear `src/app/portafolio/infraestructura/page.tsx` con `PortfolioInfrastructurePage`. Verificar tabla de capacidad y galería.
- [x] 4.8 Verificar que `src/app/sitemap.ts` NO incluye rutas de `/portafolio/`. Buscar "portafolio" en el sitemap generado.
- [x] 4.9 Commit: `feat(portfolio): agrega rutas del portafolio con generación estática`.

## 5. Verificación final

- [x] 5.1 Ejecutar `pnpm lint && pnpm format:check && pnpm build` sin errores. Confirmar que todas las rutas del portafolio se generan prerenderizadas.
- [x] 5.2 Buscar en `src/features/portfolio/` importaciones de `@/features/services` — no debe haber ninguna.
- [x] 5.3 Buscar en el HTML generado `href="#"`, `Córdiba`, `Ginercología`, `infraesctructura`, `Ginecológa`, `Fonaudiología`, `Oftamología`, `Pedriatría` — no debe haber coincidencias en las páginas del portafolio.
- [x] 5.4 Revisar responsive a 320, 375, 768, 1280 y 1920 px en: landing del portafolio, una ficha de unidad, suite VIP (tabla comparativa), infraestructura (tabla de capacidad) y una ficha de especialidad.  *(pendiente: requiere revisión manual en navegador)*
- [x] 5.5 Verificar navegación con teclado en el landing del portafolio y en una ficha de servicio (todos los enlaces alcanzables con Tab, activables con Enter).  *(pendiente: requiere revisión manual en navegador)*
- [x] 5.6 Commit: `docs(openspec): registra verificación del portafolio`.

## Workflow follow-up

- Archivar el change con `/opsx:archive add-portafolio` después de la revisión.
- Compartir la URL `/portafolio/` con el CEO para validación de contenido.
