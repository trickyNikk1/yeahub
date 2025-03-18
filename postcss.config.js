module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano'),
    require('postcss-preset-env'),
    require('postcss-import'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('postcss-custom-properties'),
  ],
}
