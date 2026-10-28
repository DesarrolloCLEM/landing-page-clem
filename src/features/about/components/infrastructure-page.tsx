import { Building2 } from "lucide-react";

import { Container, CtaBand, Grid, PageHeader, Section } from "@/components/layout";
import { Heading, IconBox, ImageGallery, SectionHeading, StatCard, Text } from "@/components/ui";
import { expansionStats } from "@/config/stats";

import {
  buildingDetails,
  capacityRows,
  capacityTable,
  expansion,
  gallery,
  infrastructureCta,
  infrastructureHeader,
} from "../data/growth";
import { aboutTrail } from "./breadcrumbs";

const rows = capacityRows.map((row) => ({ ...row, expansion: row.projected - row.current }));
const totals = rows.reduce(
  (sum, row) => ({
    current: sum.current + row.current,
    expansion: sum.expansion + row.expansion,
    projected: sum.projected + row.projected,
  }),
  { current: 0, expansion: 0, projected: 0 },
);

function CapacityTable() {
  const { columns } = capacityTable;
  const cell = "px-4 py-3 text-right tabular-nums";

  return (
    <>
      {/* Desktop: real table. */}
      <table className="hidden w-full overflow-hidden rounded-card border border-border bg-white text-left shadow-card md:table">
        <caption className="sr-only">{capacityTable.title}</caption>
        <thead className="bg-navy text-white">
          <tr>
            <th scope="col" className="px-4 py-3 font-heading">
              {columns.service}
            </th>
            <th scope="col" className={`${cell} font-heading`}>
              {columns.current}
            </th>
            <th scope="col" className={`${cell} font-heading`}>
              {columns.expansion}
            </th>
            <th scope="col" className={`${cell} font-heading`}>
              {columns.projected}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border text-ink">
          {rows.map((row) => (
            <tr key={row.service}>
              <th scope="row" className="px-4 py-3 font-semibold">
                {row.service}
              </th>
              <td className={cell}>{row.current}</td>
              <td className={`${cell} text-health-strong`}>+{row.expansion}</td>
              <td className={`${cell} font-bold text-primary`}>{row.projected}</td>
            </tr>
          ))}
        </tbody>
        <tfoot className="bg-brand-50 font-bold text-navy">
          <tr>
            <th scope="row" className="px-4 py-3">
              {capacityTable.totalLabel}
            </th>
            <td className={cell}>{totals.current}</td>
            <td className={cell}>+{totals.expansion}</td>
            <td className={cell}>{totals.projected}</td>
          </tr>
        </tfoot>
      </table>

      {/* Mobile: one card per service, no horizontal scroll. */}
      <ul className="flex flex-col gap-3 md:hidden">
        {[...rows, { service: capacityTable.totalLabel, ...totals }].map((row) => (
          <li
            key={row.service}
            className="rounded-card border border-border bg-white p-4 shadow-card"
          >
            <h3 className="font-heading font-bold text-navy">{row.service}</h3>
            <dl className="mt-3 grid grid-cols-3 gap-2 text-center">
              <div>
                <dt className="text-xs font-semibold text-ink-muted">{columns.current}</dt>
                <dd className="text-xl font-bold text-ink">{row.current}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold text-ink-muted">{columns.expansion}</dt>
                <dd className="text-xl font-bold text-health-strong">+{row.expansion}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold text-ink-muted">{columns.projected}</dt>
                <dd className="text-xl font-bold text-primary">{row.projected}</dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>
    </>
  );
}

export function InfrastructurePage() {
  return (
    <>
      <PageHeader
        eyebrow={infrastructureHeader.eyebrow}
        title={infrastructureHeader.title}
        description={infrastructureHeader.description}
        image={infrastructureHeader.image}
        breadcrumbs={aboutTrail("Nueva infraestructura")}
      />

      <Section spacing="compact" aria-labelledby="expansion-title">
        <Container className="flex flex-col gap-10">
          <dl className="motion-stagger grid gap-4 sm:grid-cols-3">
            {expansionStats.map((stat) => (
              <StatCard
                key={stat.label}
                variant="card"
                align="center"
                value={stat.value}
                label={stat.label}
              />
            ))}
          </dl>
          <Text size="small" tone="muted">
            {infrastructureHeader.statsNote}
          </Text>
          <div className="grid gap-6 lg:grid-cols-[1fr_2fr]">
            <Heading as="h2" id="expansion-title" size="lg">
              {expansion.title}
            </Heading>
            <div className="flex flex-col gap-4">
              {expansion.paragraphs.map((paragraph) => (
                <Text key={paragraph.slice(0, 24)} size="lead" tone="muted">
                  {paragraph}
                </Text>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="surface" aria-labelledby="gallery-title">
        <Container className="flex flex-col gap-8">
          <SectionHeading titleId="gallery-title" title={gallery.title} size="lg" />
          <ImageGallery images={gallery.images} />
        </Container>
      </Section>

      <Section aria-labelledby="capacity-table-title">
        <Container className="flex flex-col gap-8">
          <SectionHeading titleId="capacity-table-title" title={capacityTable.title} size="lg" />
          <CapacityTable />
        </Container>
      </Section>

      <Section tone="surface" aria-labelledby="building-details-title">
        <Container className="flex flex-col gap-8">
          <SectionHeading
            titleId="building-details-title"
            title={buildingDetails.title}
            size="lg"
          />
          <Grid as="ul" cols={2}>
            {buildingDetails.items.map((item) => (
              <li
                key={item.title}
                className="flex gap-4 rounded-card border border-border bg-white p-6 shadow-card"
              >
                <IconBox tone="primary">
                  <Building2 />
                </IconBox>
                <div className="flex flex-col gap-1">
                  <h3 className="font-heading text-lg font-bold text-navy">{item.title}</h3>
                  <p className="text-ink-muted">{item.text}</p>
                </div>
              </li>
            ))}
          </Grid>
        </Container>
      </Section>

      <CtaBand title={infrastructureCta.title} description={infrastructureCta.description} />
    </>
  );
}
