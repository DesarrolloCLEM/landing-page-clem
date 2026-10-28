---
name: create-ui-component
description: Patrón obligatorio para crear o modificar componentes genéricos en src/components/ui (Button, Card, Badge, Label, Input, Heading, Text...) y src/components/layout (Container, Section, Grid, Stack, Header, Footer...) con Tailwind v4, cva y cn. Úsala siempre que se cree, extienda o cambie uno de estos componentes.
---

# Componentes genéricos (`components/ui` y `components/layout`)

## Reglas

1. **Sin negocio:** no contienen textos de la clínica, rutas ni datos. Todo llega por props o `children`.
2. **Un componente por archivo:** `kebab-case.tsx` con export nombrado `PascalCase`. Agrégalo al `index.ts` de su carpeta (`@/components/ui`).
3. **Props nativas extendidas:** `ComponentProps<"button">` (o el elemento que corresponda) más las variantes. En React 19, `ref` es una prop normal: no uses `forwardRef`.
4. **Variantes con `cva`** y combinación con `cn()`. `className` del consumidor va siempre **al final** para poder sobrescribir.
5. **Exporta las variantes** (`buttonVariants`) cuando otro elemento necesite el mismo estilo (p. ej. un `<Link>` con apariencia de botón).
6. **Server Component por defecto.** Un componente genérico solo lleva `"use client"` si necesita estado o efectos propios (p. ej. `MobileNav`, `Accordion` con estado), y debe justificarse en el design del change.
7. **Tokens, no hex:** `bg-primary`, `text-navy`, `border-border`, `rounded-card`, `shadow-card`. Solo parejas de texto/fondo AA (ver cabecera de `globals.css`).
8. **Accesibilidad:** elemento HTML semántico correcto, foco visible (ya global con `:focus-visible`), `aria-*` cuando no hay texto visible, área táctil mínima de 44 px en controles.
9. **Polimorfismo mínimo:** si hace falta cambiar la etiqueta (`Heading` como `h1`…`h6`, `Section` como `section`/`div`), usa una prop `as` con un tipo cerrado, no `any`.

## Ejemplo de referencia: `Button`

```tsx
// src/components/ui/button.tsx
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

export const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full font-heading font-bold transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary-dark",
        secondary: "bg-white text-primary ring-1 ring-primary ring-inset hover:bg-brand-50",
        ghost: "text-primary hover:bg-brand-50",
        emergency: "bg-emergency-strong text-white hover:bg-emergency-strong/90",
      },
      size: {
        sm: "px-4 text-sm",
        md: "px-6 text-base",
        lg: "px-8 text-lg",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, type = "button", ...props }: ButtonProps) {
  return (
    <button type={type} className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
```

Enlace con apariencia de botón, sin duplicar estilos:

```tsx
import Link from "next/link";

import { buttonVariants } from "@/components/ui";

<Link href="/agenda" className={buttonVariants({ variant: "primary", size: "lg" })}>
  Solicitar una cita
</Link>;
```

## Ejemplo de layout: `Container`

```tsx
// src/components/layout/container.tsx
import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

export function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)} {...props} />;
}
```

## Checklist

- [ ] Sin textos ni datos de la clínica dentro del componente.
- [ ] Props nativas extendidas, `className` combinado al final con `cn()`.
- [ ] Variantes con `cva` y `defaultVariants`.
- [ ] Exportado en el `index.ts` de su carpeta.
- [ ] Sin `"use client"` salvo justificación.
- [ ] Se ve en la página interna de componentes (cuando exista, change `add-design-system`).
- [ ] `pnpm lint && pnpm format:check && pnpm build` pasan.
