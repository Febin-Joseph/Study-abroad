/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          10: '#7F53C2',
          20: '#6711EA',
          30: '#16101F',
          40: '#0D0A11',
        },
        white: {
          10: '#FFFFFF',
          20: '#F3F3F3',
          30: '#F5F5F5',
          40: '#E0E0E0',
        },
      },
      screens: {
        xs: '400px',
        '3xl': '2200px',
        '4xl': '2500px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        0: '0px',
        '1xl': '8px',
        '3xl': '22px',
      },
    },
  },
  plugins: [require("daisyui")],
}