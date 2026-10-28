import type { Metadata } from "next";

import { AccountDeletionPage } from "@/features/contact";

export const metadata: Metadata = {
  title: "Eliminar cuenta",
  description:
    "Solicita la eliminación de tu cuenta de la aplicación AppCLEM de Clínica La Esperanza y conoce qué ocurre con tus datos.",
  alternates: { canonical: "/eliminar-cuenta/" },
};

export default function Page() {
  return <AccountDeletionPage />;
}
