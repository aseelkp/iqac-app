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
      link: "#0d6efd",
      background: "#1a202c",
      linkBg: "#143D75",
    },

    extend: {},
  },
  plugins: [],
}

