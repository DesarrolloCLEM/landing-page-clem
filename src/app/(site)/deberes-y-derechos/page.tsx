import type { Metadata } from "next";

import { RightsPage } from "@/features/patients";

export const metadata: Metadata = {
  title: "Deberes y derechos",
  description:
    "Deberes y derechos de los pacientes de Clínica La Esperanza: informar, respetar y cumplir; acceder, decidir, dignidad e información.",
  alternates: { canonical: "/deberes-y-derechos/" },
};

export default function Page() {
  return <RightsPage />;
}
