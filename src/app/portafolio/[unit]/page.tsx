import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getSpecialty, getUnit, units } from "@/config/services";
import { PortfolioServicePage } from "@/features/portfolio";

const topLevelSpecialties = ["ginecologia-y-obstetricia"];

function findEntry(slug: string) {
  return getUnit(slug) ?? (topLevelSpecialties.includes(slug) ? getSpecialty(slug) : undefined);
}

export const ensureStatic = "navigation";

export function generateStaticParams() {
  return [
    ...units.map((entry) => ({ unit: entry.slug })),
    ...topLevelSpecialties.map((slug) => ({ unit: slug })),
  ];
}

export async function generateMetadata({
  params,
}: PageProps<"/portafolio/[unit]">): Promise<Metadata> {
  const { unit } = await params;
  const entry = findEntry(unit);
  if (!entry) return {};
  return {
    title: `${entry.title} | Portafolio | Clínica La Esperanza`,
    robots: "noindex, nofollow",
  };
}

export default async function Page({ params }: PageProps<"/portafolio/[unit]">) {
  const { unit } = await params;
  const entry = findEntry(unit);
  if (!entry) notFound();

  const breadcrumbs = [{ label: "Portafolio", href: "/portafolio/" }, { label: entry.title }];

  return <PortfolioServicePage entry={entry} breadcrumbs={breadcrumbs} />;
}
