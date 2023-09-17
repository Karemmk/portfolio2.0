/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  
   variants: {
    extend: {
      backgroundColor: ['group-hover','hover'],
     
    }
  },
  
};
