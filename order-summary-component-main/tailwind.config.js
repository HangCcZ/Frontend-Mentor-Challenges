module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'pale-blue': '#e0e8ff',
        'bright-blue': '#3829e9',
        'very-pale-blue': '#f5f7ff',
        'desaturated-blue': '#7280a7',
        'dark-blue': '#1f2f56',
      },
      screens: {
        'above-mobile': '400px',
        'above-425px': '425px',
        'above-450px': '450px',
      },
    },
  },
  plugins: [],
}
