import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { serviceHrefs } from "@/features/services";

// Indexable pages outside the service catalog. Redirected and retired URLs are not listed.
const pages = [
  "/",
  "/sobre-nosotros/",
  "/politicas-institucionales/",
  "/organigrama/",
  "/comite/",
  "/informes-financieros/",
  "/reportes-de-area/",
  "/indicadores/",
  "/nuestras-proyecciones/",
  "/nueva-infraestructura/",
  "/paquetes-integrales/",
  "/usuarios/",
  "/deberes-y-derechos/",
  "/felicitaciones-sugerencias-quejas-y-reclamos/",
  "/preguntas-frecuentes/",
  "/agenda/",
  "/contacto/",
  "/app-clem/",
  "/eliminar-cuenta/",
  "/politica-de-tratamiento-de-datos/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [...pages, ...serviceHrefs()].map((path) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path.split("/").length > 3 ? 0.6 : 0.8,
  }));
}
