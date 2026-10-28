"use client";

import { ArrowRight, Search } from "lucide-react";
import Link from "next/link";
import { useId, useState } from "react";

import { Heading } from "@/components/ui";

import type { CatalogGroup } from "../data/catalog";

// Client island: filters the catalog while the visitor types. The server renders the
// full list (empty query), so without JavaScript every service is still visible.

const normalize = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

export type ServiceSearchProps = {
  groups: CatalogGroup[];
  label: string;
  placeholder: string;
  emptyMessage: string;
  emptyAction: { label: string; href: string };
};

export function ServiceSearch({
  groups,
  label,
  placeholder,
  emptyMessage,
  emptyAction,
}: ServiceSearchProps) {
  const [query, setQuery] = useState("");
  const inputId = useId();
  const term = normalize(query);

  const filtered = groups
    .map((group) => ({
      ...group,
      items: term
        ? group.items.filter((item) => normalize(item.title).includes(term))
        : group.items,
    }))
    .filter((group) => group.items.length > 0);
  const total = filtered.reduce((sum, group) => sum + group.items.length, 0);

  return (
    <div className="flex flex-col gap-10">
      <div role="search" className="flex max-w-xl flex-col gap-2">
        <label htmlFor={inputId} className="font-heading text-sm font-bold text-foreground">
          {label}
        </label>
        <div className="relative">
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-ink-muted"
          />
          <input
            id={inputId}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={placeholder}
            autoComplete="off"
            className="block min-h-12 w-full rounded-full border border-border-strong bg-white py-2 ps-12 pe-4 text-base text-ink placeholder:text-ink-muted hover:border-primary focus-visible:border-primary"
          />
        </div>
        <p aria-live="polite" className="text-sm text-muted">
          {term ? `${total} ${total === 1 ? "resultado" : "resultados"}` : ""}
        </p>
      </div>

      {total === 0 ? (
        <div className="flex flex-col items-start gap-3 rounded-card border border-border bg-white p-6 text-ink">
          <p className="font-semibold">{emptyMessage}</p>
          <Link
            href={emptyAction.href}
            className="font-semibold text-primary underline underline-offset-4"
          >
            {emptyAction.label}
          </Link>
        </div>
      ) : (
        filtered.map((group) => (
          <section
            key={group.id}
            id={group.id}
            aria-labelledby={`${group.id}-title`}
            className="flex scroll-mt-28 flex-col gap-5"
          >
            <Heading as="h2" id={`${group.id}-title`} size="md">
              {group.title}
            </Heading>
            {group.description && !term && (
              <p className="max-w-3xl text-muted">{group.description}</p>
            )}
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex h-full flex-col gap-2 rounded-card border border-border bg-white p-5 text-ink shadow-card transition-shadow hover:shadow-card-hover"
                  >
                    <span className="flex items-center justify-between gap-2 font-heading text-lg font-bold text-navy">
                      {item.title}
                      <ArrowRight
                        aria-hidden="true"
                        className="size-4 shrink-0 text-primary transition-transform group-hover:translate-x-0.5"
                      />
                    </span>
                    <span className="line-clamp-3 text-sm leading-relaxed text-ink-muted">
                      {item.summary}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))
      )}
    </div>
  );
}
