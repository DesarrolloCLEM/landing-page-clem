import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  getPortfolioSpecialtyPage,
  PortfolioContentPage,
  portfolioSpecialtySlugs,
} from "@/features/portfolio";

export const ensureStatic = "navigation";

export function generateStaticParams() {
  return portfolioSpecialtySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/portafolio/especialidades/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = getPortfolioSpecialtyPage(slug);
  if (!page) return {};
  return {
    title: `${page.title} | Portafolio | Clínica La Esperanza`,
    robots: "noindex, nofollow",
  };
}

export default async function Page({ params }: PageProps<"/portafolio/especialidades/[slug]">) {
  const { slug } = await params;
  const page = getPortfolioSpecialtyPage(slug);
  if (!page) notFound();

  return <PortfolioContentPage page={page} />;
}
