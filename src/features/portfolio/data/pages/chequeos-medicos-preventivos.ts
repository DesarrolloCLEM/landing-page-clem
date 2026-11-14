// Mirror of https://clinicalaesperanza.co/p-chequeo-medicos-preventivos/
// The live page repeats the intervencionismo intro ("Procedimientos
// cardiovasculares de mínima invasión...") by mistake, so it is left out.

import type { PortfolioPageContent } from "../../types";

export const chequeosPreventivosPage: PortfolioPageContent = {
  title: "Chequeos médicos preventivos",
  back: { label: "Volver a servicios", href: "/portafolio/programas/" },
  blocks: [
    {
      kind: "banner",
      image: {
        src: "/images/portafolio/mki.webp",
        alt: "Chequeos médicos preventivos de Clínica La Esperanza",
      },
    },
    {
      kind: "intro",
      title: "Chequeos médicos preventivos",
      subtitle:
        "Evaluaciones diseñadas para detectar a tiempo y cuidar la salud de manera proactiva.",
    },
    {
      kind: "cards",
      items: [
        {
          title: "Listo para Entrenar",
          body: "Un chequeo pensado para quienes practican deporte o quieren empezar, evaluando tu condición general antes de exigir a tu cuerpo.",
        },
        {
          title: "Mujer Sana",
          body: "Un espacio de chequeo pensado para la mujer en distintas etapas de su vida, con un enfoque en su bienestar integral.",
        },
        {
          title: "Embarazo Seguro",
          body: "Un chequeo preventivo pensado para acompañar a la futura mamá y cuidar su bienestar y el de su bebé.",
        },
        {
          title: "Bienestar Digestivo",
          body: "Un chequeo enfocado en la salud digestiva, pensado para quienes quieren cuidar este aspecto de su bienestar de forma preventiva.",
        },
        {
          title: "Bienestar Urológico",
          body: "Un chequeo enfocado en la salud urológica, pensado para la detección temprana y el cuidado preventivo.",
        },
        {
          title: "Creciendo Bien",
          body: "Un chequeo pensado para acompañar el crecimiento y desarrollo de los más pequeños de la casa.",
        },
        {
          title: "Latidos de Vida",
          body: "Un chequeo enfocado en la salud del corazón, pensado para el cuidado preventivo de manera oportuna.",
        },
      ],
    },
    {
      kind: "closing",
      title: "Comunícate con nosotros",
      body: "AppCLEM (App Store / Google Play) · Calle 12 # 4-58, Barrio Buenavista · PBX 7848903 · info@clinicalaesperanza.co",
    },
  ],
};
