module.exports = {
  plugins: [
    require('precss'),
    require('postcss-cssnext'),
    require('autoprefixer'),
    require('css-mqpacker'),
    require('postcss-short'),
    require("postcss-reporter")({ clearMessages: true })
  ]
}
