import { Container, Section } from "@/components/layout";
import { Heading, ImageGallery, StatCard, Text } from "@/components/ui";

import {
  buildings,
  capacityTable,
  capacityTotals,
  expansionStats,
  growthDescription,
  infrastructureIntro,
  projectGallery,
} from "../data/portfolio-infrastructure";

export function PortfolioInfrastructurePage() {
  return (
    <>
      {/* Hero */}
      <Section tone="navy" spacing="default" aria-label="Infraestructura">
        <Container className="flex flex-col items-center gap-4 text-center text-white">
          <p className="text-sm font-semibold tracking-widest text-white/60 uppercase">
            {infrastructureIntro.subtitle}
          </p>
          <Heading as="h1" size="display">
            {infrastructureIntro.title}
          </Heading>
          <Text size="lead" className="max-w-2xl text-white/80">
            {infrastructureIntro.description}
          </Text>
        </Container>
      </Section>

      {/* Cifras destacadas */}
      <Section spacing="compact" aria-labelledby="stats-title">
        <Container className="flex flex-col gap-6">
          <Heading as="h2" id="stats-title" size="lg" className="sr-only">
            Cifras destacadas
          </Heading>
          <dl className="grid gap-6 sm:grid-cols-3">
            {expansionStats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} variant="card" />
            ))}
          </dl>
          <Text tone="muted" className="text-sm italic">
            {infrastructureIntro.disclaimer}
          </Text>
        </Container>
      </Section>

      {/* Ampliación y proyección */}
      <Section tone="surface" spacing="compact" aria-labelledby="growth-title">
        <Container className="flex flex-col gap-4">
          <Heading as="h2" id="growth-title" size="lg">
            Ampliación y proyección
          </Heading>
          {growthDescription.map((paragraph) => (
            <Text key={paragraph.slice(0, 32)} tone="muted" className="max-w-3xl">
              {paragraph}
            </Text>
          ))}
        </Container>
      </Section>

      {/* Tabla de capacidad */}
      <Section spacing="compact" aria-labelledby="capacity-title">
        <Container className="flex flex-col gap-6">
          <Heading as="h2" id="capacity-title" size="lg">
            Así crecerá nuestra capacidad
          </Heading>

          {/* Desktop */}
          <div className="hidden overflow-hidden rounded-card border border-border shadow-card md:block">
            <table className="w-full bg-white text-ink">
              <caption className="sr-only">
                Capacidad actual, ampliación y proyección por servicio
              </caption>
              <thead className="bg-navy text-white">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left font-heading">
                    Servicio
                  </th>
                  <th scope="col" className="px-4 py-3 text-right font-heading">
                    Camas actuales
                  </th>
                  <th scope="col" className="px-4 py-3 text-right font-heading">
                    Ampliación
                  </th>
                  <th scope="col" className="px-4 py-3 text-right font-heading">
                    Proyección total
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {capacityTable.map((row) => (
                  <tr key={row.service}>
                    <th scope="row" className="px-4 py-3 text-left font-semibold">
                      {row.service}
                    </th>
                    <td className="px-4 py-3 text-right tabular-nums">{row.current}</td>
                    <td className="px-4 py-3 text-right tabular-nums">
                      {row.expansion > 0 ? row.expansion : "—"}
                    </td>
                    <td className="px-4 py-3 text-right font-semibold tabular-nums">
                      {row.projected}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="border-t-2 border-navy bg-surface font-bold">
                <tr>
                  <th scope="row" className="px-4 py-3 text-left">
                    {capacityTotals.service}
                  </th>
                  <td className="px-4 py-3 text-right tabular-nums">{capacityTotals.current}</td>
                  <td className="px-4 py-3 text-right tabular-nums">{capacityTotals.expansion}</td>
                  <td className="px-4 py-3 text-right tabular-nums">{capacityTotals.projected}</td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Mobile: stacked cards */}
          <ul className="flex flex-col gap-3 md:hidden">
            {capacityTable.map((row) => (
              <li
                key={row.service}
                className="rounded-card border border-border bg-white p-4 shadow-card"
              >
                <h3 className="font-heading font-bold text-navy">{row.service}</h3>
                <dl className="mt-2 grid grid-cols-3 gap-2 text-center text-sm">
                  <div>
                    <dt className="text-xs text-ink-muted">Actuales</dt>
                    <dd className="font-semibold tabular-nums">{row.current}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-ink-muted">Ampliación</dt>
                    <dd className="font-semibold tabular-nums">
                      {row.expansion > 0 ? row.expansion : "—"}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-ink-muted">Proyección</dt>
                    <dd className="font-semibold tabular-nums">{row.projected}</dd>
                  </div>
                </dl>
              </li>
            ))}
            <li className="rounded-card border-2 border-navy bg-surface p-4 font-bold">
              <span className="text-navy">{capacityTotals.service}</span>
              <dl className="mt-2 grid grid-cols-3 gap-2 text-center text-sm">
                <div>
                  <dt className="text-xs font-normal text-ink-muted">Actuales</dt>
                  <dd className="tabular-nums">{capacityTotals.current}</dd>
                </div>
                <div>
                  <dt className="text-xs font-normal text-ink-muted">Ampliación</dt>
                  <dd className="tabular-nums">{capacityTotals.expansion}</dd>
                </div>
                <div>
                  <dt className="text-xs font-normal text-ink-muted">Proyección</dt>
                  <dd className="tabular-nums">{capacityTotals.projected}</dd>
                </div>
              </dl>
            </li>
          </ul>
        </Container>
      </Section>

      {/* Edificios */}
      <Section tone="surface" spacing="compact" aria-labelledby="buildings-title">
        <Container className="flex flex-col gap-6">
          <Heading as="h2" id="buildings-title" size="lg">
            Detalles del proyecto de ampliación
          </Heading>
          <ul className="grid gap-6 sm:grid-cols-3">
            {buildings.map((building) => (
              <li
                key={building.name}
                className="flex flex-col gap-3 rounded-card border border-border bg-white p-6 shadow-card"
              >
                <h3 className="font-heading text-lg font-bold text-navy">{building.name}</h3>
                <dl className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <dt className="text-xs text-ink-muted">Área del lote</dt>
                    <dd className="font-semibold">{building.lot}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-ink-muted">Área construida</dt>
                    <dd className="font-semibold">{building.builtArea}</dd>
                  </div>
                </dl>
                <p className="text-sm leading-relaxed text-ink-muted">{building.details}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Galería */}
      <Section spacing="compact" aria-labelledby="gallery-title">
        <Container className="flex flex-col gap-6">
          <Heading as="h2" id="gallery-title" size="lg">
            Galería del proyecto
          </Heading>
          <ImageGallery images={projectGallery} />
        </Container>
      </Section>
    </>
  );
}
