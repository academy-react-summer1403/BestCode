/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important : "#root",

  darkMode :'class',
  theme: {
    extend: {

      fontFamily: {
        primaryRegular:['BYekan'],
        primaryMedium:['BYekan-bold'],
            'BYekan': ['BYekan'],
      },
      boxShadow: {'3xxl' : 'inset 4px 4px 6px rgba(0, 0, 0, 0.5)',
                 '3xxxl' : 'inset 0px 4.5px 6px rgba(0, 0, 0, 0.3)',
                 
      },
      backgroundImage: {
        'podcast': "url('./src/assets/landingpng/Rectangle-35.png')",
        'footerbg': "url('./src/assets/landingpng/Rectangle-141.png')",
        'category': "url('./src/assets/landingpng/Rectangle-2.png')",
        'sliderbg':"url('./src/assets/landingpng/Rectangle-23.png')",
   
        'custom-gradient': 'linear-gradient(180deg, rgba(0, 252, 246, 0.8) -80.75%, rgba(0, 43, 42, 0.8) 100%)',
        'custom-blur':'backdrop-filter: blur(5px)',
        
      },
      screens: {
        'sm1':'320px',
        'smx': '350px',
        'smx2':'400px',
        'smx3':'500px',
        'smx4':'600px',
        'smx5':'1187px',
        'laptop': '1024px',
        'desktop': '1280px',
        'ab':'320px',
        'cd' : '850px',
        'ef' : '1150px'
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        'sizt': '496px',
      }
  
    },
  },
  plugins: [],
}
