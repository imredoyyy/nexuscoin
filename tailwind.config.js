/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // playfair: "var(--font-playfair-display)",
        inter: "Inter",
        playfair: "Playfair Display",
      },
      colors: {
        app: {
          background: "#02041d",
          50: "#f1f5f9",
          100: "#e2e5e9",
          200: "#253141",
          300: "#374151",
          400: "#f9fafb",
          500: "#111827",
          600: "#B3B4B7",
          700: "#292A40",
        },
      },
      backgroundImage: {
        "gradient-one": "url('./assets/background-images/gradient-1.svg')",
        "gradient-two": "url('./assets/background-images/gradient-2.svg')",
        "gradient-three": "url('./assets/background-images/gradient-3.svg')",
        "gradient-four":
          "linear-gradient(179deg, rgb(248, 250, 252) 0%, rgba(248, 250, 252, 0.4) 100%)",
      },
      backgroundPosition: {
        0: "0% 0%",
      },
      gridTemplateColumns: {
        two: "30% auto",
        table: "repeat(5, minmax(160px, 1fr))",
      },
      keyframes: {
        "up-down": {
          "0%": {
            transform: "translateY(25%)",
          },
          to: {
            transform: "translateY(-25px)",
          },
        },
      },
      animation: {
        "up-down": "up-down 2s ease-in-out infinite alternate",
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
  plugins: [],
};
