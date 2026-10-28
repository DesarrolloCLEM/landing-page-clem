// Shared look for native form controls (Input, Textarea, Select).
// Controls are always white, so they use fixed ink colors.
export const formControlClassName =
  "block min-h-11 w-full rounded-xl border border-border-strong bg-white px-4 py-2 text-base text-ink transition-colors placeholder:text-ink-muted hover:border-primary focus-visible:border-primary focus-visible:outline-offset-0 disabled:cursor-not-allowed disabled:bg-surface disabled:opacity-60 aria-invalid:border-emergency-strong aria-invalid:outline-emergency-strong";
