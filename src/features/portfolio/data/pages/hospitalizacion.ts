// Mirror of https://clinicalaesperanza.co/p-hospitalizacion/

import type { PortfolioPageContent } from "../../types";

export const hospitalizacionPage: PortfolioPageContent = {
  title: "Hospitalización general",
  back: { label: "Volver a servicios", href: "/portafolio/" },
  nav: [
    { label: "Hospitalización", href: "/portafolio/hospitalizacion/" },
    { label: "Hospitalización pediátrica", href: "/portafolio/hospitalizacion/pediatrica/" },
    { label: "Suite VIP", href: "/portafolio/hospitalizacion/suite-vip/" },
  ],
  blocks: [
    {
      kind: "banner",
      image: {
        src: "/images/portafolio/diseno-sin-titulo-5-1024x514.webp",
        alt: "Área de hospitalización de Clínica La Esperanza",
      },
    },
    {
      kind: "intro",
      title: "Hospitalización general",
      body: [
        "Nuestra hospitalización está diseñada para acompañarte durante cada etapa de tu recuperación, integrando espacios confortables, atención médica especializada y tecnología para el cuidado de nuestros pacientes.",
      ],
    },
    {
      kind: "feature",
      title: "Tu bienestar es nuestra prioridad",
      image: {
        src: "/images/portafolio/34-768x512.webp",
        alt: "Habitación de hospitalización de Clínica La Esperanza",
      },
      body: [
        "Cada espacio ha sido pensado para favorecer una recuperación confortable. Contamos con habitaciones cómodas, atención médica especializada y un equipo de enfermería disponible las 24 horas, garantizando un acompañamiento permanente durante toda la estancia hospitalaria.",
      ],
    },
    {
      kind: "groups",
      title: "Especialidades disponibles en Hospitalización",
      body: "Durante tu hospitalización, diferentes profesionales pueden participar en tu proceso de atención según tus necesidades. La comunicación y el trabajo conjunto entre las distintas áreas nos permiten ofrecer un manejo integral y coordinado.",
      items: [
        {
          title: "Medicina Interna",
          body: "Neumología · Nefrología · Cardiología · Hemodinamia · Electrofisiología · Neurología · Gastroenterología · Hematología · Infectología",
        },
        {
          title: "Ginecología",
          body: "Materno Fetal (Perinatología) · Ginecología Oncológica · Ginecología Laparoscópica",
        },
        {
          title: "Cirugía General",
          body: "Cirugía Pancreatohepatobiliar · Cirugía de Tórax",
        },
        {
          title: "Pediatría",
          body: "Cardiología · Neumología · Infectología · Neonatología · Hemato-oncología · Endocrinología · Nefrología · Neurocirugía · Oftalmología · Gastroenterología y Cirugía pediátricas",
        },
        {
          title: "Ortopedia y Traumatología",
          body: "Ortopedia Oncológica · Artroscopia · Ortopedia Reconstructiva · Cirugía de Hombro · Revisión de Prótesis · Cirugía de Columna",
        },
        { title: "Neurocirugía", body: "Medicina del Dolor" },
        { title: "Radiología", body: "Radiología Intervencionista · Imágenes Cardíacas" },
        { title: "Salud Mental", body: "Psiquiatría · Psicología" },
        { title: "Urología" },
        { title: "Cirugía Cardiovascular" },
        { title: "Cirugía Plástica" },
        { title: "Cirugía Maxilofacial" },
        { title: "Otorrinolaringología" },
        { title: "Oftalmología y Oculoplastia" },
        { title: "Fonoaudiología" },
        { title: "Nutrición y Dietética" },
        {
          title: "Fisioterapia",
          body: "Rehabilitación Cardíaca · Terapia Física y Rehabilitación",
        },
      ],
    },
    {
      kind: "cards",
      cols: 3,
      items: [
        {
          title: "UCI Adultos",
          body: "Cuidados intensivos para pacientes adultos en estado crítico.",
        },
        {
          title: "UCIM",
          body: "Cuidados intermedios para pacientes que requieren monitoreo especializado.",
        },
        {
          title: "UCI Neonatal y Pediátrica",
          body: "Atención a recién nacidos y niños que requieren cuidado crítico.",
        },
      ],
    },
    {
      kind: "feature",
      reverse: true,
      title: "Un equipo que trabaja por tu recuperación",
      image: {
        src: "/images/portafolio/34-768x512.webp",
        alt: "Equipo asistencial en el área de hospitalización",
      },
      body: [
        "Durante tu hospitalización, diferentes profesionales pueden participar en tu proceso de atención según tus necesidades. La comunicación y el trabajo conjunto entre las distintas áreas nos permiten ofrecer un manejo integral y coordinado.",
      ],
      cta: { label: "Conoce nuestro equipo médico", href: "/portafolio/consulta-externa/" },
    },
    {
      kind: "bullets",
      title: "¿Qué encontrarás durante tu hospitalización?",
      items: [
        "Atención médica especializada",
        "Enfermería disponible las 24 horas",
        "Habitaciones cómodas y climatizadas",
        "Administración segura de medicamentos",
        "Alimentación según indicación médica",
        "Acompañamiento familiar",
        "Seguimiento permanente del estado de salud",
        "Espacios diseñados para brindar tranquilidad y bienestar",
      ],
    },
    {
      kind: "gallery",
      title: "Conoce nuestros espacios",
      body: "En Clínica La Esperanza creemos que sanar también significa sentirse acompañado, cómodo y seguro. Por eso ofrecemos espacios diseñados para brindar bienestar, tranquilidad y una atención humanizada durante cada etapa de la recuperación.",
      images: [
        { src: "/images/portafolio/bpersonal-1024x683.webp", alt: "Personal asistencial" },
        { src: "/images/portafolio/detalller-1024x683.webp", alt: "Detalle de una habitación" },
        {
          src: "/images/portafolio/llamado-1024x683.webp",
          alt: "Sistema de llamado de enfermería",
        },
        { src: "/images/portafolio/20.webp", alt: "Habitación de hospitalización" },
        { src: "/images/portafolio/17.webp", alt: "Pasillo del área de hospitalización" },
        { src: "/images/portafolio/18.webp", alt: "Habitación de hospitalización" },
        { src: "/images/portafolio/19.webp", alt: "Área de hospitalización" },
      ],
    },
    {
      kind: "closing",
      title: "Atención hospitalaria con calidad, seguridad y calidez humana",
      body: "Espacios confortables y un equipo comprometido con tu recuperación y la tranquilidad de tu familia.",
    },
  ],
};
