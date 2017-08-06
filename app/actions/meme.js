// @flow
import axios from 'axios';

type actionType = {
  +type: Array<{}>
};


// ACTION TYPE
export const SET_GIF = 'SET_GIF';


// ACTION CREATOR
export function setGif (selectedGif) {
  const action = { type: SET_GIF, selectedGif };
  return action;
}

export function setSelectedGif(evt){
  console.log('selectedGif', evt);
}

