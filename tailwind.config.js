/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      content: {
        chevronRight: 'url("./assets/chevronRight.png")'
      }
    }
  },
  plugins: []
}