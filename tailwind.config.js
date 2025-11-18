/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // scan all React files
  ],
  theme: {
    extend: {
      fontFamily: {
        soleil: ["Soleil", "sans-serif"],
        acumin: ["AcuminPro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
