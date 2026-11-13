import { Check, Clock } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container, Section } from "@/components/layout";
import { Badge, Heading, Text } from "@/components/ui";
import { getProgram, programs } from "@/config/services";
import {
  PortfolioServicePage,
  gynecologyEquipment,
  interventionismEquipment,
} from "@/features/portfolio";
import type { EquipmentItem } from "@/features/portfolio";

export const ensureStatic = "navigation";

export function generateStaticParams() {
  return programs.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/portafolio/programas/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const entry = getProgram(slug);
  if (!entry) return {};
  return {
    title: `${entry.title} | Portafolio | Clínica La Esperanza`,
    robots: "noindex, nofollow",
  };
}

function EquipmentTable({ items, title }: { items: EquipmentItem[]; title: string }) {
  return (
    <Section tone="surface" spacing="compact" aria-labelledby="equipment-title">
      <Container className="flex flex-col gap-6">
        <Heading as="h2" id="equipment-title" size="lg">
          {title}
        </Heading>
        <ul className="grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <li
              key={item.name}
              className="flex flex-col gap-2 rounded-card border border-border bg-white p-5 shadow-card"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-heading font-bold text-navy">{item.name}</h3>
                <Badge tone={item.confirmed ? "health" : "neutral"} className="shrink-0">
                  {item.confirmed ? (
                    <>
                      <Check aria-hidden="true" className="size-3" /> Confirmado
                    </>
                  ) : (
                    <>
                      <Clock aria-hidden="true" className="size-3" /> Pendiente
                    </>
                  )}
                </Badge>
              </div>
              <Text tone="muted" className="text-sm">
                {item.description}
              </Text>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

export default async function Page({ params }: PageProps<"/portafolio/programas/[slug]">) {
  const { slug } = await params;
  const entry = getProgram(slug);
  if (!entry) notFound();

  const breadcrumbs = [
    { label: "Portafolio", href: "/portafolio/" },
    { label: "Programas especiales", href: "/portafolio/programas/" },
    { label: entry.title },
  ];

  return (
    <PortfolioServicePage entry={entry} breadcrumbs={breadcrumbs}>
      {slug === "centro-de-intervencionismo" && (
        <EquipmentTable items={interventionismEquipment} title="Nuestra tecnología" />
      )}
      {slug === "nace-con-esperanza" && gynecologyEquipment.length > 0 && (
        <EquipmentTable items={gynecologyEquipment} title="Equipos de ginecología" />
      )}
    </PortfolioServicePage>
  );
}
