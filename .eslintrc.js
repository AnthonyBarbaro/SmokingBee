// .eslintrc.js
/** @type {import("eslint").Linter.Config} */
module.exports = {
    extends: [
      "next/core-web-vitals",
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
    ],
    parserOptions: {
      project: "./tsconfig.json",
    },
    rules: {
      "react/prop-types": "off",
    },
  };
  