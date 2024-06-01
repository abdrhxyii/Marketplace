/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customColor: 'hsla(36, 31%, 90%, 1)',
      },
      width: {
        '500px': '500px'
      },
      borderRadius: {
        '50px': '50px'
      }
    },
  },
  plugins: [],
}

