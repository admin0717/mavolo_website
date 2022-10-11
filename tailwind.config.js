/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
    },
    colors: {
      primaryBG: "#F5F5F5",
      blurBG: "#FFD6D6",
      buttonBG: "#54BD95",
      primary: "#54BD95",
      buttonText: "#F8F8FA",
      NavText: "#44B58D",
      NavTextHover: "#000000",
      LogoText: "#54BD95",
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar-hide")],
};
