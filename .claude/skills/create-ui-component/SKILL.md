---
name: create-ui-component
description: Patrón obligatorio para crear o modificar componentes genéricos en src/components/ui (Button, Card, Badge, Label, Input, Heading, Text...) y src/components/layout (Container, Section, Grid, Stack, Header, Footer...) con Tailwind v4, cva y cn. Úsala siempre que se cree, extienda o cambie uno de estos componentes, o antes de construir una sección para saber qué componentes ya existen.
---

# Componentes genéricos (`components/ui` y `components/layout`)

**Antes de crear un componente, revisa el inventario.** Si existe uno que sirve, úsalo o agrégale una variante; no dupliques estilos en una feature. Todos se ven en el catálogo `/ui` (`pnpm dev`).

## Inventario

### `@/components/layout`

| Componente | Props clave | Uso |
|---|---|---|
| `Container` | `size`: default (`max-w-7xl`), narrow (`max-w-3xl`) | Centra el contenido con márgenes laterales de 16/24/32 px |
| `Section` | `tone`: white, surface, primary, navy · `spacing`: default, compact · `as`: section, div | Bloque vertical de página. Pásale `aria-labelledby` con el `titleId` de su encabezado |
| `Grid` | `cols`: 1–4 (mobile-first) · `gap`: sm, md, lg · `as`: div, ul | Rejillas de tarjetas: 1 col en móvil, 2 en `sm`, 3/4 en `lg` |
| `Stack` | `direction`: vertical, horizontal (con wrap) · `gap`: xs–xl · `align`, `justify` · `as` | Agrupar elementos sin márgenes sueltos |
| `SiteLayout` | `children` | Enlace "Saltar al contenido", `TopBar`, `Header`, `<main id="contenido">`, `Footer` y `FloatingWhatsApp`. Lo monta `src/app/(site)/layout.tsx` |
| `Header`, `TopBar`, `Footer`, `FloatingWhatsApp`, `SiteLogo` | — (leen `@/config`) | Piezas globales del sitio; no se usan sueltas en features |
| `NavMenu`, `MobileNav` | `items` | Islas cliente del menú de escritorio (submenús accesibles) y del menú móvil (`<dialog>` modal) |
| `PageHeader` | `title`, `description?`, `eyebrow?`, `breadcrumbs?`, `image?`, `children?` | Cabecera de página interna con el único `h1` |
| `CtaBand` | `title?`, `description?`, `titleId?` | Cierre de página con "Solicitar cita" y teléfono |

### `@/components/ui`

