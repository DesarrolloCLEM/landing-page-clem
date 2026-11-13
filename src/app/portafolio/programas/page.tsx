import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Container, Grid, PageHeader, Section } from "@/components/layout";
import { programs, programsIntro } from "@/config/services";

export const metadata: Metadata = {
  title: "Programas Especiales | Portafolio | Clínica La Esperanza",
  robots: "noindex, nofollow",
};

export default function Page() {
  const breadcrumbs = [
    { label: "Portafolio", href: "/portafolio/" },
    { label: "Programas especiales" },
  ];

  return (
    <>
      <PageHeader
        eyebrow={programsIntro.tagline}
        title={programsIntro.title}
        description={programsIntro.description}
        breadcrumbs={breadcrumbs}
      />
      <Section tone="surface" spacing="compact" aria-label="Programas">
        <Container>
          <Grid as="ul" cols={3} gap="md">
            {programs.map((program) => (
              <li key={program.slug}>
                <Link
                  href={`/portafolio/programas/${program.slug}/`}
                  className="group flex h-full flex-col overflow-hidden rounded-card border border-border bg-white shadow-card transition-shadow hover:shadow-card-hover"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={program.image.src}
                      alt={program.image.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-5">
                    <h2 className="flex items-center justify-between gap-2 font-heading text-lg font-bold text-navy">
                      {program.title}
                      <ArrowRight
                        aria-hidden="true"
                        className="size-4 shrink-0 text-primary transition-transform group-hover:translate-x-0.5"
                      />
                    </h2>
                    <p className="text-sm leading-relaxed text-ink-muted">{program.summary}</p>
                  </div>
                </Link>
              </li>
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
}
