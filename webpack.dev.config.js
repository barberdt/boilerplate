import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import appConfig from './server/config/appConfig';

const { port } = appConfig;

export default {
  entry: [
    'react-hot-loader/patch',
    `webpack-hot-middleware/client?http://localhost:${port}`,
    'webpack/hot/only-dev-server',
    'whatwg-fetch',
    './client/styles/gamerlink.css',
    './client/index.js',
  ],
  output: {
    filename: 'gamerlink.js',
    path: '/',
    publicPath: `http://localhost:${port}/assets/`,
  },
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('gamerlink.css'),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
          { loader: 'eslint-loader' },
        ],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader',
        }),
      },
    ],
  },
};
