/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'ab':'320px',
        'cd' : '850px'
      }
    },
  },
  plugins: [],
}

