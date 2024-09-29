import tailwindPresetMantine from 'tailwind-preset-mantine';
/** @type {import('tailwindcss').Config} */
export default {
  presets : [
    tailwindPresetMantine
  ],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  
}