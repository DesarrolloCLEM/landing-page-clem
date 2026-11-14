import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  getPortfolioUnitPage,
  PortfolioContentPage,
  portfolioUnitSlugs,
} from "@/features/portfolio";

export const ensureStatic = "navigation";

export function generateStaticParams() {
  return portfolioUnitSlugs.map((unit) => ({ unit }));
}

export async function generateMetadata({
  params,
}: PageProps<"/portafolio/[unit]">): Promise<Metadata> {
  const { unit } = await params;
  const page = getPortfolioUnitPage(unit);
  if (!page) return {};
  return {
    title: `${page.title} | Portafolio | Clínica La Esperanza`,
    robots: "noindex, nofollow",
  };
}

export default async function Page({ params }: PageProps<"/portafolio/[unit]">) {
  const { unit } = await params;
  const page = getPortfolioUnitPage(unit);
  if (!page) notFound();

  return <PortfolioContentPage page={page} />;
}
