/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        green: "#3abab4",
        dark: "#1d1d20",
        slight_white: "rgba(255, 255, 255, 0.07)"
      }
    },
  },
  plugins: [],
}