import type { Metadata } from "next";

import { CommitteesPage } from "@/features/about";

export const metadata: Metadata = {
  title: "Comité",
  description:
    "Los trece comités de Clínica La Esperanza que trabajan por la calidad, la ética y la seguridad en la atención de nuestros pacientes.",
  alternates: { canonical: "/comite/" },
};

export default function Page() {
  return <CommitteesPage />;
}
