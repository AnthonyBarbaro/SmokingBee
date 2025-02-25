/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // ✅ Scans all Next.js App Router files
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}" // ✅ Scans all React components
  ],
  theme: {
    extend: {
      colors: {
        gold: "#FFD700",
        dark: "#333333"
      }
    }
  },
  plugins: [],
};
