module.exports = {
  content: [
    "./src/**/*.{html,js}",  // Збиратиме всі HTML та JS файли в папці src
    "./public/index.html" // Також аналізуватиме цей конкретний файл
  ],
  theme: {
    extend: {
      colors: {
        'grey-app': '#343434',
        'light-grey-app': '#444444'
      },
    },
  },
  plugins: [],
}

