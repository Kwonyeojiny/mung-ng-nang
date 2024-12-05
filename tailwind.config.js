/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transperent: 'transperent',
      current: 'currentColor',
      'brand-blue': '#306FA4',
      'brand-deep-blue': '#1B5B91',
      'brand-yellow': '#E5B76D',
      white: '#EDE8E4',
      black: '#262425',
      error: '#DE2C35',
    },
    extend: {},
    fontFamily: {
      Jua: 'Jua',
    },
  },
  plugins: [],
}

