var webpack = require('webpack'),
    fs = require('fs'),
    path = require('path');

module.exports = {
  entry: './src/routes.jsx',

  output: {
    path: './build/scripts',
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },

  target: 'node',

  externals: /^[a-z][a-z\.\-0-9]*$/,

  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.local']
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader?stage=1' },
      { test: /\.local$/, exclude: /node_modules/, loader: 'css-loader/locals?module!less-loader' },
      { test: /\.css$/, exclude: /node_modules/, loader: 'null-loader' }
    ]
  }
}
