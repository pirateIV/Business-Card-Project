/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      black__87: '#000000',
      gray__300: '#E0E0E0',
      green__800: '#2E7D32',
      white__87: '#FFFFFFDE',
      appBackground: '#C8E6C9',
      cardBackground: '#F5F5F5',
    },
    extend: {
      borderRadius: {
        custom: '32px',
      },
      boxShadow: {
        custom: '0px 4px 4px 0px rgba(0,0,0,0.25)',
      },
      fontFamily: {
        custom: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
