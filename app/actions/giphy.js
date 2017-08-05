// @flow
import type { gifsStateType } from '../reducers/giphy';
import axios from 'axios';

type actionType = {
  +type: Array<{}>
};


// ACTION TYPE
export const GET_GIFS = 'GET_GIFS';


// ACTION CREATOR
export function getGifs (gifs) {
  console.log('gifs from thunk',gifs)
  const action = { type: GET_GIFS, gifs };
  return action;
}


// THUNK CREATOR
export function fetchGifs () {
  return function thunk (dispatch) {
    return axios.get('https://api.giphy.com/v1/gifs/search?api_key=f4ee250fb7fc4ccf88cc2260099165c8&q=puppy&limit=25&offset=0&rating=G&lang=en')
      .then(res => res.data)
      .then(gifs => {
        console.log('THUNK',gifs);
        const action = getGifs(gifs.data);
        dispatch(action);
      });
  }
}
