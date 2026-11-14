import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  getPortfolioProgramPage,
  PortfolioContentPage,
  portfolioProgramSlugs,
} from "@/features/portfolio";

export const ensureStatic = "navigation";

export function generateStaticParams() {
  return portfolioProgramSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/portafolio/programas/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = getPortfolioProgramPage(slug);
  if (!page) return {};
  return {
    title: `${page.title} | Portafolio | Clínica La Esperanza`,
    robots: "noindex, nofollow",
  };
}

export default async function Page({ params }: PageProps<"/portafolio/programas/[slug]">) {
  const { slug } = await params;
  const page = getPortfolioProgramPage(slug);
  if (!page) notFound();

  return <PortfolioContentPage page={page} />;
}
