/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      blur: {
        '43': '43px',
        '48': '48px',
      },
      opacity: {
        '64': '0.64',
        '16': '0.16',
      },
      colors: {
        'custom-white': '#ffffff',
        'custom-dark-blue': '#0D2750',
      },
      translate: {
        '-31': '-31px',
        '26': '26px',
      },
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
        'team-height': '450px',
        'activity-height': '380px',
        'profile-height': '120px', 
      },
      width:{
        'profile-width': '120px',
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

