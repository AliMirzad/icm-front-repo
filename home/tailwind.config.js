/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        header: " inset 0px 0px 4px #FBFAFA40",
      },
      scrollbar: {
        hide: "scrollbar-hide",
      },
    },
  },
  plugins: [
    require("daisyui")
  ],
};
