// @flow
import { GET_GIFS } from '../actions/giphy';

export type gifsStateType = {
  +gifs: Array
};

type actionType = {
  +type: string
};

const initialState={
    gifs: []
};

export default function giphy(state:gifs=[], action: actionType) {
  console.log('state', state, action.gifs);
  switch (action.type) {
    case GET_GIFS:
      return action.gifs;
    default:
      return state;
  }
}
