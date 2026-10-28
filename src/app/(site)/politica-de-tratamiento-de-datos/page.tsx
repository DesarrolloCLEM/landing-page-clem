import type { Metadata } from "next";

import { DataPolicyPage } from "@/features/legal";

export const metadata: Metadata = {
  title: "Política de tratamiento de datos personales",
  description:
    "Política de tratamiento de datos personales de Clínica La Esperanza: finalidades, derechos de los titulares y canales de atención.",
  alternates: { canonical: "/politica-de-tratamiento-de-datos/" },
};

export default function Page() {
  return <DataPolicyPage />;
}
