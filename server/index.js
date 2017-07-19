import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import webpackDevConfig from '../webpack.dev.config';
import appConfig from './config/appConfig';
import Environments from './constants/Environments';
import renderApp from './rendering/renderApp';
import ServerData from './data/ServerData';

const app = express();

if (process.env.NODE_ENV === Environments.DEVELOPMENT) {
  const compiler = webpack(webpackDevConfig);
  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackDevConfig.output.publicPath,
    stats: { colors: true },
    noInfo: true,
  }));
  app.use(webpackHotMiddleware(compiler));
}

app.get('/api/server', (req, res) => {
  setTimeout(() => {
    res.json(ServerData);
  }, 5000);
});

app.get('/server', (req, res) => {
  renderApp(req, res, {
    server: {
      data: ServerData,
    },
  });
});

app.get('*', (req, res) => { renderApp(req, res); });

app.listen(appConfig.port);
