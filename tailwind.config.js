/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        body: "#0f172a",
        primary: "#1E293B",
        secondary: "#E2E8F0",
      },
    },
  },
  plugins: [],
};
