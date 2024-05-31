/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', "inter", 'sans-serif'],
        inter:['inter','sans-serif'],
        kreditback: ['Kreditback', 'sans-serif'],
      },
      colors: {
        customGreen: '#5BB5A2',
        clearDay : '#E8F2EE',
        customGray1:'#485563',
        customGray2:'#29323C',
        customGray : ' #F8F8F8',
        customLightrose: '#F1DFDF',
        customLight:'#DFE1F1',
        customLightsky:'#DFEBF1',
        customLightgray: '#F8F8F8',
        LightGray : '#E8F2EE',
        customGreen2: '#53A191',
        customCream1 : '#E3C79E',
        customCream2 : '#D6AE7B',
        babyAquva : '#c0e9e6',
      },

      fontSize: {
        'custom-32': '32px',
      },
      lineHeight: {
        'custom-32': '32px',
      },
      letterSpacing: {
        'tightest': '-0.03em',  
      },
      fontWeight: {
        'custom-700': 700,
      },
    },
  },
  plugins: [
    
  ],
}