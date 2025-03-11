import eslint from "@eslint/js";
import next from "@next/eslint-plugin-next";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
export default [
  {
    ignores: ["node_modules/", ".next/", "dist/", "public/"],
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      "@typescript-eslint": ts,
      "@next/next": next,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "@typescript-eslint/no-explicit-any": "off",  // 🔹 Disables 'any' warnings
      "@next/next/no-html-link-for-pages": "off",
    },
  },
];

