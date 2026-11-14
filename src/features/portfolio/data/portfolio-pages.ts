// Registry of the inner pages of the portfolio, keyed by URL segment.

import type { PortfolioPageContent } from "../types";
import { cirugiaPage } from "./pages/cirugia";
import { consultaExternaPage } from "./pages/consulta-externa";
import { cuidadoCriticoPage } from "./pages/cuidado-critico";
import { diagnosticoPage } from "./pages/diagnostico-y-apoyo-terapeutico";
import { ginecologiaPage } from "./pages/ginecologia-y-obstetricia";
import { habitacionEstandarPage, habitacionPlusPage, suiteSerenaPage } from "./pages/habitaciones";
import { hospitalizacionPage } from "./pages/hospitalizacion";
import { hospitalizacionPediatricaPage } from "./pages/hospitalizacion-pediatrica";
import { infraestructuraPage } from "./pages/infraestructura";
import { suiteVipPage } from "./pages/suite-vip";
import { urgenciasPage } from "./pages/urgencias";

export const portfolioUnitPages: Record<string, PortfolioPageContent> = {
  hospitalizacion: hospitalizacionPage,
  urgencias: urgenciasPage,
  "cuidado-critico": cuidadoCriticoPage,
  cirugia: cirugiaPage,
  "ginecologia-y-obstetricia": ginecologiaPage,
  "consulta-externa": consultaExternaPage,
  "diagnostico-y-apoyo-terapeutico": diagnosticoPage,
};

export const portfolioHospitalizationPages: Record<string, PortfolioPageContent> = {
  pediatrica: hospitalizacionPediatricaPage,
  "suite-vip": suiteVipPage,
  "habitacion-estandar": habitacionEstandarPage,
  "habitacion-plus": habitacionPlusPage,
  "suite-serena": suiteSerenaPage,
};

export const portfolioUnitSlugs = Object.keys(portfolioUnitPages);
export const portfolioHospitalizationSlugs = Object.keys(portfolioHospitalizationPages);

export function getPortfolioUnitPage(slug: string): PortfolioPageContent | undefined {
  return portfolioUnitPages[slug];
}

export function getPortfolioHospitalizationPage(slug: string): PortfolioPageContent | undefined {
  return portfolioHospitalizationPages[slug];
}

export { infraestructuraPage };
