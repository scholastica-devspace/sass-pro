/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ["Inter", "sans-serif"],
        'rale': ["Raleway", "sans-serif"],
        'robo': ["Roboto", "sans-serif"],
      },
      colors: {
        'primary': '#EEF4F9',
      },
    },
  },
  plugins: [],
}
