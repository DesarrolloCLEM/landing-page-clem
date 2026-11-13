import type {
  ImageRef,
  PortfolioCaptionedImage,
  PortfolioHeroSlide,
  PortfolioNumberedService,
  PortfolioQuickLink,
  PortfolioServiceCard,
  PortfolioStory,
  PortfolioTile,
} from "../types";

export const heroSlides: PortfolioHeroSlide[] = [
  {
    heading: "Construimos juntos el futuro de la salud",
    description:
      "Somos una institución de salud de mediana y alta complejidad, comprometida con brindar servicios integrales, seguros y de calidad.",
    cta: { label: "Conoce más", href: "/portafolio/infraestructura/" },
    image: {
      src: "/images/about/nueva-torre-exterior.webp",
      alt: "Render exterior de la nueva torre de Clínica La Esperanza",
    },
  },
  {
    heading: "Construimos juntos el futuro de la salud",
    cta: { label: "Conoce más", href: "/portafolio/#NuestrosServicios" },
    image: {
      src: "/images/about/fachada-clinica.webp",
      alt: "Fachada de Clínica La Esperanza en Montería",
    },
  },
];

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
  heading:
    "Una institución preparada para responder a las necesidades de nuestros pacientes y aliados.",
  description:
    "Somos una institución prestadora de servicios de salud de mediana y alta complejidad que integra infraestructura, tecnología y talento humano para ofrecer una atención segura, oportuna y centrada en la calidad asistencial.",
};

export const whoWeAreTiles: PortfolioTile[] = [
  {
    label: "¿Por qué elegirnos?",
    description: "Atención integral respaldada por un equipo asistencial especializado.",
    href: "/portafolio/hospitalizacion/",
    icon: "shield",
  },
  {
    label: "Crecimiento",
    description: "Un proyecto de expansión que duplica nuestra capacidad instalada.",
    href: "/portafolio/infraestructura/",
    icon: "trending",
  },
  {
    label: "Capacidad instalada",
    description: "123 camas habilitadas distribuidas en todos nuestros servicios.",
    href: "/portafolio/infraestructura/",
    icon: "bed",
  },
];

export const whoWeAreTabs: PortfolioQuickLink[] = [
  { label: "Presentación", href: "/portafolio/#quienesSomos" },
  { label: "Por qué elegirnos", href: "/portafolio/hospitalizacion/" },
  { label: "Capacidad instalada", href: "/portafolio/infraestructura/" },
  { label: "Crecimiento", href: "/portafolio/infraestructura/" },
];

export const servicesIntro =
  "Oferta asistencial de mediana y alta complejidad, estructurada para responder de manera integral a las necesidades de nuestros pacientes.";

export const numberedServices: PortfolioNumberedService[] = [
  {
    number: "01",
    title: "Hospitalización",
    summary: "Atención integral para pacientes que requieren estancia hospitalaria.",
    href: "/portafolio/hospitalizacion/",
    image: {
      src: "/images/services/hospitalizacion-habitacion.webp",
      alt: "Habitación de hospitalización",
    },
  },
  {
    number: "02",
    title: "Urgencias",
    summary: "Atención de urgencias para adultos y población pediátrica las 24 horas.",
    href: "/portafolio/urgencias/",
    image: { src: "/images/services/urgencias-pasillo.webp", alt: "Pasillo del área de urgencias" },
  },
  {
    number: "03",
    title: "Cuidado crítico",
    summary: "Unidades de cuidado intensivo e intermedio para adultos, neonatos y pediatría.",
    href: "/portafolio/cuidado-critico/",
    image: {
      src: "/images/services/cuidado-critico-monitoreo.webp",
      alt: "Monitoreo en cuidado crítico",
    },
  },
  {
    number: "04",
    title: "Cirugía",
    summary: "Unidad quirúrgica equipada para procedimientos de mediana y alta complejidad.",
    href: "/portafolio/cirugia/",
    image: {
      src: "/images/services/cirugia-quirofano.webp",
      alt: "Quirófano de la unidad de cirugía",
    },
  },
  {
    number: "05",
    title: "Ginecología y obstetricia",
    summary: "Atención integral en salud femenina, maternidad y perinatología.",
    href: "/portafolio/ginecologia-y-obstetricia/",
    image: {
      src: "/images/services/nace-con-esperanza-madre.webp",
      alt: "Madre acompañada en atención obstétrica",
    },
  },
];

