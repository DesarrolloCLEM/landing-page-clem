// Verifies the legacy URL map against a running production build.
//
//   pnpm build && pnpm start      # in another terminal
//   node scripts/check-redirects.mjs [baseUrl]
//
// Every 301 redirect of .next/routes-manifest.json (src/config/redirects.ts) must answer 301,
// point to its destination and that destination must answer 200 without another redirect.
// Retired pages of the legacy theme must answer 404.
import { readFileSync } from "node:fs";

const base = process.argv[2] ?? "http://localhost:3000";

const retired = [
  "/team/anna-show/",
  "/team_group/doctors/",
  "/layouts/panel-bar-1/",
  "/services_group/clinica/",
  "/testimonials_group/patients/",
  "/tag/body/",
  "/services/page/2/",
  "/hospital/",
  "/p-tab-1/",
  "/p-demo/",
  "/shop/",
];

const manifest = JSON.parse(
  readFileSync(new URL("../.next/routes-manifest.json", import.meta.url), "utf8"),
);
const redirects = manifest.redirects.filter((redirect) => redirect.statusCode === 301);

const failures = [];
const request = (path) => fetch(new URL(path, base), { redirect: "manual" });

for (const { source, destination } of redirects) {
  // Legacy page URLs end with a slash; documents keep their extension.
  const legacyUrl = /\.\w+$/.test(source) ? source : `${source}/`;
  const response = await request(legacyUrl);
  const location = response.headers.get("location");
  if (response.status !== 301 || location !== destination) {
    failures.push(
      `${legacyUrl}: ${response.status} -> ${location} (esperado 301 -> ${destination})`,
    );
    continue;
  }
  const target = await request(destination);
  if (target.status !== 200)
    failures.push(`${legacyUrl} -> ${destination}: el destino responde ${target.status}`);
}

for (const path of retired) {
  const response = await request(path);
  if (response.status !== 404) failures.push(`${path}: responde ${response.status} (esperado 404)`);
}

console.log(`${redirects.length} redirecciones y ${retired.length} páginas retiradas revisadas.`);
if (failures.length > 0) {
  console.error(
    `${failures.length} errores:\n${failures.map((failure) => `  - ${failure}`).join("\n")}`,
  );
  process.exit(1);
}
console.log("Todo correcto.");
