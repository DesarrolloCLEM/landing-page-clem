// Mirror of https://clinicalaesperanza.co/p-pediatria-2/

import type { PortfolioPageContent } from "../../types";

export const pediatriaPage: PortfolioPageContent = {
  title: "Pediatría",
  back: { label: "Volver a servicios", href: "/portafolio/consulta-externa/" },
  blocks: [
    {
      kind: "banner",
      image: {
        src: "/images/portafolio/gh.webp",
        alt: "Pediatría",
      },
    },
    {
      kind: "feature",
      body: [
        "En Clínica La Esperanza ofrecemos un servicio de Pediatría orientado a la prevención, el diagnóstico, el tratamiento y el seguimiento de la salud infantil, brindando una atención cercana, segura y humanizada.",
      ],
    },
    {
      kind: "intro",
      title: "Pediatría",
    },
    {
      kind: "gallery",
      images: [
        {
          src: "/images/services/hospitalizacion-pediatrica-portada.webp",
          alt: "Pediatría",
        },
      ],
    },
    {
      kind: "cards",
      items: [
        {
          title: "Consultorios cómodos y adecuados para la atención infantil",
          body: "Nuestros consultorios brindan un ambiente cómodo, seguro y acogedor para que cada niño reciba una atención especializada en espacios diseñados para favorecer su bienestar y el de su familia. Cardiología Pediátrica Neumología pediátrica Infectología pediátrica Hemato-oncología pediátrica Endocrinología pediátrica Neurocirugía pediátrica Oftalmología pediátrica Cirugía pediátrica",
        },
        {
          title: "UCI Adultos",
        },
      ],
    },
    {
      kind: "closing",
      title: "Cuidamos su salud desde el comienzo",
      body: "Agenda una valoración pediátrica y acompaña cada etapa de su crecimiento con el respaldo de nuestros especialistas",
    },
  ],
};
