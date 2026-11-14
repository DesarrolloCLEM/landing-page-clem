// Registry of the 21 specialty sheets of the portfolio, mirrored from the
// p-sub-* pages of the deployed WordPress site.

import type { PortfolioPageContent } from "../types";
import { alergologiaPage } from "./especialidades/alergologia";
import { anestesiologiaPage } from "./especialidades/anestesiologia";
import { cardiologiaPediatricaPage } from "./especialidades/cardiologia-pediatrica";
import { cirugiaCardiovascularPage } from "./especialidades/cirugia-cardiovascular";
import { cirugiaGeneralPage } from "./especialidades/cirugia-general";
import { cirugiaMaxilofacialPage } from "./especialidades/cirugia-maxilofacial";
import { cirugiaPlasticaPage } from "./especialidades/cirugia-plastica-y-reconstructiva";
import { dermatologiaPage } from "./especialidades/dermatologia";
import { fisioterapiaPage } from "./especialidades/fisioterapia";
import { fonoaudiologiaPage } from "./especialidades/fonoaudiologia";
import { medicinaFisicaPage } from "./especialidades/medicina-fisica-y-rehabilitacion";
import { medicinaInternaPage } from "./especialidades/medicina-interna";
import { neurocirugiaPage } from "./especialidades/neurocirugia";
import { neurologiaPage } from "./especialidades/neurologia";
import { nutricionPage } from "./especialidades/nutricion-y-dieta";
import { oftalmologiaPage } from "./especialidades/oftalmologia";
import { ortopediaPage } from "./especialidades/ortopedia-y-traumatologia";
import { pediatriaPage } from "./especialidades/pediatria";
import { radiologiaPage } from "./especialidades/radiologia";
import { saludMentalPage } from "./especialidades/salud-mental";
import { urologiaPage } from "./especialidades/urologia";

export const portfolioSpecialtyPages: Record<string, PortfolioPageContent> = {
  alergologia: alergologiaPage,
  anestesiologia: anestesiologiaPage,
  "cardiologia-pediatrica": cardiologiaPediatricaPage,
  "cirugia-cardiovascular": cirugiaCardiovascularPage,
  "cirugia-general": cirugiaGeneralPage,
  "cirugia-maxilofacial": cirugiaMaxilofacialPage,
  "cirugia-plastica-y-reconstructiva": cirugiaPlasticaPage,
  dermatologia: dermatologiaPage,
  fisioterapia: fisioterapiaPage,
  fonoaudiologia: fonoaudiologiaPage,
  "medicina-fisica-y-rehabilitacion": medicinaFisicaPage,
  "medicina-interna": medicinaInternaPage,
  neurocirugia: neurocirugiaPage,
  neurologia: neurologiaPage,
  "nutricion-y-dieta": nutricionPage,
  oftalmologia: oftalmologiaPage,
  "ortopedia-y-traumatologia": ortopediaPage,
  pediatria: pediatriaPage,
  radiologia: radiologiaPage,
  "salud-mental": saludMentalPage,
  urologia: urologiaPage,
};

export const portfolioSpecialtySlugs = Object.keys(portfolioSpecialtyPages);

export function getPortfolioSpecialtyPage(slug: string): PortfolioPageContent | undefined {
  return portfolioSpecialtyPages[slug];
}
