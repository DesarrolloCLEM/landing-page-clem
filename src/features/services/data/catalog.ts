import type { BreadcrumbItem } from "@/components/ui";

import type { ServiceEntry, SpecialtyArea } from "../types";
import { hospitalizationOptions } from "./hospitalization";
import { programs, programsIntro } from "./programs";
import { specialties } from "./specialties";
import { units } from "./units";

export const allServices: ServiceEntry[] = [
  ...units,
  ...hospitalizationOptions,
  ...programs,
  ...specialties,
];

const byHref = new Map(allServices.map((entry) => [entry.href, entry]));

export const getUnit = (slug: string) => units.find((entry) => entry.slug === slug);
export const getSpecialty = (slug: string) => specialties.find((entry) => entry.slug === slug);
export const getProgram = (slug: string) => programs.find((entry) => entry.slug === slug);
export const getHospitalizationOption = (slug: string) =>
  hospitalizationOptions.find((entry) => entry.slug === slug);

export const catalogIntro = {
  title: "Nuestros servicios",
  heading: "Los mejores servicios médicos y la mejor atención",
  description:
    "En la Clínica La Esperanza, nos enfocamos en brindarte diagnósticos certeros y tratamientos a medida. Nuestro equipo médico está dedicado a ofrecerte atención de calidad con los mejores servicios y un enfoque integral para tu salud y bienestar.",
  searchLabel: "Buscar un servicio o especialidad",
  searchPlaceholder: "Ej.: urología, cirugía, pediatría",
  emptyMessage: "No encontramos servicios con ese nombre.",
  emptyAction: { label: "Escríbenos y te orientamos", href: "/contacto/" },
};

export const areaOrder: SpecialtyArea[] = [
  "Especialidades quirúrgicas",
  "Especialidades clínicas",
  "Materno infantil",
  "Rehabilitación y apoyo",
];

export type CatalogGroup = {
  id: string;
  title: string;
  description?: string;
  items: { title: string; summary: string; href: string }[];
};

const toItem = (entry: ServiceEntry) => ({
  title: entry.title,
  summary: entry.summary,
  href: entry.href,
});

export const catalogGroups: CatalogGroup[] = [
  {
    id: "unidades",
    title: "Unidades asistenciales",
    items: [
      ...units,
      ...hospitalizationOptions.filter(
        (entry) => entry.slug === "pediatrica" || entry.slug === "suite-vip",
      ),
    ].map(toItem),
  },
  ...areaOrder.map((area, index) => ({
    // The first specialty group is the target of the /servicios/#especialidades links.
    id:
      index === 0
        ? "especialidades"
        : `especialidades-${area.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\s+/g, "-")}`,
    title: area,
    items: specialties.filter((entry) => entry.area === area).map(toItem),
  })),
  {
    id: "programas",
    title: programsIntro.title,
    description: programsIntro.description,
    items: programs.map(toItem),
  },
];

// Pages outside the service catalog that a service may point to.
const otherPages: Record<string, { title: string; summary: string }> = {
  "/agenda/": { title: "Agenda tu cita", summary: "Agenda tu cita por nuestro canal de WhatsApp." },
  "/app-clem/": {
    title: "App Clem",
    summary: "Consulta tus resultados y realiza tu registro previo.",
  },
  "/paquetes-integrales/": {
    title: "Paquetes integrales",
    summary: "Chequeos y paquetes disponibles en AppCLEM.",
  },
};

export function relatedServices(entry: ServiceEntry) {
  const hrefs =
    entry.related ??
    specialties
      .filter((other) => other.area === entry.area && other.slug !== entry.slug)
      .slice(0, 3)
      .map((other) => other.href);
  return hrefs
    .map((href) => {
      const service = byHref.get(href);
      if (service) return { href, title: service.title, summary: service.summary };
      const page = otherPages[href];
      return page ? { href, ...page } : undefined;
    })
    .filter((item) => item !== undefined);
}

const home: BreadcrumbItem = { label: "Inicio", href: "/" };
const servicesCrumb: BreadcrumbItem = { label: "Servicios", href: "/servicios/" };

export function breadcrumbsFor(entry: ServiceEntry): BreadcrumbItem[] {
  switch (entry.kind) {
    case "unit":
      return [home, servicesCrumb, { label: entry.title }];
    case "hospitalization-option":
      return [
        home,
        servicesCrumb,
        { label: "Hospitalización", href: "/servicios/hospitalizacion/" },
        { label: entry.title },
      ];
    case "program":
      return [
        home,
        servicesCrumb,
        { label: programsIntro.title, href: "/servicios/programas/" },
        { label: entry.title },
      ];
    case "specialty":
      return [
        home,
        servicesCrumb,
        { label: "Especialidades", href: "/servicios/#especialidades" },
        { label: entry.title },
      ];
  }
}
