"use client";

import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

import { buttonVariants, ExternalLink, SocialIcon } from "@/components/ui";
import type { NavItem, NavLink } from "@/config/navigation";
import { appointmentLink } from "@/config/navigation";
import { contact, socialLinks } from "@/config/site";
import { cn } from "@/lib/cn";
import { isActivePath } from "@/lib/is-active-path";

// Client island: opening the modal <dialog> (focus trap, Escape, focus return)
// and closing it after client-side navigation need browser APIs.

const rowClassName =
  "flex min-h-12 w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-left font-heading font-bold text-navy hover:bg-brand-50";

function MobileLink({
  link,
  pathname,
  nested = false,
}: {
  link: NavLink;
  pathname: string;
  nested?: boolean;
}) {
  const className = cn(rowClassName, nested && "font-body font-semibold text-ink");

  if (link.external) {
    return (
      <ExternalLink href={link.href} className={className}>
        {link.label}
      </ExternalLink>
    );
  }

  const isCurrent = pathname === link.href;
  return (
    <Link
      href={link.href}
      aria-current={isCurrent ? "page" : undefined}
      className={cn(className, isCurrent && "bg-brand-50 text-primary")}
    >
      {link.label}
    </Link>
  );
}

export function MobileNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Close the menu when a link navigates to another page.
  useEffect(() => {
    dialogRef.current?.close();
  }, [pathname]);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        aria-haspopup="dialog"
        aria-controls="mobile-nav"
        onClick={() => dialogRef.current?.showModal()}
        className="inline-flex size-11 items-center justify-center rounded-full text-navy hover:bg-brand-50"
      >
        <Menu aria-hidden="true" className="size-6" />
        <span className="sr-only">Abrir menú</span>
      </button>

      <dialog
        ref={dialogRef}
        id="mobile-nav"
        aria-label="Menú principal"
        className="m-0 ms-auto h-dvh max-h-none w-full max-w-sm bg-white p-0 shadow-card-hover backdrop:bg-navy/50"
        onClick={(event) => {
          // A click on the backdrop targets the dialog itself.
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <p className="font-heading text-lg font-extrabold text-navy">Menú</p>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="inline-flex size-11 items-center justify-center rounded-full text-navy hover:bg-brand-50"
            >
              <X aria-hidden="true" className="size-6" />
              <span className="sr-only">Cerrar menú</span>
            </button>
          </div>

          <nav aria-label="Menú principal" className="flex-1 overflow-y-auto px-2 py-3">
            <ul className="flex flex-col gap-0.5">
              {items.map((item) => (
                <li key={item.href}>
                  {item.children ? (
                    <details
                      className="group"
                      open={isActivePath(pathname, item.href) || undefined}
                    >
                      <summary
                        className={cn(
                          rowClassName,
                          "cursor-pointer list-none [&::-webkit-details-marker]:hidden",
                        )}
                      >
                        {item.label}
                        <ChevronDown
                          aria-hidden="true"
                          className="size-5 transition-transform group-open:rotate-180"
                        />
                      </summary>
                      <ul className="ms-3 flex flex-col gap-0.5 border-s border-border ps-2 pb-2">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <MobileLink link={child} pathname={pathname} nested />
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <MobileLink link={item} pathname={pathname} />
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-4 border-t border-border p-4">
            <Link href={appointmentLink.href} className={cn(buttonVariants(), "w-full")}>
              {appointmentLink.label}
            </Link>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href={contact.phone.href}
                className="inline-flex min-h-11 items-center gap-2 font-semibold text-ink"
              >
                <Phone aria-hidden="true" className="size-4 text-primary" />
                {contact.phone.label}
              </a>
              <a
                href={contact.email.href}
                className="inline-flex min-h-11 items-center gap-2 font-semibold text-ink"
              >
                <Mail aria-hidden="true" className="size-4 text-primary" />
                {contact.email.label}
              </a>
              <ExternalLink
                href={contact.whatsappAppointments.href}
                className="inline-flex min-h-11 items-center gap-2 font-semibold text-ink"
              >
                <SocialIcon network="whatsapp" className="size-4 text-health-strong" />
                WhatsApp {contact.whatsappAppointments.label}
              </ExternalLink>
            </div>
            <ul className="flex gap-2">
              {socialLinks.map((social) => (
                <li key={social.network}>
                  <ExternalLink
                    href={social.href}
                    newTabLabel=""
                    aria-label={`${social.label} (abre en una pestaña nueva)`}
                    className="inline-flex size-11 items-center justify-center rounded-full bg-brand-50 text-primary hover:bg-brand-100"
                  >
                    <SocialIcon network={social.network} />
                  </ExternalLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </dialog>
    </div>
  );
}
