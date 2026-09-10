/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: '#EEF4F9',
        accent: '#2C83BB',
        background: '#0d554c',
        heading: '#112F42',
      },
    },
  },
  plugins: [],
}
