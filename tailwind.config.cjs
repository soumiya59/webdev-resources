/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      darkblue:'#37284d',
      purply:'#7c5eff',
      pinky:'#F0888F'
      }
    },
  },
  plugins: [],
}
