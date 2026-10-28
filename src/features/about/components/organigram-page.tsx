import { Expand } from "lucide-react";
import Image from "next/image";

import { Container, CtaBand, PageHeader, Section } from "@/components/layout";
import { buttonVariants, Heading } from "@/components/ui";

import { organigram, organigramHeader } from "../data/organization";
import type { OrgUnit } from "../types";
import { aboutTrail } from "./breadcrumbs";

function OrgTree({ units }: { units: OrgUnit[] }) {
  return (
    <ul className="flex flex-col gap-2 border-s border-border ps-4">
      {units.map((unit) => (
        <li key={unit.name} className="flex flex-col gap-2">
          <span>
            <span className="font-semibold text-foreground">{unit.name}</span>
            {unit.note && <span className="text-sm text-muted"> ({unit.note})</span>}
          </span>
          {unit.children && <OrgTree units={unit.children} />}
        </li>
      ))}
    </ul>
  );
}

export function OrganigramPage() {
  const { image } = organigramHeader;

  return (
    <>
      <PageHeader
        title={organigramHeader.title}
        description={organigramHeader.description}
        breadcrumbs={aboutTrail(organigramHeader.title)}
      />
      <Section aria-labelledby="organigram-text-title">
        <Container className="flex flex-col gap-10">
          <figure className="flex flex-col gap-4">
            <div className="overflow-hidden rounded-card border border-border bg-white p-4 shadow-card">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(min-width: 1280px) 1200px, 100vw"
                className="mx-auto h-auto w-full max-w-5xl"
              />
            </div>
            <figcaption>
              <a
                href={image.src}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "secondary" })}
              >
                <Expand aria-hidden="true" />
                {organigramHeader.openLabel}
                <span className="sr-only"> (abre en una pestaña nueva)</span>
              </a>
            </figcaption>
          </figure>

          <div className="flex flex-col gap-6 rounded-card border border-border bg-surface p-6">
            <Heading as="h2" id="organigram-text-title" size="md">
              {organigramHeader.textTitle}
            </Heading>
            <div className="-ms-4">
              <OrgTree units={[organigram]} />
            </div>
          </div>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
