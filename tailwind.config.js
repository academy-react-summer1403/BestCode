/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode :'class',
  theme: {
    extend: {
      screens:{
        'ab':'320px',
        'cd' : '850px',
        'ef' : '1150px'
      },
      fontFamily:{
        'BYekan': ['BYekan'],
      },
    },
  },
  plugins: [],
}

