import { Container, CtaBand, PageHeader, Section, Stack } from "@/components/layout";
import { Breadcrumbs, ExternalLink, SectionHeading, SocialIcon } from "@/components/ui";

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
