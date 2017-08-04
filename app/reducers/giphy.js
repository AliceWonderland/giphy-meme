// @flow
import { GET_GIFS } from '../actions/giphy';

export type counterStateType = {
  +counter: number
};

type actionType = {
  +type: string
};

const initialState={
    gifs: []
};

export default function counter(state: gifs = [], action: actionType) {
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
