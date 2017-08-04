// @flow
import type { counterStateType } from '../reducers/giphy';

type actionType = {
  +type: string
};


// ACTION TYPE
export const GET_GIFS = 'GET_GIFS';


// ACTION CREATOR
export function getGifs (gifs) {
  const action = { type: GET_GIFS, gifs };
  return action;
}


// THUNK CREATOR
export function fetchGifs () {
  return function thunk (dispatch) {
    return axios.get('https://api.giphy.com/v1/gifs/search?api_key=f4ee250fb7fc4ccf88cc2260099165c8&q=puppy&limit=25&offset=0&rating=G&lang=en')
      .then(res => res.data)
      .then(gifs => {
        const action = getGifs(gifs);
        dispatch(action);
      });
  }
}
