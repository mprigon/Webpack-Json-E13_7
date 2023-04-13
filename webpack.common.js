const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CSSMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');


module.exports = {
  entry: {
    app: './src/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
    new MiniCssExtractPlugin(),
    new TerserWebpackPlugin(),
    new CSSMinimizerWebpackPlugin()
  ],

  optimization: {
    minimize: true,
    minimizer: [new TerserWebpackPlugin({}), new CSSMinimizerWebpackPlugin({})],
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  
  module: {
    rules: [
      { test: /\.css$/,
       // use: ['style-loader', 'css-loader']
       use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            esModule: true,
          },
        },
        'css-loader',
       ],
      }
    ]
  }
};