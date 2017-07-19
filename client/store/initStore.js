import { applyMiddleware, compose, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reduxThunkMiddleware from 'redux-thunk';
import { middleware as reduxPackMiddleware } from 'redux-pack';

import rootReducer from '../reducers/rootReducer';

const middleware = [reduxThunkMiddleware, reduxPackMiddleware];
const createStoreWithEnhancers = compose(
  applyMiddleware(...middleware),
  devToolsEnhancer(),
)(createStore);

export default function initStore(preloadedState) {
  return createStoreWithEnhancers(rootReducer, preloadedState);
}
