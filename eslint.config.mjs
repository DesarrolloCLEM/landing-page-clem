import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";
import boundaries from "eslint-plugin-boundaries";

// Architecture layers: app -> features -> components -> config/lib.
// See openspec/specs/code-architecture and .claude/skills/project-architecture.
const architecture = {
  files: ["src/**/*.{ts,tsx}"],
  plugins: { boundaries },
  settings: {
    "import/resolver": {
      typescript: { alwaysTryTypes: true, project: "./tsconfig.json" },
    },
    "boundaries/legacy-templates": false,
    "boundaries/elements": [
      { type: "app", pattern: "src/app" },
      { type: "feature", pattern: "src/features/*", capture: ["featureName"] },
      { type: "component", pattern: "src/components/*", capture: ["family"] },
      { type: "config", pattern: "src/config" },
      { type: "lib", pattern: "src/lib" },
    ],
  },
  rules: {
    "boundaries/no-unknown-files": "error",
    "boundaries/dependencies": [
      "error",
      {
        default: "disallow",
        message:
          "Arquitectura: '{{from.element.types.[0]}}' no puede importar '{{dependency.source}}'. Revisa la skill project-architecture.",
        policies: [
          { allow: { to: { module: { origin: { anyOf: ["external", "core"] } } } } },
          { allow: { dependency: { relationship: { to: "internal" } } } },
          {
            from: { element: { type: "app" } },
            allow: { to: { element: { types: { anyOf: ["component", "config", "lib"] } } } },
          },
          {
            from: { element: { type: "app" } },
            allow: { to: { element: { type: "feature", fileInternalPath: "index.ts" } } },
          },
          {
            from: { element: { type: "app" } },
            disallow: { to: { element: { type: "feature", fileInternalPath: "!index.ts" } } },
            message:
              "Importa la feature '{{to.element.captured.featureName}}' desde su API pública: '@/features/{{to.element.captured.featureName}}'.",
          },
          {
            from: { element: { type: "feature" } },
            allow: { to: { element: { types: { anyOf: ["component", "config", "lib"] } } } },
          },
          {
            from: { element: { type: "feature" } },
            disallow: { to: { element: { type: "feature" } } },
            message:
              "La feature '{{from.element.captured.featureName}}' no puede importar la feature '{{to.element.captured.featureName}}'. Mueve el código compartido a components, config o lib.",
          },
          {
            from: { element: { type: "component" } },
            allow: { to: { element: { types: { anyOf: ["component", "config", "lib"] } } } },
          },
          {
            from: { element: { types: { anyOf: ["config", "lib"] } } },
            allow: { to: { element: { type: "lib" } } },
          },
        ],
      },
    ],
  },
};

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  architecture,
  prettier,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
