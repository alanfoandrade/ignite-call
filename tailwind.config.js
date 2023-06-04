/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require('@tailwindcss/forms')],
  theme: {
    extend: {
      animation: {
        slideIn: 'slideIn 200ms ease-out',
        slideOut: 'slideOut 200ms ease-out',
      },
      borderRadius: {
        px: '1px',
      },
      colors: {
        error: '#f75a68',
        gray: {
          100: '#E1E1E6',
          200: '#A9A9B2',
          400: '#7C7C8A',
          500: '#505059',
          600: '#323238',
          700: '#29292E',
          800: '#202024',
          900: '#121214',
        },
        green: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
          900: '#00291D',
        },
      },
      fontFamily: {
        alt: 'var(--font-bai-jamjuree), sans-serif',
        sans: 'var(--font-roboto), sans-serif',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
    },
  },
};
