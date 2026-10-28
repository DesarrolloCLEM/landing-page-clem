## Resumen

<!-- ¿Qué cambia y por qué? 2-3 líneas. -->

## Change de OpenSpec

<!-- Nombre del change en openspec/changes/ (p. ej. `add-home-page`). Obligatorio para cambios funcionales. -->

- Change:
- Tareas cubiertas en este PR:

## Tipo de cambio

- [ ] `feat`: nueva funcionalidad o página
- [ ] `fix`: corrección de un error
- [ ] `refactor`: cambio de código sin cambio de comportamiento
- [ ] `style`: cambios visuales o de formato
- [ ] `docs`: documentación
- [ ] `build` / `chore` / `ci`: herramientas, dependencias o configuración

## Capturas

<!-- Obligatorio si cambia algo visible. -->

| Móvil (375 px) | Escritorio (1440 px) |
| -------------- | -------------------- |
|                |                      |

## Lista de verificación

- [ ] `pnpm lint` y `pnpm format:check` pasan
- [ ] `pnpm build` pasa y las rutas nuevas aparecen como prerenderizadas (○)
- [ ] Solo hay `"use client"` en islas interactivas pequeñas y está justificado en el design del change
- [ ] Se respeta la arquitectura: rutas delgadas, features aisladas, componentes genéricos en `components/`
- [ ] Código en inglés; textos visibles, commits y PR en español
- [ ] Accesibilidad: HTML semántico, textos alternativos, foco visible, navegable con teclado
- [ ] SEO: la página nueva tiene `metadata` (título y descripción)
- [ ] El contenido coincide con el del sitio actual (https://clinicalaesperanza.co/)
- [ ] Revisado en móvil y escritorio sin scroll horizontal

## Notas para la revisión

<!-- Decisiones, dudas o puntos a revisar con más cuidado. -->
