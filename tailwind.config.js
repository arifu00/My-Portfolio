/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: '',
  theme: {
    extend: {
      fontFamily: {
        lora: ["Lora", "serif"],
        roboto: ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark", "acid", "cmyk"],
  },
}

