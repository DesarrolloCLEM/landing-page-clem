import type { PortfolioQuickLink, PortfolioServiceCard, PortfolioStory } from "../types";

export const heroSlogan = "Construimos juntos el futuro de la salud";

export const heroSubtitle =
  "Somos una institución de salud de mediana y alta complejidad, comprometida con brindar servicios integrales, seguros y de calidad.";

export const whoWeAre = {
  title: "¿Quiénes somos?",
  heading:
    "Una institución preparada para responder a las necesidades de nuestros pacientes y aliados.",
  description:
    "Somos una institución prestadora de servicios de salud de mediana y alta complejidad que integra infraestructura, tecnología y talento humano para ofrecer una atención segura, oportuna y centrada en la calidad asistencial.",
};

export const quickLinks: PortfolioQuickLink[] = [
  { label: "¿Por qué elegirnos?", href: "#servicios" },
  { label: "Capacidad instalada", href: "#infraestructura" },
  { label: "Crecimiento", href: "#infraestructura" },
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
    title: "Consulta externa",
    summary: "22 especialidades médico-quirúrgicas para atención ambulatoria.",
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
];

export const stories: PortfolioStory[] = [
  {
    title: "Johan Cruz Martínez",
    description:
      "Cirugía de alta complejidad en la que se retiró el quiste de la vía biliar y se reconstruyó el paso de la bilis.",
    image: { src: "/images/testimonials/johan-cruz-martinez.webp", alt: "Johan Cruz Martínez" },
  },
  {
    title: "Cirugía de columna",
    description: "Intervención quirúrgica especializada para corregir la causa del dolor crónico.",
    image: { src: "/images/home/neurocirugia.webp", alt: "Cirugía de columna" },
  },
  {
    title: "Parto humanizado",
    description: "Experiencia de nacimiento respetuosa, segura y acompañada.",
    image: { src: "/images/services/nace-con-esperanza-suite.webp", alt: "Parto humanizado" },
  },
];
