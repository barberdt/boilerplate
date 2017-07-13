import express from 'express';
// import mongoose from 'mongoose';
// import fs from 'fs';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import { renderToString } from 'react-dom/server';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import React from 'react';
import { StaticRouter } from 'react-router';
import { StyleSheetServer } from 'aphrodite';

import webpackDevConfig from '../webpack.dev.config';
import appConfig from './config/appConfig';
import Environments from './constants/Environments';
import initStore from '../client/store/initStore';
import App from '../client/components/App';

const { port } = appConfig;

// mongoose.connect(dbUrl, { useMongoClient: true });
// const modelsPath = `${rootPath}/server/models`;
// fs.readdirSync(modelsPath).forEach((file) => {
//   if (file.includes('.js')) {
//     // eslint-disable-next-line global-require, import/no-dynamic-require
//     require(`${modelsPath}/${file}`);
//   }
// });

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

app.get('*', (req, res) => {
  const store = initStore({ test: { foo: 'Davis' } });
  const context = {};
  const { css, html } = StyleSheetServer.renderStatic(() => (
    renderToString(
      <AppContainer>
        <Provider store={store}>
          <StaticRouter context={context} location={req.url}>
            <App />
          </StaticRouter>
        </Provider>
      </AppContainer>,
    )
  ));
  const preloadedState = store.getState();
  res.send(`
    <!doctype html>
    <html>
      <head>
        <title>GamerLink</title>
        <style data-aphrodite>${css.content}</style>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.preloadedState = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')};
          window.renderedClassNames = ${JSON.stringify(css.renderedClassNames)};
        </script>
        <script src="/scripts/gamerlink.js"></script>
      </body>
    </html>
  `);
});
app.listen(port);
