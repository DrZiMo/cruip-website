/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        green: "#3abab4",
        dark: "#1d1d20",
        light_dark: "#222225",
        slight_white: "rgba(255, 255, 255, 0.07)",
        slight_black: "rgba(0, 0, 0, 0.6)",
        slight_green: "rgba(79, 209, 197, 0.3)"
      }
    },
  },
  plugins: [],
}