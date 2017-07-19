import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import webpackDevConfig from '../webpack.dev.config';
import appConfig from './config/appConfig';
import Environments from './constants/Environments';
import renderApp from './rendering/renderApp';
import ServerData from './data/ServerData';
import ClientData from './data/ClientData';

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
  }, 1000);
});

app.get('/api/client', (req, res) => {
  setTimeout(() => {
    res.json(ClientData);
  }, 1000);
});

app.get('/server', (req, res) => {
  renderApp(req, res, {
    server: {
      data: ServerData,
    },
  });
});

app.get('/client', (req, res) => {
  renderApp(req, res);
});

app.get('/', (req, res) => {
  renderApp(req, res);
});

app.get('*', (req, res) => { res.redirect('/'); });

app.listen(appConfig.port);
