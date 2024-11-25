/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f3f9',
          100: '#d9e1f1',
          200: '#b3c3e3',
          300: '#8da5d5',
          400: '#6687c7',
          500: '#4069b9',
          600: '#335494',
          700: '#263f6f',
          800: '#1a2a4a',
          900: '#0d1525',
        },
      },
    },
  },
  plugins: [],
};