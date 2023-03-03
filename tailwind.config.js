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
        "giggles-red": {
          DEFAULT: "#ec6a52",
          100: "#fdf0ee",
          200: "#fbe1dc",
          300: "#f9d2cb",
          400: "#f7c3b9",
          500: "#f5b3a8",
          600: "#f3a496",
          700: "#f19585",
          800: "#ef8673",
          900: "#ee7762",
        },
        "giggles-yellow": {
          DEFAULT: "#f7ae47",
          100: "#fef7ec",
          200: "#fdefda",
          300: "#fde6c7",
          400: "#fcdeb5",
          500: "#fbd6a2",
          600: "#face8f",
          700: "#fac67d",
          800: "#f9bd6a",
          900: "#f8b55a",
        },
        "giggles-green": {
          DEFAULT: "#bbb45a",
          100: "#f8f8ee",
          200: "#f1f0de",
          300: "#ebe9cd",
          400: "#e4e1bc",
          500: "#dddaac",
          600: "#d6d29b",
          700: "#cfcb8a",
          800: "#c9c37a",
          900: "#c9c37a",
        },
        "giggles-blue": {
          DEFAULT: "#99bdbb",
          100: "#f5f8f8",
          200: "#ebf2f1",
          300: "#e0ebeb",
          400: "#d6e4e4",
          500: "#ccdedd",
          600: "#c2d7d6",
          700: "#b8d0cf",
          800: "#aecac8",
          900: "#a3c3c2",
        },
        "giggles-navy": {
          DEFAULT: "#435a6c",
          100: "#eaeff2",
          200: "#d6dee5",
          300: "#c1ced8",
          400: "#acbecb",
          500: "#97adbe",
          600: "#839db1",
          700: "#6e8da4",
          800: "#5d7c94",
          900: "#506b7f",
        },
        scale: {
          "-100": "-1",
        },
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
