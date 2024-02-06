/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    extend: {
      fontFamily:{
        'inter': ["Inter, sans-serifs"],
      },
      colors:{
        offblack:'hsl(0, 0%, 11%)',
        darkgrey:'hsl(0, 0%, 12%)',
        gray: 'hsl(0, 0%, 20%)',
        green: 'hsl(75, 94%, 57%)',
      }
    },
  },
  plugins: [],
}

