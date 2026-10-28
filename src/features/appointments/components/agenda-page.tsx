import { Clock, Siren } from "lucide-react";
import Link from "next/link";

import { Container, PageHeader, Section } from "@/components/layout";
import { buttonVariants, ExternalLink, Heading, SocialIcon, Text } from "@/components/ui";
import { appointmentHours, contact } from "@/config/site";
import { cn } from "@/lib/cn";

import { agenda } from "../data";

const whatsappButton = "bg-health-strong hover:bg-health-strong/90";

export function AgendaPage() {
  return (
    <>
      <PageHeader
        title={agenda.title}
        description={agenda.description}
        image={agenda.image}
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: agenda.title }]}
      >
        <ExternalLink
          href={contact.whatsappAppointments.href}
          className={cn(buttonVariants({ size: "lg" }), whatsappButton, "self-start")}
        >
          <SocialIcon network="whatsapp" />
          {agenda.action}
        </ExternalLink>
      </PageHeader>

      <Section aria-labelledby="steps-title">
        <Container className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col gap-6">
            <Heading as="h2" id="steps-title" size="lg">
              {agenda.stepsTitle}
            </Heading>
            <ol className="flex flex-col gap-4">
              {agenda.steps.map((step, index) => (
                <li
                  key={step}
                  className="flex items-center gap-4 rounded-card border border-border bg-white p-5 text-ink shadow-card"
                >
                  <span
                    aria-hidden="true"
                    className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-xl font-extrabold text-white"
                  >
                    {index + 1}
                  </span>
                  <span className="font-heading text-lg font-bold text-navy">
                    <span className="sr-only">Paso {index + 1}: </span>
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <aside
            aria-labelledby="hours-title"
            className="flex flex-col gap-5 self-start rounded-card bg-brand-50 p-6 sm:p-8"
          >
            <Heading as="h2" id="hours-title" size="sm" className="flex items-center gap-2">
              <Clock aria-hidden="true" className="size-5 text-primary" />
              {agenda.hoursTitle}
            </Heading>
            <dl className="flex flex-col gap-3">
              {appointmentHours.map((item) => (
                <div key={item.label}>
                  <dt className="font-semibold text-navy">{item.label}</dt>
                  <dd className="text-ink-muted">{item.value}</dd>
                </div>
              ))}
            </dl>
            <ExternalLink
              href={contact.whatsappAppointments.href}
              className={cn(buttonVariants(), whatsappButton, "self-start")}
            >
              <SocialIcon network="whatsapp" />
              {contact.whatsappAppointments.label}
            </ExternalLink>
          </aside>
        </Container>
      </Section>

      <Section tone="surface" spacing="compact" aria-label="Urgencias">
        <Container className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Text className="flex items-center gap-3 font-semibold">
            <Siren aria-hidden="true" className="size-6 shrink-0 text-emergency-strong" />
            {agenda.emergencyNote}
          </Text>
          <Link
            href="/servicios/urgencias/"
            className={buttonVariants({ variant: "emergency", className: "shrink-0" })}
          >
            Ver urgencias
          </Link>
        </Container>
      </Section>
    </>
  );
}
