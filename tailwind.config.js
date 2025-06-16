/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js}'],
  safelist: [
    'bg-purple',
    'hover:bg-purple-hover',
    'hover:bg-purple-hover/35',
    'hover:text-white',
    'hover:text-purple-hover',
    'text-white',
    'text-grey-m',
    'text-purple',
    'pl-8',
    'px-2',
    'rounded-[100px]',
    'rounded-r-[100px]'
  ],
  theme: {
    extend: {
      colors: {
        purple: '#635FC7',
        'purple-hover': '#A8A4FF',
        black: '#000112',
        'dark-grey-bg': '#20212C',
        'light-grey-bg': '#F4F7FD',
        'dark-grey': '#2B2C37',
        'dark-lines': '#3E3F4E',
        'grey-m': '#828FA3',
        'light-lines': '#E4EBFA',
        white: '#FFFFFF',
        red: '#EA5555',
        'red-hover': '#FF9898',
      },
      fontSize: {
        'heading-xl': ['24px', { fontWeight: '700', lineHeight: '30px' }],
        'heading-lg': ['20px', { fontWeight: '700', lineHeight: '25px' }],
        'heading-l': ['18px', { fontWeight: '700', lineHeight: '23px' }],
        'heading-m': ['15px', { fontWeight: '700', lineHeight: '19px' }],
        'heading-s': ['12px', { fontWeight: '700', lineHeight: '15px', letterSpacing: '2.4px' }],
        'body-l': ['13px', { fontWeight: '500', lineHeight: '23px' }],
        'body-m': ['12px', { fontWeight: '700', lineHeight: '15px' }],
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      screens: {
        tablet: '768px',
        laptop: '1024px',
      },
      gridTemplateColumns: {
        header: 'max-content 1fr',
      },
      gridTemplateRows: {
        main: 'max-content 1fr'
      }
    },
  },
  plugins: [],
};
