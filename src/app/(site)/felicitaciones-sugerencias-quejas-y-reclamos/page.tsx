import type { Metadata } from "next";

import { FeedbackPage } from "@/features/contact";

export const metadata: Metadata = {
  title: "Felicitaciones, sugerencias, quejas y reclamos",
  description:
    "Déjanos tus felicitaciones, sugerencias, quejas o reclamos. Tu opinión nos ayuda a mejorar la atención en Clínica La Esperanza.",
  alternates: { canonical: "/felicitaciones-sugerencias-quejas-y-reclamos/" },
};

export default function Page() {
  return <FeedbackPage />;
}
