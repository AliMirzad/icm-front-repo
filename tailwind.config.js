/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        roundedFirst: "43% 57% 74% 26% / 44% 70% 56% ",
        roundedSecond: "62% 38% 42% 58% / 52% 38% 62% 48% ",
        roundedThird: "44% 56% 42% 58% / 37% 65% 35% 63% ",
      },
      boxShadow:{
        'shadow-line':"0 1px 0 rgba(0, 0, 0, .14), 0 2px 0 rgba(0, 0, 0, .05)"
      }
    },
  },
  plugins: [],
};
