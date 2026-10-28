"use client";

import { useEffect, useRef, useState } from "react";

// Client island: counting needs timing and knowing when the figure becomes visible, which CSS
// cannot do with numbers. The final value is always in the server HTML and in the accessible
// text, so without JavaScript (or with reduced motion) the figure is simply the final value.

const DURATION_MS = 1400;
const format = new Intl.NumberFormat("es-CO");

/** Splits "+15", "7.764 m²" or "10.000+" into prefix, integer and suffix. */
function parseValue(value: string) {
  const match = value.match(/^(\D*?)(\d{1,3}(?:\.\d{3})+|\d+)(\D*)$/);
  if (!match) return null;
  return { prefix: match[1], target: Number(match[2].replaceAll(".", "")), suffix: match[3] };
}

export function CountUp({ value }: { value: string }) {
  const parsed = parseValue(value);
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const node = ref.current;
    if (!node || !parsed || parsed.target === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const { prefix, target, suffix } = parsed;
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / DURATION_MS, 1);
        // Ease-out: fast at the beginning, calm at the end.
        const current = Math.round(target * (1 - (1 - progress) ** 3));
        setDisplay(`${prefix}${format.format(current)}${suffix}`);
        if (progress < 1) frame = requestAnimationFrame(tick);
        else setDisplay(value);
      };
      frame = requestAnimationFrame(tick);
    });
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
    // `parsed` derives from `value`.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <>
      <span ref={ref} aria-hidden="true">
        {display}
      </span>
      <span className="sr-only">{value}</span>
    </>
  );
}
