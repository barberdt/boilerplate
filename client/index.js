import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import normalizeCss from 'normalize.css';

import App from './components/App';
import initStore from './store/initStore';

const store = initStore();
function render(Component) {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    global.document.getElementById('container'),
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
