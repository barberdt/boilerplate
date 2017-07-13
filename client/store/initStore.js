import { applyMiddleware, compose, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import rootReducer from '../reducers/rootReducer';

const middleware = [];
const createStoreWithEnhancers = compose(
  applyMiddleware(...middleware),
  devToolsEnhancer(),
)(createStore);

export default function initStore(preloadedState) {
  return createStoreWithEnhancers(rootReducer, preloadedState);
}
