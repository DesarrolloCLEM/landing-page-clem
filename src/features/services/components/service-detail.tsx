import { ArrowRight, CalendarCheck, Phone } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import { Container, CtaBand, Grid, PageHeader, Section } from "@/components/layout";
import {
  Badge,
  buttonVariants,
  Heading,
  ImageGallery,
  SectionHeading,
  Text,
} from "@/components/ui";
import { appointmentLink } from "@/config/navigation";
import { contact } from "@/config/site";

import { breadcrumbsFor, relatedServices } from "../data/catalog";
import type { ServiceEntry } from "../types";
import { ContentSections } from "./content-sections";
import { PlansSection } from "./plans-section";

export type ServiceDetailProps = {
  entry: ServiceEntry;
  /** Extra blocks rendered after the content sections (room options, comparison...). */
  children?: ReactNode;
};

export function ServiceDetail({ entry, children }: ServiceDetailProps) {
  const [lead, ...rest] = entry.intro;
  const related = relatedServices(entry);

  return (
    <>
      <PageHeader
        eyebrow={entry.area ?? entry.tagline}
        title={entry.title}
        description={lead ?? entry.summary}
        image={entry.image}
        breadcrumbs={breadcrumbsFor(entry)}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {entry.emergency && (
            <a
              href={contact.emergencyPhone.href}
              className={buttonVariants({ variant: "emergency", size: "lg" })}
            >
              <Phone aria-hidden="true" />
              Llamar a urgencias
            </a>
          )}
          <Link
            href={appointmentLink.href}
            className={buttonVariants({
              variant: entry.emergency ? "secondary" : "primary",
              size: "lg",
            })}
          >
            <CalendarCheck aria-hidden="true" />
            Agendar cita
          </Link>
          {entry.emergency && (
            <Badge tone="emergency" className="self-start sm:self-center">
              Atención 24 horas
            </Badge>
          )}
        </div>
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

      <ContentSections sections={entry.sections} startTone={rest.length > 0 ? 1 : 0} />

      {children}

      {entry.plans && <PlansSection plans={entry.plans} />}

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

      {related.length > 0 && (
        <Section spacing="compact" aria-labelledby="related-title">
          <Container className="flex flex-col gap-6">
            <SectionHeading titleId="related-title" title="Servicios relacionados" size="md" />
            <Grid as="ul" cols={3} gap="sm">
              {related.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex h-full flex-col gap-2 rounded-card border border-border bg-white p-5 shadow-card transition-shadow hover:shadow-card-hover"
                  >
                    <span className="flex items-center justify-between gap-2 font-heading font-bold text-navy">
                      {item.title}
                      <ArrowRight
                        aria-hidden="true"
                        className="size-4 shrink-0 text-primary transition-transform group-hover:translate-x-0.5"
                      />
                    </span>
                    <span className="line-clamp-3 text-sm text-ink-muted">{item.summary}</span>
                  </Link>
                </li>
              ))}
            </Grid>
          </Container>
        </Section>
      )}

      <CtaBand
        title={entry.closing?.title}
        description={
          entry.emergency
            ? `Urgencias atiende las 24 horas. Llámanos al ${contact.emergencyPhone.label} o acércate a la Calle 12 # 4-58.`
            : entry.closing?.description || undefined
        }
      />
    </>
  );
}
