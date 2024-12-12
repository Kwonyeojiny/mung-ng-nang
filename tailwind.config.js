/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transperent: 'transperent',
      current: 'currentColor',
      'brand-blue': '#306FA4',
      'brand-skyblue': '#ABC5DA',
      'brand-deep-blue': '#1B5B91',
      'brand-deep-blue-hover': '#1F5888',
      'brand-yellow': '#E5B76D',
      'brand-beige': '#EDD4C0',
      neutral: '#CCC9C6',
      white: '#EDE8E4',
      black: '#262425',
      error: '#DE2C35',
      placeholder: 'rgba(38, 36, 37, 0.4)',
      scrim: 'rgba(38, 36, 37, 0.6)',
    },
    extend: {
      width: {
        'screen-full': '100vw',
      },
      height: {
        'screen-full': '100vh',
      },
      maxWidth: {
        'screen-full': '100vw',
      },
      maxHeight: {
        'screen-full': '100vh',
      },
      borderColor: {
        transparent: 'rgba(0, 0, 0, 0)',
      },
      boxShadow: {
        'bottom-md': '0 6px 0 rgba(0,0,0,0.25)',
        blue: '0px 0px 24px 8px #306FA4, 0 6px 0 rgba(0,0,0,0.25)',
      },
      borderWidth: {
        3: '3px',
      },
    },
    fontFamily: {
      sans: [
        'Apple SD Gothic Neo',
        'Inter',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
      ],
      Jua: 'Jua',
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
