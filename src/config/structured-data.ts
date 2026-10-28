import { contact, siteConfig, socialLinks } from "./site";

// schema.org entity of the clinic, used on the home page and /contacto/.
export const clinicStructuredData = {
  "@context": "https://schema.org",
  "@type": "Hospital",
  name: siteConfig.name,
  alternateName: siteConfig.legalName,
  slogan: siteConfig.tagline,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/brand/logo-horizontal.png`,
  image: `${siteConfig.url}/images/og/clinica-la-esperanza.jpg`,
  telephone: contact.phone.e164,
  email: contact.email.label,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${contact.address.street}, ${contact.address.neighborhood}`,
    addressLocality: contact.address.city,
    addressRegion: contact.address.region,
    addressCountry: contact.address.countryCode,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: contact.geo.latitude,
    longitude: contact.geo.longitude,
  },
  hasMap: contact.mapsUrl,
  // Emergency care is available around the clock.
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  medicalSpecialty: ["Emergency", "Surgical", "Pediatric", "Obstetric", "Gynecologic"],
  sameAs: socialLinks.map((social) => social.href),
} as const;
