import { Phone } from "lucide-react";
import type { ReactNode } from "react";

import { Container, PageHeader, Section } from "@/components/layout";
import {
  Badge,
  type BreadcrumbItem,
  buttonVariants,
  Heading,
  ImageGallery,
  Text,
} from "@/components/ui";
import type { ServiceEntry } from "@/config/services";
import { contact } from "@/config/site";

import { PortfolioContentSections } from "./portfolio-content-sections";

export type PortfolioServicePageProps = {
  entry: ServiceEntry;
  breadcrumbs: BreadcrumbItem[];
  children?: ReactNode;
};

export function PortfolioServicePage({ entry, breadcrumbs, children }: PortfolioServicePageProps) {
  const [lead, ...rest] = entry.intro;

  return (
    <>
      <PageHeader
        eyebrow={entry.area ?? entry.tagline}
        title={entry.title}
        description={lead ?? entry.summary}
        image={entry.image}
        breadcrumbs={breadcrumbs}
      >
        {entry.emergency && (
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={contact.emergencyPhone.href}
              className={buttonVariants({ variant: "emergency", size: "lg" })}
            >
              <Phone aria-hidden="true" />
              Llamar a urgencias
            </a>
            <Badge tone="emergency" className="self-start sm:self-center">
              Atención 24 horas
            </Badge>
          </div>
        )}
      </PageHeader>

      {rest.length > 0 && (
        <Section spacing="compact" aria-label={`Sobre ${entry.title}`}>
          <Container className="flex flex-col gap-4">
            {rest.map((paragraph) => (
              <Text key={paragraph.slice(0, 32)} size="lead" tone="muted" className="max-w-3xl">
                {paragraph}
              </Text>
            ))}
          </Container>
        </Section>
      )}

      <PortfolioContentSections sections={entry.sections} startTone={rest.length > 0 ? 1 : 0} />

      {children}

      {entry.plans && <PortfolioPlansSection plans={entry.plans} />}

      {entry.gallery && entry.gallery.length > 0 && (
        <Section tone="surface" spacing="compact" aria-labelledby="gallery-title">
          <Container className="flex flex-col gap-6">
            <Heading as="h2" id="gallery-title" size="lg">
              Conoce nuestros espacios
            </Heading>
            <ImageGallery images={entry.gallery} />
          </Container>
        </Section>
      )}

      <Section tone="navy" spacing="compact" aria-label="Contacto">
        <Container className="flex flex-col items-center gap-4 text-center text-white">
          <Heading as="h2" size="lg">
            {entry.closing?.title ?? "¿Necesitas más información?"}
          </Heading>
          <Text tone="muted" className="max-w-xl text-white/80">
            {entry.emergency
              ? `Urgencias atiende las 24 horas. Llámanos al ${contact.emergencyPhone.label}.`
              : (entry.closing?.description ??
                `Contáctanos al ${contact.phone.label} o escríbenos a ${contact.email.label}.`)}
          </Text>
        </Container>
      </Section>
    </>
  );
}

function PortfolioPlansSection({ plans }: { plans: ServiceEntry["plans"] }) {
  if (!plans || plans.length === 0) return null;
  return (
    <Section tone="navy" spacing="compact" aria-labelledby="plans-title">
      <Container className="flex flex-col gap-8">
        <Heading as="h2" id="plans-title" size="lg" className="text-center text-white">
          Planes disponibles
        </Heading>
        <div className="grid gap-6 sm:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col gap-4 rounded-card border border-white/20 bg-white/10 p-6 text-white"
            >
              <h3 className="font-heading text-xl font-bold">{plan.name}</h3>
              <p className="font-heading text-3xl font-extrabold">{plan.price}</p>
              <p className="text-sm text-white/80">{plan.description}</p>
              <ul className="flex flex-col gap-2 text-sm">
                {plan.includes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-health-light">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
