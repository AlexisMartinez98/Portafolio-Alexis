/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}", "./src/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "text-1": "#111111",
        "text-2": "#333333",
        "text-3": "#555555",
        "text-color": "#7843e9",
      },
      fontFamily: {
        "font-1": "/src/assets/font/regular.ttf",
      },
    },
  },
  plugins: [],
};
