import type { Metadata } from "next";

import { OrganigramPage } from "@/features/about";

export const metadata: Metadata = {
  title: "Organigrama",
  description:
    "Estructura organizativa de Clínica La Esperanza: junta directiva, gerencias, direcciones y equipos asistenciales y administrativos.",
  alternates: { canonical: "/organigrama/" },
};

export default function Page() {
  return <OrganigramPage />;
}
