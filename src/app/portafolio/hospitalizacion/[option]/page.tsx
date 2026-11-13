import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getHospitalizationOption, hospitalizationOptions } from "@/config/services";
import { PortfolioRoomComparison, PortfolioServicePage } from "@/features/portfolio";

export const ensureStatic = "navigation";

export function generateStaticParams() {
  return hospitalizationOptions.map((entry) => ({ option: entry.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/portafolio/hospitalizacion/[option]">): Promise<Metadata> {
  const { option } = await params;
  const entry = getHospitalizationOption(option);
  if (!entry) return {};
  return {
    title: `${entry.title} | Portafolio | Clínica La Esperanza`,
    robots: "noindex, nofollow",
  };
}

export default async function Page({ params }: PageProps<"/portafolio/hospitalizacion/[option]">) {
  const { option } = await params;
  const entry = getHospitalizationOption(option);
  if (!entry) notFound();

  const breadcrumbs = [
    { label: "Portafolio", href: "/portafolio/" },
    { label: "Hospitalización", href: "/portafolio/hospitalizacion/" },
    { label: entry.title },
  ];

  return (
    <PortfolioServicePage entry={entry} breadcrumbs={breadcrumbs}>
      {option === "suite-vip" && <PortfolioRoomComparison />}
    </PortfolioServicePage>
  );
}
