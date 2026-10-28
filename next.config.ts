import type { NextConfig } from "next";

import { legacyRedirects } from "./src/config/redirects";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  // The legacy WordPress URLs end with a slash; keep the same format.
  trailingSlash: true,
  partialPrefetching: true,
  // Legacy URLs answer with 301 (not 308) so search engines and old clients treat them as moved.
  async redirects() {
    return legacyRedirects.map(({ source, destination }) => ({
      source,
      destination,
      statusCode: 301,
    }));
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
