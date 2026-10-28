import { Container, Section, Stack } from "@/components/layout";
import {
  Button,
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  SectionHeading,
  Text,
  TextLink,
} from "@/components/ui";

export function LayoutShowcase() {
  return (
    <>
      <Section tone="primary" aria-labelledby="catalog-tone-primary">
        <Container className="flex flex-col gap-6">
          <SectionHeading
            titleId="catalog-tone-primary"
            eyebrow="Layout"
            title='Section tone="primary"'
            description="Los textos cambian solos a colores claros; los botones usan la variante inverse."
          />
          <Stack direction="horizontal" gap="lg" align="center">
            <Button variant="inverse" size="lg">
              Solicitar una cita
            </Button>
            <TextLink href="#" withArrow>
              Conoce más
            </TextLink>
          </Stack>
        </Container>
      </Section>

      <Section tone="navy" aria-labelledby="catalog-tone-navy">
        <Container className="flex flex-col gap-6">
          <SectionHeading
            titleId="catalog-tone-navy"
            eyebrow="Layout"
            title='Section tone="navy"'
            description="Una Card dentro de una sección oscura restablece sus colores."
          />
          <Card className="max-w-md">
            <CardHeader>
              <CardTitle>Tarjeta sobre fondo navy</CardTitle>
              <CardDescription>El título vuelve a navy y el texto a gris oscuro.</CardDescription>
            </CardHeader>
          </Card>
          <Text tone="muted">Texto atenuado sobre navy.</Text>
        </Container>
      </Section>
    </>
  );
}
