# Tasks

## 1. Tokens semánticos y primitivas de layout

- [x] 1.1 Agregar a `@theme` `--color-heading`, `--color-health-50` y `--color-emergency-50`, y cambiar la regla base de `h1`–`h6` a `text-heading` (design D2). Verificar con `pnpm build` y una captura de `/` que la página provisional se ve igual.
- [x] 1.2 Crear `Container` y `Section` (tonos white/surface/primary/navy con redefinición de variables, espaciado default/compact, `as`) en `src/components/layout/`. Verificar en el HTML generado que `Section tone="navy"` lleva las variables `--color-heading`, `--color-foreground` y `--color-muted`.
- [x] 1.3 Crear `Grid` (cols 1–4 mobile-first, gap) y `Stack` (direction, gap, align, justify, wrap). Agregar el barrel `src/components/layout/index.ts` y quitar el `.gitkeep`. Verificar que `pnpm lint` y `pnpm build` pasan.
- [x] 1.4 Commit: `feat(layout): agrega Container, Section, Grid y Stack con tonos de marca`.

## 2. Acciones y tipografía

- [x] 2.1 Crear `Button` y `buttonVariants` (5 variantes, 3 tamaños, `min-h-11`, `type="button"` por defecto) siguiendo el ejemplo de la skill. Verificar en el HTML que un `Button` sin `type` renderiza `type="button"`.
- [x] 2.2 Crear `TextLink` (sobre `next/link`, `withArrow` con ícono `aria-hidden`). Verificar en el HTML que el ícono lleva `aria-hidden="true"`.
- [x] 2.3 Crear `Heading` (`as` obligatorio + `size` visual), `Text` (size/tone), `Eyebrow` y `SectionHeading` (`titleId` para `aria-labelledby`, `align`). Verificar que `<Heading as="h3" size="sm">` genera un `<h3>` con las clases del tamaño sm.
- [x] 2.4 Crear el barrel `src/components/ui/index.ts` con los componentes anteriores y quitar el `.gitkeep`. Verificar que `pnpm lint` y `pnpm build` pasan.
- [x] 2.5 Commit: `feat(ui): agrega Button, TextLink y componentes de tipografía`.

## 3. Contenido

- [x] 3.1 Crear `Badge` (tonos primary/health/emergency/neutral, design D3). Verificar con el script de contraste que cada combinación de texto es ≥ 4.5:1.
- [x] 3.2 Crear `IconBox` (tonos y tamaños, envoltura `aria-hidden`). Verificar en el HTML que el `span` lleva `aria-hidden="true"`.
- [x] 3.3 Crear `Card`, `CardMedia`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent` y `CardFooter` (variante `interactive` con `hover:` y `has-[a:focus-visible]:`, restableciendo las variables de color en la tarjeta). Verificar que el CSS generado contiene la regla `:has(a:focus-visible)`.
- [x] 3.4 Exportar los componentes nuevos en `@/components/ui`. Verificar que `pnpm lint` y `pnpm build` pasan.
- [x] 3.5 Commit: `feat(ui): agrega Badge, IconBox y Card`.

## 4. Formularios

- [x] 4.1 Crear `Label` (indicador `*` con `aria-hidden` cuando es obligatorio), `Input`, `Textarea` y `Select` (estilos comunes, `min-h-11`, borde de error con `aria-invalid:`, chevron decorativo en `Select`). Verificar que `pnpm build` pasa.
- [x] 4.2 Crear `FormField` (`id`, `label`, `hint`, `error`, `required`, children como función; design D4). Verificar en el HTML que un campo con error tiene `aria-invalid="true"` y un `aria-describedby` que apunta a los ids de ayuda y error existentes.
- [x] 4.3 Exportar los componentes de formulario en `@/components/ui`. Verificar que `pnpm lint` y `pnpm build` pasan.
- [x] 4.4 Commit: `feat(ui): agrega componentes de formulario accesibles`.

## 5. Catálogo `/ui`

- [x] 5.1 Crear la feature `src/features/ui-catalog/` con `data/` (textos de muestra) y una sección por familia: acciones, tipografía, contenido, formularios y layout (incluyendo una `Card` dentro de una `Section tone="navy"` y botones `inverse` sobre `tone="primary"`). Verificar que `pnpm lint` pasa.
- [x] 5.2 Crear `src/app/(dev)/ui/page.tsx` con la guardia `notFound()` en producción salvo `ENABLE_UI_CATALOG=true` y `robots: { index: false, follow: false }` (design D6). Verificar con `pnpm dev` que `/ui` muestra el catálogo.
- [x] 5.3 Verificar la guardia: `pnpm build && pnpm start` → `/ui` responde 404; `ENABLE_UI_CATALOG=true pnpm build && pnpm start` → `/ui` responde 200 y su HTML contiene `noindex`.
- [x] 5.4 Commit: `feat(ui-catalog): agrega catálogo interno de componentes en /ui`.

## 6. Documentación

- [x] 6.1 Actualizar `.claude/skills/create-ui-component/SKILL.md` con el inventario (design D1), la regla de colores semánticos (D2) y la obligación de agregar cada componente al catálogo. Verificar que el ejemplo de `Button` de la skill coincide con el código real.
- [x] 6.2 Commit: `docs(skills): actualiza create-ui-component con el inventario del sistema de diseño`.

## 7. Verificación final

- [x] 7.1 `pnpm lint`, `pnpm format:check` y `pnpm build` pasan; `/` sigue prerenderizada (○) y no hay `"use client"` en `src/components/` (verificar con `grep -r "use client" src/components` sin resultados).
- [x] 7.2 Capturas de `/ui` en 375 px y 1440 px: sin scroll horizontal, grillas con 1 y 4 columnas respectivamente, y texto legible en las secciones primary y navy.
- [x] 7.3 Lighthouse Accessibility ≥ 95 sobre `/ui` (build con `ENABLE_UI_CATALOG=true`), y recorrido con teclado: foco visible en botones, enlaces y campos, y resaltado de las tarjetas interactivas.
- [x] 7.4 `openspec validate add-design-system --strict` pasa.

## Workflow follow-up

- Abrir el PR de `feat/design-system` hacia `main` con la plantilla, cuando exista el remoto de GitHub.
- Archivar con `/opsx:archive add-design-system` después del merge.
- Siguiente change: `add-site-layout` (TopBar, Header, navegación, menú móvil, Footer y `src/config/site.ts`).
