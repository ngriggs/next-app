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
        fluid: "repeat(auto-fit, minmax(15rem, 1fr))",
      },
      colors: {
        "giggles-red": "#ec6a52",
        "giggles-yellow": "#f7ae47",
        "giggles-blue": "#99bdbb",
        "giggles-green": "#bbb45a",
        "giggles-dark-blue": "#435a6c",
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
