"use strict";
const path = require('path');
const loaders = [
  {
    test: /\.js/,
    loaders: ['babel-loader'],
    exclude: /node_modules/
  }
];

module.exports = {
  entry: {
    app: [
      './src/morse/index.js'
    ]
  },
  target: 'node',
  devtool: 'none',
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'build'),
    filename: 'morse.js'
  },
  resolve: {
    extensions: ['.js'],
    modules: [
      path.join(__dirname, 'src'),
      path.join(__dirname, 'node_modules')
    ]
  },
  module: {
    loaders
  }
};