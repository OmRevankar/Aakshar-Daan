/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily :{
        inter : ["Inter","serif"],
      },
      colors:{
        greenp: '#02B073',
      },
      backgroundImage : {
        img1 : "url('Assets/istockphoto-1456569914-612x612.jpg')",
      }
    },
  },
  plugins: [],
}
