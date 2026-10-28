import { Container, Section } from "@/components/layout";
import { SectionHeading } from "@/components/ui";

import { catalogIntro } from "../data/samples";
import { ActionsShowcase } from "./actions-showcase";
import { ContentShowcase } from "./content-showcase";
import { FormsShowcase } from "./forms-showcase";
import { LayoutShowcase } from "./layout-showcase";
import { NavigationShowcase } from "./navigation-showcase";
import { TypographyShowcase } from "./typography-showcase";

export function UiCatalog() {
  return (
    <main>
      <Section spacing="compact" className="border-b border-border" aria-labelledby="catalog-title">
        <Container>
          <SectionHeading
            as="h1"
            size="display"
            titleId="catalog-title"
            eyebrow={catalogIntro.eyebrow}
            title={catalogIntro.title}
            description={catalogIntro.description}
          />
        </Container>
      </Section>
      <ActionsShowcase />
      <TypographyShowcase />
      <ContentShowcase />
      <NavigationShowcase />
      <FormsShowcase />
      <LayoutShowcase />
    </main>
  );
}
