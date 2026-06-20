/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
      },
      colors: {
        'brand-beige': 'rgba(249, 246, 237, 1)',
        'brand-blue': 'rgba(3, 73, 168, 1)',
      },
      boxShadow: {
        'cute': '0 8px 30px rgba(3, 73, 168, 0.08)',
        'cute-hover': '0 15px 35px rgba(3, 73, 168, 0.12)',
        'cute-inner': 'inset 0 2px 4px 0 rgba(3, 73, 168, 0.06)',
      },
      animation: {
        'gradient': 'gradient 3s ease infinite',
        'float': 'float 3s ease-in-out infinite',
        'bounce-soft': 'bounce-soft 2s infinite ease-in-out',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(-2%)' },
          '50%': { transform: 'translateY(0)' },
        }
      },
    },
  },
  plugins: [],
};