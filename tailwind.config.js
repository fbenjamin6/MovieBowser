/** @type {import('tailwindcss').Config} */
// import chevronRight from './public/ui/chevronRight.png'
export default {
  content: [
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      content: {
        chevronRight: 'url(/ui/chevronRight.png)',
        playVideoIcon: 'url(/ui/videoHoverPlay.png)'
      },
      animation: {
        newPulse: 'newPulse 1s linear infinite'
      },
      keyframes: {
        newPulse: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 }
        },
        shimmer: {
          '100%': {
            transform: 'translateX(100%)'
          }
        }
      }
    }
  },
  plugins: []
}
