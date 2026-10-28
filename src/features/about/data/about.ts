import type { ImageAsset, QuickLink, SubpageLink } from "../types";

export const aboutHeader = {
  title: "Sobre nosotros",
  description:
    "Clínica La Esperanza es una Institución Prestadora de Servicios de Salud de mediana y alta complejidad, con gran compromiso social que busca brindarle a sus usuarios altos estándares de calidad.",
  image: {
    src: "/images/about/fachada-clinica.webp",
    alt: "Fachada de Clínica La Esperanza en el barrio Buenavista de Montería",
  } satisfies ImageAsset,
};

export const quickLinks: QuickLink[] = [
  {
    title: "Contáctenos",
    description: "Escríbenos o llámanos, estamos para ayudarte.",
    href: "/contacto/",
    icon: "contact",
  },
  {
    title: "Solicitar cita",
    description: "Agenda tu cita por nuestro canal de WhatsApp.",
    href: "/agenda/",
    icon: "appointment",
  },
  {
    title: "App Clem",
    description: "Consulta resultados y realiza tu registro previo.",
    href: "/app-clem/",
    icon: "app",
  },
];

export const capacityTitle = "Nuestra capacidad";

export const history = {
  title: "Reseña histórica",
  paragraphs: [
    "Clínica La Esperanza - Evaluamos IPS es una sociedad de responsabilidad limitada creada en el año 2006, por un grupo de amigos que deciden conformar una IPS para prestar servicios de salud de primer nivel de atención.",
    "Inició prestando los servicios en la Calle 22 entre carreras 3ra y 4ta. Posteriormente, debido a los aumentos de cobertura por parte del Municipio y al trabajo arduo de la administración Evaluamos se ve en la necesidad de trasladarse a una nueva sede ubicada en la Calle 27 con Carrera 15 en el barrio Costa de Oro.",
    "Luego, debido a la consecución de nuevos contratos y al crecimiento de la cobertura del Régimen Subsidiado en Montería, Evaluamos decide crecer, trasladándose a la Calle 12 No. 4 – 58, donde se maneja II y III nivel de atención.",
    "Desde los inicios la visión fue crear una institución cuyos usuarios fueran pacientes pertenecientes al régimen subsidiado, con el fin de brindarle a esta población vulnerable una atención con altos estándares de calidad, como las mejores clínicas del país.",
  ],
  images: [
    { src: "/images/about/sala-de-espera.webp", alt: "Sala de espera de la clínica" },
    { src: "/images/about/recepcion.webp", alt: "Recepción principal de Clínica La Esperanza" },
  ] satisfies ImageAsset[],
};

export const mission = {
  title: "Misión",
  text: "Brindar atención en salud de alta complejidad actuando de manera ética, oportuna, segura y eficiente, a través de la evidencia científica, trato humanizado, el uso de las tecnologías en salud y la mejora continua de nuestro modelo de atención, atendiendo las necesidades en salud de nuestros usuarios y la comunidad en general.",
};

export const vision = {
  title: "Visión",
  text: "Ser reconocidos en la región por nuestros resultados clínicos mediante la implementación de un modelo de atención eficiente, integral, humano y seguro que brinde la mejor atención a nuestros usuarios.",
};

export const values = {
  title: "Nuestros valores",
  items: [
    "Trato humanizado",
    "Trabajo en equipo",
    "Ética e integridad",
    "Perseverancia",
    "Responsabilidad",
  ],
};

export const principles = {
  title: "Principios organizacionales",
  items: [
    "Respetar la filosofía empresarial.",
    "Velar por el cumplimiento de los derechos y deberes de nuestros pacientes y atención de las necesidades de nuestros usuarios y demás interesados.",
    "Propender por la integralidad en la prestación de los servicios que ofertamos.",
    "Cumplir con la legislación vigente y los requisitos organizacionales.",
    "Fomentar una cultura de seguridad para los pacientes, su familia y acompañantes y nuestros usuarios internos.",
    "Mejorar continuamente nuestros procesos y servicios a través de estrategias eficientes.",
  ],
};

export const subpages = {
  title: "Conoce más de nuestra institución",
  items: [
    {
      title: "Políticas institucionales",
      description: "Calidad, seguridad del paciente, SST, gestión ambiental y docencia-servicio.",
      href: "/politicas-institucionales/",
    },
    {
      title: "Organigrama",
      description: "La estructura organizativa que coordina nuestra atención.",
      href: "/organigrama/",
    },
    {
      title: "Comité",
      description: "Los comités que velan por la calidad y la seguridad.",
      href: "/comite/",
    },
    {
      title: "Informes financieros",
      description: "Estados financieros comparativos de cada periodo.",
      href: "/informes-financieros/",
    },
    {
      title: "Reportes de área",
      description: "Reporte del área de seguridad y salud en el trabajo.",
      href: "/reportes-de-area/",
    },
    {
      title: "Indicadores",
      description: "Reportes externos de indicadores de gestión.",
      href: "/indicadores/",
    },
    {
      title: "Nuestras proyecciones",
      description: "Cómo crecerá nuestra capacidad en infraestructura y servicios.",
      href: "/nuestras-proyecciones/",
    },
    {
      title: "Nueva infraestructura",
      description: "El proyecto de la nueva torre de 7.764 m².",
      href: "/nueva-infraestructura/",
    },
  ] satisfies SubpageLink[],
};
