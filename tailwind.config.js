/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(106.43deg, #522fd4, #6bdcff 95.12%)',
      },
      boxShadow: {
        custom: 'rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px',
      },
      bgColors:{
        background: 'linear-gradient(180deg, #4d3bdb 0%, #9747ff 100%)',
      },
      colors: {
        customText: 'rgb(104, 81, 255)', // Example RGB color
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'footer-gradient': 'linear-gradient(180deg, #4d3bdb 0%, #9747ff 100%)',
      },
    },
  },
  plugins: [],
}