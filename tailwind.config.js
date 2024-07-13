/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#b3db21",
        primaryHover: "#8aa32e",
        secondary: "#db9121",
      },
      fontFamily: {
        gothic: ['"Century Gothic"', "sans-serif"], // Add Century Gothic here
      },
    },
  },
  plugins: [],
};
