import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { UiCatalog } from "@/features/ui-catalog";

export const metadata: Metadata = {
  title: "Catálogo de componentes",
  robots: { index: false, follow: false },
};

// Internal page: 404 in production builds unless ENABLE_UI_CATALOG=true.
const isEnabled = process.env.NODE_ENV !== "production" || process.env.ENABLE_UI_CATALOG === "true";

export default function UiCatalogPage() {
  if (!isEnabled) notFound();

  return <UiCatalog />;
}
