"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { ExternalLink } from "@/components/ui";
import type { NavItem, NavLink } from "@/config/navigation";
import { cn } from "@/lib/cn";
import { isActivePath } from "@/lib/is-active-path";

// Client island: submenus need aria-expanded, Escape and click-outside handling,
// which hover/focus-within CSS alone cannot provide accessibly.

const topLinkClassName =
  "inline-flex min-h-11 items-center gap-1 rounded-full px-3 font-heading text-[0.95rem] font-bold text-navy transition-colors hover:bg-brand-50 hover:text-primary";

function SubmenuLink({
  link,
  pathname,
  onNavigate,
}: {
  link: NavLink;
  pathname: string;
  onNavigate: () => void;
}) {
  const className =
    "block rounded-lg px-3 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-brand-50 hover:text-primary";

  if (link.external) {
    return (
      <ExternalLink href={link.href} className={className} onClick={onNavigate}>
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
      onClick={onNavigate}
    >
      {link.label}
    </Link>
  );
}

export function NavMenu({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (openIndex === null) return;

    function onPointerDown(event: PointerEvent) {
      if (!navRef.current?.contains(event.target as Node)) setOpenIndex(null);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      buttonRefs.current[openIndex ?? -1]?.focus();
      setOpenIndex(null);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [openIndex]);

  const close = () => setOpenIndex(null);

  return (
    <nav ref={navRef} aria-label="Menú principal" className="hidden xl:block">
      <ul className="flex items-center gap-0.5">
        {items.map((item, index) => {
          const isActive = isActivePath(pathname, item.href);

          if (!item.children) {
            const isCurrent = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isCurrent ? "page" : undefined}
                  className={cn(topLinkClassName, isActive && "text-primary")}
                >
                  {item.label}
                </Link>
              </li>
            );
          }

          const isOpen = openIndex === index;
          const panelId = `submenu-${index}`;
          return (
            <li
              key={item.href}
              className="relative"
              onMouseEnter={() => setOpenIndex(index)}
              onMouseLeave={close}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node)) close();
              }}
            >
              <button
                ref={(node) => {
                  buttonRefs.current[index] = node;
                }}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={cn(topLinkClassName, isActive && "text-primary")}
              >
                {item.label}
                <ChevronDown
                  aria-hidden="true"
                  className={cn("size-4 transition-transform", isOpen && "rotate-180")}
                />
              </button>
              <div
                id={panelId}
                hidden={!isOpen}
                className="absolute top-full left-0 z-50 w-72 pt-2"
              >
                <ul className="flex flex-col gap-0.5 rounded-card border border-border bg-white p-2 shadow-card-hover">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <SubmenuLink link={child} pathname={pathname} onNavigate={close} />
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
