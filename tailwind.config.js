/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          lime: "hsl(61, 70%, 52%)",
          red: "hsl(4, 69%, 50%)"
        }
      },
      fontFamily: {
        primaryMedium: ["CustomMedium", 'sans-serif'],
        primaryBold: ["CustomBold", 'sans-serif']
      },
      screens: {
        'desktopXL': '1440px',
      }
    },
  },
  plugins: [],
}

