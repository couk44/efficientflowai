/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        float: 'float 4s ease-in-out infinite',
        glow: 'glow 3s linear infinite',
      },
    },
  },
  plugins: [],
};