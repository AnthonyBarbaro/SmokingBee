// .eslintrc.js
module.exports = {
  root: true,
  extends: ["next/core-web-vitals"],
  settings: {
    next: {
      rootDir: ["src/"], 
    },
  },
  rules: {
    "react/no-unescaped-entities": "off",
    "@next/next/no-img-element": "off",
    "@next/next/no-sync-dynamic-apis": "off"
  },
};
