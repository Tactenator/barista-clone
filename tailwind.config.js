/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html, js}", "**/**/*.{html, js}", "./index.html"],
  theme: {
    extend: {
      backgroundColor: {
        "hero-background": "#eae7de",
        "footer": "#1a1a1a"
      },
      colors: {
        "gold-text": "#c7a17a",
        "light-text": "#4d4d4d",
        "grey-text": '#dedede'
      }, 
      fontFamily: {
        'poppins': ['poppins', 'sans-serif']
      }, 
      fontWeight: {
        normal: '300', 
        medium: '500', 
        bold: '700'
      }
        
    },
  },
  plugins: [],
}