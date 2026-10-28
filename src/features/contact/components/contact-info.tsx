import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { ExternalLink, Heading } from "@/components/ui";
import { contact, siteConfig, visitingHours } from "@/config/site";

import { contactPage } from "../data/pages";

/** Address, phone, email and visiting hours of the clinic. */
export function ContactInfo({ headingLevel = "h2" }: { headingLevel?: "h2" | "h3" }) {
  const Sub = headingLevel === "h2" ? "h3" : "h4";

  return (
    <div className="flex flex-col gap-6 rounded-card bg-navy p-6 text-white sm:p-8">
      <div>
        <Heading as={headingLevel} size="md" className="text-white">
          {contactPage.infoTitle}
        </Heading>
        <p className="font-heading font-bold text-sky-accent">{siteConfig.tagline}</p>
      </div>

      <div className="flex flex-col gap-2">
        <Sub className="font-heading font-bold">{contactPage.addressTitle}</Sub>
        <p className="flex gap-2 text-brand-100">
          <MapPin aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
          {contact.address.full}
        </p>
        <ExternalLink
          href={contact.mapsUrl}
          className="font-semibold text-sky-accent underline underline-offset-4"
        >
          {contactPage.mapLinkLabel}
        </ExternalLink>
      </div>

      <div className="flex flex-col gap-2">
        <Sub className="font-heading font-bold">{contactPage.phoneTitle}</Sub>
        <a
          href={contact.phone.href}
          className="inline-flex items-center gap-2 text-brand-100 hover:text-white"
        >
          <Phone aria-hidden="true" className="size-5" />
          PBX {contact.phone.label}
        </a>
        <a
          href={contact.email.href}
          className="inline-flex items-center gap-2 text-brand-100 hover:text-white"
        >
          <Mail aria-hidden="true" className="size-5" />
          {contact.email.label}
        </a>
      </div>

      <div className="flex flex-col gap-2">
        <Sub className="font-heading font-bold">{contactPage.hoursTitle}</Sub>
        <dl className="flex flex-col gap-2">
          {visitingHours.map((item) => (
            <div key={item.label} className="flex flex-col gap-0.5">
              <dt className="flex items-center gap-2 font-semibold">
                <Clock aria-hidden="true" className="size-5 shrink-0 text-brand-100" />
                {item.label}
              </dt>
              <dd className="ps-7 text-brand-100">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
