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
        'wave': 'wave 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'launch': 'launch 2s ease-in-out infinite',
        'wiggle': 'wiggle 2s ease-in-out infinite',
        'sparkle': 'sparkle 1.5s ease-in-out infinite',
        'hot': 'hot 2s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(-2%)' },
          '50%': { transform: 'translateY(0)' },
        },
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%, 100%': { transform: 'rotate(0.0deg)' },
        },
        glow: {
          '0%': { opacity: 0.7, filter: 'drop-shadow(0 0 2px rgba(251, 191, 36, 0.4))', transform: 'scale(0.98)' },
          '100%': { opacity: 1, filter: 'drop-shadow(0 0 12px rgba(251, 191, 36, 0.9))', transform: 'scale(1.05)' },
        },
        launch: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-3px) translateX(3px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        sparkle: {
          '0%, 100%': { opacity: 0.7, transform: 'scale(0.95)' },
          '50%': { opacity: 1, transform: 'scale(1.05)' },
        },
        hot: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-2px) scaleY(1.05)', filter: 'drop-shadow(0 -2px 4px rgba(217, 119, 6, 0.3))' },
        }
      },
    },
  },
  plugins: [],
};