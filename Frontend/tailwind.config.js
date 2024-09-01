/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        'tiny': '0.7rem',
        'mid': '14px',   
        'huge': '3rem',      
        'xxl': '2.5rem',    
      },
      colors: {
        primary: '#F2B616', 
        anotherColor: '#3DB64C', 
      },
      height: {
        'custom-height': '550px',
        'about-height': '480px', 
      },
      animation: {
        'fade-slide': 'fadeSlide 3s ease-in-out infinite',
      },
      keyframes: {
        fadeSlide: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '50%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}

