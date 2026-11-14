import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  getPortfolioHospitalizationPage,
  PortfolioContentPage,
  portfolioHospitalizationSlugs,
} from "@/features/portfolio";

export const ensureStatic = "navigation";

export function generateStaticParams() {
  return portfolioHospitalizationSlugs.map((option) => ({ option }));
}

export async function generateMetadata({
  params,
}: PageProps<"/portafolio/hospitalizacion/[option]">): Promise<Metadata> {
  const { option } = await params;
  const page = getPortfolioHospitalizationPage(option);
  if (!page) return {};
  return {
    title: `${page.title} | Portafolio | Clínica La Esperanza`,
    robots: "noindex, nofollow",
  };
}

export default async function Page({ params }: PageProps<"/portafolio/hospitalizacion/[option]">) {
  const { option } = await params;
  const page = getPortfolioHospitalizationPage(option);
  if (!page) notFound();

  return <PortfolioContentPage page={page} />;
}
