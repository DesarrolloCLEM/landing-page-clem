import { healthPackages } from "./site";

export type NavLink = {
  label: string;
  href: string;
  /** Opens outside the site (AppCLEM, WhatsApp...). */
  external?: boolean;
};

export type NavItem = NavLink & { children?: NavLink[] };

export const mainNav: NavItem[] = [
  { label: "Inicio", href: "/" },
  {
    label: "Sobre nosotros",
    href: "/sobre-nosotros/",
    children: [
      { label: "Sobre nosotros", href: "/sobre-nosotros/" },
      { label: "Políticas institucionales", href: "/politicas-institucionales/" },
      { label: "Organigrama", href: "/organigrama/" },
      { label: "Comité", href: "/comite/" },
      { label: "Informes financieros", href: "/informes-financieros/" },
      { label: "Reportes de área", href: "/reportes-de-area/" },
      { label: "Indicadores", href: "/indicadores/" },
      { label: "Nuestras proyecciones", href: "/nuestras-proyecciones/" },
    ],
  },
  {
    label: "Nuestros servicios",
    href: "/servicios/",
    children: [
      { label: "Urgencias", href: "/servicios/urgencias/" },
      { label: "Hospitalización", href: "/servicios/hospitalizacion/" },
      { label: "Cirugía", href: "/servicios/cirugia/" },
      { label: "Consulta externa", href: "/servicios/consulta-externa/" },
      { label: "Cuidado crítico", href: "/servicios/cuidado-critico/" },
      {
        label: "Diagnóstico y apoyo terapéutico",
        href: "/servicios/diagnostico-y-apoyo-terapeutico/",
      },
      { label: "Especialidades", href: "/servicios/#especialidades" },
      { label: "Programas especiales", href: "/servicios/programas/" },
      { label: "Todos los servicios", href: "/servicios/" },
    ],
  },
  {
    label: "Paquetes integrales",
    href: "/paquetes-integrales/",
    children: [
      { label: "Todos los paquetes", href: "/paquetes-integrales/" },
      ...healthPackages.map((item) => ({ label: item.name, href: item.href, external: true })),
    ],
  },
  {
    label: "Usuarios",
    href: "/usuarios/",
    children: [
      { label: "Usuarios", href: "/usuarios/" },
      { label: "Deberes y derechos", href: "/deberes-y-derechos/" },
      {
        label: "Felicitaciones, sugerencias, quejas y reclamos",
        href: "/felicitaciones-sugerencias-quejas-y-reclamos/",
      },
      { label: "Preguntas frecuentes", href: "/preguntas-frecuentes/" },
    ],
  },
  { label: "Agenda", href: "/agenda/" },
  { label: "Contacto", href: "/contacto/" },
];

export const appointmentLink: NavLink = { label: "Solicitar cita", href: "/agenda/" };

export const footerNav: NavLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Sobre nosotros", href: "/sobre-nosotros/" },
  { label: "Nuestros servicios", href: "/servicios/" },
  { label: "Agenda", href: "/agenda/" },
  { label: "Contacto", href: "/contacto/" },
];

export const footerLegalNav: NavLink[] = [
  { label: "Deberes y derechos", href: "/deberes-y-derechos/" },
  { label: "Políticas institucionales", href: "/politicas-institucionales/" },
  { label: "Tratamiento de datos personales", href: "/politica-de-tratamiento-de-datos/" },
  { label: "PQRS", href: "/felicitaciones-sugerencias-quejas-y-reclamos/" },
];
