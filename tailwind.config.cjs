/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins',
      },
      colors: {
        primary: '#fffffe',
        secondary: '#90b4ce',
        info: '#3da9fc',
        danger: '#ef4565',
        heading: '#094067',
      },
    },
  },
  plugins: [],
};
