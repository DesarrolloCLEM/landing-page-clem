// Mirror of https://clinicalaesperanza.co/p-sub-cardiologia-pediatrica/

import type { PortfolioPageContent } from "../../types";

export const cardiologiaPediatricaPage: PortfolioPageContent = {
  title: "Cardiología Pediátrica",
  back: { label: "Volver a servicios", href: "/portafolio/consulta-externa/" },
  blocks: [
    {
      kind: "banner",
      image: {
        src: "/images/portafolio/pp.webp",
        alt: "Cardiología Pediátrica",
      },
    },
    {
      kind: "feature",
      body: [
        "Cuidado especializado del corazón de los más pequeños. Diagnóstico oportuno, tratamiento avanzado y acompañemiento integral para cuidar cada latdo de su corazon.",
      ],
    },
    {
      kind: "intro",
      title: "Cardiología Pediátrica",
    },
    {
      kind: "gallery",
      images: [
        {
          src: "/images/portafolio/pediatria-car.webp",
          alt: "Cardiología Pediátrica",
        },
      ],
    },
    {
      kind: "cards",
      items: [
        {
          title: "Especialistas en el corazón de tu hijo",
          body: "En Clínica La Esperanza contamos con un equipo de cardiólogos pediátricos altamente capacitados y tecnología avanzada para evaluar, diagnosticar y tratar enfermedades del corazón en niños y adolescentes. Nuestro enfoque integral y humano nos permite brindar atención segura, personalizada y centrada en el bienestar de cada paciente y su familia.",
        },
        {
          title: "¿Qué condiciones tratamos?",
          body: "Diagnóstico y tratamiento de enfermedades cardíacas congónitas y adquiridas en niños y adolescentes. Cardiopatías congénitas Evaluación y manejo de malformaciones cardíacas presentes desde el nacimiento. Arritmias Diagnóstico y tratamiento de alteraciones en el ritmo cardíaco. Insuficiencia cardíaca Manejo integral para mejorar la función cardíaca y la calidad de vida. Hipertensión pulmonar Diagnóstico y tratamiento especializaco para esta condición. Evaluación predeportiva Valoración cardiológica para actividad física segura. Ecocardiograma pediátrico Estudios avanzados para visualizar la estructura y función del corazón. Seguimiento integral Control y acompañamiento continuo en cada etapa del crecimiento. Acompañamiento a familias Orientación y apoyo emocional durante todo el proceso.",
        },
      ],
    },
    {
      kind: "closing",
      title: "Atención especializada con calidad y confianza",
      body: "En Clínica La Esperanza ponemos a disposición de nuestros pacientes, empresas y aliados un servicio de Consulta Externa respaldado por talento humano, infraestructura moderna y un compromiso permanente con la excelencia en la atención.",
    },
  ],
};
