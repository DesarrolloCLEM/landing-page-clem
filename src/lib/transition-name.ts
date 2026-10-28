/**
 * Name shared by a service image in a card and in its detail page, so the browser can morph
 * one into the other. Derived from the service URL: "/servicios/urologia/" -> "svc-servicios-urologia".
 */
export function transitionName(href: string) {
  return `svc-${href.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "")}`;
}
