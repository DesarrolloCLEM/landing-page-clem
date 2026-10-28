import type { BuildingDetail, CapacityRow, ImageAsset, Projection } from "../types";

export const projectionsHeader = {
  title: "Nuestras proyecciones",
  description:
    "En Clínica La Esperanza, nos estamos preparando para un crecimiento significativo con el objetivo de brindar una atención aún más completa y accesible. A continuación, compartimos nuestras proyecciones de expansión en infraestructura y servicios:",
  closing:
    "Con estas mejoras, Clínica La Esperanza reafirma su compromiso con el bienestar de nuestros pacientes, expandiendo nuestra capacidad para atender más necesidades y brindar un servicio de calidad.",
  currentLabel: "Actual",
  projectedLabel: "Proyectado",
  infrastructureLink: {
    label: "Conoce el proyecto de la nueva torre",
    href: "/nueva-infraestructura/",
  },
};

// TODO(clinica): these figures come from /nuestras-proyecciones/ and do not match the
// Portafolio figures used in src/config/stats.ts (125 vs 123 current beds).
export const projections: Projection[] = [
  { label: "Consultorios", current: 3, projected: 4 },
  { label: "Cubículos", current: 23, projected: 36 },
  { label: "Consulta externa", current: 4, projected: 4 },
  { label: "Cardiología", current: 0, projected: 2 },
  { label: "Rayos X fijos", current: 1, projected: 1 },
  { label: "Tomógrafo", current: 0, projected: 1 },
  { label: "Ecografía", current: 1, projected: 3 },
  { label: "Camas de hospitalización general adulto", current: 78, projected: 142 },
  { label: "Camas de cuidado intensivo neonatal", current: 26, projected: 32 },
  { label: "Camas de cuidado intensivo pediátrico", current: 7, projected: 12 },
  { label: "Camas de cuidado intensivo adultos", current: 14, projected: 24 },
  { label: "Total de camas", current: 125, projected: 210 },
  { label: "Quirófanos", current: 2, projected: 4 },
  { label: "Hemodinamia", current: 0, projected: 1 },
  { label: "Camas de recuperación", current: 4, projected: 21 },
];

export const infrastructureHeader = {
  eyebrow: "Expansión y crecimiento",
  title: "Construyendo el futuro de tu salud",
  description:
    "Un proyecto de expansión que fortalecerá nuestra capacidad instalada y la atención para miles de familias.",
  image: {
    src: "/images/about/nueva-torre-vista-aerea.webp",
    alt: "Vista aérea de la clínica y de la nueva torre en construcción",
  } satisfies ImageAsset,
  statsNote:
    "Las capacidades proyectadas estarán disponibles conforme avance el proceso de dotación, habilitación y puesta en operación de cada servicio.",
};

export const expansion = {
  title: "Ampliación y proyección",
  paragraphs: [
    "Nuestra gestión se orienta al mejoramiento continuo, la innovación y el fortalecimiento de las capacidades institucionales, consolidando una oferta de servicios que responde a los desafíos actuales del sector salud.",
    "Avanzamos en el fortalecimiento de nuestra infraestructura, tecnología y talento humano para ofrecer una atención más integral, segura y oportuna, con una visión de futuro y nuevas posibilidades para nuestros pacientes.",
  ],
};

export const gallery = {
  title: "Galería del proyecto",
  images: [
    {
      src: "/images/about/nueva-torre-fachada.webp",
      alt: "Render de la fachada de la nueva torre",
    },
    {
      src: "/images/about/nueva-torre-exterior.webp",
      alt: "Render exterior de la nueva torre junto al edificio actual",
    },
    {
      src: "/images/about/nueva-torre-habitacion.webp",
      alt: "Render de una habitación de hospitalización de la nueva torre",
    },
    {
      src: "/images/about/nueva-torre-estacion-enfermeria.webp",
      alt: "Render de la estación de enfermería de la nueva torre",
    },
    {
      src: "/images/about/nueva-torre-pasillo.webp",
      alt: "Render de un pasillo de la nueva torre",
    },
  ] satisfies ImageAsset[],
};

export const capacityTable = {
  title: "Así crecerá nuestra capacidad",
  columns: {
    service: "Servicio",
    current: "Camas actuales",
    expansion: "Ampliación",
    projected: "Proyección total",
  },
  totalLabel: "Total",
};

// TODO(clinica): the legacy table left the expansion cell empty for "Hospitalización Cuarto
// Piso" and "Cuidados Intensivos Adultos"; the expansion is computed as projected - current.
export const capacityRows: CapacityRow[] = [
  { service: "Hospitalización General", current: 26, projected: 64 },
  { service: "Hospitalización Cuarto Piso", current: 32, projected: 64 },
  { service: "Cuidados Intensivos Adultos", current: 12, projected: 19 },
  { service: "Cuidados Intermedios Adultos", current: 2, projected: 13 },
  { service: "Cuidados Intensivos Neonatal", current: 26, projected: 30 },
  { service: "Cuidados Intensivos Pediátricos", current: 7, projected: 15 },
];

export const buildingDetails = {
  title: "Detalles del proyecto de ampliación",
  items: [
    {
      title: "Edificio principal",
      text: "Ubicado sobre la calle 12. Área del lote: 737 m². Área construida: 3.496 m².",
    },
    {
      title: "Edificio de la carrera 7",
      text: "Pertenece al edificio ubicado sobre la carrera 7. Área del lote: 360 m². Área construida: 720 m². Área pendiente de construcción: 360 m².",
    },
    {
      title: "Nueva torre",
      text: "Corresponde al edificio de la nueva construcción, ubicado sobre la calle 11. Área total: 7.764 m², distribuidos en Piso 1 (1.744,25 m² — habilitado), Piso 2 (1.744,25 m²), Piso 3 (1.744,25 m²), Piso 4 (1.266 m²), Piso 5 (1.266 m²).",
    },
    {
      title: "Área sin construir",
      text: "Lote para parqueadero: 1.988,5 m².",
    },
  ] satisfies BuildingDetail[],
};

export const infrastructureCta = {
  title: "Un futuro con más capacidad para cuidar de ti",
  description:
    "Conoce más sobre nuestro compromiso de seguir creciendo para brindarte una mejor atención.",
};
