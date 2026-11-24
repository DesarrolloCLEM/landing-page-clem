import type { Metadata } from "next";

import { PortfolioCinematicHomePage } from "@/features/portfolio";

export const metadata: Metadata = {
  title: "Portafolio (vista previa) | Clínica La Esperanza",
  robots: "noindex, nofollow",
};

export default function Page() {
  return <PortfolioCinematicHomePage />;
}
