/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "lemon" : "lemon",
      },
      fontSize:{
        Rayyan:"150px",
      },
      backgroundImage: {
        kucing: 'url("/public/image/kucing.jpeg")',
        kamera: 'url("/public/image/kamera.jpg")',
      }
    },
  },
  plugins: [],
}

