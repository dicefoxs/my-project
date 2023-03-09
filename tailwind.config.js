/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      screens: {
        '2xl': '1320px',
      },
      colors: {
        primary: '#14b8a6',
        secondary:'#64748b',
        dark: '#0f172a',
      },
    },
  },
  plugins: [],
}