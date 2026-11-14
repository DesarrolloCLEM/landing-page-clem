// Mirror of https://clinicalaesperanza.co/p-cuidado-critico/

import type { PortfolioPageContent } from "../../types";

export const cuidadoCriticoPage: PortfolioPageContent = {
  title: "Cuidado Crítico",
  back: { label: "Volver a servicios", href: "/portafolio/" },
  blocks: [
    {
      kind: "banner",
      image: {
        src: "/images/portafolio/88.webp",
        alt: "Unidad de cuidado crítico de Clínica La Esperanza",
      },
    },
    {
      kind: "intro",
      title: "Cuidado Crítico",
      subtitle: "Unidades especializadas para pacientes en estado crítico.",
      body: [
        "En Clínica La Esperanza contamos con unidades de Cuidado Crítico dotadas con tecnología especializada, dirigidas a pacientes adultos, pediátricos y neonatales que requieren monitoreo y vigilancia permanente. Nuestro equipo asistencial trabaja de manera integral para brindar una atención segura en cada etapa del proceso.",
      ],
    },
    {
      kind: "feature",
      title: "Monitoreo y vigilancia permanente",
      image: {
        src: "/images/portafolio/90-840x560.webp",
        alt: "Cubículo de la unidad de cuidado crítico",
      },
      body: [
        "Nuestras unidades de Cuidado Crítico cuentan con cubículos dotados con toda la tecnología para garantizar la monitorización del paciente, atendidos por personal de salud altamente calificado y dedicado a los casos más críticos.",
      ],
      cta: { label: "14 cubículos · UCI · UCIM", href: "/portafolio/hospitalizacion/" },
    },
    {
      kind: "cards",
      title: "¿Qué encontrarás en nuestras Unidades de Cuidado Crítico?",
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
          title: "UCI Neonatal",
          body: "Atención a recién nacidos prematuros o con patologías neonatales.",
        },
        { title: "UCI Pediátrica", body: "Cuidados intensivos para niños en estado crítico." },
        {
          title: "Monitoreo permanente",
          body: "Vigilancia continua por personal de salud calificado.",
        },
        {
          title: "Equipo interdisciplinario",
          body: "Médicos especialistas, enfermería y terapia física y respiratoria.",
        },
        {
          title: "Tecnología especializada",
          body: "Cubículos dotados con equipos para la monitorización del paciente.",
        },
        {
          title: "Articulación con la Clínica",
          body: "Conexión con otros servicios cuando el paciente lo requiere.",
        },
      ],
    },
    {
      kind: "bullets",
      title: "Contamos con:",
      items: [
        "14 cubículos de Cuidados Intensivos e Intermedios Adulto",
        "14 incubadoras",
        "17 cunas",
        "2 camas pediátricas (UCI Neonatal y Pediátrica)",
      ],
    },
    {
      kind: "gallery",
      title: "Conoce nuestras Unidades de Cuidado Crítico",
      images: [
        { src: "/images/portafolio/99-370x493.webp", alt: "Unidad de cuidado crítico" },
        { src: "/images/portafolio/00.webp", alt: "Monitoreo en cuidado crítico" },
        { src: "/images/portafolio/r6ph7029-1-1-scaled.webp", alt: "Equipo de cuidado crítico" },
        {
          src: "/images/portafolio/000-e1787834207424-370x493.webp",
          alt: "Cubículo de cuidado crítico",
        },
      ],
    },
    {
      kind: "closing",
      title: "Cuidado especializado, en cada etapa de la vida",
      body: "Cuidado Crítico · Clínica La Esperanza · Montería",
    },
  ],
};
