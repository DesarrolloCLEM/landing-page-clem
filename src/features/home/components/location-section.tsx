import { Clock, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import { Container, Section } from "@/components/layout";
import { buttonVariants, Heading, MapEmbed, SectionHeading } from "@/components/ui";
import { contact, siteConfig, visitingHours } from "@/config/site";

import { location } from "../data/home";

export function LocationSection() {
  return (
    <Section aria-labelledby="location-title">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <div className="flex flex-col gap-6">
          <SectionHeading
            titleId="location-title"
            eyebrow={location.eyebrow}
            title={location.title}
            description={siteConfig.tagline}
          />
          <ul className="flex flex-col gap-3">
            <li className="flex gap-3">
              <MapPin aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
              <span>
                <span className="font-semibold">Dirección:</span> {contact.address.street},{" "}
                {contact.address.neighborhood}, {contact.address.city} – {contact.address.region}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
              <span>
                <span className="font-semibold">PBX:</span>{" "}
                <a
                  href={contact.phone.href}
                  className="text-emphasis underline-offset-4 hover:underline"
                >
                  {contact.phone.label}
                </a>
              </span>
            </li>
          </ul>
          <div className="flex flex-col gap-3">
            <Heading as="h3" size="sm">
              Horarios de visita
            </Heading>
            <dl className="flex flex-col gap-3">
              {visitingHours.map((item) => (
                <div key={item.label} className="flex gap-3">
                  <Clock aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div>
                    <dt className="font-semibold">{item.label}</dt>
                    <dd className="text-muted">{item.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
          <Link
            href={location.action.href}
            className={buttonVariants({ size: "lg", className: "self-start" })}
          >
            {location.action.label}
          </Link>
        </div>
        <MapEmbed
          src={contact.mapsEmbedUrl}
          title={`${location.mapTitle}: ${contact.address.full}`}
          link={{ href: contact.mapsUrl, label: location.mapLinkLabel }}
        />
      </Container>
    </Section>
  );
}
