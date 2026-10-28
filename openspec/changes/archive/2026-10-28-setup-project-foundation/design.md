# Design

## Context

- Repo creado con `create-next-app` sobre Next.js 16.4, React 19 y Tailwind v4 (plugin `@tailwindcss/turbopack`). Tiene `cacheComponents` y `partialPrefetching` activos en `next.config.ts`. No tiene commits.
- `app/` está en la raíz y el alias es `@/* → ./*`.
- `globals.css` trae variables de modo oscuro y la fuente Geist de la plantilla.
- `AGENTS.md` contiene un bloque que `next dev` vuelve a escribir. No se puede borrar, solo agregar contenido después de él.
- OpenSpec 1.15 ya está inicializado: `openspec/` y las skills `openspec-*` y comandos `/opsx:*` en `.claude/`.
- Motivación: ver proposal.md. Requisitos: ver `specs/brand-theme`, `specs/code-architecture` y `specs/contribution-workflow`.

## Goals / Non-Goals

**Goals:**
- Que la estructura y las reglas existan antes de la primera página real.
- Que cada regla importante tenga verificación automática (lint, formato, commitlint), y no solo documentación.
- Que Claude siga siempre la misma organización, gracias a skills que se cargan solas según la tarea.

**Non-Goals:**
- No se crean componentes de UI reutilizables (eso es `add-design-system`).
- No se configura CI en GitHub Actions: no hay remoto todavía. Queda como follow-up.
- No hay tests unitarios en este change: no hay lógica que probar. Las herramientas se verifican ejecutándolas.

## Decisions

### D1. Código en `src/`
Separa el código de la configuración de la raíz (`openspec/`, `.claude/`, `.github/`, configs).
- *Alternativa:* dejar `app/` en la raíz. Se descarta porque mezcla el código con unos 15 archivos de configuración.

### D2. Rutas delgadas y features en `src/features/`
`src/app/**/page.tsx` solo hace tres cosas: exportar `metadata`, importar desde `@/features/<feature>` y componer. Cada feature tiene esta forma:
```
features/<feature>/
  components/   secciones propias (kebab-case.tsx, export nombrado PascalCase)
  data/         contenido tipado en .ts (textos de la clínica)
  actions/      Server Actions (si aplica)
  types.ts
  index.ts      API pública
```
Los segmentos de `src/app/` mantienen los slugs actuales en español, porque son URLs públicas y aportan SEO. Todo lo demás va en inglés.
- *Alternativa:* colocar el código dentro de `app/` en carpetas privadas `_components`. Se descarta porque ata la feature a una ruta, cuando "Sobre nosotros" tiene 8 rutas y una sola feature.

### D3. Arquitectura verificada con `eslint-plugin-boundaries`
Se definen los elementos `app`, `feature` (capturando su nombre), `component`, `config` y `lib`, con estas reglas:
- `app` puede importar `feature`, `component`, `config` y `lib`.
- `feature` puede importar `component`, `config`, `lib` y su **propia** feature (`${from.featureName}`).
- `component` puede importar `component`, `config` y `lib`.
- `config` y `lib` solo pueden importar `lib`.

El acceso solo vía `index.ts` se controla con la regla `boundaries/entry-point`.
- *Alternativa:* `no-restricted-imports`. Se descarta porque no puede expresar "otra feature distinta a la mía".

### D4. Tokens en `@theme` de Tailwind v4, solo tema claro
`src/app/globals.css` define:
- Colores: `--color-brand-{50…950}` (escala basada en `#1166b5`), `--color-sky-accent`, `--color-health` (`#009C41`), `--color-navy` (`#111542`), `--color-emergency` (`#F9313B`), `--color-surface` (`#F4F3F8`).
- Tipografía: `--font-heading` y `--font-body`.
- Radios y sombras de tarjeta.

Se elimina el bloque `prefers-color-scheme: dark`. El blanco sobre `#1166b5` da 5.8:1 de contraste, así que cumple AA.
- *Alternativa:* soportar modo oscuro. Se descarta porque la marca no lo define y duplica el trabajo de QA.

### D5. Fuentes con `next/font/google`, intercambiables
Las fuentes originales (Soleil, Omnes, Museo Sans) son de Adobe Fonts y requieren licencia. Mientras tanto se usan **Nunito** para títulos (redondeada, cercana a Omnes) y **Nunito Sans** para el texto. `next/font` las sirve desde el propio dominio con `display: swap`. Se definen en un solo archivo, `src/config/fonts.ts`, para poder cambiarlas por las fuentes con licencia (`next/font/local`) sin tocar los componentes.

