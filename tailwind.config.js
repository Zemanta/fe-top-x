/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'amelia': "url('./amelia.svg')",
        'amelia-dark': "url('./amelia-dark.svg')",
      },
      backgroundSize: {
        '50%': '50%',
      },
      colors: {
        'ob-orange': '#EE6513',
      },
    },
  },
  plugins: [],
}
