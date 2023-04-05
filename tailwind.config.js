/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      gray: "#9fa6b2",
      titleBg: "#03132a ",
      gradientFrom: "#060397",
      gradientTo: "#312DF8",
      link: "#0d6efd"
    },

    extend: {},
  },
  plugins: [],
}

