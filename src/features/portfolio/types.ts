export type ImageRef = { src: string; alt: string };

/** Photo card of the "Nuestros servicios" grid: the title is the only copy. */
export type PortfolioServiceCard = {
  title: string;
  href: string;
  image: ImageRef;
};

/** Numbered card of the "Nuestros servicios" strip (01–05). */
export type PortfolioNumberedService = {
  number: string;
  title: string;
  summary: string;
  href: string;
  image: ImageRef;
};

export type PortfolioStory = {
  tag: string;
  title: string;
  description: string;
  href: string;
  image: ImageRef;
};

export type PortfolioQuickLink = {
  label: string;
  href: string;
};

export type PortfolioHeroContent = {
  heading: string;
  description: string;
  cta: PortfolioQuickLink;
  videoSrc: string;
  poster: ImageRef;
};

/** Item of the "Por qué elegirnos" tab. */
export type PortfolioWhyItem = {
  title: string;
  description: string;
  href: string;
};

/** Figure of the "Crecimiento" tab: a caption above the value. */
export type PortfolioGrowthStat = {
  caption: string;
  value: string;
  label?: string;
};

/** Figure of the "Capacidad instalada" tab. */
export type PortfolioCapacityStat = {
  value: string;
  label: string;
};

/** Icon tiles of the "¿Quiénes somos?" section: a label and its link. */
export type PortfolioTile = {
  label: string;
  href: string;
  icon: "shield" | "trending" | "bed";
};

/** Captioned photo without a link, used by "Infraestructura institucional". */
export type PortfolioCaptionedImage = {
  caption: string;
  image: ImageRef;
};

export type PortfolioNavLink = {
  label: string;
  href: string;
  children?: PortfolioNavLink[];
};

/** Column of the "Nuestras especialidades" mega menu. */
export type PortfolioSpecialtyGroup = {
  label: string;
  href?: string;
  items: PortfolioNavLink[];
};

export type BuildingInfo = {
  name: string;
  lot: string;
  builtArea: string;
  details: string;
};

export type CapacityRow = {
  service: string;
  current: number;
  expansion: number;
  projected: number;
};

export type EquipmentItem = {
  name: string;
  description: string;
  confirmed: boolean;
};
