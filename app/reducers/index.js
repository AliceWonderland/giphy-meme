// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import gifs from './giphy';
import selectedGif from './meme';

const rootReducer = combineReducers({
  counter,
  gifs,
  selectedGif,
  router,
});

export default rootReducer;
