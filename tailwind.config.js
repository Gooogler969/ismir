/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'gray': '#eeeeee',
      'black': '#000000',
      'black-2': 'rgba(255, 255, 255, 0)',
      'gray-2': 'rgb(184, 184, 184)',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },
    extend: {
      // container: {
      //   center: true,
      //   padding: {
      //     default: '1rem',
      //     sm: '2rem',
      //     lg: '5rem',
      //     xl: '7rem',
      //   }
      // },
    },
  },
  plugins: [],
}