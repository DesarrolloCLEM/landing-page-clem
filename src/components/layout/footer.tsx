import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import { ExternalLink, SocialIcon } from "@/components/ui";
import { footerLegalNav, footerNav } from "@/config/navigation";
import { contact, siteConfig, socialLinks, visitingHours } from "@/config/site";

import { Container } from "./container";
import { SiteLogo } from "./site-logo";

// The year is read once per cache lifetime instead of on every prerender,
// which Cache Components requires for `new Date()`.
async function getCurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

const linkClassName = "rounded-sm text-brand-100 transition-colors hover:text-white";

function FooterHeading({ id, children }: { id: string; children: string }) {
  return (
    <h2 id={id} className="font-heading text-base font-bold text-white">
      {children}
    </h2>
  );
}

export async function Footer() {
  const year = await getCurrentYear();

  return (
    <footer className="bg-navy text-brand-100">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <SiteLogo inverted />
          <p className="font-heading text-lg font-bold text-white">{siteConfig.tagline}</p>
          <ul className="flex gap-2" aria-label="Redes sociales">
            {socialLinks.map((social) => (
              <li key={social.network}>
                <ExternalLink
                  href={social.href}
                  newTabLabel=""
                  aria-label={`${social.label} (abre en una pestaña nueva)`}
                  className="inline-flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                >
                  <SocialIcon network={social.network} />
                </ExternalLink>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-labelledby="footer-menu" className="flex flex-col gap-4">
          <FooterHeading id="footer-menu">Menú</FooterHeading>
          <ul className="flex flex-col gap-2">
            {footerNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClassName}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <section aria-labelledby="footer-contact" className="flex flex-col gap-4">
          <FooterHeading id="footer-contact">Contáctanos</FooterHeading>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <a
                href={contact.phone.href}
                className={`${linkClassName} inline-flex items-center gap-2`}
              >
                <Phone aria-hidden="true" className="size-4 shrink-0" />
                PBX {contact.phone.label}
              </a>
            </li>
            <li>
              <a
                href={contact.email.href}
                className={`${linkClassName} inline-flex items-center gap-2`}
              >
                <Mail aria-hidden="true" className="size-4 shrink-0" />
                {contact.email.label}
              </a>
            </li>
            <li>
              <ExternalLink
                href={contact.mapsUrl}
                className={`${linkClassName} inline-flex items-start gap-2`}
              >
                <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
                <span>
                  {contact.address.street}, {contact.address.neighborhood}
                  <br />
                  {contact.address.city} – {contact.address.region}
                </span>
              </ExternalLink>
            </li>
          </ul>
        </section>

        <section aria-labelledby="footer-hours" className="flex flex-col gap-4">
          <FooterHeading id="footer-hours">Horarios de visita</FooterHeading>
          <dl className="flex flex-col gap-3 text-sm">
            {visitingHours.map((item) => (
              <div key={item.label} className="flex gap-2">
                <Clock aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
                <div>
                  <dt className="font-semibold text-white">{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </section>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-4 py-6 pb-24 text-sm sm:pb-6 lg:flex-row lg:items-center lg:justify-between">
          <p>
            © {year} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <nav aria-label="Enlaces legales">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {footerLegalNav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClassName}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </div>
    </footer>
  );
}
