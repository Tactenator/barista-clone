/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landing-page': "url('./images/landing.jpg')"
      }
    },
  },
  plugins: [],
}