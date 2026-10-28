import { Container, Grid, Section } from "@/components/layout";
import { Card, CardDescription, CardHeader, CardTitle, SectionHeading } from "@/components/ui";

import { ShowcaseBlock } from "./showcase-block";

export function MotionShowcase() {
  return (
    <Section aria-labelledby="catalog-motion">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          titleId="catalog-motion"
          eyebrow="Movimiento"
          title="Animaciones ligadas al scroll"
          description="Solo existen si el navegador las soporta y el sistema no pide movimiento reducido. Sin eso, todo se ve quieto y completo."
        />

        <ShowcaseBlock
          title="motion-reveal"
          description="El elemento aparece con desvanecimiento y desplazamiento corto al entrar en pantalla."
        >
          <p className="motion-reveal max-w-xl rounded-card bg-brand-50 p-6 text-brand-800">
            Baja y sube la página: este bloque se revela al entrar.
          </p>
        </ShowcaseBlock>

        <ShowcaseBlock
          title="motion-stagger"
          description="Los hijos directos de una rejilla entran uno tras otro (máx. 4 pasos)."
        >
          <Grid className="motion-stagger" cols={4}>
            {[1, 2, 3, 4].map((n) => (
              <Card key={n}>
                <CardHeader>
                  <CardTitle>Tarjeta {n}</CardTitle>
                  <CardDescription>Entra después de la anterior.</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </Grid>
        </ShowcaseBlock>
      </Container>
    </Section>
  );
}
