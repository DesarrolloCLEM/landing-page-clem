import type { OrgUnit } from "../types";

export const organigramHeader = {
  title: "Organigrama",
  description:
    "En la Clínica La Esperanza, creemos que una estructura organizativa sólida es fundamental para brindar una atención médica de calidad. Nuestro equipo está conformado por profesionales altamente capacitados y comprometidos con la excelencia en cada área. A continuación, te presentamos nuestro organigrama, el cual refleja nuestra dedicación a ofrecer un servicio eficiente y coordinado, siempre enfocado en el bienestar de nuestros pacientes.",
  image: {
    src: "/images/about/organigrama-clinica-la-esperanza.webp",
    alt: "Organigrama de Clínica La Esperanza. La descripción completa está a continuación de la imagen.",
    width: 979,
    height: 819,
  },
  openLabel: "Ver organigrama en tamaño completo",
  textTitle: "Descripción del organigrama",
};

// Transcription of the organigram image, so its content is available as text.
export const organigram: OrgUnit = {
  name: "Junta Directiva",
  children: [
    { name: "Revisoría Fiscal", note: "apoyo" },
    {
      name: "Gerencia Administrativa",
      children: [
        { name: "Secretaría", children: [{ name: "Mensajero" }] },
        {
          name: "Coordinador de Sistemas",
          children: [{ name: "Ingeniero de Sistemas" }, { name: "Auxiliar de Sistemas" }],
        },
        {
          name: "Coordinador de Mantenimiento e Infraestructura",
          children: [{ name: "Auxiliar de Mantenimiento" }],
        },
      ],
    },
    {
      name: "Gerencia Asistencial",
      children: [{ name: "Outsourcing de Facturación y Radicación de Cuentas", note: "apoyo" }],
    },
    { name: "Asesoría Jurídica y Seguridad", note: "apoyo a las gerencias" },
    { name: "Asesoría de Calidad y Administrativa", note: "apoyo a las gerencias" },
    {
      name: "Coordinador de Calidad",
      children: [
        { name: "Líder de Seguridad del Paciente" },
        { name: "Jefe SIAU" },
        { name: "Comunicadora Social" },
      ],
    },
    {
      name: "Director de Talento Humano",
      children: [
        { name: "Asistente de Talento Humano" },
        { name: "Coordinador de Talento Humano" },
        { name: "Abogado laboral" },
        { name: "Coordinador del SST" },
        { name: "Auxiliar de Nómina" },
      ],
    },
    {
      name: "Director Financiero",
      children: [
        { name: "Jefe de Cartera", children: [{ name: "Auxiliar de Cartera" }] },
        { name: "Auxiliar Contable" },
        { name: "Tesorero" },
      ],
    },
    {
      name: "Director Médico",
      children: [
        { name: "Epidemiología" },
        { name: "Auditor Concurrente", children: [{ name: "Interventora de Facturación" }] },
        { name: "Auxiliar de archivo" },
        { name: "Coordinador Médico y de Urgencias" },
        {
          name: "Coordinador General de Enfermería",
          children: [
            { name: "Conductor de Ambulancia" },
            { name: "Auxiliares de Servicios Generales" },
            { name: "Auxiliares Clínicos" },
          ],
        },
        { name: "Laboratorio", note: "apoyo" },
        {
          name: "Jefe de Compras",
          children: [
            { name: "Almacenista" },
            { name: "Auxiliar de Almacén" },
            { name: "Auxiliar de Bodega" },
          ],
        },
        {
          name: "Químico Farmacéutico",
          children: [{ name: "Regente de Farmacia" }, { name: "Auxiliar de Farmacia" }],
        },
        {
          name: "Personal asistencial",
          children: [
            { name: "Médico Especialista" },
            { name: "Médico General" },
            { name: "Médico de Servicio Social Obligatorio" },
            { name: "Fisioterapeuta" },
            { name: "Instrumentador Quirúrgico" },
            { name: "Enfermera" },
            { name: "Auxiliar de Enfermería" },
            { name: "Auxiliar de Atención al Usuario" },
            { name: "Tecnólogo en RX" },
            { name: "Técnico en RX" },
          ],
        },
      ],
    },
  ],
};

export const committeesHeader = {
  title: "Comité",
  description:
    "En la Clínica La Esperanza, contamos con diversos comités especializados que trabajan de manera coordinada para asegurar la excelencia en nuestros servicios. Cada comité se enfoca en áreas críticas que impactan directamente en la calidad de atención y seguridad de nuestros pacientes:",
  closing:
    "Estos comités, formados por profesionales especializados, están comprometidos con la mejora continua, asegurando que todos nuestros procedimientos se desarrollen bajo los más altos estándares éticos y técnicos, siempre enfocados en ofrecer una atención segura, eficiente y humanizada.",
  listTitle: "Nuestros comités",
};

export const committees = [
  "Comité de Ética Médica",
  "Comité de Farmacia y Terapéutica",
  "Comité de Historias Clínicas",
  "Comité de Estadísticas Vitales y Epidemiología",
  "Comité Técnico Científico",
  "Comité de Infecciones Intrahospitalarias",
  "Comité de Gestión Ambiental",
  "Comité de Seguridad del Paciente",
  "Comité de Seguridad y Salud en el Trabajo",
  "Comité de Calidad",
  "Comité de Transfusión Sanguínea",
  "Comité de Docencia-Servicio",
  "Comité de Compras",
];
