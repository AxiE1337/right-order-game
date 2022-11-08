/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      green: '#38DF7A',
      white: '#FFFFFF',
      black: '#1c1917',
      purple: '#7F75F0',
      purpleDark: '#3A1F36',
    },
    screens: {
      md: { max: '768px' },
    },
  },
  plugins: [require('daisyui')],
}
