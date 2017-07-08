import express from 'express';
import mongoose from 'mongoose';
import fs from 'fs';

import appConfig from './config/appConfig';

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

app.set('views', `${rootPath}/server/views`);
app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.render('index', { scriptUrl: '/js/gamerlink.js' });
});
app.listen(port);
