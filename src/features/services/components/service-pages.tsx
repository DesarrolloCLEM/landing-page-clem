import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container, CtaBand, PageHeader, Section } from "@/components/layout";

import {
  allServices,
  catalogGroups,
  catalogIntro,
  getHospitalizationOption,
  getProgram,
  getSpecialty,
  getUnit,
} from "../data/catalog";
import { hospitalizationOptions } from "../data/hospitalization";
import { programs, programsIntro } from "../data/programs";
import { specialties } from "../data/specialties";
import type { ServiceEntry } from "../types";
import { RoomOptions } from "./room-options";
import { ServiceDetail } from "./service-detail";
import { ServiceSearch } from "./service-search";

export function ServicesCatalogPage() {
  return (
    <>
      <PageHeader
        eyebrow={catalogIntro.title}
        title={catalogIntro.heading}
        description={catalogIntro.description}
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Servicios" }]}
      />
      <Section aria-label="Catálogo de servicios">
        <Container>
          <ServiceSearch
            groups={catalogGroups}
            label={catalogIntro.searchLabel}
            placeholder={catalogIntro.searchPlaceholder}
            emptyMessage={catalogIntro.emptyMessage}
            emptyAction={catalogIntro.emptyAction}
          />
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}

function EntryCards({
  entries,
  titleId,
  title,
}: {
  entries: ServiceEntry[];
  titleId: string;
  title: string;
}) {
  return (
    <Section tone="surface" spacing="compact" aria-labelledby={titleId}>
      <Container className="flex flex-col gap-6">
        <h2 id={titleId} className="font-heading text-2xl font-bold text-heading sm:text-3xl">
          {title}
        </h2>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {entries.map((entry) => (
            <li
              key={entry.href}
              className="flex flex-col overflow-hidden rounded-card border border-border bg-white text-ink shadow-card"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={entry.image.src}
                  alt={entry.image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="font-heading text-xl font-bold text-navy">{entry.title}</h3>
                <p className="leading-relaxed text-ink-muted">{entry.summary}</p>
                <Link
                  href={entry.href}
                  className="mt-auto inline-flex items-center gap-1 font-semibold text-primary underline-offset-4 hover:underline"
                >
                  Conocer más<span className="sr-only"> sobre {entry.title}</span>
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

export function ProgramsPage() {
  return (
    <>
      <PageHeader
        eyebrow={programsIntro.tagline}
        title={programsIntro.title}
        description={programsIntro.description}
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Servicios", href: "/servicios/" },
          { label: programsIntro.title },
        ]}
      />
      <EntryCards entries={programs} titleId="programs-title" title="Nuestros programas" />
      <CtaBand
        title={programsIntro.closing.title}
        description={programsIntro.closing.description}
      />
    </>
  );
}

export function UnitPage({ slug }: { slug: string }) {
  const entry = getUnit(slug);
  if (!entry) notFound();

  return (
    <ServiceDetail entry={entry}>
      {slug === "hospitalizacion" && (
        <>
          <EntryCards
            entries={hospitalizationOptions.filter(
              (option) => option.slug === "pediatrica" || option.slug === "suite-vip",
            )}
            titleId="hospitalization-areas-title"
            title="Áreas de hospitalización"
          />
          <RoomOptions />
        </>
      )}
    </ServiceDetail>
  );
}

export function HospitalizationOptionPage({ slug }: { slug: string }) {
  const entry = getHospitalizationOption(slug);
  if (!entry) notFound();

  return <ServiceDetail entry={entry}>{slug === "suite-vip" && <RoomOptions />}</ServiceDetail>;
}

export function SpecialtyPage({ slug }: { slug: string }) {
  const entry = getSpecialty(slug);
  if (!entry) notFound();
  return <ServiceDetail entry={entry} />;
}

export function ProgramPage({ slug }: { slug: string }) {
  const entry = getProgram(slug);
  if (!entry) notFound();
  return <ServiceDetail entry={entry} />;
}

export const specialtyParams = () => specialties.map((entry) => ({ slug: entry.slug }));
export const programParams = () => programs.map((entry) => ({ slug: entry.slug }));
export const hospitalizationParams = () =>
  hospitalizationOptions.map((entry) => ({ option: entry.slug }));

/** Metadata of a service page; the description is the card summary trimmed to 160 characters. */
export function serviceMetadata(href: string): Metadata {
  const entry = allServices.find((service) => service.href === href);
  if (!entry) return {};
  const description =
    entry.summary.length > 160 ? `${entry.summary.slice(0, 157).trimEnd()}…` : entry.summary;
  return {
    title: entry.title,
    description,
    alternates: { canonical: entry.href },
    openGraph: { images: [{ url: entry.image.src, alt: entry.image.alt }] },
  };
}
