import webpack from 'webpack';

import appConfig from './server/config/appConfig';

const { port } = appConfig;

export default {
  entry: [
    'react-hot-loader/patch',
    `webpack-hot-middleware/client?http://localhost:${port}`,
    'webpack/hot/only-dev-server',
    './client/javascripts/index.js',
  ],
  output: {
    filename: 'gamerlink.js',
    path: '/',
    publicPath: `http://localhost:${port}/scripts/`,
  },
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
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
