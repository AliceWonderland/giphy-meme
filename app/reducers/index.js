// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import gifs from './giphy';

const rootReducer = combineReducers({
  counter,
  gifs,
  router,
});

export default rootReducer;