### D6. Helper `cn()` y `cva`
`src/lib/cn.ts` combina `clsx` con `tailwind-merge`. Se instala `class-variance-authority` desde ahora para que las skills lo referencien, aunque su primer uso llega en `add-design-system`.

### D7. Prettier con plugin de Tailwind
Configuración `.prettierrc.json` con `prettier-plugin-tailwindcss` y `tailwindStylesheet: "./src/app/globals.css"`, porque v4 necesita la hoja de estilos para conocer los tokens. Scripts nuevos: `format` y `format:check`.

### D8. husky + commitlint con regla propia de idioma
- `commitlint.config.mjs` extiende `@commitlint/config-conventional` y desactiva `subject-case`, porque el español tiene mayúsculas y tildes legítimas.
- Un plugin local agrega la regla `subject-spanish`. Rechaza descripciones que empiecen con verbos imperativos comunes en inglés (`add`, `fix`, `update`, `remove`, `create`, `implement`, `refactor`, `change`, `improve`, `bump`…).
- Hooks: `.husky/commit-msg` ejecuta commitlint y `.husky/pre-commit` ejecuta `pnpm lint` y `pnpm format:check`.
- *Alternativa:* detectar el idioma con una librería. Se descarta por pesada y propensa a falsos positivos en mensajes cortos. La lista de verbos cubre el error típico y la skill `git-workflow` cubre el resto.

### D9. Skills del proyecto en `.claude/skills/`

| Skill | Se activa cuando | Contenido |
|---|---|---|
| `project-architecture` | Se crea o mueve cualquier archivo en `src/` | Árbol de carpetas, capas, idioma, nombres, reglas de Server/Client, referencia a la documentación de Next 16 en `node_modules` |
| `create-feature` | Se agrega una página o sección | Exige un change de OpenSpec (`/opsx:propose`); da la estructura de la feature, una plantilla de `page.tsx` delgado con `metadata` y una checklist |
| `create-ui-component` | Se crea o modifica algo en `components/ui` o `components/layout` | Patrón con `cva` + `cn`, props tipadas que extienden las nativas, `ref` como prop (React 19), accesibilidad, sin texto de negocio |
| `git-workflow` | Commits, ramas o PRs | Formato de commit en español con ejemplos buenos y malos, nombres de rama, uso de la plantilla de PR y vínculo con el change de OpenSpec |

Las skills de OpenSpec (`/opsx:propose`, `/opsx:apply`, `/opsx:archive`) gestionan el *qué*. Las skills del proyecto gestionan el *cómo*.

### D10. Documentación de agentes
- `AGENTS.md` conserva el bloque de Next y agrega debajo un resumen: idioma, flujo OpenSpec y lista de skills.
- `CLAUDE.md` contiene solo `@AGENTS.md`, para tener una única fuente.
- `README.md` se reescribe en español: requisitos, scripts, estructura y flujo de trabajo.

### D11. Componentes `"use client"`
Ninguno en este change. La página provisional es un Server Component.

### D12. Componentes de `components/ui` y `components/layout`
Ninguno se crea ni se reutiliza en este change. Las carpetas se crean vacías (con `.gitkeep`) y su convención queda documentada en la skill `create-ui-component`.

## Risks / Trade-offs

- [Los hooks de husky no se instalan si alguien clona con `--ignore-scripts`] → `README.md` indica que se ejecute `pnpm install` sin flags; la CI futura repetirá lint y commitlint.
- [La regla de verbos en inglés tiene falsos negativos (p. ej. "header responsive")] → la skill `git-workflow` y la revisión de PR cubren lo que la regla no detecta.
- [`eslint-plugin-boundaries` necesita resolver el alias `@/*`] → se configura `eslint-import-resolver-typescript` en `settings`. Se verifica con un import prohibido de prueba (tarea 3.3).
- [Las fuentes provisionales no son las oficiales] → quedan aisladas en `src/config/fonts.ts`; cambiarlas no afecta las specs ni los componentes.
- [`pnpm-workspace.yaml` tiene `sharp: false`] → no afecta este change. Se revisa en `add-seo-and-redirects` o al desplegar si se usa self-hosting.

## Migration Plan

No hay usuarios ni código en producción. Se hace un commit inicial con la plantilla tal cual (`chore: estado inicial de create-next-app`) y luego un commit por grupo de tareas. El rollback es revertir esos commits.

## Open Questions

- ¿La clínica tiene licencia de Adobe Fonts (Soleil / Omnes / Museo Sans)? Si la tiene, se cambia `src/config/fonts.ts` a `next/font/local`. Eso no altera las specs ni las tareas.
