import { Activity, BedDouble, Siren, Stethoscope, type LucideIcon } from "lucide-react";

import { Container, Grid, Section, Stack } from "@/components/layout";
import {
  Badge,
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  IconBox,
  SectionHeading,
  TextLink,
} from "@/components/ui";

import { sampleCards } from "../data/samples";
import { ShowcaseBlock } from "./showcase-block";

const cardIcons: LucideIcon[] = [BedDouble, Activity, Stethoscope, Siren];
const iconTones = ["primary", "accent", "health", "emergency"] as const;

export function ContentShowcase() {
  return (
    <Section aria-labelledby="catalog-content">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          titleId="catalog-content"
          eyebrow="Contenido"
          title="Tarjetas e insignias"
        />

        <ShowcaseBlock title="Badge">
          <Stack direction="horizontal" gap="xs">
            <Badge tone="primary">Nuevo</Badge>
            <Badge tone="health">Disponible</Badge>
            <Badge tone="emergency">24 horas</Badge>
            <Badge tone="neutral">Consulta externa</Badge>
          </Stack>
        </ShowcaseBlock>

        <ShowcaseBlock
          title="Card interactiva con IconBox en Grid de 4 columnas"
          description="Navega con Tab: el foco del enlace resalta la tarjeta completa."
        >
          <Grid as="ul" cols={4}>
            {sampleCards.map((card, index) => {
              const Icon = cardIcons[index];
              return (
                <Card as="li" key={card.title} interactive>
                  <CardHeader>
                    <IconBox tone={iconTones[index]}>
                      <Icon />
                    </IconBox>
                    <CardTitle>{card.title}</CardTitle>
                    <CardDescription>{card.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <TextLink href={card.href} withArrow>
                      Más información
                    </TextLink>
                  </CardFooter>
                </Card>
              );
            })}
          </Grid>
        </ShowcaseBlock>
      </Container>
    </Section>
  );
}
