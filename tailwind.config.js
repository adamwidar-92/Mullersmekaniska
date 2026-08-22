/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#1a1a1a',
        'metal-gray': '#2d2d2d',
        'accent-orange': '#e85d04',
        'accent-orange-dark': '#d74d00',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        soft: '0 2px 8px rgba(0, 0, 0, 0.1)',
        'soft-lg': '0 10px 30px rgba(0, 0, 0, 0.15)',
      },
    },
  },
}

