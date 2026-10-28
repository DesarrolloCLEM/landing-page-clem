import type { BreadcrumbItem } from "@/components/ui";

/** Trail for the pages that hang from "Sobre nosotros". */
export function aboutTrail(title: string): BreadcrumbItem[] {
  return [
    { label: "Inicio", href: "/" },
    { label: "Sobre nosotros", href: "/sobre-nosotros/" },
    { label: title },
  ];
}
