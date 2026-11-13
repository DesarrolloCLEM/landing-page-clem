import type { Metadata } from "next";

import { PortfolioInfrastructurePage } from "@/features/portfolio";

export const metadata: Metadata = {
  title: "Infraestructura | Portafolio | Clínica La Esperanza",
  robots: "noindex, nofollow",
};

export default function Page() {
  return <PortfolioInfrastructurePage />;
}
