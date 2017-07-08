import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import initStore from '../store/initStore';
import TestContainer from '../containers/TestContainer';

const propTypes = {
  preloadedState: PropTypes.object,
};

const defaultProps = {
  preloadedState: {},
};

export default function App({ preloadedState }) {
  return (
    <Provider store={initStore(preloadedState)}>
      <TestContainer />
    </Provider>
  );
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;
