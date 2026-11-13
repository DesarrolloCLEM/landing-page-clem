export type ImageAsset = { src: string; alt: string };

export type ContentItem = {
  title: string;
  description?: string;
  /** Short labels shown under the item (subspecialties, features). */
  tags?: string[];
  href?: string;
  external?: boolean;
};

export type SectionLayout = "cards" | "list" | "checklist" | "stats" | "tags";

export type ContentSection = {
  id: string;
  title: string;
  intro?: string[];
  layout?: SectionLayout;
  items?: ContentItem[];
  outro?: string[];
};

export type Plan = {
  name: string;
  description: string;
  price: string;
  includes: string[];
};

export type RoomFeature = {
  label: string;
  /** One value per room, in the order of `roomOptions`: true, false or a text such as "Amplio". */
  values: (boolean | string)[];
};

export type ServiceKind = "unit" | "hospitalization-option" | "program" | "specialty";

export type SpecialtyArea =
  | "Especialidades clínicas"
  | "Especialidades quirúrgicas"
  | "Materno infantil"
  | "Rehabilitación y apoyo";

export type ServiceEntry = {
  slug: string;
  kind: ServiceKind;
  href: string;
  title: string;
  /** One-line promise shown under the title. */
  tagline?: string;
  /** Card and search summary. */
  summary: string;
  image: ImageAsset;
  intro: string[];
  sections: ContentSection[];
  gallery?: ImageAsset[];
  plans?: Plan[];
  area?: SpecialtyArea;
  /** Hrefs of related services shown at the end of the page. */
  related?: string[];
  /** Highlights the emergency phone line instead of the appointment. */
  emergency?: boolean;
  closing?: { title: string; description: string };
};
