module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: { white: { A700: "#ffffff" }, gray: { 500: "#9e9e9e" } },
      boxShadow: { xs: "0px 2px  4px 0px #b1b1b119" },
      backgroundImage: { gradient: "linear-gradient(90deg, #136fcf,#3096ff)" },
      fontFamily: { poppins: "Poppins" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
