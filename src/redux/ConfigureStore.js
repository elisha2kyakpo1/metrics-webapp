import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { loadingBarReducer } from 'react-redux-loading-bar';
import thunk from 'redux-thunk';
import { MetricsReducer } from './metrics/Metrics';

const reducer = combineReducers({
  MetricsReducer,
  loadingBarReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);
export default store;
