/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        default: "#A699FF",
        'default-40': 'rgba(166, 153, 255, 0.4)',
        dark: "#7D69FF",
        fill: "#F4F3FE",
      },
      backgroundColor: {
        default: "#ACA0FE",
        label: "rgba(167, 153, 255, 0.4)",
      },
      backgroundImage: {
        "gradient": "linear-gradient(270deg, #E2DFF6 0.03%, #A699FF 99.97%)",
        "gradient-white": "linear-gradient(270deg, rgba(255, 255, 255, 0.00) -16.38%, #FFF 49.79%, rgba(255, 255, 255, 0.00) 108.75%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        gradientfill: "linear-gradient(292deg, rgba(255,255,255,1) 0%, rgba(222,218,255,1) 98%)",
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        buttonPing: {
          '0%': {
            transform: 'scale(1)', 
            opacity: '1', 
          },
          '70%': {
            transform: 'scale(1.4)', 
            opacity: '0', 
          },
          '100%': {
            transform: 'scale(1.4)', 
            opacity: '0', 
          },
        }
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
        buttonPing: 'buttonPing 1.5s infinite'
      },
    },
    rotate: {
      10: "10deg",
      m10: "-10deg",
    },
  },
  plugins: [],
};
