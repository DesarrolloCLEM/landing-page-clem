"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/cn";

import {
  portfolioMainNav,
  portfolioSpecialtyGroups,
  portfolioStandaloneSpecialties,
} from "../data/portfolio-nav";

// Client island: the mega menu needs aria-expanded, Escape and click-outside handling,
// which hover/focus-within CSS alone cannot provide accessibly.

const topLinkClassName =
  "inline-flex min-h-11 items-center gap-1 rounded-full px-3 font-heading text-[0.95rem] font-bold text-navy transition-colors hover:bg-brand-50 hover:text-primary";

const itemClassName =
  "block rounded-md px-2 py-1.5 text-sm text-ink transition-colors hover:bg-brand-50 hover:text-primary";

const PANEL_ID = "portfolio-specialties-panel";

export function PortfolioNavMenu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function onPointerDown(event: PointerEvent) {
      if (!navRef.current?.contains(event.target as Node)) setIsOpen(false);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      buttonRef.current?.focus();
      setIsOpen(false);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  const renderLink = (item: { label: string; href: string }) => (
    <Link href={item.href} className={itemClassName} onClick={close}>
      {item.label}
    </Link>
  );

  return (
    <nav ref={navRef} aria-label="Menú del portafolio" className="relative hidden xl:block">
      <ul className="flex items-center gap-0.5">
        {portfolioMainNav.slice(0, 3).map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={topLinkClassName}
            >
              {item.label}
            </Link>
          </li>
        ))}

        <li onMouseEnter={() => setIsOpen(true)} onMouseLeave={close}>
          <button
            ref={buttonRef}
            type="button"
            aria-expanded={isOpen}
            aria-controls={PANEL_ID}
            onClick={() => setIsOpen(!isOpen)}
            className={topLinkClassName}
          >
            Nuestras especialidades
            <ChevronDown
              aria-hidden="true"
              className={cn("size-4 transition-transform", isOpen && "rotate-180")}
            />
          </button>
        </li>

        {portfolioMainNav.slice(3).map((item) => (
          <li key={item.href}>
            <Link href={item.href} className={topLinkClassName}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <div
        id={PANEL_ID}
        hidden={!isOpen}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={close}
        className="absolute top-full left-1/2 z-50 -translate-x-1/2 pt-2"
      >
        <div className="max-h-[70vh] w-[min(64rem,calc(100vw-3rem))] overflow-y-auto rounded-card border border-border bg-white p-6 shadow-card-hover">
          <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {portfolioSpecialtyGroups.map((group) => (
              <li key={group.label}>
                {group.href ? (
                  <Link
                    href={group.href}
                    onClick={close}
                    className="block rounded-md px-2 py-1 font-heading text-sm font-bold text-navy transition-colors hover:text-primary"
                  >
                    {group.label}
                  </Link>
                ) : (
                  <p className="px-2 py-1 font-heading text-sm font-bold text-navy">
                    {group.label}
                  </p>
                )}
                <ul className="mt-1 flex flex-col">
                  {group.items.map((item) => (
                    <li key={item.label}>
                      {renderLink(item)}
                      {item.children && (
                        <ul className="ms-2 flex flex-col border-s border-border ps-2">
                          {item.children.map((child) => (
                            <li key={child.label}>{renderLink(child)}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t border-border pt-5">
            <p className="px-2 font-heading text-sm font-bold text-navy">Otras especialidades</p>
            <ul className="mt-1 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
              {portfolioStandaloneSpecialties.map((item) => (
                <li key={item.label}>
                  {renderLink(item)}
                  {item.children && (
                    <ul className="ms-2 flex flex-col border-s border-border ps-2">
                      {item.children.map((child) => (
                        <li key={child.label}>{renderLink(child)}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
