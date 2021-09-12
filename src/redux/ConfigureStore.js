import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { MetricsReducer } from './metrics/Metrics';

const reducer = combineReducers({
  MetricsReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);
export default store;
