---
name: create-feature
description: Paso a paso para agregar una página, sección o módulo nuevo a la landing de Clínica La Esperanza (estructura de src/features/<feature>, page.tsx delgado, metadata, contenido tipado). Úsala cuando se pida crear o ampliar una página o sección del sitio (home, servicios, sobre nosotros, usuarios, agenda, contacto, paquetes...).
---

# Crear o ampliar una feature

Lee primero la skill `project-architecture` si no la tienes en contexto.

## 0. Requisito: change de OpenSpec

Ningún cambio funcional se implementa sin un change aprobado en `openspec/changes/<change>/`.

- Si no existe, propónlo con `/opsx:propose` (proposal, specs, design, tasks) y espera la aprobación.
- Si existe, impleméntalo con `/opsx:apply <change>` y sigue sus `tasks.md`.

## 1. Mapa de features y rutas

| Feature (`src/features/`) | Rutas (`src/app/(site)/`) |
|---|---|
| `home` | `/` |
| `about` | `sobre-nosotros`, `politicas-institucionales`, `organigrama`, `comite`, `informes-financieros`, `reportes-de-area`, `indicadores`, `nuestras-proyecciones` |
| `services` | `services/[slug]` (consulta-externa, cirugia, hospitalizacion, urgencias) |
| `packages` | `paquetes-integrales` |
| `patients` | `usuarios`, `deberes-y-derechos`, `felicitaciones-sugerencias-quejas-y-reclamos`, `preguntas-frecuentes` |
| `appointments` | `agenda` |
| `contact` | `contacto` |

Si la ruta ya pertenece a una feature, amplía esa feature y no crees otra. Los slugs replican las URLs de https://clinicalaesperanza.co/ para conservar el SEO.

## 2. Estructura

```
src/features/<feature>/
├── components/
│   └── <section-name>.tsx      # export function SectionName() — Server Component
├── data/
│   └── <content>.ts            # textos e items tipados, en español
├── actions/                    # solo si hay formularios ("use server")
├── types.ts                    # tipos del contenido
└── index.ts                    # export { SectionName } from "./components/section-name";
```

- Exporta en `index.ts` solo lo que usan las páginas.
- Los textos van en `data/`, no escritos dentro del JSX de los componentes de sección. Así el contenido se revisa en un solo lugar.
- Contacto, teléfonos, redes, horarios y navegación **no** se duplican: están en `src/config/site.ts`.

```ts
// data/services.ts
import type { ServiceSummary } from "../types";

export const services: ServiceSummary[] = [
  {
    slug: "urgencias",
    title: "Urgencias",
    description: "Atención de mediana y alta complejidad...",
  },
];
```

## 3. Componentes de sección

- Compón con `components/layout` (`Section`, `Container`, `Grid`) y `components/ui` (`Heading`, `Card`, `Button`...). Si falta un componente genérico, créalo con la skill `create-ui-component`; no lo resuelvas con estilos sueltos.
- Server Component por defecto. Si una parte necesita interactividad, extráela a `components/<name>-client.tsx` con `"use client"` y justifícala en el `design.md` del change.
- Usa `next/image` con `alt` en español y `sizes` correcto. Las imágenes van en `public/images/<feature>/`.
- Cada sección es un `<section>` con un encabezado (`aria-labelledby`).

## 4. Página

```tsx
// src/app/(site)/<slug>/page.tsx
import type { Metadata } from "next";

import { FeatureView } from "@/features/<feature>";

export const metadata: Metadata = {
  title: "Título en español",
  description: "Descripción de 140-160 caracteres en español.",
  alternates: { canonical: "/<slug>" },
};

export default function SlugPage() {
  return <FeatureView />;
}
```

Para rutas dinámicas, usa `generateStaticParams` y `generateMetadata`, y revisa `node_modules/next/dist/docs/01-app/03-api-reference/04-functions/` antes de escribirlas.

## 5. Checklist antes de cerrar

- [ ] `pnpm lint`, `pnpm format:check` y `pnpm build` pasan; la ruta sale como `○` (prerenderizada).
- [ ] El contenido coincide con el del sitio actual.
- [ ] Se ve bien en 375 px y 1440 px, sin scroll horizontal.
- [ ] Encabezados en orden (un solo `h1` por página), `alt` en imágenes, foco visible.
- [ ] Tareas marcadas en el `tasks.md` del change y commits en español (skill `git-workflow`).
