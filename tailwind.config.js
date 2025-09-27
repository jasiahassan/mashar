/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F1C80",
        secondary: "#FF7C02",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        spartan: ['"League Spartan"', "sans-serif"],
      },
      boxShadow: {
        blue: "0px 4px 4px 0px #2B3476",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "float-slow": "float 5s ease-in-out infinite",
        "float-fast": "float 3s ease-in-out infinite",
      },
    },
  },

  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".border-conic-b": {
          borderBottom: "1px solid",
          borderImageSource:
            "conic-gradient(from 180deg at 50% 50%, #EB8F03 -50.19deg, #2B3476 36.35deg, #EB8F03 309.81deg, #2B3476 396.35deg)",
          borderImageSlice: "1",
        },
      });
    },
  ],
};
