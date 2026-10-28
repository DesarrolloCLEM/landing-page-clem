import type { Metadata } from "next";

import { bodyFont, headingFont } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.titleSuffix,
    template: `%s - ${siteConfig.titleSuffix}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: siteConfig.titleSuffix,
    images: [
      {
        url: "/images/og/clinica-la-esperanza.jpg",
        width: 1200,
        height: 630,
        alt: "Fachada de Clínica La Esperanza en Montería",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-CO" className={cn(headingFont.variable, bodyFont.variable)}>
      <body className="flex min-h-dvh flex-col">{children}</body>
    </html>
  );
}
