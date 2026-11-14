import type { Metadata } from "next";

import { PortfolioContentPage, programasEspecialesPage } from "@/features/portfolio";

export const metadata: Metadata = {
  title: "Programas Especiales | Portafolio | Clínica La Esperanza",
  robots: "noindex, nofollow",
};

export default function Page() {
  return <PortfolioContentPage page={programasEspecialesPage} />;
}
