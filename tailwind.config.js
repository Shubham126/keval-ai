/** @type {import('tailwindcss').Config} */
// Tailwind v4 uses CSS-first configuration via @theme in globals.css
// This file is kept minimal for content paths only
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
};
