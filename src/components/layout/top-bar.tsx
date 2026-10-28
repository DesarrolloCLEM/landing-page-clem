import { Mail, MapPin, Phone } from "lucide-react";

import { ExternalLink } from "@/components/ui";
import { contact } from "@/config/site";

import { Container } from "./container";

const linkClassName =
  "inline-flex items-center gap-2 rounded-sm text-brand-100 transition-colors hover:text-white";

/** Contact strip above the header. Desktop only: on mobile the data lives in the menu and footer. */
export function TopBar() {
  return (
    <div className="hidden bg-navy text-sm lg:block">
      <Container className="flex h-10 items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <a href={contact.email.href} className={linkClassName}>
            <Mail aria-hidden="true" className="size-4" />
            {contact.email.label}
          </a>
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
