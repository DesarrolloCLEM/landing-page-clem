import { ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";

import { Container, CtaBand, PageHeader, Section } from "@/components/layout";
import { buttonVariants, Text } from "@/components/ui";

import { projections, projectionsHeader } from "../data/growth";
import { aboutTrail } from "./breadcrumbs";

export function ProjectionsPage() {
  return (
    <>
      <PageHeader
        title={projectionsHeader.title}
        description={projectionsHeader.description}
        breadcrumbs={aboutTrail(projectionsHeader.title)}
      />
      <Section aria-label="Proyecciones de capacidad">
        <Container className="flex flex-col gap-10">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projections.map((item) => (
              <li
                key={item.label}
                className="flex flex-col gap-4 rounded-card border border-border bg-white p-5 shadow-card"
              >
                <h2 className="font-heading font-bold text-navy">{item.label}</h2>
                <div className="flex items-center gap-3">
                  <dl className="flex flex-1 flex-col rounded-xl bg-surface px-4 py-3">
                    <dt className="text-sm font-semibold text-ink-muted">
                      {projectionsHeader.currentLabel}
                    </dt>
                    <dd className="font-heading text-3xl font-extrabold text-navy">
                      {item.current}
                    </dd>
                  </dl>
                  <ArrowRight aria-hidden="true" className="size-5 shrink-0 text-primary" />
                  <dl className="flex flex-1 flex-col rounded-xl bg-brand-50 px-4 py-3">
                    <dt className="text-sm font-semibold text-brand-700">
                      {projectionsHeader.projectedLabel}
                    </dt>
                    <dd className="flex items-center gap-2 font-heading text-3xl font-extrabold text-primary">
                      {item.projected}
                      {item.projected > item.current && (
                        <TrendingUp aria-hidden="true" className="size-5 text-health-strong" />
                      )}
                    </dd>
                  </dl>
                </div>
              </li>
            ))}
          </ul>
          <Text size="lead" tone="muted" className="max-w-3xl">
            {projectionsHeader.closing}
          </Text>
          <Link
            href={projectionsHeader.infrastructureLink.href}
            className={buttonVariants({ variant: "secondary", className: "self-start" })}
          >
            {projectionsHeader.infrastructureLink.label}
            <ArrowRight aria-hidden="true" />
          </Link>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
