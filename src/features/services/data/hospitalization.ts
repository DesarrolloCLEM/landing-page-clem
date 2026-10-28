import type { ContentItem, RoomFeature, ServiceEntry } from "../types";

const base = "/servicios/hospitalizacion";

export const roomOptions: (ContentItem & { slug: string; image: string })[] = [
  {
    slug: "habitacion-estandar",
    title: "Habitación Estándar",
    description:
      "La Habitación Estándar ofrece un espacio cómodo, seguro y funcional, pensado para brindar una estancia agradable con la calidad y el cuidado que caracterizan a la Clínica La Esperanza.",
    href: `${base}/habitacion-estandar/`,
    image: "/images/services/habitacion-estandar-1.webp",
    tags: [
      "Habitación privada",
      "Baño privado",
      "Aire acondicionado",
      "Televisión",
      "Alimentación",
      "Atención médica",
      "Enfermería 24h",
      "Acompañante",
    ],
  },
  {
    slug: "habitacion-plus",
    title: "Habitación Plus",
    description:
      "La Habitación Plus está diseñada para quienes desean disfrutar de un ambiente más amplio, moderno y confortable durante su proceso de recuperación.",
    href: `${base}/habitacion-plus/`,
    image: "/images/services/habitacion-plus-1.webp",
    tags: [
      "Habitación privada",
      "Baño privado",
      "Aire acondicionado",
      "Televisión",
      "Nevera",
      "Estación de café",
      "Espacios amplios",
      "Acompañante",
    ],
  },
  {
    slug: "suite-serena",
    title: "Suite Serena",
    description:
      "La Suite Serena representa el máximo nivel de comodidad dentro de nuestra institución. Fue diseñada para brindar una experiencia exclusiva durante la hospitalización, combinando privacidad, amplitud y servicios diferenciados para el paciente y su acompañante.",
    href: `${base}/suite-serena/`,
    image: "/images/services/suite-serena-1.webp",
    tags: [
      "Suite privada",
      "Baño privado",
      "Kit de aseo",
      "Televisión",
      "Menú especial",
      "Estación de café",
      "Experiencia premium",
      "Nevera",
      "Espacio acompañante",
      "Menú diferencial acompañante",
    ],
  },
];

export const roomComparison: RoomFeature[] = [
  { label: "Habitación privada", values: [true, true, true] },
  { label: "Baño privado", values: [true, true, true] },
  { label: "Aire acondicionado", values: [true, true, true] },
  { label: "Televisión", values: [true, true, true] },
  { label: "Nevera", values: [false, true, true] },
  { label: "Estación de café", values: [false, true, true] },
  { label: "Kit de aseo", values: [false, false, true] },
  { label: "Espacio para acompañante", values: ["Básico", "Amplio", "Premium"] },
  { label: "Menú especial", values: [false, false, true] },
  { label: "Experiencia premium", values: [false, false, true] },
];

const roomRelated = [`${base}/suite-vip/`, `${base}/`, "/servicios/programas/nace-con-esperanza/"];

