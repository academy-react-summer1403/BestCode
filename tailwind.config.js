/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primaryRegular:['BYekan'],
        primaryMedium:['BYekan-bold'],
      },
      boxShadow: {'3xxl' : 'inset 4px 4px 6px rgba(0, 0, 0, 0.5)',
                 '3xxxl' : 'inset 0px 4.5px 6px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'podcast': "url('./src/assets/Rectangle-35.png')",
        'footerbg': "url('./src/assets/Rectangle-141.png')",
        'category': "url('./src/assets/Rectangle-2.png')",
        'sliderbg':"url('./src/assets/Rectangle-23.png')",
      },
      screens: {
        'sm1':'320px',
        'smx': '350px',
        'smx2':'400px',
        'smx3':'500px',
  
        'laptop': '1024px',
  
        'desktop': '1280px',
      },
  
    },
  },
  plugins: [],
}
