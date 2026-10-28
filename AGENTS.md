<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Landing page de Clínica La Esperanza

Sitio institucional de Clínica La Esperanza (Montería, Córdoba) que reemplaza el WordPress en https://clinicalaesperanza.co/. Conserva el mismo contenido y moderniza la UI/UX respetando la identidad visual de la clínica.

## Reglas clave

- **Idioma:** código en inglés (variables, componentes, carpetas). Textos visibles, commits, PRs y specs en español. Los segmentos de `src/app/` son URLs públicas y conservan los slugs en español del sitio actual.
- **Renderizado:** Server Components por defecto y páginas prerenderizadas. `"use client"` solo en islas interactivas pequeñas.
- **Arquitectura por feature:** `app → features → components → config/lib`. Una feature no importa otra. ESLint lo verifica.
- **Estilos:** Tailwind v4 con los tokens de `src/app/globals.css`. Nada de colores hex en componentes.

## Flujo de trabajo con OpenSpec

Todo cambio funcional pasa por un change de OpenSpec:

1. `/opsx:propose` crea `openspec/changes/<change>/` (proposal, specs, design, tasks).
2. `/opsx:apply <change>` implementa las tareas, con un commit en español por grupo.
3. `/opsx:archive <change>` archiva el change y actualiza `openspec/specs/`.

El contexto y las reglas del proyecto para OpenSpec están en `openspec/config.yaml`.

## Skills del proyecto (`.claude/skills/`)

| Skill                  | Cuándo                                                                  |
| ---------------------- | ----------------------------------------------------------------------- |
| `project-architecture` | Antes de crear, mover o renombrar archivos en `src/`                    |
| `create-feature`       | Al agregar o ampliar una página o sección                               |
| `create-ui-component`  | Al crear o cambiar componentes de `components/ui` o `components/layout` |
| `git-workflow`         | Ramas, commits y pull requests                                          |

## Verificación

```bash
pnpm lint && pnpm format:check && pnpm build
```
