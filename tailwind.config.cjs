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
      pinky:'#f9c5d1',
      darkpinky:'#f66d6d',
      beigy:'#F1EFE9',
      lightbeigy:'#f9f8f5',
      silvery:'#ece9f1',
      dirty:'#a3a6a9',
      darkdirty:'#2F2A1E',
      }
    },
  },
  plugins: [],
}
