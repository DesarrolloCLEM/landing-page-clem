import type { Metadata } from "next";

import { AboutPage } from "@/features/about";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "Conoce la historia, misión, visión, valores y capacidad de Clínica La Esperanza, institución de salud de mediana y alta complejidad en Montería.",
  alternates: { canonical: "/sobre-nosotros/" },
};

export default function Page() {
  return <AboutPage />;
}
