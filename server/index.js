import express from 'express';
import mongoose from 'mongoose';
import fs from 'fs';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import webpackDevConfig from '../webpack.dev.config';
import appConfig from './config/appConfig';
import Environments from './constants/Environments';

const { dbUrl, port, rootPath } = appConfig;

mongoose.connect(dbUrl, { useMongoClient: true });
const modelsPath = `${rootPath}/server/models`;
fs.readdirSync(modelsPath).forEach((file) => {
  if (file.includes('.js')) {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    require(`${modelsPath}/${file}`);
  }
});

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

app.set('views', `${rootPath}/server/views`);
app.set('view engine', 'pug');
app.get('/', (req, res) => {
  res.render('index', { scriptUrl: '/scripts/gamerlink.js' });
});
app.listen(port);
