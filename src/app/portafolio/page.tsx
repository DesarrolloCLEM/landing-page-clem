import type { Metadata } from "next";

import { PortfolioHomePage } from "@/features/portfolio";

export const metadata: Metadata = {
  title: "Portafolio | Clínica La Esperanza",
  robots: "noindex, nofollow",
};

export default function Page() {
  return <PortfolioHomePage />;
}
