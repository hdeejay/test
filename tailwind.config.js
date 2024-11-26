/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#22C55E',
        'secondary': '#6366F1',
        'purple': {
          100: '#F3E8FF',
          800: '#6B21A8',
        }
      }
    },
  },
  plugins: [],
}

