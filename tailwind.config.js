/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class", '[data-theme="dark"]'],
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
			keyframes: {
				"accordion-down": {
					from: { height: 0 },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: 0 },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
			gridTemplateColumns: {
				fluid: "repeat(auto-fit, minmax(min(22rem, 100%), 1fr))",
			},
			colors: {
				"giggles-red": "#ec6a52",
				"giggles-red-light": "#f5b3a8",
				"giggles-yellow": "#f7ae47",
				"giggles-yellow-light": "#fbd6a2",
				"giggles-blue": "#99bdbb",
				"giggles-blue-light": "#ccdedd",
				"giggles-green": "#bbb45a",
				"giggles-green-light": "#dddaac",
				"giggles-navy": "#435a6c",
				"giggles-navy-light": "#97adbe",
			},
			scale: {
				"-100": "-1",
			},
		},
	},
	plugins: [
		require("@tailwindcss/line-clamp"),
		require("@tailwindcss/typography"),
		require("@headlessui/tailwindcss"),
		require("tailwindcss-animate"),
	],
};
