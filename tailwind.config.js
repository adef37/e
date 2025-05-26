/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dancing: ['Dancing Script', 'cursive'],
        sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'sparkle': 'sparkle 8s linear infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'titleFloat': 'titleFloat 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' },
        },
        sparkle: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        pulse: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.25', transform: 'scale(1.1)' },
        },
        titleFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}