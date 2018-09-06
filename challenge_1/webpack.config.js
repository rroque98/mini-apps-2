const path = require('path');

module.exports = {
  entry: `${__dirname}/client/src/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/client/dist`,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
