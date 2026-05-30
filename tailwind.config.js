/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter", "Poppins", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#05060a",
        orbit: "#11131f",
        electric: "#3ae8ff",
        violet: "#8b5cf6",
        signal: "#d7ff63",
      },
      boxShadow: {
        glow: "0 0 45px rgba(58, 232, 255, 0.28)",
      },
    },
  },
  plugins: [],
};