export const hospitalizationOptions: ServiceEntry[] = [
  {
    slug: "pediatrica",
    kind: "hospitalization-option",
    href: `${base}/pediatrica/`,
    title: "Hospitalización pediátrica",
    tagline: "Cuidamos de ti en cada etapa de tu recuperación",
    summary:
      "Un área diseñada para brindar una atención segura, cálida y especializada para los niños y sus familias.",
    image: {
      src: "/images/services/pediatria-madre-e-hija.webp",
      alt: "Madre e hija sonriendo en la clínica",
    },
    intro: [
      "En Clínica La Esperanza contamos con un área de Hospitalización Pediátrica diseñada para brindar una atención segura, cálida y especializada para los niños. Nuestro equipo médico y de enfermería acompaña a cada paciente y su familia durante todo el proceso de recuperación, ofreciendo un ambiente confortable, cercano y pensado para generar tranquilidad.",
    ],
    sections: [
      {
        id: "atencion-coordinada",
        title: "Especialidades que respaldan cada hospitalización",
        intro: [
          "Durante la hospitalización pediátrica, diferentes especialidades pueden intervenir de acuerdo con las necesidades clínicas de cada paciente.",
        ],
        layout: "list",
        items: [
          {
            title: "Cardiología pediátrica",
            href: "/servicios/especialidades/cardiologia-pediatrica/",
          },
          { title: "Neumología pediátrica" },
          { title: "Infectología pediátrica" },
          { title: "Neonatología" },
          {
            title: "Neurocirugía pediátrica",
            href: "/servicios/especialidades/neurocirugia-pediatrica/",
          },
          { title: "Oncología" },
          { title: "Endocrinología" },
          { title: "Nefrología" },
          { title: "Oftalmología", href: "/servicios/especialidades/oftalmologia/" },
          { title: "Gastroenterología" },
          { title: "Cirugía pediátrica", href: "/servicios/especialidades/cirugia-pediatrica/" },
        ],
      },
      {
        id: "espacios",
        title: "Conoce nuestros espacios",
        intro: [
          "En Clínica La Esperanza creemos que sanar también significa sentirse acompañado, cómodo y seguro. Por eso ofrecemos espacios diseñados para brindar bienestar, tranquilidad y una atención humanizada durante cada etapa de la recuperación.",
        ],
      },
    ],
    gallery: [
      { src: "/images/services/pediatria-cuna.webp", alt: "Cuna de hospitalización pediátrica" },
      {
        src: "/images/services/cuidado-critico-neonatal.webp",
        alt: "Médico en la unidad neonatal",
      },
    ],
    related: [
      "/servicios/especialidades/pediatria/",
      "/servicios/cuidado-critico/",
      `${base}/suite-vip/`,
    ],
    closing: {
      title: "Pequeños pacientes, grandes cuidados",
      description:
        "Contamos con un entorno especializado para acompañar a los niños durante su estancia hospitalaria.",
    },
  },
  {
    slug: "suite-vip",
    kind: "hospitalization-option",
    href: `${base}/suite-vip/`,
    title: "Suite VIP",
    tagline: "Nuestra experiencia premium de hospitalización",
    summary:
      "Habitaciones Estándar, Plus y Suite Serena: mayor privacidad, confort y servicios exclusivos para el paciente y su acompañante.",
    image: {
      src: "/images/services/suite-serena-1.webp",
      alt: "Sala de la Suite Serena con sofá, sillas y flores",
    },
    intro: [
      "La Suite Serena ofrece el máximo nivel de comodidad, con un espacio exclusivo que combina privacidad, amplitud y servicios diferenciados para el paciente y su acompañante.",
      "En Clínica La Esperanza trabajamos cada día para brindar una experiencia de hospitalización segura, humana y confortable, acompañando a nuestros pacientes y sus familias con calidad, calidez y compromiso.",
    ],
    sections: [
      {
        id: "como-en-casa",
        title: "Recuperarse también significa sentirse como en casa",
        intro: [
          "Nuestras Suites VIP fueron diseñadas para brindar una experiencia superior de hospitalización, ofreciendo mayor privacidad, confort y servicios exclusivos para que el paciente y su acompañante disfruten de una estancia más tranquila y agradable.",
        ],
      },
    ],
    related: [`${base}/`, `${base}/pediatrica/`, "/servicios/programas/nace-con-esperanza/"],
  },
  {
    slug: "habitacion-estandar",
    kind: "hospitalization-option",
    href: `${base}/habitacion-estandar/`,
    title: "Habitación Estándar",
    tagline: "Comodidad y bienestar para tu recuperación",
    summary:
      "Un espacio cómodo, seguro y funcional para una estancia agradable durante la recuperación.",
    image: {
      src: "/images/services/habitacion-estandar-1.webp",
      alt: "Habitación Estándar con cama clínica y mesa auxiliar",
    },
    intro: [
      "La Habitación Estándar de Clínica La Esperanza ofrece un espacio cómodo, seguro y funcional, diseñado para brindar una estancia agradable durante el proceso de recuperación. Cada habitación es privada y cuenta con baño privado, aire acondicionado y televisión, además de alimentación, atención médica y enfermería disponible las 24 horas, con la posibilidad de contar con un acompañante durante la estancia.",
    ],
    sections: [],
    gallery: [
      {
        src: "/images/services/habitacion-estandar-2.webp",
        alt: "Cama clínica de la Habitación Estándar",
      },
      {
        src: "/images/services/habitacion-estandar-3.webp",
        alt: "Habitación Estándar con división de vidrio",
      },
      {
        src: "/images/services/habitacion-estandar-4.webp",
        alt: "Habitación Estándar con monitor y sillón",
      },
    ],
    related: roomRelated,
  },
  {
    slug: "habitacion-plus",
    kind: "hospitalization-option",
    href: `${base}/habitacion-plus/`,
    title: "Habitación Plus",
    tagline: "Mayor confort para una estancia más agradable",
    summary:
      "Una habitación más amplia y confortable, con amenidades adicionales para el paciente y su acompañante.",
    image: {
      src: "/images/services/habitacion-plus-1.webp",
      alt: "Habitación Plus con cama clínica, sillón y mesa auxiliar",
    },
    intro: [
      "La Habitación Plus ofrece una experiencia superior de comodidad para tu recuperación. Se trata de una habitación más amplia y confortable, con amenidades adicionales para que el paciente y su acompañante disfruten de una estancia más agradable, sin dejar de lado la calidad médica y el cuidado humano que distinguen a Clínica La Esperanza.",
    ],
    sections: [],
    gallery: [
      {
        src: "/images/services/habitacion-plus-2.webp",
        alt: "Sillón reclinable para el acompañante en la Habitación Plus",
      },
      {
        src: "/images/services/habitacion-plus-3.webp",
        alt: "Cama clínica y cuna en la Habitación Plus",
      },
      {
        src: "/images/services/habitacion-plus-4.webp",
        alt: "Sala de estar de la Habitación Plus",
      },
      {
        src: "/images/services/habitacion-plus-5.webp",
        alt: "Detalle de la cama con el logo de la clínica",
      },
    ],
    related: roomRelated,
  },
  {
    slug: "suite-serena",
    kind: "hospitalization-option",
    href: `${base}/suite-serena/`,
    title: "Suite Serena",
    tagline: "Nuestra experiencia premium de hospitalización",
    summary: "La opción de máxima categoría: elegancia, privacidad y servicios diferenciados.",
    image: { src: "/images/services/suite-serena-3.webp", alt: "Cama clínica de la Suite Serena" },
    intro: [
      "La opción de máxima categoría en Clínica La Esperanza combina elegancia, privacidad y servicios diferenciados para una hospitalización excepcional. Pensada para quienes buscan una experiencia superior durante su recuperación, ofrece un ambiente exclusivo, ideal para pacientes y acompañantes que desean sumar tranquilidad y distinción a su proceso.",
    ],
    sections: [],
    gallery: [
      { src: "/images/services/suite-serena-1.webp", alt: "Sala de la Suite Serena" },
      { src: "/images/services/suite-serena-2.webp", alt: "Detalle de la Suite Serena" },
      { src: "/images/services/suite-serena-4.webp", alt: "Sofá y flores en la Suite Serena" },
      {
        src: "/images/services/suite-serena-menu-desayuno.webp",
        alt: "Desayuno del menú especial",
      },
      {
        src: "/images/services/suite-serena-menu-almuerzo.webp",
        alt: "Plato de pasta del menú especial",
      },
      {
        src: "/images/services/suite-serena-menu-cena.webp",
        alt: "Pechuga con ensalada del menú especial",
      },
      {
        src: "/images/services/suite-serena-menu-snack.webp",
        alt: "Yogur con granola y frutas del menú especial",
      },
    ],
    related: roomRelated,
  },
];
