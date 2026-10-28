import type { Metadata } from "next";

import { bodyFont, headingFont } from "@/config/fonts";
import { cn } from "@/lib/cn";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://clinicalaesperanza.co"),
  title: {
    default: "Clínica La Esperanza | Montería, Córdoba",
    template: "%s | Clínica La Esperanza",
  },
  description:
    "Atención médica integral con calidad, calidez y confianza en Montería, Córdoba. Urgencias, cirugía, hospitalización y consulta externa.",
  applicationName: "Clínica La Esperanza",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-CO" className={cn(headingFont.variable, bodyFont.variable)}>
      <body className="flex min-h-dvh flex-col">{children}</body>
    </html>
  );
}
