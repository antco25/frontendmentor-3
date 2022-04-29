module.exports = {
    pages: {
      index: {
        entry: 'src/main.js',
        title: 'Loopstudios'
      }
    },
    publicPath: process.env.NODE_ENV === "production" ? "/frontendmentor-3/" : "/",
  }