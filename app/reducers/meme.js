// @flow
import { SET_GIF } from '../actions/meme';

export type gifsStateType = {
  +gifs: Array
};

type actionType = {
  +type: string
};


export default function giphy(state:selectedGif={}, action: actionType) {
  switch (action.type) {
    case SET_GIF:
      return action.selectedGif;
    default:
      return state;
  }
}
