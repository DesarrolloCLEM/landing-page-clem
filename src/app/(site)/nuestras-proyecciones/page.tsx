import type { Metadata } from "next";

import { ProjectionsPage } from "@/features/about";

export const metadata: Metadata = {
  title: "Nuestras proyecciones",
  description:
    "Proyecciones de crecimiento de Clínica La Esperanza en camas, quirófanos, consultorios y equipos de diagnóstico.",
  alternates: { canonical: "/nuestras-proyecciones/" },
};

export default function Page() {
  return <ProjectionsPage />;
}
