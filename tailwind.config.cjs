/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {

    extend: {
      colors: {
        'verydarkblue': 'hsl(226, 43%, 10%)',
        'darkblue': 'hsl(235, 46%, 20%)',
        'desaturatedblue': 'hsl(235, 45%, 61%)',
        'paleblue': 'hsl(236, 100%, 87%)',
        'blue': 'hsl(246, 80%, 60%)',
        'work': 'hsl(15, 100%, 70%)',
        'play': 'hsl(195, 74%, 62%)',
        'study': 'hsl(348, 100%, 68%)',
        'exercise': 'hsl(145, 58%, 55%)',
        'social': 'hsl(264, 64%, 52%)',
        'selfcare': 'hsl(43, 84%, 65%)'
      }
    },
  },
  plugins: [],
}
