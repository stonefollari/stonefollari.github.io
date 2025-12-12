/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./script.js",
    // Add any other files where you use Tailwind classes
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Standardized Color Variables (Defined in your inline script)
        'accent-color': '#00a38b', // Muted Emerald/Teal
        'accent-hover': '#007c68', 
        'dark-bg': '#0f172a',      // Slate/Indigo for dark mode
        'light-bg': '#f8fafc',     // Light background
        'dark-text': '#e2e8f0',
        'light-text': '#1e293b'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: [],
}