/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white__87: 'rgba(255, 255, 255, 0.87)',
      black__87: '#000000',
      green__800: '#2E7D32',
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
