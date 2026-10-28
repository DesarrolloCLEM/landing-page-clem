import type { Metadata } from "next";

import { DocumentListPage } from "@/features/transparency";

export const metadata: Metadata = {
  title: "Informes financieros",
  description:
    "Estados financieros comparativos de Clínica La Esperanza desde 2013 hasta 2025, disponibles para descarga en PDF.",
  alternates: { canonical: "/informes-financieros/" },
};

export default function Page() {
  return <DocumentListPage category="informes-financieros" />;
}
