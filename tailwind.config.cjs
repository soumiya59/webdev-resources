/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      darkblue:'#2d325b',
      // purply:'#7c5eff',
      pinky:'#f9c5d1'
      }
    },
  },
  plugins: [],
}
