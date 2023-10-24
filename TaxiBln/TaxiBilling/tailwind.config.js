/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        button: "rgb(29, 146, 157)", // #75D6EE
        secondary: "rgb(255, 229, 1)", // #FFE501
        primary: "rgb(117, 214, 238)", // #1D929D
        buttonHover: "rgb(117, 214, 238, 0.6)", // #1D929D
        bodyColor: "rgb(131, 80, 111)", // #83506F
        bodyTransparent: "rgb(212, 178, 199, 0.6)", // #83506f80
        bodyLight: "rgb(207, 190, 200, 0.5)", // #CFBEC8
        fontColor: "rgb(131, 80, 111)", // #83506F
      },
      backgroundColor: {
        asideGradient:
          "linear-gradient(0deg, #83506F, #CFBEC8 50%, #83506f80 100%)",
      },
      fontFamily: {
        body: ["Montserrat", "sans-serif"],
      },
      textShadow: {
        primary: "2px 2px 4px rgba(0, 0, 0, 0.3)",
      },
    },
    plugins: [],
  },
};
