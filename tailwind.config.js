/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#00E5FF",
        accent: "#7C3AED",
        greenGlow: "#14F195",
      },
    },
  },
  plugins: [],
}