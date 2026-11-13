import { expansionStats } from "@/config/stats";

import type { BuildingInfo, CapacityRow } from "../types";

export { expansionStats };

export const infrastructureIntro = {
  title: "Construyendo el futuro de tu salud",
  subtitle: "EXPANSIÓN Y CRECIMIENTO",
  description:
    "Un proyecto de expansión que fortalecerá nuestra capacidad instalada y la atención para miles de familias.",
  disclaimer:
    "Las capacidades proyectadas estarán disponibles conforme avance el proceso de dotación, habilitación y puesta en operación de cada servicio.",
};

export const growthDescription = [
  "Nuestra gestión se orienta al mejoramiento continuo, la innovación y el fortalecimiento de las capacidades institucionales, consolidando una oferta de servicios que responde a los desafíos actuales del sector salud.",
  "Avanzamos en el fortalecimiento de nuestra infraestructura, tecnología y talento humano para ofrecer una atención más integral, segura y oportuna, con una visión de futuro y nuevas posibilidades para nuestros pacientes.",
];

export const capacityTable: CapacityRow[] = [
  { service: "Hospitalización General", current: 26, expansion: 38, projected: 64 },
  { service: "Hospitalización Cuarto Piso", current: 32, expansion: 0, projected: 64 },
  { service: "Cuidados Intensivos Adultos", current: 12, expansion: 0, projected: 19 },
  { service: "Cuidados Intermedios Adultos", current: 2, expansion: 11, projected: 13 },
  { service: "Cuidados Intensivos Neonatal", current: 26, expansion: 4, projected: 30 },
  { service: "Cuidados Intensivos Pediátricos", current: 7, expansion: 8, projected: 15 },
];

export const capacityTotals: CapacityRow = {
  service: "Total",
  current: 105,
  expansion: 101,
  projected: 205,
};

export const buildings: BuildingInfo[] = [
  {
    name: "Edificio 1",
    lot: "737 m²",
    builtArea: "3.496 m²",
    details: "Edificio principal, ubicado sobre la calle 12.",
  },
  {
    name: "Edificio 2",
    lot: "360 m²",
    builtArea: "720 m²",
    details:
      "Pertenece al edificio ubicado sobre la carrera 7. Área pendiente de construcción: 360 m².",
  },
  {
    name: "Nueva construcción",
    lot: "7.764 m²",
    builtArea: "7.764 m²",
    details:
      "Corresponde al edificio de la nueva construcción, ubicado sobre la calle 11. Distribuidos en Piso 1 (1.744,25 m² — habilitado), Piso 2 (1.744,25 m²), Piso 3 (1.744,25 m²), Piso 4 (1.266 m²), Piso 5 (1.266 m²).",
  },
];

export const projectGallery = [
  { src: "/images/about/nueva-torre-fachada.webp", alt: "Fachada de la nueva torre" },
  { src: "/images/about/nueva-torre-exterior.webp", alt: "Exterior de la nueva torre" },
  { src: "/images/about/nueva-torre-habitacion.webp", alt: "Habitación de la nueva torre" },
  { src: "/images/about/nueva-torre-pasillo.webp", alt: "Pasillo de la nueva torre" },
  {
    src: "/images/about/nueva-torre-estacion-enfermeria.webp",
    alt: "Estación de enfermería de la nueva torre",
  },
];
