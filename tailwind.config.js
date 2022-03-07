const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/pages/**/*.{js, ts, jsx, tsx}",
    "./src/components/**/*.{js, ts, jsx, tsx}"
  ],
  theme: {
    colors: {
      'dark-blue': '#00293D',
      'baby-blue': '#CFEBFF',
      'dark-gray': '#011E2C',
      'soft-blue': '#008AEE',
      'white': 'white',
      'red': 'red',
      'baby-red': '#F7A8A8'
    },
    extend: {
      fontFamily: {
        'sans': ['Montserrat', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