export const serviceCards: PortfolioServiceCard[] = [
  {
    title: "Hospitalización",
    summary: "Atención integral para pacientes que requieren estancia hospitalaria.",
    href: "/portafolio/hospitalizacion/",
    image: {
      src: "/images/services/hospitalizacion-habitacion.webp",
      alt: "Habitación de hospitalización",
    },
  },
  {
    title: "Urgencias",
    summary: "Servicio de urgencias de mediana y alta complejidad disponible las 24 horas.",
    href: "/portafolio/urgencias/",
    image: { src: "/images/services/urgencias-pasillo.webp", alt: "Pasillo de urgencias" },
  },
  {
    title: "Cuidado crítico",
    summary: "Unidades de cuidado intensivo e intermedio para adultos, neonatos y pediatría.",
    href: "/portafolio/cuidado-critico/",
    image: {
      src: "/images/services/cuidado-critico-monitoreo.webp",
      alt: "Monitoreo en cuidado crítico",
    },
  },
  {
    title: "Cirugía",
    summary:
      "Unidad quirúrgica con quirófanos equipados para cirugías de mediana y alta complejidad.",
    href: "/portafolio/cirugia/",
    image: { src: "/images/services/cirugia-quirofano.webp", alt: "Quirófano de cirugía" },
  },
  {
    title: "Ginecología y obstetricia",
    summary: "Atención integral en salud femenina, maternidad y perinatología.",
    href: "/portafolio/ginecologia-y-obstetricia/",
    image: { src: "/images/services/nace-con-esperanza-madre.webp", alt: "Atención ginecológica" },
  },
  {
    title: "Consulta externa especializada",
    summary: "29 especialidades médico-quirúrgicas para atención ambulatoria.",
    href: "/portafolio/consulta-externa/",
    image: {
      src: "/images/services/consulta-externa-recepcion.webp",
      alt: "Recepción de consulta externa",
    },
  },
  {
    title: "Diagnóstico y apoyo terapéutico",
    summary: "Laboratorio clínico, imagenología, farmacia y servicios de diagnóstico.",
    href: "/portafolio/diagnostico-y-apoyo-terapeutico/",
    image: { src: "/images/services/diagnostico-tomografo.webp", alt: "Tomógrafo de diagnóstico" },
  },
  {
    title: "Programas especiales",
    summary: "Nace con Esperanza, Centro de Intervencionismo y chequeos médicos preventivos.",
    href: "/portafolio/programas/",
    image: {
      src: "/images/services/programas-recien-nacido.webp",
      alt: "Programa Nace con Esperanza",
    },
  },
];

export const newInfrastructure = {
  title: "Nueva infraestructura",
  description:
    "Construimos el futuro de la atención en salud a través de un proyecto de expansión que fortalecerá nuestra capacidad instalada.",
  cta: { label: "Conoce más", href: "/portafolio/infraestructura/" },
};

export const projectImages: ImageRef[] = [
  {
    src: "/images/about/nueva-torre-fachada.webp",
    alt: "Render de la fachada de la nueva torre",
  },
  {
    src: "/images/about/nueva-torre-exterior.webp",
    alt: "Render exterior de la nueva torre",
  },
  {
    src: "/images/about/nueva-torre-vista-aerea.webp",
    alt: "Vista aérea del proyecto de expansión",
  },
  {
    src: "/images/about/nueva-torre-habitacion.webp",
    alt: "Render de una habitación de la nueva torre",
  },
];

export const institutionalInfrastructure: PortfolioCaptionedImage[] = [
  {
    caption: "Hospitalización",
    image: {
      src: "/images/services/hospitalizacion-cama.webp",
      alt: "Cama de hospitalización en Clínica La Esperanza",
    },
  },
  {
    caption: "Urgencias",
    image: {
      src: "/images/services/urgencias-equipo.webp",
      alt: "Equipo del servicio de urgencias",
    },
  },
  {
    caption: "Cuidado crítico",
    image: {
      src: "/images/services/cuidado-critico-equipo.webp",
      alt: "Equipo de la unidad de cuidado crítico",
    },
  },
];

export const storiesIntro =
  "Cada historia refleja el compromiso de nuestro equipo con una atención centrada en las personas.";

export const stories: PortfolioStory[] = [
  {
    tag: "Cirugía",
    title: "Johan Cruz Martínez",
    description:
      "Cirugía de alta complejidad en la que se retiró el quiste de la vía biliar y se reconstruyó el paso de la bilis.",
    image: { src: "/images/testimonials/johan-cruz-martinez.webp", alt: "Johan Cruz Martínez" },
  },
  {
    tag: "Cirugía especializada",
    title: "Cirugía de columna",
    description: "Intervención quirúrgica especializada para corregir la causa del dolor crónico.",
    image: { src: "/images/home/neurocirugia.webp", alt: "Cirugía de columna" },
  },
  {
    tag: "Obstetricia",
    title: "Parto humanizado",
    description: "Experiencia de nacimiento respetuosa, segura y acompañada.",
    image: { src: "/images/services/nace-con-esperanza-suite.webp", alt: "Parto humanizado" },
  },
];

export const contactClosing = "Comprometidos con la salud, preparados para el futuro.";
