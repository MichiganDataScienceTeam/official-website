/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      transparent: "transparent",
      translucent: "#F3F5F744",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      grey: {
        xlight: "#A3A3A3",
        light: "#555555",
        DEFAULT: "#333333",
        dark: "#212121",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui"],
      },
    },
  },
  plugins: [],
};
