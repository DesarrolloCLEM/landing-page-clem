// Transparency documents (PDF) served from /public/documentos.
// Shared by the transparency pages and by the redirects of their legacy WordPress URLs.

export type DocumentCategory = "informes-financieros" | "reportes-de-area" | "indicadores";

export type SiteDocument = {
  category: DocumentCategory;
  title: string;
  period?: string;
  href: string;
  bytes: number;
  legacyPath: string;
};

const uploads = "/wp-content/uploads";

export const siteDocuments: SiteDocument[] = [
  {
    category: "informes-financieros",
    title: "Estados Financieros Comparativos Periodo (2024-2025)",
    period: "2024-2025",
    href: "/documentos/informes-financieros/estados-financieros-2024-2025.pdf",
    bytes: 677557,
    legacyPath: `${uploads}/2026/05/NOTAS-ESTADOS-FINANCIEROS-CELM-SAS-2025-2024-OK.pdf`,
  },
  {
    category: "informes-financieros",
    title: "Estados Financieros Comparativos Periodo (2023-2024)",
    period: "2023-2024",
    href: "/documentos/informes-financieros/estados-financieros-2023-2024.pdf",
    bytes: 497419,
    legacyPath: `${uploads}/2025/05/NOTAS-ESTADOS-FINANCIEROS-CELM-SAS-2024-2023-OK.pdf`,
  },
  {
    category: "informes-financieros",
    title: "Estados Financieros Comparativos Periodo (2022-2023)",
    period: "2022-2023",
    href: "/documentos/informes-financieros/estados-financieros-2022-2023.pdf",
    bytes: 759836,
    legacyPath: `${uploads}/2024/11/NOTAS-ESTADOS-FINANCIEROS-CLEM-SAS-2023-2022-DECLARACION-DE-RENTA-MAYO-17-DE-2024.pdf`,
  },
  {
    category: "informes-financieros",
    title: "Estados Financieros Comparativos Periodo (2022-2021)",
    period: "2022-2021",
    href: "/documentos/informes-financieros/estados-financieros-2021-2022.pdf",
    bytes: 539042,
    legacyPath: `${uploads}/2024/11/NOTAS-ESTADOS-FINANCIEROS-EVALUAMOS-2022-2021.pdf`,
  },
  {
    category: "informes-financieros",
    title: "Estados Financieros Comparativos Periodo (2021-2020)",
    period: "2021-2020",
    href: "/documentos/informes-financieros/estados-financieros-2020-2021.pdf",
    bytes: 718852,
    legacyPath: `${uploads}/2024/11/ESTADO-DE-CAMBIOS-EN-EL-PATRIMONIO-2021-2020-1.pdf`,
  },
  {
    category: "informes-financieros",
    title: "Estados Financieros Comparativos Periodo (2020-2019)",
    period: "2020-2019",
    href: "/documentos/informes-financieros/estados-financieros-2019-2020.pdf",
    bytes: 9903699,
    legacyPath: `${uploads}/2024/11/NOTAS-A-LOS-ESTADOS-FINANCIEROS-2020-2019.pdf`,
  },
  {
    category: "informes-financieros",
    title: "Estados Financieros Comparativos Periodo (2019-2018)",
    period: "2019-2018",
    href: "/documentos/informes-financieros/estados-financieros-2018-2019.pdf",
    bytes: 587834,
    legacyPath: `${uploads}/2024/11/NOTAS-ESTADOS-FINANCIEROS-EVALUAMOS-2019-2018.pdf`,
  },
  {
    category: "informes-financieros",
    title: "Estados Financieros Comparativos Periodo (2018-2017)",
    period: "2018-2017",
    href: "/documentos/informes-financieros/estados-financieros-2017-2018.pdf",
    bytes: 646356,
    legacyPath: `${uploads}/2024/11/ESTADOS-FINANCIEROS-COMPARATIVOS-EVALUAMOS-2018-2017.pdf`,
  },
  {
    category: "informes-financieros",
    title: "Estados Financieros Comparativos Periodo (2017-2016)",
    period: "2017-2016",
    href: "/documentos/informes-financieros/estados-financieros-2016-2017.pdf",
    bytes: 748531,
    legacyPath: `${uploads}/2024/11/ESTADOS-FINANCIEROS-COMPARATIVOS-EVALUAMOS-2017-2016.pdf`,
  },
  {
    category: "informes-financieros",
    title: "Estados Financieros Comparativos Periodo (2016-2015)",
    period: "2016-2015",
    href: "/documentos/informes-financieros/estados-financieros-2015-2016.pdf",
    bytes: 750404,
    legacyPath: `${uploads}/2024/11/ESTADOS-FINANCIEROS-COMPARATIVOS-EVALUAMOS-2016-2015.pdf`,
  },
  {
    category: "informes-financieros",
    title: "Estados Financieros Comparativos Periodo (2015-2014)",
    period: "2015-2014",
    href: "/documentos/informes-financieros/estados-financieros-2014-2015.pdf",
    bytes: 397513,
    legacyPath: `${uploads}/2024/11/estado-de-resultados-2015-2014-compilado.pdf`,
  },
  {
    category: "informes-financieros",
    title: "Estados Financieros Comparativos Periodo (2014-2013)",
    period: "2014-2013",
    href: "/documentos/informes-financieros/estados-financieros-2013-2014.pdf",
    bytes: 326556,
    legacyPath: `${uploads}/2024/11/ESTADO-DE-CAMBIO-DE-PATRIMONIO-2014-2013-compilado.pdf`,
  },
  {
    category: "reportes-de-area",
    title: "Reporte del área seguridad y salud en el trabajo",
    href: "/documentos/reportes-de-area/reporte-seguridad-y-salud-en-el-trabajo.pdf",
    bytes: 499172,
    legacyPath: `${uploads}/2024/11/REPORTE-DE-SEGURIDAD-Y-SALUD-EN-EL-TRABAJO.pdf`,
  },
  {
    category: "indicadores",
    title: "Reporte Externo de Indicadores de Gestión 2019-I",
    period: "Enero - Junio 2019",
    href: "/documentos/indicadores/indicadores-de-gestion-2019-i.pdf",
    bytes: 189641,
    legacyPath: `${uploads}/2024/11/2019-I.pdf`,
  },
  {
    category: "indicadores",
    title: "Reporte Externo de Indicadores de Gestión 2018-II",
    period: "Julio - Diciembre 2018",
    href: "/documentos/indicadores/indicadores-de-gestion-2018-ii.pdf",
    bytes: 191732,
    legacyPath: `${uploads}/2024/11/2018-II-1.pdf`,
  },
  {
    category: "indicadores",
    title: "Reporte Externo de Indicadores de Gestión 2018-I",
    period: "Enero - Junio 2018",
    href: "/documentos/indicadores/indicadores-de-gestion-2018-i.pdf",
    bytes: 188066,
    legacyPath: `${uploads}/2024/11/2018-I.pdf`,
  },
  {
    category: "indicadores",
    title: "Reporte Externo de Indicadores de Gestión 2017-II",
    period: "Julio - Diciembre 2017",
    href: "/documentos/indicadores/indicadores-de-gestion-2017-ii.pdf",
    bytes: 187338,
    legacyPath: `${uploads}/2024/11/2017-II.pdf`,
  },
  {
    category: "indicadores",
    title: "Reporte Externo de Indicadores de Gestión 2017-I",
    period: "Enero - Junio 2017",
    href: "/documentos/indicadores/indicadores-de-gestion-2017-i.pdf",
    bytes: 82206,
    legacyPath: `${uploads}/2024/11/Consolidado-Enero-junio.pdf`,
  },
];
