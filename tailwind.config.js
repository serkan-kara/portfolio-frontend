/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      'charlestonGreen': '#2E2922',
      'gunmetal': '#2D333B',
      'darkGrayX11': '#AAAAAA',
      'unitedNationsBlue': '#539AF3',
      'japaneseLaurel': '#347D39'
    },
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
      serif: ['"Roboto Slab"', 'serif']
    }
  },
  plugins: [],
}
