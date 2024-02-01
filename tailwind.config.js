/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Merriweather", "serif"],
        secondary: ["Ubuntu", "sans"],
      },
    },
  },
  plugins: [require("daisyui")],
};
