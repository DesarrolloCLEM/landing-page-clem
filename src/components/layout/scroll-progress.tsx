/**
 * Thin reading-progress bar. Pure CSS (see `.motion-progress` in globals.css): it stays at
 * scaleX(0) on pages that do not scroll, so it only shows up on long pages. Decorative.
 */
export function ScrollProgress() {
  return (
    <div
      aria-hidden="true"
      className="motion-progress absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-primary"
    />
  );
}
