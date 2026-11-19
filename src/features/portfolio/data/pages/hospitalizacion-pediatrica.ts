// Mirror of https://clinicalaesperanza.co/p-pediatria/

import type { PortfolioPageContent } from "../../types";

const hospitalizationNav = [
  { label: "Hospitalización", href: "/portafolio/hospitalizacion/" },
  { label: "Hospitalización pediátrica", href: "/portafolio/hospitalizacion/pediatrica/" },
  { label: "Suite VIP", href: "/portafolio/hospitalizacion/suite-vip/" },
];

export const hospitalizacionPediatricaPage: PortfolioPageContent = {
  title: "Hospitalización Pediátrica",
  back: { label: "Volver a servicios", href: "/portafolio/" },
  nav: hospitalizationNav,
  blocks: [
    {
      kind: "banner",
      image: {
        src: "/images/services/hospitalizacion-pediatrica-portada.webp",
        alt: "Madre e hija en la consulta pediátrica",
      },
    },
    {
      kind: "intro",
      title: "Hospitalización Pediátrica",
      subtitle: "Cuidamos de ti en cada etapa de tu recuperación.",
      body: [
        "En Clínica La Esperanza contamos con un área de Hospitalización Pediátrica diseñada para brindar una atención segura, cálida y especializada para los niños. Nuestro equipo médico y de enfermería acompaña a cada paciente y su familia durante todo el proceso de recuperación, ofreciendo un ambiente confortable, cercano y pensado para generar tranquilidad.",
      ],
    },
    {
      kind: "feature",
      eyebrow: "Atención coordinada",
      title: "Especialidades que respaldan cada hospitalización",
      body: [
        "Durante la hospitalización pediátrica, diferentes especialidades pueden intervenir de acuerdo con las necesidades clínicas de cada paciente.",
      ],
    },
    {
      kind: "photoCards",
      items: [
        {
          title: "Cardiología pediátrica",
          image: { src: "/images/services/suite-serena-1.webp", alt: "" },
        },
        {
          title: "Neumología pediátrica",
          image: { src: "/images/services/urgencias-portada.webp", alt: "" },
        },
        {
          title: "Infectología pediátrica",
          image: { src: "/images/portafolio/cuidado-critico-1024x683.webp", alt: "" },
        },
        {
          title: "Neonatología",
          image: { src: "/images/services/cirugia-2.webp", alt: "" },
        },
        {
          title: "Neurocirugía pediátrica",
          image: {
            src: "/images/portafolio/chatgpt-image-27-ago-2026-12_00_23-e1787850518925-840x542.webp",
            alt: "",
          },
        },
        {
          title: "Oncología",
          image: { src: "/images/portafolio/r6ph7609-1-1-1024x683.webp", alt: "" },
        },
        {
          title: "Endocrinología",
          image: {
            src: "/images/services/diagnostico-4.webp",
            alt: "",
          },
        },
        {
          title: "Nefrología",
          image: {
            src: "/images/services/hospitalizacion-pediatrica-portada.webp",
            alt: "",
          },
        },
        {
          title: "Oftalmología",
          image: {
            src: "/images/portafolio/chatgpt-image-27-ago-2026-12_00_23-e1787850518925-840x542.webp",
            alt: "",
          },
        },
        {
          title: "Gastroenterología",
          image: { src: "/images/portafolio/r6ph7609-1-1-1024x683.webp", alt: "" },
        },
        {
          title: "Cirugía pediátrica",
          image: {
            src: "/images/services/diagnostico-4.webp",
            alt: "",
          },
        },
      ],
    },
    {
      kind: "gallery",
      title: "Conoce nuestros espacios",
      body: "En Clínica La Esperanza creemos que sanar también significa sentirse acompañado, cómodo y seguro. Por eso ofrecemos espacios diseñados para brindar bienestar, tranquilidad y una atención humanizada durante cada etapa de la recuperación.",
      images: [
        {
          src: "/images/portafolio/33-e1787855374969.webp",
          alt: "Habitación de hospitalización pediátrica",
        },
        { src: "/images/portafolio/25.webp", alt: "Área de juegos de hospitalización pediátrica" },
        { src: "/images/portafolio/35-768x160.webp", alt: "Pasillo de hospitalización pediátrica" },
      ],
    },
    {
      kind: "closing",
      title: "Pequeños pacientes, grandes cuidados",
      body: "Contamos con un entorno especializado para acompañar a los niños durante su estancia hospitalaria.",
    },
  ],
};
