/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aviva: {
          darkRed: '#7A1116',
          brandRed: '#C22026',
          cream: '#FDF7E8',
          green: '#9DB328',
          textDark: '#4A2511'
        }
      },
      fontFamily: {
        sans: ['"Nunito"', 'sans-serif'],
        display: ['"Fredoka One"', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
}