/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // screens: {
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1440px',
    // },
    colors: {
      secondColor: 'color: rgb(145, 145, 145);'
    },
    extend: {
      container: {
        center: true,
        padding: {
          default: '1rem',
          sm: '2rem',
          lg: '5rem',
          xl: '7rem',
        }
      },
    },
  },
  plugins: [],
}