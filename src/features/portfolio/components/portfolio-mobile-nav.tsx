"use client";

import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

import { contact } from "@/config/site";
import { cn } from "@/lib/cn";

import {
  portfolioMainNav,
  portfolioSpecialtyGroups,
  portfolioStandaloneSpecialties,
} from "../data/portfolio-nav";
import type { PortfolioNavLink } from "../types";

// Client island: opening the modal <dialog> (focus trap, Escape, focus return)
// and closing it after client-side navigation need browser APIs.

const rowClassName =
  "flex min-h-12 w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-left font-heading font-bold text-navy hover:bg-brand-50";

const nestedClassName =
  "flex min-h-11 items-center rounded-lg px-3 py-2 text-sm font-semibold text-ink hover:bg-brand-50";

function NestedLinks({ items }: { items: PortfolioNavLink[] }) {
  return (
    <ul className="ms-3 flex flex-col gap-0.5 border-s border-border ps-2 pb-2">
      {items.map((item) => (
        <li key={item.label}>
          <Link href={item.href} className={nestedClassName}>
            {item.label}
          </Link>
          {item.children && <NestedLinks items={item.children} />}
        </li>
      ))}
    </ul>
  );
}

export function PortfolioMobileNav() {
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    dialogRef.current?.close();
  }, [pathname]);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        aria-haspopup="dialog"
        aria-controls="portfolio-mobile-nav"
        onClick={() => dialogRef.current?.showModal()}
        className="inline-flex size-11 items-center justify-center rounded-full text-navy hover:bg-brand-50"
      >
        <Menu aria-hidden="true" className="size-6" />
        <span className="sr-only">Abrir menú</span>
      </button>

      <dialog
        ref={dialogRef}
        id="portfolio-mobile-nav"
        aria-label="Menú del portafolio"
        className="m-0 ms-auto h-dvh max-h-none w-full max-w-sm bg-white p-0 shadow-card-hover backdrop:bg-navy/50"
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <p className="font-heading text-lg font-extrabold text-navy">Portafolio</p>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="inline-flex size-11 items-center justify-center rounded-full text-navy hover:bg-brand-50"
            >
              <X aria-hidden="true" className="size-6" />
              <span className="sr-only">Cerrar menú</span>
            </button>
          </div>

          <nav aria-label="Menú del portafolio" className="flex-1 overflow-y-auto px-2 py-3">
            <ul className="flex flex-col gap-0.5">
              {portfolioMainNav.slice(0, 3).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={rowClassName}>
                    {item.label}
                  </Link>
                </li>
              ))}

              <li>
                <details className="group">
                  <summary
                    className={cn(
                      rowClassName,
                      "cursor-pointer list-none [&::-webkit-details-marker]:hidden",
                    )}
                  >
                    Nuestras especialidades
                    <ChevronDown
                      aria-hidden="true"
                      className="size-5 transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <ul className="flex flex-col gap-0.5 pb-2">
                    {portfolioSpecialtyGroups.map((group) => (
                      <li key={group.label}>
                        <details className="group/sub">
                          <summary
                            className={cn(
                              nestedClassName,
                              "cursor-pointer list-none justify-between font-heading font-bold text-navy [&::-webkit-details-marker]:hidden",
                            )}
                          >
                            {group.label}
                            <ChevronDown
                              aria-hidden="true"
                              className="size-4 transition-transform group-open/sub:rotate-180"
                            />
                          </summary>
                          <NestedLinks items={group.items} />
                        </details>
                      </li>
                    ))}
                    <li>
                      <p className="px-3 pt-3 pb-1 font-heading text-sm font-bold text-navy">
                        Otras especialidades
                      </p>
                      <NestedLinks items={portfolioStandaloneSpecialties} />
                    </li>
                  </ul>
                </details>
              </li>

              {portfolioMainNav.slice(3).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={rowClassName}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-2 border-t border-border p-4 text-sm">
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
          </div>
        </div>
      </dialog>
    </div>
  );
}
