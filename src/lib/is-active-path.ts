/** Whether a navigation href matches the current path or one of its subpages. */
export function isActivePath(pathname: string, href: string) {
  const path = href.split("#")[0];
  if (!path.startsWith("/")) return false;
  if (path === "/") return pathname === "/";
  return pathname.startsWith(path);
}
