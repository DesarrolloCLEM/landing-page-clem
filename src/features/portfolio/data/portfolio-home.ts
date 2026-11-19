// Content of /portafolio/, mirrored from the deployed WordPress portfolio
// (https://clinicalaesperanza.co/portafolio/) including its images.
// Only unmistakable typos are corrected: "Ginercología" -> "Ginecología",
// "infraesctructura" -> "infraestructura" and "Córdiba" -> "Córdoba".

import type {
  ImageRef,
  PortfolioCapacityStat,
  PortfolioCaptionedImage,
  PortfolioGrowthStat,
  PortfolioHeroContent,
  PortfolioNumberedService,
  PortfolioQuickLink,
  PortfolioServiceCard,
  PortfolioStory,
  PortfolioTile,
  PortfolioWhyItem,
} from "../types";

export const hero: PortfolioHeroContent = {
  heading: "Construimos juntos el futuro de la salud",
  description:
    "Somos una institución de salud de mediana y alta complejidad, comprometida con brindar servicios integrales, seguros y de calidad.",
  cta: { label: "Conoce más", href: "/portafolio/infraestructura/" },
  videoSrc: "/videos/portafolio-portada.mp4",
  poster: {
    src: "/images/portafolio/chatgpt-image-17-sept-2026-14_59_16-890x664.webp",
    alt: "Render exterior de la nueva torre de Clínica La Esperanza",
  },
};

export const heroLinks: PortfolioQuickLink[] = [
  { label: "Nueva torre", href: "/portafolio/infraestructura/" },
  { label: "Nuestros servicios", href: "/portafolio/consulta-externa/" },
  {
    label: "Tecnología e infraestructura",
    href: "/portafolio/diagnostico-y-apoyo-terapeutico/",
  },
];

export const whoWeAre = {
  title: "¿Quiénes somos?",
  subtitle:
    "Una institución preparada para responder a las necesidades de nuestros pacientes y aliados.",
  description:
    "Somos una institución prestadora de servicios de salud de mediana y alta complejidad que integra infraestructura, tecnología y talento humano para ofrecer una atención segura, oportuna y centrada en la calidad asistencial.",
  image: {
    src: "/images/portafolio/chatgpt-image-17-sept-2026-15_20_47-1024x1024.webp",
    alt: "Equipo asistencial de Clínica La Esperanza",
  },
};

export const whoWeAreTiles: PortfolioTile[] = [
  { label: "¿Por qué elegirnos?", href: "/portafolio/hospitalizacion/", icon: "shield" },
  { label: "Crecimiento", href: "/portafolio/infraestructura/", icon: "trending" },
  { label: "Capacidad instalada", href: "/portafolio/infraestructura/", icon: "bed" },
];

/** Tab 1: "Presentación". */
export const presentationTab = {
  description:
    "Nuestra gestión se orienta al mejoramiento continuo, la innovación y el fortalecimiento de las capacidades institucionales, consolidando una oferta de servicios que responde a los desafíos actuales del sector salud.",
  image: {
    src: "/images/portafolio/1-1-1-e1787776597267-410x280.webp",
    alt: "Fachada de Clínica La Esperanza",
  },
};

/**
 * Tab 2: "Por qué elegirnos". The deployed site repeats the same sentence under
 * the four items, so it is kept as a shared description.
 */
export const whyChooseUsDescription =
  "Contamos con una oferta integral de servicios de mediana y alta complejidad.";

export const whyChooseUs: PortfolioWhyItem[] = [
  {
    title: "Capacidad resolutiva",
    description: whyChooseUsDescription,
    href: "/portafolio/hospitalizacion/",
  },
  {
    title: "Infraestructura y tecnología",
    description: whyChooseUsDescription,
    href: "/portafolio/hospitalizacion/",
  },
  {
    title: "Equipo multidisciplinario",
    description: whyChooseUsDescription,
    href: "/portafolio/hospitalizacion/",
  },
  {
    title: "Calidad y seguridad",
    description: whyChooseUsDescription,
    href: "/portafolio/hospitalizacion/",
  },
];

/** Tab 3: "Capacidad instalada". */
export const capacityStats: PortfolioCapacityStat[] = [
  { value: "60", label: "Camas adultos" },
  { value: "16", label: "Camas pediatría" },
  { value: "14", label: "UCI/UCIM adultos" },
  { value: "38", label: "Cubículos urgencias" },
  { value: "2", label: "Salas de cirugía" },
  { value: "123", label: "Camas habilitadas" },
];

/** Tab 4: "Crecimiento". */
export const growthStats: PortfolioGrowthStat[] = [
  { caption: "Capacidad actual", value: "123", label: "Camas habilitadas" },
  { caption: "En construcción", value: "7.764 m²", label: "nueva torre" },
  { caption: "Nueva torre", value: "218", label: "Camas proyectadas" },
];

export const servicesIntro =
  "Oferta asistencial de mediana y alta complejidad, estructurada para responder de manera integral a las necesidades de nuestros pacientes.";

/**
 * The deployed site repeats the hospitalización summary under the five cards and
 * links all of them to hospitalización; here each card links to its own page.
 */
export const numberedServicesSummary =
  "Atención integral para pacientes que requieren estancia hospitalaria.";

