/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'Arial', 'sans-serif'],
      },
      colors: {
        white: '#fff',
        black: '#000',
        gray1: '#E1E1E1',
        gray2: '#C4C4C4',
        gray3: '#A6A6A6',
        gray4: '#898989',
        gray5: '#6B6B6B',
        gray6: '#565656',
        gray7: '#404040',
        gray8: '#2B2B2B',
        gray9: '#151515',
      },
    },
  },
  plugins: [],
};
