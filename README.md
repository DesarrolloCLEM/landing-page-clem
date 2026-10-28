# Clínica La Esperanza: landing page

Sitio web institucional de [Clínica La Esperanza](https://clinicalaesperanza.co/) (Montería, Córdoba, Colombia). Reemplaza el sitio actual en WordPress con una versión moderna, rápida y accesible que conserva su contenido y su identidad visual.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Server Components, prerenderizado estático)
- React 19 y TypeScript
- Tailwind CSS v4 (`class-variance-authority`, `tailwind-merge`)
- [OpenSpec](https://github.com/Fission-AI/OpenSpec) para el desarrollo guiado por especificaciones
- ESLint (con reglas de arquitectura), Prettier, husky y commitlint

## Requisitos

- Node.js 20 o superior
- pnpm (versión indicada en `packageManager` de `package.json`)

## Primeros pasos

```bash
pnpm install   # instala dependencias y activa los hooks de git (no uses --ignore-scripts)
pnpm dev       # servidor de desarrollo en http://localhost:3000
```

## Scripts

| Script                       | Descripción                                                                                                                                                            |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pnpm dev`                   | Servidor de desarrollo                                                                                                                                                 |
| `pnpm build`                 | Build de producción                                                                                                                                                    |
| `pnpm start`                 | Sirve el build de producción                                                                                                                                           |
| `pnpm lint`                  | ESLint, incluidas las reglas de arquitectura                                                                                                                           |
| `pnpm format`                | Formatea el código con Prettier                                                                                                                                        |
| `pnpm format:check`          | Verifica el formato sin modificar archivos                                                                                                                             |
| `pnpm check:redirects [url]` | Revisa contra un servidor en marcha (por defecto `http://localhost:3000`) que cada URL antigua responda 301 hacia su destino y que las páginas retiradas respondan 404 |

## Variables de entorno

| Variable                         | Uso                                                                                    |
| -------------------------------- | -------------------------------------------------------------------------------------- |
| `ENABLE_UI_CATALOG`              | `true` publica el catálogo interno `/ui` en un build de producción                     |
| `FORM_DELIVERY_SIMULATE_FAILURE` | `true` simula una falla de entrega de los formularios, para probar el error en staging |

Los formularios (contacto, PQRS y eliminación de cuenta) todavía **no envían correo**: `src/lib/form-delivery.ts` solo registra cada envío en el log del servidor, sin datos personales. Conectar SMTP u otro canal consiste en reemplazar esa función.

## Estructura

```
src/
├── app/              # Rutas (URLs en español). Páginas delgadas.
├── components/
│   ├── ui/           # Componentes genéricos: Button, Card, Badge...
│   └── layout/       # Container, Section, Header, Footer...
├── features/         # Un módulo por área del sitio: home, services, about...
├── config/           # Datos del sitio (navegación, contacto) y fuentes
└── lib/              # Utilidades
openspec/             # Specs y changes (OpenSpec)
.claude/skills/       # Convenciones del proyecto para agentes de IA
```

Reglas de dependencias: `app → features → components → config/lib`. Una feature no puede importar otra. `pnpm lint` falla si se rompe alguna de estas reglas.

## Flujo de trabajo

1. **Proponer:** cada cambio funcional empieza con un change de OpenSpec (`/opsx:propose`), con propuesta, specs, diseño y tareas.
2. **Rama:** `<tipo>/<descripcion-corta>`, por ejemplo `feat/home-hero`.
3. **Implementar:** `/opsx:apply <change>`, con un commit por grupo de tareas.
4. **Commits en español** con [Conventional Commits](https://www.conventionalcommits.org/es/): `feat(home): agrega sección de servicios`. commitlint rechaza los mensajes que no cumplen el formato o que están en inglés.
5. **Pull request** en español, con la plantilla de `.github/pull_request_template.md`.
6. **Archivar:** `/opsx:archive <change>` después del merge.

## Convenciones

- Código (variables, componentes, carpetas) en inglés. Contenido, commits y PRs en español.
- Server Components por defecto; `"use client"` solo en islas interactivas pequeñas.
- Colores y tipografías solo mediante los tokens de `src/app/globals.css`.
