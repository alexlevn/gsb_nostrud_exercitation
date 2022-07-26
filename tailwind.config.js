/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      'pc-darker': '#191a21',
      'pc-dark': '#1F2028',
      'pc-light': '#F9EBD7',
      'pc-yellow': '#EFBB35',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      mont: ['Montserrat', 'sans-serif'],
      nunito: ['Nunito', 'sans-serif'],
    },
  },
  plugins: [],
}
