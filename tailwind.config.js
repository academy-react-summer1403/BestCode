/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  important : "#root",

  darkMode :'class',
  theme: {
    extend: {

      colors:{
         'blue1':'#00E2DC'

      },

      fontFamily: {
        primaryRegular:['BYekan'],
        primaryMedium:['BYekan-bold'],
           'BYekan1':['BYekan1']
      },
      boxShadow: {'3xxl' : 'inset 4px 4px 6px rgba(0, 0, 0, 0.5)',
                 '3xxxl' : 'inset 0px 4.5px 6px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {

  
        'NewsBg': "url('./src/assets/img/News/mainBg.png)",

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

         'cd':'850px',

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
  plugins: [
    require('daisyui'),
    flowbite.content(),
  ],
}
