import type { Metadata } from "next";

import { ServicesCatalogPage } from "@/features/services";

export const metadata: Metadata = {
  title: "Nuestros servicios",
  description:
    "Unidades asistenciales, especialidades médicas y quirúrgicas y programas especiales de Clínica La Esperanza en Montería. Encuentra el servicio que necesitas.",
  alternates: { canonical: "/servicios/" },
};

export default function Page() {
  return <ServicesCatalogPage />;
}
