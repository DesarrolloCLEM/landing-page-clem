import { Container, CtaBand, PageHeader, Section, Stack } from "@/components/layout";
import {
  Accordion,
  AccordionItem,
  Breadcrumbs,
  ExternalLink,
  SectionHeading,
  SocialIcon,
  Tabs,
} from "@/components/ui";

import { ShowcaseBlock } from "./showcase-block";

const networks = ["facebook", "instagram", "tiktok", "whatsapp"] as const;

export function NavigationShowcase() {
  return (
    <>
      <Section aria-labelledby="catalog-navigation">
        <Container className="flex flex-col gap-10">
          <SectionHeading
            titleId="catalog-navigation"
            eyebrow="Navegación"
            title="Migas de pan y enlaces externos"
          />

          <ShowcaseBlock
            title="Breadcrumbs"
            description='El último nivel no es enlace y lleva aria-current="page".'
          >
            <Breadcrumbs
              items={[
                { label: "Inicio", href: "/" },
                { label: "Servicios", href: "#" },
                { label: "Especialidades", href: "#" },
                { label: "Neurología" },
              ]}
            />
          </ShowcaseBlock>

          <ShowcaseBlock
            title="ExternalLink"
            description="Abre en una pestaña nueva con rel seguro y lo anuncia a lectores de pantalla."
          >
            <ExternalLink
              href="https://example.com"
              className="font-semibold text-emphasis underline underline-offset-4"
            >
              Enlace a un sitio externo
            </ExternalLink>
          </ShowcaseBlock>

          <ShowcaseBlock
            title="Accordion"
            description="Sobre <details>: funciona sin JavaScript. DetailsHashOpener abre el ítem del ancla de la URL."
          >
            <Accordion>
              <AccordionItem id="catalog-faq-1" title="¿Pregunta de ejemplo?">
                <p>Respuesta de ejemplo.</p>
              </AccordionItem>
              <AccordionItem id="catalog-faq-2" title="¿Otra pregunta?">
                <p>Otra respuesta.</p>
              </AccordionItem>
            </Accordion>
          </ShowcaseBlock>

          <ShowcaseBlock
            title="Tabs"
            description="Flechas, Inicio y Fin cambian de pestaña. Sin JavaScript se ven todos los paneles."
          >
            <Tabs
              label="Ejemplo de pestañas"
              items={[
                { id: "uno", label: "Primera", content: <p>Contenido de la primera pestaña.</p> },
                { id: "dos", label: "Segunda", content: <p>Contenido de la segunda pestaña.</p> },
              ]}
            />
          </ShowcaseBlock>

          <ShowcaseBlock title="SocialIcon" description="Decorativo: el enlace lleva el nombre.">
            <Stack direction="horizontal" gap="md">
              {networks.map((network) => (
                <SocialIcon key={network} network={network} className="size-6 text-primary" />
              ))}
            </Stack>
          </ShowcaseBlock>
        </Container>
      </Section>
      <PageHeader
        titleAs="h2"
        titleId="catalog-page-header"
        eyebrow="PageHeader"
        title="Encabezado de página interna"
        description="Migas de pan, título, descripción e imagen opcional."
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Servicios", href: "#" },
          { label: "Urgencias" },
        ]}
      />
      <CtaBand titleId="catalog-cta" />
    </>
  );
}
