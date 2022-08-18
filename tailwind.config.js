/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // theme: {
  //   extend: {
  //     dropShadow: {
  //       "3xl": "0 3px 70px rgba(74, 114, 255, 0.7)",
  //       "4xl": "0px 120px 50px rgba(74, 114, 255, 0.7)",
  //       "5xl": "0px 20px 60px rgba(74, 114, 255, 0.7)",
  //       "6xl": "0px 120px 120px rgba(74, 114, 255, 0.5)",
  //     },
  //   },
  //   fontFamily: {
  //     DMSans: ["DMSans", "sans-serif"],
  //     Inter: ["Inter", "sans-serif"],
  //     SourceSansPro: ["SourceSansPro", "sans-serif"],
  //   },
  //   colors: {
  //     primary: "#4A72FF",
  //     darkLight: "#0C1B4D",
  //     white: "#FFFFFF",
  //     primaryLight: "#4A72FF",
  //     primaryDark: "#0C1B4D",
  //     dark: "#0C1B4D",
  //     svgFill: "#F3F6FF",
  //   },
  // },
  theme: {
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
    },
    colors: {
      primaryBG: "#F5F5F5",
      blurBG: "#FFD6D6",
      buttonBG: "#54BD95",
      buttonText: "#F8F8FA",
      NavText: "#44B58D",
      NavTextHover: "#000000",
      LogoText: "#54BD95",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
