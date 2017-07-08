import path from 'path';

export default {
  entry: './client/javascripts/index.js',
  output: {
    filename: 'gamerlink.js',
    path: path.resolve(__dirname, path.join('public', 'js')),
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader',
        },
      },
    ],
  },
};
