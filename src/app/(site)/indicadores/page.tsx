import type { Metadata } from "next";

import { DocumentListPage } from "@/features/transparency";

export const metadata: Metadata = {
  title: "Indicadores",
  description:
    "Reportes externos de indicadores de gestión de Clínica La Esperanza publicados semestralmente, disponibles en PDF.",
  alternates: { canonical: "/indicadores/" },
};

export default function Page() {
  return <DocumentListPage category="indicadores" />;
}
