import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const config = [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "next-env.d.ts",
      // Vendored template assets and the Bootstrap SCSS sources — not app code.
      "public/**",
      "scss/**",
    ],
  },
  js.configs.recommended,
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // The template is a faithful port of static Bootstrap markup, which uses
      // plain <img> tags so the existing CSS (absolute offsets, rounded
      // borders, carousel sizing) keeps working unchanged.
      "@next/next/no-img-element": "off",
      // Both of these assume the Pages Router. In the App Router the root
      // layout's <head> is the correct and only place to declare the global
      // stylesheet stack and the webfont preload hints.
      "@next/next/no-css-tags": "off",
      "@next/next/no-page-custom-font": "off",
    },
  },
];

export default config;
