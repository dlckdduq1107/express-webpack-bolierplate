const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  mode: 'none',
  entry: './src/frontend/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }

    ]
  },
  devServer: {
    contentBase: "./dist",
    overlay: true // 오류내용을 화면에 보여주게 함.
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/frontend/index.html')
    })
  ],
}