import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
// eslint-disable-next-line no-unused-vars
// import normalizeCss from 'normalize.css';
import { BrowserRouter } from 'react-router-dom';
import { StyleSheet } from 'aphrodite';

import App from './components/App';
import initStore from './store/initStore';

const renderedClassNames = global.window.renderedClassNames;
delete global.window.renderedClassNames;
StyleSheet.rehydrate(renderedClassNames);

const preloadedState = global.window.preloadedState;
delete global.window.preloadedState;
const store = initStore(preloadedState);

function render(Component) {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    global.document.getElementById('root'),
  );
}

global.document.addEventListener('DOMContentLoaded', () => {
  render(App);
});

if (module.hot) {
  module.hot.accept('./components/App', () => {
    // eslint-disable-next-line
    render(require('./components/App').default);
  });
}
