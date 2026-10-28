---
name: project-architecture
description: Reglas de arquitectura, organización por feature, idioma y Server/Client Components de la landing de Clínica La Esperanza. Úsala SIEMPRE antes de crear, mover o renombrar cualquier archivo dentro de src/, al decidir dónde va un componente, o al dudar si algo debe ser "use client".
---

# Arquitectura del proyecto

Next.js 16.4 (App Router, `cacheComponents`), React 19, Tailwind v4, TypeScript estricto, pnpm.

> Esta versión de Next tiene cambios importantes. Antes de usar una API de Next, lee la guía correspondiente en `node_modules/next/dist/docs/` (`01-app/01-getting-started/`, `01-app/02-guides/`, `01-app/03-api-reference/`).

## Árbol

```
src/
├── app/                    # SOLO rutas. Los segmentos son URLs públicas en español.
│   ├── layout.tsx          # <html lang="es-CO">, fuentes, metadata base
│   ├── globals.css         # @theme con tokens de marca (único lugar con colores hex)
│   └── (site)/<slug>/page.tsx
├── components/
│   ├── ui/                 # Genéricos y sin negocio: Button, Card, Badge, Label, Input, Heading...
│   └── layout/             # Estructura: Container, Section, Grid, Stack, Header, Footer...
├── features/<feature>/     # Un módulo por área del sitio (home, services, about, ...)
│   ├── components/         # Secciones propias de la feature
│   ├── data/               # Contenido tipado (.ts) con los textos de la clínica
│   ├── actions/            # Server Actions ("use server")
│   ├── types.ts
│   └── index.ts            # API pública: lo ÚNICO importable desde fuera
├── config/                 # site.ts (nav, contacto, redes, horarios), fonts.ts
└── lib/                    # Utilidades puras: cn(), formatters
```

## Capas (las verifica ESLint con `boundaries/dependencies`)

| Desde | Puede importar |
|---|---|
| `app` | `features/<x>` (solo vía `index.ts`), `components`, `config`, `lib` |
| `features/<x>` | su propia feature, `components`, `config`, `lib` |
| `components` | `components`, `config`, `lib` |
| `config`, `lib` | `lib` |

- Una feature **nunca** importa otra feature. Si dos features necesitan algo, súbelo a `components/`, `config/` o `lib/`.
- `components/ui` no contiene textos de la clínica ni lógica de negocio; recibe todo por props.
- No crees archivos sueltos en `src/` fuera de estas carpetas: `boundaries/no-unknown-files` falla.

## Páginas delgadas

`src/app/**/page.tsx` solo exporta `metadata` y compone componentes de una feature:

```tsx
import type { Metadata } from "next";

import { ServicesOverview } from "@/features/services";

export const metadata: Metadata = {
  title: "Nuestros servicios",
  description: "...",
};

export default function ServicesPage() {
  return <ServicesOverview />;
}
```

## Server vs Client Components

- Por defecto todo es **Server Component**. El contenido es estático y se prerenderiza en build (en la salida de `pnpm build` la ruta debe salir como `○`).
- `"use client"` solo en **islas pequeñas** que necesitan estado, efectos o eventos del navegador: menú móvil, carrusel, acordeón con estado, formulario con validación en vivo.
- Nunca marques como client una página, un layout o una sección completa. Extrae solo la parte interactiva y pásale datos serializables por props.
- Antes de usar JS, prueba si HTML nativo basta (`<details>`, `<dialog>`, anclas, CSS `:hover`/`:focus-within`).
- Formularios: `<form action={serverAction}>`, con la acción en `features/<x>/actions/`.
- Datos externos (si llegan a existir): cachea con `"use cache"` en el acceso a datos.

## Idioma y nombres

| Qué | Idioma | Convención |
|---|---|---|
| Variables, funciones, tipos | inglés | `camelCase` / `PascalCase` |
| Componentes | inglés | archivo `kebab-case.tsx`, export nombrado `PascalCase` |
| Carpetas de `features/`, `components/`, `lib/` | inglés | `kebab-case` |
| Segmentos de `src/app/` | español | slug de la URL actual (`sobre-nosotros`, `services/cirugia`) |
| Textos visibles, `alt`, `aria-label`, metadata | español (Colombia) | — |
| Commits, PRs, specs de OpenSpec | español | ver skill `git-workflow` |

- Exports nombrados en todo el código, salvo `page.tsx`, `layout.tsx` y demás archivos especiales de Next que exigen `default`.
- Imports con alias `@/` para cruzar capas e imports relativos dentro de la misma feature o carpeta.

## Estilos

- Solo clases de Tailwind con los tokens de `globals.css` (`bg-primary`, `text-navy`, `rounded-card`, `shadow-card`...). No escribas colores hex en componentes.
- Combina clases con `cn()` de `@/lib/cn`, y las variantes con `cva` (ver skill `create-ui-component`).
- Texto sobre fondos de color: usa solo las parejas AA documentadas al inicio de `globals.css` (`health` y `emergency` son decorativos; para texto usa `health-strong` y `emergency-strong`).
- Mobile-first: estilos base para 375 px y luego `sm:`, `md:`, `lg:`.

## Verificación antes de terminar cualquier tarea

```bash
pnpm lint && pnpm format:check && pnpm build
```
