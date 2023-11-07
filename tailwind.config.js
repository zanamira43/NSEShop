/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ],
  theme: {
    extend: {
      extend: {
        colors: {
          primary: {
            DEFAULT: colors.violent[600],
            ...colors.violent,
          }
        }
      },
      fontFamily: {
        sans: ["Inter"],
        sans: ["Source Serif Pro"]
         
      }
    },
  },
  plugins: [],
}
