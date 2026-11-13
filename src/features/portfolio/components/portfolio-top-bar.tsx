import { Globe, MapPin, Phone } from "lucide-react";

import { ExternalLink } from "@/components/ui";
import { Container } from "@/components/layout";
import { contact, siteConfig } from "@/config/site";

const linkClassName =
  "inline-flex items-center gap-2 rounded-sm text-brand-100 transition-colors hover:text-white";

/** Contact strip above the portfolio header. Desktop only, like the public site. */
export function PortfolioTopBar() {
  return (
    <div className="hidden bg-navy text-sm lg:block">
      <Container className="flex h-10 items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <ExternalLink href={siteConfig.url} newTabLabel="" className={linkClassName}>
            <Globe aria-hidden="true" className="size-4" />
            ClinicaLaEsperanza.co
          </ExternalLink>
          <a href={contact.phone.href} className={linkClassName}>
            <Phone aria-hidden="true" className="size-4" />
            <span className="sr-only">Teléfono:</span>
            {contact.phone.label}
          </a>
        </div>
        <ExternalLink href={contact.mapsUrl} className={linkClassName}>
          <MapPin aria-hidden="true" className="size-4" />
          {contact.address.full}
        </ExternalLink>
      </Container>
    </div>
  );
}
