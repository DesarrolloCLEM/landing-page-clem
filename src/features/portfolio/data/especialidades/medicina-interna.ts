// Mirror of https://clinicalaesperanza.co/p-medicina-interna/

import type { PortfolioPageContent } from "../../types";

export const medicinaInternaPage: PortfolioPageContent = {
  title: "Medicina Interna",
  back: { label: "Volver a servicios", href: "/portafolio/consulta-externa/" },
  blocks: [
    {
      kind: "banner",
      image: {
        src: "/images/portafolio/md2.webp",
        alt: "Medicina Interna",
      },
    },
    {
      kind: "intro",
      title: "Medicina Interna",
      body: [
        "En Clínica La Esperanza ofrecemos atención especializada para la prevención, diagnóstico, tratamiento y seguimiento de enfermedades en adultos, con un enfoque integral y personalizado.",
      ],
    },
    {
      kind: "feature",
      title: "Un enfoque integral para tu salud",
      body: [
        "La Medicina Interna evalúa al paciente adulto de manera integral, teniendo en cuenta sus antecedentes, síntomas y condiciones de salud para orientar el diagnóstico y tratamiento de enfermedades agudas y crónicas.",
      ],
    },
    {
      kind: "cards",
      items: [
        {
          title: "Neumología",
        },
        {
          title: "Nefrología",
        },
        {
          title: "Cardiología",
        },
        {
          title: "Neurología",
        },
        {
          title: "Gatroenterología",
        },
        {
          title: "Hematología",
        },
        {
          title: "Infectología",
        },
        {
          title: "Reumatología",
        },
        {
          title: "Enfermedades infecciosas",
        },
        {
          title: "Valoración preoperatoria",
        },
        {
          title: "Chequeo médico integral",
        },
        {
          title: "UCI Adultos",
        },
      ],
      title: "Atención especializada para diferentes necesidades de salud",
    },
    {
      kind: "feature",
      title: "Tu salud, nuestra prioridad",
      body: [
        "Evaluamos cada caso considerando las diferentes condiciones que pueden influir en la salud del paciente, buscando establecer un diagnóstico y un plan de manejo acorde con sus necesidades.",
      ],
      image: {
        src: "/images/portafolio/chatgpt-image-3-sept-2026-09_31_07-410x231.webp",
        alt: "Medicina Interna",
      },
    },
    {
      kind: "feature",
      title: "Un manejo coordinado de tu salud",
      body: [
        "Cuando una condición requiere la participación de diferentes áreas médicas, facilitamos la coordinación de la atención para brindar continuidad al proceso diagnóstico y terapéutico.",
      ],
    },
    {
      kind: "closing",
      title: "Agenda tu consulta de Medicina Interna",
      body: "Estamos aquí para ayudarte a cuidar tu salud.",
    },
  ],
};
