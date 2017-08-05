// @flow
import { GET_GIFS } from '../actions/giphy';

export type gifsStateType = {
  +gifs: Array<{}>
};

type actionType = {
  +type: string
};

const initialState={
    gifs: []
};

export default function gifs(state: gifs = [], action: actionType) {
  switch (action.type) {
    case GET_GIFS:
      return {
        ...state,
        gifs: [...state.gifs, action.gifs]
      };
    default:
      return state;
  }
}
