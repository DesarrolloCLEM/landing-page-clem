---
name: git-workflow
description: Convenciones de ramas, commits y pull requests (todo en español) de la landing de Clínica La Esperanza, y cómo se vinculan con OpenSpec. Úsala siempre antes de crear una rama, hacer un commit, escribir un mensaje de commit o abrir/redactar un pull request.
---

# Ramas, commits y pull requests

El código va en inglés; **commits, PRs y specs van en español**. commitlint (hook `commit-msg`) y el hook `pre-commit` (`pnpm lint` + `pnpm format:check`) lo verifican. Nunca uses `--no-verify`.

## Flujo

1. Debe existir un change de OpenSpec aprobado (`openspec/changes/<change>/`).
2. Crea una rama desde `main`: `<tipo>/<descripcion-corta>`.
3. Implementa con `/opsx:apply <change>`: **un commit por grupo de tareas** de `tasks.md`, marcando las casillas en el mismo commit.
4. Abre el PR con la plantilla `.github/pull_request_template.md`, indicando el change.
5. Tras el merge, archiva con `/opsx:archive <change>`.

## Ramas

`<tipo>/<kebab-case>`, con el mismo tipo que los commits:

- `feat/home-hero`
- `feat/services-pages`
- `fix/header-mobile-menu`
- `chore/update-dependencies`

## Commits

Formato: `tipo(alcance): descripción`

- **tipo** (en inglés, estándar Conventional Commits): `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.
- **alcance** (opcional, kebab-case): la feature o área: `home`, `services`, `about`, `patients`, `ui`, `layout`, `theme`, `seo`, `deps`...
- **descripción**: en **español**, verbo en presente de 3.ª persona (`agrega`, `corrige`, `actualiza`, `elimina`, `mueve`, `mejora`), sin punto final, máximo ~72 caracteres.
- Cuerpo opcional en español explicando el *por qué*.

| ✅ Válido | ❌ Rechazado | Motivo |
|---|---|---|
| `feat(home): agrega sección de servicios` | `feat(home): add services section` | descripción en inglés |
| `fix(header): corrige menú móvil en iOS` | `corrige menú móvil` | falta el tipo |
| `refactor(ui): simplifica variantes de Button` | `Refactor: Button` | tipo en mayúscula y sin descripción útil |
| `docs: actualiza README con scripts` | `docs: updated readme` | descripción en inglés |
| `chore(deps): actualiza next a 16.5` | `chore: cosas` | descripción sin información |

La regla `subject-spanish` solo detecta verbos comunes en inglés al inicio. Lo demás depende de ti: escribe toda la descripción en español.

## Pull requests

- **Título:** igual que un commit (`feat(home): agrega página de inicio`).
- **Cuerpo:** la plantilla completa en español. No borres secciones; escribe "No aplica" si corresponde.
- Indica el change de OpenSpec y las tareas que cubre.
- Adjunta capturas en 375 px y 1440 px si cambia algo visible.
- Un PR por change, o por grupo de tareas si el change es grande.
