module.exports = {
  entry: './client/app.jsx',

  output: {
    path: './build/scripts',
    filename: 'client.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.local']
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader?optional=runtime&stage=1' },
      { test: /\.local$/, loader: 'style-loader!css-loader?module!less-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  }
};
