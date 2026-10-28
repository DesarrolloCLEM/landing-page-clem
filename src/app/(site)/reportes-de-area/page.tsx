import type { Metadata } from "next";

import { DocumentListPage } from "@/features/transparency";

export const metadata: Metadata = {
  title: "Reportes de área",
  description:
    "Reporte del área de seguridad y salud en el trabajo de Clínica La Esperanza, disponible para descarga en PDF.",
  alternates: { canonical: "/reportes-de-area/" },
};

export default function Page() {
  return <DocumentListPage category="reportes-de-area" />;
}
