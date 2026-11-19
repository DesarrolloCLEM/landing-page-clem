// Mirror of https://clinicalaesperanza.co/p-ginecologia-y-obstetricia/

import type { PortfolioPageContent } from "../../types";

export const ginecologiaPage: PortfolioPageContent = {
  title: "Ginecología y Obstetricia",
  back: { label: "Volver a servicios", href: "/portafolio/consulta-externa/" },
  blocks: [
    {
      kind: "banner",
      image: {
        src: "/images/services/especialidades/ginecologia-y-obstetricia.webp",
        alt: "Control obstétrico en una habitación de la clínica",
      },
    },
    {
      kind: "intro",
      title: "Ginecología y Obstetricia",
      subtitle: "Acompañamos a la mujer en cada etapa de su vida.",
      body: [
        "En Clínica La Esperanza acompañamos a la mujer con un enfoque profesional, respetuoso y humano, en cada etapa: desde el cuidado ginecológico hasta el embarazo, el parto y el postparto.",
      ],
    },
    {
      kind: "feature",
      title: "Obstetricia",
      image: {
        src: "/images/services/diagnostico-3.webp",
        alt: "Atención obstétrica en Clínica La Esperanza",
      },
      body: [
        "Este servicio incluye controles prenatales regulares, monitoreo del crecimiento y desarrollo fetal, atención del parto ya sea natural o por cesárea y vigilancia posparto. Contamos con un equipo de especialistas en obstetricia, apoyado por personal de enfermería, neonatología, anestesiología y otras disciplinas, garantizando un entorno seguro, humano y altamente profesional.",
      ],
    },
    {
      kind: "cards",
      cols: 3,
      items: [
        { title: "Cuidado prenatal", body: "Monitoreo de la salud materno-fetal." },
        {
          title: "Parto y asistencia en el nacimiento",
          body: "Opciones de parto natural y cesárea.",
        },
        { title: "Postparto", body: "Atención y asesoramiento para la madre y el recién nacido." },
      ],
    },
    {
      kind: "feature",
      reverse: true,
      title: "Ginecología",
      image: {
        src: "/images/portafolio/chatgpt-image-27-ago-2026-10_15_45-1024x766.webp",
        alt: "Consulta ginecológica en Clínica La Esperanza",
      },
      body: [
        "La atención ginecológica no solo se enfoca en tratar enfermedades, sino en acompañar y orientar a la mujer en cada etapa de su vida, promoviendo el bienestar físico, emocional y reproductivo con un enfoque profesional, respetuoso y humano.",
      ],
    },
    {
      kind: "cards",
      cols: 3,
      items: [
        {
          title: "Ginecología materno fetal",
          body: "Cuidado integral durante el embarazo, con enfoque en la salud de madre e hijo.",
        },
        {
          title: "Ginecología oncológica",
          body: "Prevención y tratamiento de cánceres ginecológicos, protegiendo la salud de nuestras pacientes.",
        },
        {
          title: "Ginecología laparoscópica",
          body: "Procedimientos mínimamente invasivos que aseguran una recuperación más rápida.",
        },
      ],
    },
    {
      kind: "feature",
      title: "Voluson",
      image: {
        src: "/images/portafolio/ks-650x572.webp",
        alt: "Ecógrafo Voluson de perinatología",
      },
      body: [
        "Ecógrafo de perinatología",
        "Permite ver con mayor claridad el desarrollo del bebé durante el embarazo, ayudando a una detección temprana y a un seguimiento más seguro, especialmente en embarazos de alto riesgo.",
      ],
    },
    {
      kind: "feature",
      reverse: true,
      title: "Logiq Totus",
      image: {
        src: "/images/portafolio/hs-1-762x664.webp",
        alt: "Equipo Logiq Totus con elastografía",
      },
      body: [
        "Equipo con elastografía",
        "Permite evaluar el estado de los tejidos con mayor precisión, apoyando diagnósticos más certeros sin necesidad de procedimientos invasivos.",
      ],
    },
    {
      kind: "feature",
      title: "Parto humanizado",
      image: {
        src: "/images/portafolio/chatgpt-image-27-ago-2026-10_39_36-1024x682.webp",
        alt: "Acompañamiento en el parto humanizado",
      },
      body: [
        "Acompañamos a cada madre en un proceso respetuoso y cercano, honrando su ritmo y sus decisiones, con todo el respaldo clínico disponible si se necesita.",
      ],
      cta: { label: "Conoce más", href: "/portafolio/programas/nace-con-esperanza/" },
    },
    {
      kind: "gallery",
      title: "Conoce nuestro servicio de Ginecología y Obstetricia",
      images: [
        {
          src: "/images/services/nace-con-esperanza-2.webp",
          alt: "Valoración médica de una gestante",
        },
        {
          src: "/images/services/nace-con-esperanza-3.webp",
          alt: "Madre amamantando a su recién nacido",
        },
        {
          src: "/images/services/nace-con-esperanza-4.webp",
          alt: "Equipo médico atendiendo un nacimiento",
        },
      ],
    },
    {
      kind: "closing",
      title: "Acompañando a la mujer en cada etapa de su vida",
      body: "Ginecología y Obstetricia · Clínica La Esperanza · Montería",
    },
  ],
};
