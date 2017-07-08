import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

global.document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    global.document.getElementById('container'),
  );
});
