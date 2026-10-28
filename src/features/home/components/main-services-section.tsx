import { Container, Section } from "@/components/layout";
import { SectionHeading } from "@/components/ui";

import { mainServices } from "../data/home";
import { ServiceCardGrid } from "./service-card-grid";

export function MainServicesSection() {
  return (
    <Section tone="surface" aria-labelledby="main-services-title">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          titleId="main-services-title"
          eyebrow={mainServices.eyebrow}
          title={mainServices.title}
          align="center"
        />
        <ServiceCardGrid items={mainServices.items} />
      </Container>
    </Section>
  );
}
