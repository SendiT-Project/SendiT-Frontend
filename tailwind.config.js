/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': 'Poppins',
        'secondary': 'Nunito',
        'tertiary': 'Montserrat'
      },
      colors:{
        "color-primary": "#ADAF98",
        "color-secondary": "#E6E8D2",
        "color-tertiary": "#B85043",
        "color-yellow": "#ffcc00"
      }
    },
  },
  plugins: [],
}

