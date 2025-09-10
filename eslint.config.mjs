import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      "node_modules/**",
      "ignoreFile.js",
      ".next",
      ".open-next",
      ".wrangler",
      ".dev.vars",
      "cloudflare-env.d.ts",
      "eslint.config.mjs",
      "next.config.ts",
      "open-next.config.ts",
      "next-env.d.ts",
      "wrangler.jsonc",
    ],
  },
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "plugin:prettier/recommended"],
    plugins: ["prettier"],
    rules: {
      "prettier/prettier": "error",
    },
  }),
];

export default eslintConfig;
