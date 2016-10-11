'use strict';

const webpack = require('webpack');
const path = require('path');

const config = {
  devtool: 'eval',
  entry: [
    './src/app.js'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.png', '.jpg']
  },

  plugins: [
  ],

  module: {

    preLoaders: [
      { test: /\.js$/, loaders: ['eslint'], include: [new RegExp(path.join(__dirname, 'src'))] }
    ],

    loaders: [
      { test: /\.jsx?/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
      { test: /\.(jpe?g|png|gif|svg)$/i, loaders: [ 'url?limit=8192', 'img'] },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      { test: /\.(jpe?g|png|gif|svg)$/i, loaders: [ 'url?limit=8192', 'img'] }
    ]
  },
  eslint: {
    configFile: './.eslintrc'
  }
};

module.exports = config;
