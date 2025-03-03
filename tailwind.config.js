/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      },
      colors: {
        'dark-blue': "#1E6F9F",
        'blue': "#4EA8DE",
        'dark-purple': "#5E60CE",
        'purple': "#8284FA",
        'danger': "#E25858",
        gray: {
          700: "#0D0D0D",
          600: "#1A1A1A",
          500: "#262626",
          400: "#333333",
          300: "#808080",
          200: "#D9D9D9",
          100: "#F2F2F2",
        }
      }
    },
  },
  plugins: [],
}

