/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        font: "'Crimson Text'",
        fon1:"'Cookie', 'cursive'"
      }
    },
  },
    plugins: [require("daisyui")],
}

