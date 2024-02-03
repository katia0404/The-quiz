/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container:{
      padding:"2rem",
      center:true,
    },
    extend: {},     /*шрифт*/
  },
  theme: {
    extend: {},  
  },
  plugins: [require("@tailwindcss/forms")],
}

