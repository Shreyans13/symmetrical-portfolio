/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["selector", '[data-mode="dark"]'],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // backgroundColor: "#000000",
    extend: {
      fontFamily: {
        FranchiseFree: ["FranchiseFree"],
        JosefinSlab: ["Josefin Slab", "serif"],
      },
      colors: {
        backgroundColor: "var(--color-background)",
        textBackground: "var(--text-background)",
      },

      backgroundColor: "#000000",
      fontSize: {
        "10xl": "10rem",
        "11xl": "12rem",
        "12xl": "14rem",
        "13xl": "16rem",
        "14xl": "18rem",
        "15xl": "20rem",
        "16xl": "22rem",
        "17xl": "24rem",
        "18xl": "26rem",
        "19xl": "28rem",
        "20xl": "30rem",
      },
      animation: {
        marquee: "marquee 5s linear infinite",
        marquee2: "marquee2 5s linear infinite",
        textRoll: "move 4s infinite",
        whiteOut: "white-out 5s infinite;",
        "text-slide":
          "text-slide 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite",
      },
      keyframes: {
        move: {
          "25%": {
            transform: "translatey(-5.8vmin)",
            opacity: "1",
          },
          "50%": {
            transform: "translatey(-11vmin)",
          },
          "75%": {
            transform: "translatey(-16.5vmin)",
          },
        },
        "text-slide": {
          "0%, 16%": {
            transform: "translateY(0%)",
          },
          "20%, 36%": {
            transform: "translateY(-16.66%)",
          },
          "40%, 56%": {
            transform: "translateY(-33.33%)",
          },
          "60%, 76%": {
            transform: "translateY(-50%)",
          },
          "80%, 96%": {
            transform: "translateY(-66.66%)",
          },
          "100%": {
            transform: "translateY(-83.33%)",
          },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};

// @keyframes move {
//   25 % {
//     transform: translatey(-5.8vmin);
//     opacity: 1;
//   }
//   50 % {
//     transform: translatey(-11vmin);
//   }
//   75 % {
//     transform: translatey(-16.5vmin);
//   }
// }
