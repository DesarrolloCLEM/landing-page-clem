import type { PortfolioNavLink, PortfolioSpecialtyGroup } from "../types";

const specialty = (slug: string) => `/portafolio/especialidades/${slug}/`;

// Anchors are absolute so the header works from the inner pages too, not only from the landing.
export const portfolioMainNav: PortfolioNavLink[] = [
  { label: "Inicio", href: "/portafolio/" },
  { label: "¿Quiénes somos?", href: "/portafolio/#quienesSomos" },
  { label: "Nuestros servicios", href: "/portafolio/#NuestrosServicios" },
  { label: "Nueva infraestructura", href: "/portafolio/#Infraestructura" },
  { label: "Historias", href: "/portafolio/#Historia" },
];

// Subspecialties without their own page link to the specialty that describes them.
export const portfolioSpecialtyGroups: PortfolioSpecialtyGroup[] = [
  {
    label: "Medicina interna",
    href: specialty("medicina-interna"),
    items: [
      { label: "Neumología", href: specialty("medicina-interna") },
      { label: "Nefrología", href: specialty("medicina-interna") },
      {
        label: "Cardiología",
        href: specialty("medicina-interna"),
        children: [
          { label: "Hemodinamia", href: specialty("medicina-interna") },
          { label: "Electrofisiología", href: specialty("medicina-interna") },
        ],
      },
      { label: "Neurología", href: specialty("neurologia") },
      { label: "Gastroenterología", href: specialty("medicina-interna") },
      { label: "Hematología", href: specialty("medicina-interna") },
      { label: "Infectología", href: specialty("medicina-interna") },
      { label: "Reumatología", href: specialty("medicina-interna") },
    ],
  },
  {
    label: "Ginecología",
    href: "/portafolio/ginecologia-y-obstetricia/",
    items: [
      { label: "Materno Fetal (Perinatología)", href: "/portafolio/ginecologia-y-obstetricia/" },
      { label: "Ginecología Oncológica", href: "/portafolio/ginecologia-y-obstetricia/" },
      { label: "Ginecología Laparoscópica", href: "/portafolio/ginecologia-y-obstetricia/" },
    ],
  },
  {
    label: "Cirugía general",
    href: specialty("cirugia-general"),
    items: [
      { label: "Cirugía Pancreatohepatobiliar", href: specialty("cirugia-general") },
      { label: "Cirugía de Tórax", href: specialty("cirugia-general") },
    ],
  },
  {
    label: "Pediatría",
    href: specialty("pediatria"),
    items: [
      { label: "Cardiología Pediátrica", href: specialty("cardiologia-pediatrica") },
      { label: "Neumología Pediátrica", href: specialty("pediatria") },
      { label: "Infectología Pediátrica", href: specialty("pediatria") },
      { label: "Neonatología", href: specialty("pediatria") },
      { label: "Hemato-oncología Pediátrica", href: specialty("pediatria") },
      { label: "Endocrinología Pediátrica", href: specialty("pediatria") },
      { label: "Nefrología Pediátrica", href: specialty("pediatria") },
      { label: "Neurocirugía Pediátrica", href: specialty("pediatria") },
      { label: "Oftalmología Pediátrica", href: specialty("pediatria") },
      { label: "Gastroenterología Pediátrica", href: specialty("pediatria") },
      { label: "Cirugía Pediátrica", href: specialty("pediatria") },
    ],
  },
  {
    label: "Ortopedia y traumatología",
    href: specialty("ortopedia-y-traumatologia"),
    items: [
      { label: "Ortopedia Oncológica", href: specialty("ortopedia-y-traumatologia") },
      { label: "Artroscopia", href: specialty("ortopedia-y-traumatologia") },
      { label: "Ortopedia Reconstructiva", href: specialty("ortopedia-y-traumatologia") },
      { label: "Cirugía de Hombro", href: specialty("ortopedia-y-traumatologia") },
      { label: "Revisión de Prótesis", href: specialty("ortopedia-y-traumatologia") },
      { label: "Cirugía de Columna", href: specialty("ortopedia-y-traumatologia") },
    ],
  },
  {
    label: "Neurocirugía",
    href: specialty("neurocirugia"),
    items: [{ label: "Medicina del Dolor", href: specialty("neurocirugia") }],
  },
  {
    label: "Radiología",
    href: specialty("radiologia"),
    items: [
      { label: "Radiología Intervencionista", href: specialty("radiologia") },
      { label: "Imágenes Cardíacas", href: specialty("radiologia") },
    ],
  },
  {
    label: "Salud Mental",
    href: specialty("salud-mental"),
    items: [
      { label: "Psiquiatría", href: specialty("salud-mental") },
      { label: "Psicología", href: specialty("salud-mental") },
    ],
  },
];

export const portfolioStandaloneSpecialties: PortfolioNavLink[] = [
  { label: "Urología", href: specialty("urologia") },
  { label: "Cirugía Cardiovascular", href: specialty("cirugia-cardiovascular") },
  {
    label: "Cirugía Plástica y Reconstructiva",
    href: specialty("cirugia-plastica-y-reconstructiva"),
  },
  { label: "Cirugía Maxilofacial", href: specialty("cirugia-maxilofacial") },
  { label: "Otorrinolaringología", href: "/servicios/especialidades/otorrinolaringologia/" },
  { label: "Oftalmología y Oculoplastia", href: specialty("oftalmologia") },
  { label: "Fonoaudiología", href: specialty("fonoaudiologia") },
  { label: "Nutrición y Dieta", href: specialty("nutricion-y-dieta") },
  {
    label: "Fisioterapia",
    href: specialty("fisioterapia"),
    children: [
      { label: "Rehabilitación Cardíaca", href: specialty("fisioterapia") },
      { label: "Terapia física y rehabilitación", href: specialty("fisioterapia") },
    ],
  },
  {
    label: "Medicina Física y Rehabilitación",
    href: specialty("medicina-fisica-y-rehabilitacion"),
  },
  { label: "Anestesiología", href: specialty("anestesiologia") },
  { label: "Alergología", href: specialty("alergologia") },
  { label: "Dermatología", href: specialty("dermatologia") },
];

export const portfolioFooterNav: PortfolioNavLink[] = [
  { label: "Inicio", href: "/portafolio/" },
  { label: "¿Quiénes somos?", href: "/portafolio/#quienesSomos" },
  { label: "Nuestros servicios", href: "/portafolio/#NuestrosServicios" },
  { label: "Nueva infraestructura", href: "/portafolio/infraestructura/" },
  { label: "Contacto", href: "/portafolio/#contacto" },
];