export const numberedServices: PortfolioNumberedService[] = [
  {
    number: "01",
    title: "Hospitalización",
    summary: numberedServicesSummary,
    href: "/portafolio/hospitalizacion/",
    image: { src: "/images/services/hospitalizacion-portada.webp", alt: "" },
  },
  {
    number: "02",
    title: "Urgencias",
    summary: numberedServicesSummary,
    href: "/portafolio/urgencias/",
    image: { src: "/images/services/urgencias-portada.webp", alt: "" },
  },
  {
    number: "03",
    title: "Cuidado crítico",
    summary: numberedServicesSummary,
    href: "/portafolio/cuidado-critico/",
    image: { src: "/images/services/cuidado-critico-portada.webp", alt: "" },
  },
  {
    number: "04",
    title: "Cirugía",
    summary: numberedServicesSummary,
    href: "/portafolio/cirugia/",
    image: { src: "/images/services/cirugia-portada.webp", alt: "" },
  },
  {
    number: "05",
    title: "Ginecología y obstetricia",
    summary: numberedServicesSummary,
    href: "/portafolio/ginecologia-y-obstetricia/",
    image: { src: "/images/services/especialidades/ginecologia-y-obstetricia.webp", alt: "" },
  },
];

export const serviceCards: PortfolioServiceCard[] = [
  {
    title: "Hospitalización",
    href: "/portafolio/hospitalizacion/",
    image: { src: "/images/services/suite-serena-1.webp", alt: "" },
  },
  {
    title: "Urgencias",
    href: "/portafolio/urgencias/",
    image: { src: "/images/services/urgencias-1.webp", alt: "" },
  },
  {
    title: "Cuidado Crítico",
    href: "/portafolio/cuidado-critico/",
    image: { src: "/images/portafolio/cuidado-critico-1024x683.webp", alt: "" },
  },
  {
    title: "Cirugía",
    href: "/portafolio/cirugia/",
    image: { src: "/images/services/cirugia-2.webp", alt: "" },
  },
  {
    title: "Ginecología y obstetricia",
    href: "/portafolio/ginecologia-y-obstetricia/",
    image: {
      src: "/images/portafolio/chatgpt-image-27-ago-2026-12_00_23-e1787850518925-840x542.webp",
      alt: "",
    },
  },
  {
    title: "Consulta externa especializada",
    href: "/portafolio/consulta-externa/",
    image: { src: "/images/services/consulta-externa-portada.webp", alt: "" },
  },
  {
    title: "Diagnóstico y Apoyo Terapéutico",
    href: "/portafolio/diagnostico-y-apoyo-terapeutico/",
    image: { src: "/images/services/diagnostico-4.webp", alt: "" },
  },
  {
    title: "Programas especiales",
    href: "/portafolio/programas/",
    image: { src: "/images/services/nace-con-esperanza-portada.webp", alt: "" },
  },
];

export const newInfrastructure = {
  title: "Nueva infraestructura",
  description:
    "Construimos el futuro de la atención en salud a través de un proyecto de expansión que fortalecerá nuestra capacidad instalada.",
  cta: { label: "Conoce más", href: "/portafolio/infraestructura/" },
  image: {
    src: "/images/portafolio/diseno-sin-titulo-3.webp",
    alt: "Fachada de Clínica La Esperanza",
  },
};

/** Figures of the "Nueva infraestructura" section of the home page. */
export const expansionHighlights: PortfolioGrowthStat[] = [
  { caption: "Capacidad actual", value: "123", label: "Camas habilitadas" },
  { caption: "Nueva torre", value: "7.764 m²" },
  { caption: "Proyección", value: "218", label: "Camas proyectadas" },
];

export const projectImages: ImageRef[] = [
  {
    src: "/images/portafolio/pasillo_1530x1900_4k_quality-825x1024.webp",
    alt: "Render del pasillo de la nueva torre",
  },
  {
    src: "/images/portafolio/chatgpt-image-17-sept-2026-15_38_32-768x512.webp",
    alt: "Render de una habitación de la nueva torre",
  },
  {
    src: "/images/portafolio/chatgpt-image-19-sept-2026-10_59_23-768x512.webp",
    alt: "Render de un área asistencial de la nueva torre",
  },
  {
    src: "/images/portafolio/chatgpt-image-17-sept-2026-14_59_16-890x664.webp",
    alt: "Render exterior de la nueva torre",
  },
];

export const institutionalInfrastructure: PortfolioCaptionedImage[] = [
  {
    caption: "Hospitalización",
    image: { src: "/images/portafolio/34-1024x683.webp", alt: "" },
  },
  {
    caption: "Urgencias",
    image: { src: "/images/portafolio/chatgpt-image-26-ago-2026-10_30_49-1024x683.webp", alt: "" },
  },
  {
    caption: "Cuidado crítico",
    image: { src: "/images/portafolio/cuidado-critico-1024x683.webp", alt: "" },
  },
];

export const storiesIntro =
  "Cada historia refleja el compromiso de nuestro equipo con una atención centrada en las personas.";

export const stories: PortfolioStory[] = [
  {
    tag: "Cirugía",
    title: "Johan Cruz Martinez",
    description:
      "Cirugía de alta complejidad en la que se retiró el quiste de la vía biliar y se reconstruyó el paso de la bilis.",
    href: "/portafolio/hospitalizacion/",
    image: { src: "/images/portafolio/pagina-web-1024x576.webp", alt: "" },
  },
  {
    tag: "Cirugía especializada",
    title: "Cirugía de columna",
    description: "Intervención quirúrgica especializada para corregir la causa del dolor crónico.",
    href: "/portafolio/hospitalizacion/",
    image: { src: "/images/portafolio/cirugia-de-columna-1024x576.webp", alt: "" },
  },
  {
    tag: "Obstetricia",
    title: "Parto humanizado",
    description: "Experiencia de nacimiento respetuosa, segura y acompañada.",
    href: "/portafolio/ginecologia-y-obstetricia/",
    image: { src: "/images/portafolio/parto-humanizado-1024x576.webp", alt: "" },
  },
];

export const contactClosing = "Comprometidos con la salud, preparados para el futuro.";
