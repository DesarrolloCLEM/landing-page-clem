// Legacy WordPress URLs and their new location (design.md, "Mapa de URLs").
// next.config.ts serves them as 301 redirects. Pages whose URL did not change are not listed.
import { siteDocuments } from "./documents";

export type LegacyRedirect = { source: string; destination: string };

const specialty = (slug: string) => `/servicios/especialidades/${slug}/`;
const hospitalization = (slug = "") => `/servicios/hospitalizacion/${slug ? `${slug}/` : ""}`;

const pageRedirects: LegacyRedirect[] = [
  // Catalog and care units.
  { source: "/nuestros-servicios", destination: "/servicios/" },
  { source: "/portafolio", destination: "/servicios/" },
  { source: "/services", destination: "/servicios/" },
  { source: "/services/urgencias", destination: "/servicios/urgencias/" },
  { source: "/p-urgencias", destination: "/servicios/urgencias/" },
  { source: "/services/hospitalizacion", destination: hospitalization() },
  { source: "/p-hospitalizacion", destination: hospitalization() },
  { source: "/services/cirugia", destination: "/servicios/cirugia/" },
  { source: "/p-cirugia", destination: "/servicios/cirugia/" },
  { source: "/cirugias", destination: "/servicios/cirugia/" },
  { source: "/services/consulta-externa", destination: "/servicios/consulta-externa/" },
  { source: "/p-consulta-externa", destination: "/servicios/consulta-externa/" },
  { source: "/p-cuidado-critico", destination: "/servicios/cuidado-critico/" },
  {
    source: "/p-diagnostico-y-apoyo-terapeutico",
    destination: "/servicios/diagnostico-y-apoyo-terapeutico/",
  },
  // Hospitalization options.
  { source: "/p-pediatria", destination: hospitalization("pediatrica") },
  { source: "/p-suite-vip", destination: hospitalization("suite-vip") },
  { source: "/p-detalle-habitacion-estandar", destination: hospitalization("habitacion-estandar") },
  { source: "/p-detalle-habitacion-plus", destination: hospitalization("habitacion-plus") },
  { source: "/p-detalle-suite-serena", destination: hospitalization("suite-serena") },
  // Special programs.
  { source: "/p-programas-especiales", destination: "/servicios/programas/" },
  { source: "/p-nace-con-esperanza", destination: "/servicios/programas/nace-con-esperanza/" },
  {
    source: "/p-chequeo-medicos-preventivos",
    destination: "/servicios/programas/chequeos-medicos-preventivos/",
  },
  {
    source: "/p-centro-de-intervencionismo",
    destination: "/servicios/programas/centro-de-intervencionismo/",
  },
  // Institutional and packages.
  { source: "/p-infraestructura", destination: "/nueva-infraestructura/" },
  { source: "/latidos-de-vida", destination: "/paquetes-integrales/" },
  { source: "/mujer-sana", destination: "/paquetes-integrales/" },
  // Broken links of the legacy theme that people may still have saved.
  { source: "/contact", destination: "/contacto/" },
  { source: "/about-us", destination: "/sobre-nosotros/" },
  // Specialties: slugs inherited from the theme and Portafolio pages.
  { source: "/services/hepatitis-a-vaccine", destination: specialty("ortopedia-y-traumatologia") },
  {
    source: "/p-sub-ortopedia-y-traumatologia",
    destination: specialty("ortopedia-y-traumatologia"),
  },
  {
    source: "/services/rotavirus-vaccine",
    destination: specialty("cirugia-plastica-y-reconstructiva"),
  },
  {
    source: "/p-sub-cirugia-plastica",
    destination: specialty("cirugia-plastica-y-reconstructiva"),
  },
  { source: "/services/modern-clinic", destination: specialty("neurocirugia") },
  { source: "/p-sub-neurocirugia", destination: specialty("neurocirugia") },
  { source: "/services/primary-care", destination: specialty("cirugia-cardiovascular") },
  { source: "/p-sub-cirugia-cardiovascular", destination: specialty("cirugia-cardiovascular") },
  { source: "/services/preventative-care", destination: specialty("cirugia-de-torax") },
  { source: "/services/birthing-care", destination: specialty("cirugia-general") },
  { source: "/p-sub-cirugia-general", destination: specialty("cirugia-general") },
  { source: "/services/experienced-doctors", destination: specialty("medicina-del-dolor") },
  { source: "/services/heart-care", destination: specialty("hematologia-pediatrica") },
  { source: "/services/chiropractic-care", destination: specialty("ginecologia-y-obstetricia") },
  { source: "/p-ginecologia-y-obstetricia", destination: specialty("ginecologia-y-obstetricia") },
  { source: "/services/cirugia-pediatrica", destination: specialty("cirugia-pediatrica") },
  { source: "/services/medical-massage", destination: specialty("perinatologia") },
  { source: "/services/annual-screening", destination: specialty("urologia") },
  { source: "/p-sub-urologia", destination: specialty("urologia") },
  { source: "/services/family-medicine", destination: specialty("cirugia-maxilofacial") },
  { source: "/p-sub-cirugia-maxilofacial", destination: specialty("cirugia-maxilofacial") },
  { source: "/services/emergency-help", destination: specialty("otorrinolaringologia") },
  { source: "/otorrinolaringologia", destination: specialty("otorrinolaringologia") },
  { source: "/services/regular-check-ups", destination: specialty("oftalmologia") },
  { source: "/p-sub-oftamologia-y-oculoplastia", destination: specialty("oftalmologia") },
  { source: "/services/diagnostics-centre", destination: specialty("neurocirugia-pediatrica") },
  { source: "/p-sub-dermatologia", destination: specialty("dermatologia") },
  { source: "/p-sub-alergologia", destination: specialty("alergologia") },
  { source: "/p-sub-fonaudiologia", destination: specialty("fonoaudiologia") },
  {
    source: "/p-sub-medicina-fisica-y-rehabilitacion",
    destination: specialty("medicina-fisica-y-rehabilitacion"),
  },
  { source: "/p-sub-nutricion-y-dieta", destination: specialty("nutricion-y-dieta") },
  { source: "/p-sub-radiologia", destination: specialty("radiologia") },
  { source: "/p-sub-fisioterapia", destination: specialty("fisioterapia") },
  { source: "/p-sub-salud-mental", destination: specialty("salud-mental") },
  { source: "/p-sub-neurologia", destination: specialty("neurologia") },
  { source: "/p-medicina-interna", destination: specialty("medicina-interna") },
  { source: "/p-anestesiologia", destination: specialty("anestesiologia") },
  { source: "/p-sub-cardiologia-pediatrica", destination: specialty("cardiologia-pediatrica") },
  { source: "/p-pediatria-2", destination: specialty("pediatria") },
  { source: "/p-neumologia-pediatrica", destination: specialty("pediatria") },
];

// PDFs keep working at their old /wp-content/uploads/... address.
const documentRedirects: LegacyRedirect[] = siteDocuments.map((document) => ({
  source: document.legacyPath,
  destination: document.href,
}));

export const legacyRedirects: LegacyRedirect[] = [...pageRedirects, ...documentRedirects];
