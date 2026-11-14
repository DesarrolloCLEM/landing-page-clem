// Mirror of https://clinicalaesperanza.co/p-cirugia/

import type { PortfolioPageContent } from "../../types";

export const cirugiaPage: PortfolioPageContent = {
  title: "Unidad Quirúrgica",
  back: { label: "Volver a servicios", href: "/portafolio/" },
  blocks: [
    {
      kind: "banner",
      image: {
        src: "/images/portafolio/228.webp",
        alt: "Quirófano de Clínica La Esperanza",
      },
    },
    {
      kind: "intro",
      title: "Unidad Quirúrgica",
      subtitle:
        "Infraestructura, tecnología y especialistas para procedimientos de baja, mediana y alta complejidad.",
      body: [
        "Ofrecemos soluciones quirúrgicas especializadas, diseñadas para responder a las necesidades de cada paciente con precisión, seguridad y calidad. Contamos con un equipo médico altamente capacitado y tecnología de vanguardia, lo que garantiza resultados confiables y una atención humana en cada procedimiento.",
      ],
    },
    {
      kind: "stats",
      title: "Capacidad instalada",
      items: [
        {
          value: "2",
          title: "Quirófanos",
          body: "Salas completamente dotadas para procedimientos de baja, mediana y alta complejidad.",
        },
        {
          value: "1",
          title: "Sala de Partos",
          body: "Espacio diseñado para una atención segura y humanizada durante el nacimiento.",
        },
        {
          value: "8",
          title: "Camas de Recuperación",
          body: "Monitoreo permanente y atención especializada durante el postoperatorio.",
        },
      ],
    },
    {
      kind: "cards",
      title: "¿Por qué elegirnos?",
      items: [
        {
          title: "Equipo altamente capacitado",
          body: "Cirujanos y personal clínico con amplia experiencia en cada especialidad.",
        },
        {
          title: "Tecnología de vanguardia",
          body: "Equipos e instalaciones pensados para procedimientos seguros y precisos.",
        },
        {
          title: "Resultados confiables",
          body: "Procesos rigurosos que priorizan tu seguridad en cada etapa del procedimiento.",
        },
        {
          title: "Atención humana",
          body: "Acompañamiento cercano para ti y tu familia durante todo el proceso.",
        },
      ],
    },
    {
      kind: "groups",
      title: "Áreas quirúrgicas especializadas",
      items: [
        {
          title: "Cirugía General",
          href: "/portafolio/especialidades/cirugia-general/",
          body: "Cirugía Pancreatohepatobiliar · Cirugía de Tórax",
        },
        {
          title: "Cirugía Cardiovascular",
          href: "/portafolio/especialidades/cirugia-cardiovascular/",
          body: "Procedimientos enfocados en el cuidado y tratamiento quirúrgico del corazón y los vasos sanguíneos.",
        },
        {
          title: "Cirugía Plástica y Estética",
          href: "/portafolio/especialidades/cirugia-plastica-y-reconstructiva/",
          body: "Procedimientos orientados a la reconstrucción y el bienestar estético del paciente.",
        },
        {
          title: "Cirugía Pediátrica",
          body: "Procedimientos quirúrgicos adaptados a las necesidades particulares de los niños, en distintas especialidades.",
        },
        {
          title: "Neurocirugía",
          href: "/portafolio/especialidades/neurocirugia/",
          body: "Procedimientos especializados en el sistema nervioso central y periférico.",
        },
        {
          title: "Cirugía Ortopédica y Traumatológica",
          href: "/portafolio/especialidades/ortopedia-y-traumatologia/",
          body: "Ortopedia Oncológica · Artroscopia · Ortopedia Reconstructiva · Cirugía de Hombro · Revisión de Prótesis · Cirugía de Columna",
        },
        {
          title: "Cirugía Ginecológica y Obstétrica",
          href: "/portafolio/ginecologia-y-obstetricia/",
          body: "Ginecología Oncológica · Ginecología Laparoscópica",
        },
        {
          title: "Cirugía Urológica",
          href: "/portafolio/especialidades/urologia/",
          body: "Procedimientos especializados en el sistema urinario y reproductor.",
        },
        {
          title: "Cirugía Otorrinolaringológica",
          // The deployed portfolio has no sheet for this specialty either.
          href: "/servicios/especialidades/otorrinolaringologia/",
          body: "Procedimientos especializados en oído, nariz y garganta.",
        },
        {
          title: "Cirugía Oftalmológica",
          href: "/portafolio/especialidades/oftalmologia/",
          body: "Procedimientos quirúrgicos para el cuidado y tratamiento de la visión.",
        },
        {
          title: "Cirugía Maxilofacial",
          href: "/portafolio/especialidades/cirugia-maxilofacial/",
          body: "Procedimientos especializados en la región facial, oral y maxilar.",
        },
      ],
    },
    {
      kind: "gallery",
      title: "Conoce nuestra Unidad Quirúrgica",
      images: [
        { src: "/images/portafolio/67-370x493.webp", alt: "Quirófano de la unidad quirúrgica" },
        { src: "/images/portafolio/321-1.webp", alt: "Equipo quirúrgico en procedimiento" },
        { src: "/images/portafolio/271-370x303.webp", alt: "Instrumental quirúrgico" },
        { src: "/images/portafolio/87-370x493.webp", alt: "Área de recuperación postoperatoria" },
      ],
    },
    {
      kind: "closing",
      title: "Cuidado innovador, pensado para ti",
      body: "Clínica La Esperanza · Montería",
    },
  ],
};
