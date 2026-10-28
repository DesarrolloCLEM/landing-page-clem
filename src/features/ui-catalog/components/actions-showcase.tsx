import { CalendarCheck } from "lucide-react";
import Link from "next/link";

import { Container, Section, Stack } from "@/components/layout";
import { Button, buttonVariants, SectionHeading, TextLink } from "@/components/ui";

import { ShowcaseBlock } from "./showcase-block";

const variants = ["primary", "secondary", "ghost", "emergency"] as const;
const sizes = ["sm", "md", "lg"] as const;

export function ActionsShowcase() {
  return (
    <Section aria-labelledby="catalog-actions">
      <Container className="flex flex-col gap-10">
        <SectionHeading titleId="catalog-actions" eyebrow="Acciones" title="Botones y enlaces" />

        <ShowcaseBlock title="Variantes" description='Button usa type="button" por defecto.'>
          <Stack direction="horizontal" gap="sm">
            {variants.map((variant) => (
              <Button key={variant} variant={variant}>
                {variant}
              </Button>
            ))}
            <Button disabled>Deshabilitado</Button>
          </Stack>
        </ShowcaseBlock>

        <ShowcaseBlock title="Tamaños" description="Todos con altura mínima de 44 px.">
          <Stack direction="horizontal" gap="sm" align="center">
            {sizes.map((size) => (
              <Button key={size} size={size}>
                Tamaño {size}
              </Button>
            ))}
          </Stack>
        </ShowcaseBlock>

        <ShowcaseBlock
          title="Enlaces con apariencia de botón"
          description="buttonVariants() sobre next/link: sigue siendo un enlace."
        >
          <Stack direction="horizontal" gap="sm">
            <Link href="#" className={buttonVariants({ size: "lg" })}>
              <CalendarCheck aria-hidden="true" />
              Solicitar una cita
            </Link>
            <Link href="#" className={buttonVariants({ variant: "secondary", size: "lg" })}>
              Resultados
            </Link>
          </Stack>
        </ShowcaseBlock>

        <ShowcaseBlock title="TextLink">
          <Stack direction="horizontal" gap="lg">
            <TextLink href="#">Enlace simple</TextLink>
            <TextLink href="#" withArrow>
              Más información
            </TextLink>
          </Stack>
        </ShowcaseBlock>
      </Container>
    </Section>
  );
}
