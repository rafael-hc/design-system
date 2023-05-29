const {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} = require('@sell-solutions/tokens')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  safelist: [
    {
      pattern: /grid-cols-(1[0-9]|20|[1-9])/,
    },
  ],
  theme: {
    fontFamily: fonts,
    extend: {
      colors,
      fontSize: fontSizes,
      fontWeight: fontWeights,
      lineHeight: lineHeights,
      borderRadius: radii,
      spacing: space,
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
