"use client";

import {
  type KeyboardEvent,
  type ReactNode,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

import { cn } from "@/lib/cn";

// Client island: the tab pattern needs selection state and arrow-key navigation.
// Before hydration (or without JavaScript) every panel is visible and the tab list is hidden.

export type TabItem = { id: string; label: string; content: ReactNode };

export type TabsProps = {
  items: TabItem[];
  /** Accessible name of the tab list. */
  label: string;
  className?: string;
};

const subscribe = () => () => {};

export function Tabs({ items, label, className }: TabsProps) {
  const isClient = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
  const [selected, setSelected] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    const last = items.length - 1;
    const next =
      event.key === "ArrowRight"
        ? selected === last
          ? 0
          : selected + 1
        : event.key === "ArrowLeft"
          ? selected === 0
            ? last
            : selected - 1
          : event.key === "Home"
            ? 0
            : event.key === "End"
              ? last
              : null;
    if (next === null) return;
    event.preventDefault();
    setSelected(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {isClient && (
        <div
          role="tablist"
          aria-label={label}
          className="inline-flex self-start rounded-full bg-surface p-1"
        >
          {items.map((item, index) => {
            const isSelected = index === selected;
            return (
              <button
                key={item.id}
                ref={(node) => {
                  tabRefs.current[index] = node;
                }}
                type="button"
                role="tab"
                id={`${baseId}-tab-${item.id}`}
                aria-selected={isSelected}
                aria-controls={`${baseId}-panel-${item.id}`}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => setSelected(index)}
                onKeyDown={onKeyDown}
                className={cn(
                  "min-h-11 rounded-full px-6 font-heading font-bold transition-colors",
                  isSelected
                    ? "bg-primary text-white shadow-card"
                    : "text-ink-muted hover:text-primary",
                )}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}
      {items.map((item, index) => (
        <div
          key={item.id}
          id={`${baseId}-panel-${item.id}`}
          role={isClient ? "tabpanel" : undefined}
          aria-labelledby={isClient ? `${baseId}-tab-${item.id}` : undefined}
          hidden={isClient && index !== selected}
          tabIndex={isClient ? 0 : undefined}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
}
