/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    fontSize: {
      sm: '32px'
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      height: {
        '400': '32rem',
        '500': '40rem',
        '90': '6rem',
        '100%': '50px',
      },
      width: {
        '100': '100px'
      }
    },
  },
  plugins: [],
}

