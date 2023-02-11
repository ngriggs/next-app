/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				summerVibesBold: ["SummerVibesBold", "sans-serif"],
				summerVibesLight: ["SummerVibesLight"],
				summerVibesRegular: ["SummerVibesRegular"],
				summerVibesSolid: ["SummerVibesSolid"],
				quicksand: ["Quicksand"],
			},
		},
	},
	plugins: [
		require("@tailwindcss/line-clamp"),
		require("@tailwindcss/typography"),
		require("@headlessui/tailwindcss"),
	],
};
