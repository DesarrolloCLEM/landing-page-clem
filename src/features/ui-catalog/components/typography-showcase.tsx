import { Container, Section, Stack } from "@/components/layout";
import { Eyebrow, Heading, SectionHeading, Text } from "@/components/ui";

import { ShowcaseBlock } from "./showcase-block";

const headingSizes = ["display", "xl", "lg", "md", "sm"] as const;

export function TypographyShowcase() {
  return (
    <Section tone="surface" aria-labelledby="catalog-typography">
      <Container className="flex flex-col gap-10">
        <SectionHeading titleId="catalog-typography" eyebrow="Texto" title="Tipografía" />

        <ShowcaseBlock
          title="Heading"
          description="El nivel semántico (as) es independiente del tamaño visual (size). Aquí todos son h4."
        >
          <Stack gap="sm">
            {headingSizes.map((size) => (
              <Heading key={size} as="h4" size={size}>
                Cuidamos de ti ({size})
              </Heading>
            ))}
          </Stack>
        </ShowcaseBlock>

        <ShowcaseBlock title="Text y Eyebrow">
          <Stack gap="sm" className="max-w-2xl">
            <Eyebrow>Fe, Amor y Servicio</Eyebrow>
            <Text size="lead">
              Atención médica integral con calidad, calidez y confianza (lead).
            </Text>
            <Text>Texto de cuerpo para párrafos largos y descripciones (body).</Text>
            <Text size="small" tone="muted">
              Texto pequeño en tono atenuado (small, muted).
            </Text>
          </Stack>
        </ShowcaseBlock>
      </Container>
    </Section>
  );
}
