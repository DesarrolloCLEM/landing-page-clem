import type { Metadata } from "next";

import { AppClemPage } from "@/features/app-clem";

export const metadata: Metadata = {
  title: "App Clem",
  description:
    "Consulta tus resultados de laboratorio e imágenes, haz tu registro previo y descarga AppCLEM para Android e iOS.",
  alternates: { canonical: "/app-clem/" },
};

export default function Page() {
  return <AppClemPage />;
}
