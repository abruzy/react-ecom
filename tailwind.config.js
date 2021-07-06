module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange1: '#fa9e0c',
        black1: '#333333',
        'light-gray': '#6f6f6f'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
