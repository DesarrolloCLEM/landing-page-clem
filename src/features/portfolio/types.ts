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

/* ------------------------------------------------------------------ *
 * Inner pages of the portfolio.
 *
 * Every inner page of the deployed portfolio is a different stack of
 * sections, so a page is described as a list of blocks instead of a fixed
 * template. That keeps the content a 1:1 copy of the live page.
 * ------------------------------------------------------------------ */

export type PortfolioCardItem = {
  title: string;
  body?: string;
  href?: string;
};

export type PortfolioStatItem = {
  value: string;
  title?: string;
  body?: string;
};

/** Specialty group: a title plus the subspecialties listed under it. */
export type PortfolioGroupItem = {
  title: string;
  href?: string;
  body?: string;
  items?: string[];
};

/** Hospitalization option of the "Suite VIP" page. */
export type PortfolioRoomOption = {
  title: string;
  subtitle?: string;
  description: string;
  features: string[];
  image: ImageRef;
  badge?: string;
  cta?: PortfolioQuickLink;
};

export type PortfolioComparisonRow = {
  feature: string;
  values: (boolean | string)[];
};

/** Expandable item: the live pages collapse these long descriptions. */
export type PortfolioAccordionItem = {
  title: string;
  subtitle?: string;
  body: string[];
  items?: string[];
};

export type PortfolioPlan = {
  name: string;
  description: string;
  price: string;
  includes: string[];
};

export type PortfolioBlock =
  /** Full-width photo strip that opens the page. */
  | { kind: "banner"; image: ImageRef }
  | { kind: "intro"; title: string; subtitle?: string; body?: string[] }
  /** Photo beside a block of copy. */
  | {
      kind: "feature";
      title?: string;
      eyebrow?: string;
      body?: string[];
      image?: ImageRef;
      cta?: PortfolioQuickLink;
      reverse?: boolean;
    }
  | { kind: "cards"; title?: string; body?: string; items: PortfolioCardItem[]; cols?: 2 | 3 | 4 }
  | { kind: "bullets"; title?: string; items: string[] }
  | { kind: "stats"; title?: string; items: PortfolioStatItem[] }
  | { kind: "groups"; title?: string; body?: string; items: PortfolioGroupItem[] }
  | { kind: "gallery"; title?: string; body?: string; images: ImageRef[] }
  /** Grid of photo cards whose only copy is the title. */
  | {
      kind: "photoCards";
      title?: string;
      body?: string;
      items: { title: string; body?: string; href?: string; image: ImageRef }[];
      cols?: 2 | 3 | 4;
    }
  | { kind: "rooms"; title?: string; items: PortfolioRoomOption[] }
  | { kind: "accordion"; title?: string; body?: string; items: PortfolioAccordionItem[] }
  | { kind: "plans"; title?: string; items: PortfolioPlan[] }
  | {
      kind: "comparison";
      title?: string;
      /** Header of the first column; "Característica" when omitted. */
      rowHeader?: string;
      columns: string[];
      rows: PortfolioComparisonRow[];
    }
  /** Navy band that closes the page. */
  | { kind: "closing"; title: string; body?: string; cta?: PortfolioQuickLink };

export type PortfolioPageContent = {
  /** Page title used for the document metadata. */
  title: string;
  /** "Volver a servicios" link; the live pages point it at different places. */
  back: PortfolioQuickLink;
  /** Links of the local menu shown above the content. */
  nav?: PortfolioQuickLink[];
  blocks: PortfolioBlock[];
};
