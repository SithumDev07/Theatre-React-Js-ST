module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(240, 42, 43, 1)',
      },
      boxShadow: {
        '9xl': '0px 0px 80px 30px rgba(240, 42, 43, 1)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
