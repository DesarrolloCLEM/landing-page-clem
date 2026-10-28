"use client";

import { useEffect } from "react";

// Client island: opening the <details> targeted by the URL hash needs the browser location.
// The disclosure itself works without JavaScript.

/** Opens and scrolls to the <details> whose id matches the URL hash, on load and on hash changes. */
export function DetailsHashOpener() {
  useEffect(() => {
    function openFromHash() {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (!id) return;
      const target = document.getElementById(id);
      if (target instanceof HTMLDetailsElement) {
        target.open = true;
        target.scrollIntoView({ block: "start" });
        target.querySelector("summary")?.focus({ preventScroll: true });
      }
    }
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  return null;
}
