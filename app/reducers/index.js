// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import giphy from './giphy';

const rootReducer = combineReducers({
  counter,
  giphy,
  router,
});

export default rootReducer;
