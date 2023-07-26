/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.',
    './index.html',
  ],
  theme: {
    extend: {
      backgroundColor: {
        "hero-background": "#eae7de",
        "footer": "#1a1a1a"
      },
      colors: {
        "gold-text": "#c7a17a"
      }
    },
  },
  plugins: [],
}