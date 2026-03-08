/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        karo: {
          purple: '#2E1A47',      // Deep purple for hero background
          purpleDark: '#1A0C2B',  // Darker section of the gradient
          purpleLight: '#5B4086', // Lighter purple gradient
          purpleAccent: '#8155BA',// Highlight purple
          blue: '#1A5EFF',        // Primary blue for CTA buttons
          blueHover: '#144ECC',   // Blue hover state
          grayLight: '#F3F4F6',   // Background gray for cards
          textSecondary: '#4B5563', // Text gray
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
