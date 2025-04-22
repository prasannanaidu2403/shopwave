
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#708238",  // Olive Green
        accent: "#800080",   // Purple
      }
    },
  },
  plugins: [],
}
