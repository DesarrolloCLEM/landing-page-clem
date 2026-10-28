import type { Metadata } from "next";

import { UsersPage } from "@/features/patients";

export const metadata: Metadata = {
  title: "Usuarios",
  description:
    "SIAU y Alianza de Usuarios de Clínica La Esperanza: participa, comparte tu experiencia y conoce las historias de nuestros pacientes.",
  alternates: { canonical: "/usuarios/" },
};

export default function Page() {
  return <UsersPage />;
}
