import type { Metadata } from "next";

import { InfrastructurePage } from "@/features/about";

export const metadata: Metadata = {
  title: "Nueva infraestructura",
  description:
    "Proyecto de expansión de Clínica La Esperanza: nueva torre de 7.764 m² y crecimiento de la capacidad instalada en Montería.",
  alternates: { canonical: "/nueva-infraestructura/" },
};

export default function Page() {
  return <InfrastructurePage />;
}
