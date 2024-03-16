/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      content: {
        chevronRight: 'url("./assets/chevronRight.png")',
        playVideoIcon: 'url(./assets/videoHoverPlay.png)'
      },
      animation: {
        newPulse: 'newPulse 1s linear infinite'
      },
      keyframes: {
        newPulse: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 }
        }
      }
    }
  },
  plugins: []
}
