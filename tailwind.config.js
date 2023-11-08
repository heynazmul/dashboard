/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        indigo : '#011665'
      },
      content: {
        'link': 'url("../assets/check.svg")'
      },
    },
  },
  plugins: [],
}

