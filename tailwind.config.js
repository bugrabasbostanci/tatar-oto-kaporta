/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#E3000E",
      },
      fontFamily: {
        montserrat: ["Montserrat"],
        opensans: ["Open Sans"],
      },
      boxShadow: {
        left: "rgb(227, 0, 14, 0.4) -5px 5px, rgb(227, 0, 14, 0.3) -10px 10px, rgb(227, 0, 14, 0.2) -15px 15px, rgb(227, 0, 14, 0.1) -20px 20px, rgb(227, 0, 14, 0.05) -25px 25px",
        right:
          "rgb(227, 0, 14, 0.4) 5px 5px, rgb(227, 0, 14, 0.3) 10px 10px, rgb(227, 0, 14, 0.2) 15px 15px, rgb(227, 0, 14, 0.1) 20px 20px, rgb(227, 0, 14, 0.05) 25px 25px",
        bottom:
          "rgb(227, 0, 14, 0.4) 0px 5px, rgb(227, 0, 14, 0.3) 0px 10px, rgb(227, 0, 14, 0.2) 0px 15px, rgb(227, 0, 14, 0.1) 0px 20px, rgb(227, 0, 14, 0.05) 0px 25px",
        painting: "rgb(38, 57, 77) 0px 20px 30px -10px",
      },
    },

    plugins: [require("flowbite/plugin")],
  },
};
