let path = require('path');
let MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ],
}