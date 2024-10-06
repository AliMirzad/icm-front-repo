/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'selector',
  content: ["./src/**/*.{js,jsx}"],
  daisyui: {
    themes: false,
  },
  theme: {
    
    extend: {
      boxShadow: {
        'shadow': '0 0px 10px rgba(0, 0, 0, 0.2)',
      },
      borderColor:{
        "borderinput":"rgba(255,255,255,0.2)"
      }
    },
  },
  plugins: [require("daisyui")],
};
