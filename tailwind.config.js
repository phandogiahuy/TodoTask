/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,css}"],
  theme: {
    extend:{
      fontFamily: {
        'sans': 'Helvetica, Arial, sans-serif',
        'sans-serif':'Youth Action, sans-serif',
        'jersey':["'Jersey 25'", "sans-serif"]
      }
    }
    
  },
  plugins: [],
}