// @flow
import { GET_GIFS } from '../actions/giphy';

export type gifsStateType = {
  +gifs: Array<>
};

type actionType = {
  +type: string
};

const initialState={
    gifs: []
};

export default function giphy(state:gifs=[], action: actionType) {
  console.log('state', state, action);
  switch (action.type) {
    case GET_GIFS:
      return action.gifs
      // return {
      //   ...state,
      //   gifs: [...state, action.gifs]
      // };
    default:
      return state;
  }
}
