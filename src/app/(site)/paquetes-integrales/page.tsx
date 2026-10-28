import type { Metadata } from "next";

import { PackagesPage } from "@/features/app-clem";

export const metadata: Metadata = {
  title: "Paquetes integrales",
  description:
    "Paquetes de salud de Clínica La Esperanza: Latidos de vida, Mujer Sana y Listo para entrenar, disponibles en AppCLEM.",
  alternates: { canonical: "/paquetes-integrales/" },
};

export default function Page() {
  return <PackagesPage />;
}
