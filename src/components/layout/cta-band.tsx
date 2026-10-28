import { CalendarCheck, Phone } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import { buttonVariants, Heading, Text } from "@/components/ui";
import { appointmentLink } from "@/config/navigation";
import { contact } from "@/config/site";
import { cn } from "@/lib/cn";

import { Container } from "./container";
import { Section } from "./section";

export type CtaBandProps = {
  title?: ReactNode;
  description?: ReactNode;
  titleId?: string;
};

/** Closing call to action of internal pages: book an appointment or call. */
export function CtaBand({
  title = "¿Necesitas atención médica?",
  description = "Agenda tu cita por WhatsApp o comunícate con nosotros. Estamos para atenderte.",
  titleId = "cta-title",
}: CtaBandProps) {
  return (
    <Section tone="primary" spacing="compact" aria-labelledby={titleId}>
      <Container className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex max-w-2xl flex-col gap-2">
          <Heading as="h2" id={titleId} size="lg">
            {title}
          </Heading>
          <Text size="lead" tone="muted">
            {description}
          </Text>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href={appointmentLink.href}
            className={buttonVariants({ variant: "inverse", size: "lg" })}
          >
            <CalendarCheck aria-hidden="true" />
            {appointmentLink.label}
          </Link>
          <a
            href={contact.phone.href}
            aria-label={`Llamar al ${contact.phone.label}`}
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-transparent text-white ring-2 ring-white/70 ring-inset hover:bg-white/10",
            )}
          >
            <Phone aria-hidden="true" />
            {contact.phone.label}
          </a>
        </div>
      </Container>
    </Section>
  );
}
