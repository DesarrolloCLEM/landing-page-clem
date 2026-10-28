import type { Metadata } from "next";

import { ProgramsPage } from "@/features/services";

export const metadata: Metadata = {
  title: "Programas especiales",
  description:
    "Programas especiales de Clínica La Esperanza: Nace con Esperanza, chequeos médicos preventivos y Centro de Intervencionismo Cardiovascular.",
  alternates: { canonical: "/servicios/programas/" },
};

export default function Page() {
  return <ProgramsPage />;
}