| Componente | Props clave | Uso |
|---|---|---|
| `Button`, `buttonVariants` | `variant`: primary, secondary, ghost, emergency, inverse · `size`: sm, md, lg | `type="button"` por defecto. `inverse` sobre secciones primary/navy. Para enlaces: `className={buttonVariants(...)}` en `<Link>` |
| `TextLink` | `withArrow` | Enlace de texto sobre `next/link` ("Más información →") |
| `Heading` | `as` (h1–h6, **obligatorio**) · `size`: display, xl, lg, md, sm | Nivel semántico independiente del tamaño visual |
| `Text` | `size`: lead, body, small · `tone`: default, muted · `as`: p, span, div | Párrafos |
| `Eyebrow` | — | Antetítulo en mayúsculas |
| `SectionHeading` | `title`, `titleId`, `eyebrow?`, `description?`, `as`: h1/h2, `size`, `align`: start/center | Encabezado estándar de cada sección |
| `Badge` | `tone`: primary, health, emergency, neutral | Etiquetas cortas ("24 horas") |
| `Breadcrumbs` | `items`: `{ label, href? }[]` | Migas de pan; el último nivel lleva `aria-current="page"` |
| `StatCard` | `value`, `label` · `variant`: plain, card · `align` | Cifra con su etiqueta; va dentro de un `<dl>` |
| `TestimonialCard` | `name`, `procedure`, `summary`, `image`, `link?` | Historia de paciente con foto |
| `MapEmbed` | `src`, `title`, `link` | Mapa de terceros con carga diferida y enlace alternativo |
| `DocumentLink` | `title`, `subtitle?`, `href`, `meta` | Documento descargable (PDF) con nombre accesible completo |
| `ImageGallery` | `images` | Rejilla de fotos que abren en tamaño completo, sin JavaScript |
| `JsonLd` | `data` | Datos estructurados para buscadores |
| `ExternalLink` | props de `<a>` · `newTabLabel?` | Enlace fuera del sitio: pestaña nueva, `rel` seguro y aviso para lectores de pantalla |
| `SocialIcon` | `network`: facebook, instagram, tiktok, whatsapp | Ícono de marca decorativo (lucide ya no trae íconos de marca) |
| `IconBox` | `tone`: primary, health, emergency, accent · `size`: md, lg | Ícono decorativo (`aria-hidden`) en un recuadro de color. El ícono va como `children` |
| `Card` + `CardMedia`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter` | `interactive` · `as`: article, div, li | `CardTitle` es h3/sm por defecto. `CardDescription` va dentro de `CardHeader`. `interactive` resalta la tarjeta cuando su enlace recibe foco |
| `Label` | `required` | Asterisco decorativo; el control lleva `required` |
| `Input`, `Textarea`, `Select` | props nativas | Borde de error automático con `aria-invalid` |
| `Checkbox` | `id`, `label`, `error?` + props nativas | Casilla con etiqueta (puede contener enlaces) y error asociado |
| `FormField` | `id`, `label`, `hint?`, `error?`, `required?`, `children: (control) => ReactNode` | Une label, ayuda y error con el control: `{(control) => <Input {...control} />}` |

## Reglas

1. **Sin negocio:** no contienen textos de la clínica, rutas ni datos. Todo llega por props o `children`.
2. **Un componente por archivo:** `kebab-case.tsx` con export nombrado `PascalCase`. Agrégalo al `index.ts` de su carpeta (orden alfabético).
3. **Props nativas extendidas:** `ComponentProps<"button">` (o el elemento que corresponda) más las variantes. Si el componente acepta `as` con varios elementos, usa `HTMLAttributes<HTMLElement>`. En React 19, `ref` es una prop normal: no uses `forwardRef`.
4. **Variantes con `cva`** y combinación con `cn()`. `className` del consumidor va siempre **al final**. Exporta las variantes (`buttonVariants`) cuando otro elemento necesite el mismo estilo.
5. **Server Component por defecto.** Solo `"use client"` si necesita estado o efectos propios, justificado en el design del change. Resuelve hover, foco y estados con CSS (`hover:`, `focus-visible:`, `has-[]:`, `aria-invalid:`).
6. **Colores semánticos, no fijos.** Para texto usa `text-heading`, `text-foreground`, `text-muted` y `text-emphasis` (enlaces, antetítulos). Las secciones `primary` y `navy` redefinen esas variables y el texto se adapta solo. No uses `text-navy` ni `text-white` para texto dentro de componentes.
   - Si el componente tiene **fondo propio** (tarjetas, insignias, campos), usa colores fijos (`text-ink`, `text-ink-muted`, `text-brand-700`...) o restablece las variables, como hace `Card`.
   - Nunca escribas hex en componentes. Si falta un color, agrégalo como token en `globals.css` con su contraste documentado.
7. **Contraste:** texto ≥ 4.5:1; íconos y bordes de controles ≥ 3:1 (`border-border-strong`). `health` y `emergency` son para íconos; para texto usa `health-strong` y `emergency-strong`.
8. **Accesibilidad:** elemento semántico correcto, foco visible (global con `:focus-visible`), `aria-hidden="true"` en íconos decorativos, etiqueta accesible en controles sin texto, altura mínima de 44 px (`min-h-11`) en controles.
9. **Polimorfismo mínimo:** prop `as` con un tipo cerrado (`"section" | "div"`), nunca `any` ni `asChild`.
10. **Catálogo:** todo componente nuevo o variante nueva se agrega a `src/features/ui-catalog/` en el mismo commit.

## Trampas conocidas de `tailwind-merge`

- `cn()` usa una configuración extendida en `src/lib/cn.ts`. Si agregas tokens de **fuente, sombra o radio** con nombre propio (`font-heading`, `shadow-card`, `rounded-card`), regístralos ahí o `cn()` no los combinará bien. Los colores no necesitan registro.
- Un tamaño de texto (`text-lg`) **elimina** un `leading-*` anterior. Escribe el interlineado después del tamaño dentro de la misma variante: `"text-lg leading-tight"`.

## Ejemplo de referencia: `Button`

```tsx
// src/components/ui/button.tsx
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

export const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full font-heading font-bold transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary-dark",
        secondary: "bg-white text-primary ring-1 ring-primary ring-inset hover:bg-brand-50",
        ghost: "text-primary hover:bg-brand-50",
        emergency: "bg-emergency-strong text-white hover:bg-emergency-strong/90",
        inverse: "bg-white text-primary hover:bg-brand-50",
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

## Ejemplo de composición: sección con tarjetas

```tsx
<Section tone="surface" aria-labelledby="services-title">
  <Container className="flex flex-col gap-10">
    <SectionHeading titleId="services-title" eyebrow="Nuestros servicios" title="Atención integral" />
    <Grid as="ul" cols={4}>
      {services.map((service) => (
        <Card as="li" key={service.slug} interactive>
          <CardHeader>
            <IconBox tone="primary">
              <Stethoscope />
            </IconBox>
            <CardTitle>{service.title}</CardTitle>
            <CardDescription>{service.description}</CardDescription>
          </CardHeader>
          <CardFooter>
            <TextLink href={`/services/${service.slug}`} withArrow>
              Más información
            </TextLink>
          </CardFooter>
        </Card>
      ))}
    </Grid>
  </Container>
</Section>
```

## Checklist

- [ ] Revisé el inventario: no existía un componente equivalente.
- [ ] Sin textos ni datos de la clínica dentro del componente.
- [ ] Props nativas extendidas; `className` combinado al final con `cn()`.
- [ ] Variantes con `cva` y `defaultVariants`.
- [ ] Colores semánticos para texto; contraste verificado para colores nuevos.
- [ ] Exportado en el `index.ts` de su carpeta y agregado al catálogo `/ui`.
- [ ] Sin `"use client"` salvo justificación.
- [ ] `pnpm lint && pnpm format:check && pnpm build` pasan.
