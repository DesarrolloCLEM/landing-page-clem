import { Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/layout";
import { Heading } from "@/components/ui";
import { contact, siteConfig } from "@/config/site";

import { contactClosing } from "../../data/portfolio-home";

/** Closing of the page: the same contact details as the current home, without motion. */
export function CinematicContact() {
  return (
    <section
      id="contacto"
      aria-labelledby="cine-contact-title"
      className="bg-navy py-20 text-white lg:py-28"
    >
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-end">
        <div className="flex flex-col gap-6">
          <Heading as="h2" id="cine-contact-title" size="md" className="text-brand-200">
            Contacto
          </Heading>
          <p className="font-heading text-[clamp(2.25rem,5vw,4rem)] leading-[1.02] font-extrabold tracking-[-0.01em] text-balance text-white">
            {contactClosing}
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <address className="flex flex-col gap-4 text-white/85 not-italic">
            <p className="flex items-start gap-3">
              <MapPin aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand-200" />
              {contact.address.full}
            </p>
            <p className="flex items-center gap-3">
              <Mail aria-hidden="true" className="size-5 shrink-0 text-brand-200" />
              <a
                href={contact.email.href}
                className="inline-flex min-h-11 items-center hover:underline"
              >
                {contact.email.label}
              </a>
            </p>
            <p className="flex items-center gap-3">
              <Phone aria-hidden="true" className="size-5 shrink-0 text-brand-200" />
              <a
                href={contact.phone.href}
                className="inline-flex min-h-11 items-center hover:underline"
              >
                {contact.phone.label}
              </a>
            </p>
          </address>
          <p className="flex flex-col text-sm text-white/70">
            <span>{siteConfig.name}</span>
            <span>{siteConfig.tagline}</span>
          </p>
        </div>
      </Container>
    </section>
  );
}
