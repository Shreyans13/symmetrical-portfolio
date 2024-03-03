/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', '[data-mode="dark"]'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // backgroundColor: "#000000",
    extend: {
      fontFamily: {
        FranchiseFree: ["FranchiseFree"],
        JosefinSlab: ["JosefinSlab"]
      },
      colors: {
        backgroundColor: "var(--color-background)",
        textBackground: "var(--text-background)"
      },

      backgroundColor: '#000000',
      fontSize: {
        '10xl': '10rem',
        '11xl': '12rem',
        '12xl': '14rem',
        '13xl': '16rem',
      },

    },
  },
  plugins: [],
}

