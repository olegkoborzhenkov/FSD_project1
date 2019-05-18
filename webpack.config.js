// Webpack v4
const path = require('path')

//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test:/\.pug$/,
        loader:"pug-loader",
        options: {
          pretty: true
        }
      },
      {
        test: /\.scss$/,
            use: ['style-loader', MiniCssExtractPlugin.loader,'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
   // new ExtractTextPlugin(
   //   {filename: 'style.[hash].css', disable: false, allChunks: true}
   //   ),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      filename: 'index.html',
      template: 'src/index.pug'
    })//,new WebpackMd5Hash()     
  ]
};