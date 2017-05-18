"use strict";
const path = require('path');

module.exports = {
  entry: './src/morse/index.js',
  output: {
    filename: 'morse.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },

  target: 'node'
  
};