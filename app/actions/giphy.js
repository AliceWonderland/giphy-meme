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
  const action = { type: GET_GIFS, gifs };
  return action;
}

export function selectGif(selectedGif){
  console.log('selectedGif',selectedGif);
}

// THUNK CREATOR
export function fetchGifs (search='puppy') {
  console.log('inside fetchGifs');
  return function thunk (dispatch) {
    return axios.get('https://api.giphy.com/v1/gifs/search?api_key=f4ee250fb7fc4ccf88cc2260099165c8&q='+search+'&limit=20&offset=0&rating=G&lang=en')
      .then(res => {
        // console.log(res.data);
        return res.data;
      })
      .then(gifs => {
        console.log('gifs thunk',search,gifs);
        const action = getGifs(gifs.data);
        dispatch(action);
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }
}
