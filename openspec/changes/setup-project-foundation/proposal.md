# Proposal

## Why

El repositorio es un `create-next-app` sin commits. Antes de construir cualquier página de la
nueva landing de Clínica La Esperanza hace falta una base común: estructura por feature, tokens
de marca en Tailwind v4 y convenciones (idioma, commits, PRs) que se verifiquen con herramientas
y no solo con documentación. Si esto no se hace primero, cada página futura repetiría decisiones
y el código terminaría inconsistente.

## What Changes

- Se mueve el código a `src/` (`src/app`, `src/components`, `src/features`, `src/config`, `src/lib`) y se actualiza el alias `@/*`.
- Se elimina el contenido de ejemplo de `create-next-app` (página demo, SVGs de Vercel/Next, modo oscuro, fuente Geist).
- Se crea el tema de marca en `src/app/globals.css` con `@theme` de Tailwind v4: colores, tipografías, radios y sombras de la clínica.
- Se configura el layout raíz con `lang="es-CO"`, fuentes con `next/font` y metadata base en español.
- Se crea una página de inicio provisional que solo usa los tokens de marca, para validar el tema.
- Se agregan herramientas de calidad:
  - Prettier con `prettier-plugin-tailwindcss`.
  - `eslint-plugin-boundaries` para hacer cumplir las capas `app → features → components → lib` y prohibir que una feature importe otra.
  - husky + commitlint con Conventional Commits y una regla propia que rechaza descripciones en inglés.
- Se agregan las plantillas de GitHub en español: `.github/pull_request_template.md`.
- Se agregan skills del proyecto en `.claude/skills/`: `project-architecture`, `create-feature`, `create-ui-component`, `git-workflow`. Se integran con el flujo `/opsx:*` de OpenSpec.
- Se actualizan `AGENTS.md` (conservando el bloque que genera `next dev`), `CLAUDE.md` y `README.md` en español.
- Se crea el primer commit en `main`.

**Fuera de alcance:**
- Componentes de `components/ui` y `components/layout` (change `add-design-system`).
- Header, Footer y navegación (change `add-site-layout`).
- Contenido real de cualquier página de la clínica.
- Formularios, SEO avanzado (sitemap, JSON-LD, redirects), despliegue y CI remota.

**Features y rutas afectadas:** ninguna feature de `src/features/` todavía. La carpeta se crea vacía, con su convención documentada. La única ruta tocada es `src/app/page.tsx`, que queda como página provisional.

## Capabilities

### New Capabilities
- `brand-theme`: identidad visual de la clínica expuesta como sistema de diseño (colores, tipografía, idioma del documento) que todas las páginas heredan.
- `code-architecture`: reglas de organización del código por feature y de dependencias entre capas, verificadas automáticamente.
- `contribution-workflow`: reglas de commits, ramas y pull requests en español, verificadas automáticamente.

### Modified Capabilities
<!-- Ninguna: el proyecto no tiene specs previas. -->

## Impact

- **Código:** se mueve `app/` a `src/app/`; cambian `tsconfig.json`, `eslint.config.mjs` y `package.json`; se borran los SVGs de `public/`.
- **Dependencias nuevas:**
  - Runtime: `class-variance-authority`, `clsx`, `tailwind-merge`, `lucide-react`.
  - Desarrollo: `prettier`, `prettier-plugin-tailwindcss`, `eslint-plugin-boundaries`, `husky`, `@commitlint/cli`, `@commitlint/config-conventional`.
- **Flujo de trabajo:** a partir de este change todo commit pasa por commitlint y todo cambio de código por lint con reglas de arquitectura.
- **Repositorio:** todavía no hay remoto de GitHub. La plantilla de PR se activa cuando se configure.
