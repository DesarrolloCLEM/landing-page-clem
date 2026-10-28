# Tasks

## 1. Commit inicial y estructura `src/`

- [ ] 1.1 Crear el commit inicial con el estado actual (create-next-app + OpenSpec), usando el mensaje `chore: estado inicial de create-next-app y OpenSpec`. Verificar que `git log` muestra un commit.
- [ ] 1.2 Mover `app/` a `src/app/`, cambiar el alias en `tsconfig.json` a `"@/*": ["./src/*"]` y crear `src/components/ui`, `src/components/layout`, `src/features`, `src/config` y `src/lib` con `.gitkeep`. Verificar que `pnpm build` pasa.
- [ ] 1.3 Eliminar el contenido demo: SVGs de `public/` y JSX de ejemplo en `page.tsx`. Verificar con `grep -r "vercel\|next.svg" src public` sin resultados.
- [ ] 1.4 Commit: `refactor: mueve el código a src y elimina contenido de ejemplo`.

## 2. Tema de marca

- [ ] 2.1 Instalar `clsx`, `tailwind-merge`, `class-variance-authority` y `lucide-react`. Crear `src/lib/cn.ts`. Verificar que `pnpm build` pasa.
- [ ] 2.2 Reescribir `src/app/globals.css` con `@theme`: escala `brand` basada en `#1166b5`, `sky-accent`, `health`, `navy`, `emergency`, `surface`, `--font-heading`, `--font-body`, radios y sombras. Quitar el bloque de modo oscuro. Verificar que las clases `bg-brand-500` y `text-navy` generan CSS en el build.
- [ ] 2.3 Crear `src/config/fonts.ts` con Nunito (títulos) y Nunito Sans (texto) vía `next/font/google` y `display: "swap"`. Verificar en DevTools que las fuentes se sirven desde `/_next/static`.
- [ ] 2.4 Actualizar `src/app/layout.tsx` con `lang="es-CO"`, las variables de fuente y la metadata base (`title.template: "%s | Clínica La Esperanza"`, `title.default`, `description` en español). Verificar en el HTML generado `lang="es-CO"` y el título.
- [ ] 2.5 Crear una página provisional en `src/app/page.tsx` (Server Component) que muestre el nombre de la clínica, el lema y un bloque de muestra de los colores de marca. Verificar visualmente con el SO en modo oscuro que la página sigue en tema claro.
- [ ] 2.6 Commit: `feat(theme): agrega tokens de marca, fuentes y layout raíz en español`.

## 3. Calidad de código y arquitectura

- [ ] 3.1 Instalar y configurar Prettier con `prettier-plugin-tailwindcss` (`.prettierrc.json`, `.prettierignore`, scripts `format` y `format:check`). Formatear todo. Verificar que `pnpm format:check` pasa.
- [ ] 3.2 Instalar `eslint-plugin-boundaries` y `eslint-import-resolver-typescript`, y configurar en `eslint.config.mjs` los elementos `app`, `feature`, `component`, `config` y `lib`, más las reglas de dependencias y `entry-point` (design D3). Verificar que `pnpm lint` pasa.
- [ ] 3.3 Comprobar las reglas con archivos de prueba temporales: una feature `a` que importa la feature `b`, un componente que importa una feature, y una página que importa un archivo interno de una feature. Verificar que `pnpm lint` falla en los tres casos, borrar los archivos y confirmar que vuelve a pasar.
- [ ] 3.4 Commit: `build: agrega prettier y reglas de arquitectura en eslint`.

## 4. Flujo de contribución

- [ ] 4.1 Instalar `husky`, `@commitlint/cli` y `@commitlint/config-conventional`; ejecutar `husky init`. Crear `commitlint.config.mjs` con `subject-case` desactivado y la regla local `subject-spanish` (design D8). Verificar con `echo "feat(home): add hero" | pnpm commitlint` que falla, y con `echo "feat(home): agrega hero" | pnpm commitlint` que pasa.
- [ ] 4.2 Configurar `.husky/commit-msg` (commitlint) y `.husky/pre-commit` (`pnpm lint && pnpm format:check`). Verificar que un `git commit -m "agrega cosas"` se rechaza.
- [ ] 4.3 Crear `.github/pull_request_template.md` en español con: resumen, change de OpenSpec, tipo de cambio, capturas móvil/escritorio y checklist (lint, build, accesibilidad, Server/Client, SEO, contenido fiel al sitio actual). Verificar que el archivo existe y se ve bien en una vista previa de Markdown.
- [ ] 4.4 Commit: `chore: agrega commitlint, husky y plantilla de PR en español`.

## 5. Skills y documentación para agentes

- [ ] 5.1 Crear `.claude/skills/project-architecture/SKILL.md` (design D9) con el árbol, las capas, el idioma, las reglas de Server/Client y la referencia a `node_modules/next/dist/docs/`. Verificar que el frontmatter tiene `name` y `description`.
- [ ] 5.2 Crear `.claude/skills/create-feature/SKILL.md` con el requisito de un change de OpenSpec previo, la estructura de la feature, la plantilla de `page.tsx` y la checklist. Verificar que el frontmatter es válido.
- [ ] 5.3 Crear `.claude/skills/create-ui-component/SKILL.md` con el patrón `cva` + `cn`, las props nativas extendidas, `ref` como prop y la checklist de accesibilidad, incluyendo un ejemplo completo de `Button`. Verificar que el frontmatter es válido.
- [ ] 5.4 Crear `.claude/skills/git-workflow/SKILL.md` con el formato de commit (ejemplos válidos y rechazados), los nombres de rama, la plantilla de PR y el vínculo con OpenSpec. Verificar que el frontmatter es válido.
- [ ] 5.5 Agregar a `AGENTS.md`, debajo del bloque de Next, la sección del proyecto (idioma, flujo OpenSpec, skills). Crear `CLAUDE.md` con `@AGENTS.md`. Reescribir `README.md` en español. Verificar que el bloque de Next queda intacto.
- [ ] 5.6 Commit: `docs: agrega skills del proyecto y documentación en español`.

## 6. Verificación final

- [ ] 6.1 Desde un estado limpio, ejecutar `pnpm install`, `pnpm lint`, `pnpm format:check` y `pnpm build`. Verificar que todo pasa y que la salida del build marca `/` como prerenderizada.
- [ ] 6.2 Revisar la página provisional en 375 px y 1440 px, con el SO en modo claro y oscuro. Verificar que no hay scroll horizontal y que el tema siempre es claro.
- [ ] 6.3 Pasar Lighthouse (Accessibility) a la página provisional. Verificar un puntaje de al menos 95 y `lang="es-CO"`.
- [ ] 6.4 Ejecutar `openspec validate setup-project-foundation --strict`. Verificar que pasa.

## Workflow follow-up

- Archivar el change con `/opsx:archive` cuando esté implementado y revisado.
- Configurar el remoto de GitHub y una CI (lint, format:check, build, commitlint) en un change posterior.
- Siguientes changes propuestos, en orden: `add-design-system`, `add-site-layout`, `add-home-page`, `add-services-pages`, `add-about-pages`, `add-patients-pages`, `add-packages-appointments-contact`, `add-seo-and-redirects`.
