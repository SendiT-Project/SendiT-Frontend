/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "color-primary": "#ADAF98",
        "color-secondary": "#E6E8D2",
        "color-tertiary": "#B85043"
      }
    },
  },
  plugins: [],
}

