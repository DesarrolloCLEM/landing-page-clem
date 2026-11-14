// Mirror of https://clinicalaesperanza.co/p-consulta-externa/

import type { PortfolioPageContent } from "../../types";

const specialty = (slug: string) => `/portafolio/especialidades/${slug}/`;

export const consultaExternaPage: PortfolioPageContent = {
  title: "Consulta Externa Especializada",
  back: { label: "Volver a servicios", href: "/portafolio/" },
  blocks: [
    {
      kind: "banner",
      image: {
        src: "/images/portafolio/211.webp",
        alt: "Consulta externa de Clínica La Esperanza",
      },
    },
    {
      kind: "intro",
      title: "Consulta Externa Especializada",
      body: [
        "En Clínica La Esperanza ofrecemos un servicio de Consulta Externa respaldado por especialistas de diferentes áreas, consultorios modernos y una atención centrada en el paciente.",
      ],
    },
    {
      kind: "feature",
      title: "Consultorios modernos y confortables",
      image: {
        src: "/images/portafolio/r6ph7609-1-1024x683.webp",
        alt: "Consultorio de consulta externa",
      },
      body: [
        "Nuestros consultorios están diseñados para brindar una experiencia cómoda y segura tanto para pacientes como para profesionales de la salud. Cada espacio favorece una atención médica eficiente, con ambientes adecuados para la valoración, el diagnóstico y el seguimiento clínico.",
      ],
    },
    {
      kind: "cards",
      title: "Especialidades médico-quirúrgicas",
      items: [
        { title: "Pediatría", href: specialty("pediatria") },
        { title: "Medicina Interna", href: specialty("medicina-interna") },
        { title: "Neurocirugía", href: specialty("neurocirugia") },
        { title: "Ginecología", href: "/portafolio/ginecologia-y-obstetricia/" },
        { title: "Ortopedia y Traumatología", href: specialty("ortopedia-y-traumatologia") },
        { title: "Cirugía general", href: specialty("cirugia-general") },
        { title: "Salud mental", href: specialty("salud-mental") },
        { title: "Radiología", href: specialty("radiologia") },
        { title: "Fisioterapia", href: specialty("fisioterapia") },
        { title: "Cirugía Cardiovascular", href: specialty("cirugia-cardiovascular") },
        { title: "Cirugía Plástica", href: specialty("cirugia-plastica-y-reconstructiva") },
        { title: "Urología", href: specialty("urologia") },
        { title: "Cirugía Maxilofacial", href: specialty("cirugia-maxilofacial") },
        { title: "Otorrinolaringología", href: specialty("otorrinolaringologia") },
        { title: "Neurología", href: specialty("neurologia") },
        { title: "Nutrición y Dietética", href: specialty("nutricion-y-dieta") },
        {
          title: "Medicina Física y Rehabilitación",
          href: specialty("medicina-fisica-y-rehabilitacion"),
        },
        { title: "Anestesiología", href: specialty("anestesiologia") },
        { title: "Fonoaudiología", href: specialty("fonoaudiologia") },
        { title: "Oftalmología y Oculoplastia", href: specialty("oftalmologia") },
        { title: "Alergología", href: specialty("alergologia") },
        { title: "Dermatología", href: specialty("dermatologia") },
      ],
    },
    {
      kind: "bullets",
      title: "¿Qué ofrecemos en Consulta Externa?",
      items: [
        "Atención por especialistas",
        "Consultorios modernos y cómodos",
        "Agenda de citas programadas",
        "Atención humanizada",
        "Valoración y seguimiento médico",
        "Pacientes particulares y convenios",
      ],
    },
    {
      kind: "gallery",
      title: "Espacios pensados para el bienestar del paciente",
      images: [
        { src: "/images/portafolio/r6ph7617-1-650x572.webp", alt: "Sala de espera" },
        { src: "/images/portafolio/r6ph7615-650x572.webp", alt: "Consultorio médico" },
        { src: "/images/portafolio/aws-1-650x572.webp", alt: "Área de consulta externa" },
      ],
    },
    {
      kind: "stats",
      title: "Consulta Externa en cifras",
      items: [
        { value: "20+", title: "Consultorios habilitados" },
        { value: "5+", title: "Especialidades quirúrgicas" },
        { value: "10.000+", title: "Consultas al año" },
        { value: "30+", title: "Equipo médico multidisciplinario" },
      ],
    },
    {
      kind: "closing",
      title: "Atención especializada con calidad y confianza",
      body: "En Clínica La Esperanza ponemos a disposición de nuestros pacientes, empresas y aliados un servicio de Consulta Externa respaldado por talento humano, infraestructura moderna y un compromiso permanente con la excelencia en la atención.",
    },
  ],
};
