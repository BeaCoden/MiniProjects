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
				colorNav: "rgb(131, 80, 111)", // #83506F
				bodyTransparent: "rgb(212, 178, 199, 0.6)", // #83506f80
				bodyLight: "rgb(196, 166, 184)", // #cfbec8
				fontColor: "rgb(131, 80, 111)", // #83506F
				fontColorNav: "rgb(255, 255, 255)", // #FFFFFF
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
