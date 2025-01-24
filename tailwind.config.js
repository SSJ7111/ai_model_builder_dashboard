/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all JS, JSX, TS, and TSX files in the src directory
    "./public/index.html",         // Include the HTML file for Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        secondary: "#1E1B4B",
      },
      // fontFamily: {
      //   sans: ["Inter", "sans-serif"], // Custom font family
      // },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),  // Plugin for better form styling
    require('@tailwindcss/typography'), // Plugin for rich text content
  ],
};
