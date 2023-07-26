/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.',
    './index.html',
  ],
  theme: {
    extend: {
      backgroundColor: {
        "hero-background": "#eae7de"
      },
      colors: {
        "gold-text": "#c7a17a"
      }
    },
  },
  plugins: [],
}