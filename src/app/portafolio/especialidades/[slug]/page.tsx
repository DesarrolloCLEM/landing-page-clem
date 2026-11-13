import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getSpecialty, specialties } from "@/config/services";
import { PortfolioServicePage } from "@/features/portfolio";

export const ensureStatic = "navigation";

export function generateStaticParams() {
  return specialties.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/portafolio/especialidades/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const entry = getSpecialty(slug);
  if (!entry) return {};
  return {
    title: `${entry.title} | Portafolio | Clínica La Esperanza`,
    robots: "noindex, nofollow",
  };
}

export default async function Page({ params }: PageProps<"/portafolio/especialidades/[slug]">) {
  const { slug } = await params;
  const entry = getSpecialty(slug);
  if (!entry) notFound();

  const breadcrumbs = [
    { label: "Portafolio", href: "/portafolio/" },
    { label: "Consulta externa", href: "/portafolio/consulta-externa/" },
    { label: entry.title },
  ];

  return <PortfolioServicePage entry={entry} breadcrumbs={breadcrumbs} />;
}
