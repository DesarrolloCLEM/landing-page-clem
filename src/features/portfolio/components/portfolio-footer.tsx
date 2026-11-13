import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout";
import { ExternalLink, SocialIcon } from "@/components/ui";
import { contact, siteConfig, socialLinks } from "@/config/site";

import { portfolioFooterNav } from "../data/portfolio-nav";

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

export async function PortfolioFooter() {
  const year = await getCurrentYear();

  return (
    <footer className="bg-navy text-brand-100">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <nav aria-labelledby="portfolio-footer-menu" className="flex flex-col gap-4">
          <FooterHeading id="portfolio-footer-menu">Menú</FooterHeading>
          <ul className="flex flex-col gap-2 text-sm">
            {portfolioFooterNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClassName}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <section aria-labelledby="portfolio-footer-contact" className="flex flex-col gap-4">
          <FooterHeading id="portfolio-footer-contact">Contáctanos</FooterHeading>
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

        <section aria-labelledby="portfolio-footer-social" className="flex flex-col gap-4">
          <FooterHeading id="portfolio-footer-social">Síguenos</FooterHeading>
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
          <p className="font-heading text-lg font-bold text-white">{siteConfig.tagline}</p>
        </section>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-6 text-sm">
          <p>
            {siteConfig.name} © {year}.
          </p>
        </Container>
      </div>
    </footer>
  );
}
