import { StyleSheetServer } from 'aphrodite';
import { renderToString } from 'react-dom/server';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import React from 'react';
import { StaticRouter } from 'react-router';

import initStore from '../../client/store/initStore';
import App from '../../client/components/App';

function generateMarkup(html, css, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Boilerplate</title>
        <link rel="stylesheet" href="/assets/boilerplate.css" />
        <style data-aphrodite>${css.content}</style>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.preloadedState = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')};
          window.renderedClassNames = ${JSON.stringify(css.renderedClassNames)};
        </script>
        <script src="/assets/boilerplate.js"></script>
      </body>
    </html>
  `;
}

export default function renderApp(req, res, state) {
  const store = initStore(state);
  const routerContext = {};
  const { css, html } = StyleSheetServer.renderStatic(() => (
    renderToString(
      <AppContainer>
        <Provider store={store}>
          <StaticRouter context={routerContext} location={req.url}>
            <App />
          </StaticRouter>
        </Provider>
      </AppContainer>,
    )
  ));

  if (routerContext.url) {
    res.redirect(301, routerContext.url);
  } else {
    res.send(generateMarkup(html, css, store.getState()));
  }
}
