import tailwindPresetMantine from "tailwind-preset-mantine";
/** @type {import('tailwindcss').Config} */
export default {
  presets: [tailwindPresetMantine],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color": "#024059",
        "main-color-light": "#0e5876",
        "tw-body": "#f8f9fa",
      },
      spacing: {
        drawer: "280px", // Adds a custom spacing size for width, height, margin, padding, etc.
      },
    },
  },
  plugins: [],
};
