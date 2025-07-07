/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {

    extend: {
      fontFamily: {
        nunito: ['"Nunito Sans"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        notoArabic: ['Noto Naskh Arabic', 'sans-serif'],
        hafs: ['KFGQ_HAFS', 'serif'],


      },
      safelist: [
        "drawer", "drawer-toggle", "drawer-content", "drawer-side", "drawer-overlay",
        "bg-opacity-30", "backdrop-blur-sm"
      ]
      
    },
    
  },
  plugins: [
    require('daisyui'),
  ],

}

