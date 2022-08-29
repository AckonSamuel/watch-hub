import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_FILMS = 'watch-hub/film/films';
// const POPULATE_FILMS = 'watch-hub/film/populateFilms';

const initialState = [];

const filmReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'watch-hub/film/films/fulfilled':
      return [...action.payload];
    default:
      return state;
  }
};

const FetchFilms = createAsyncThunk(
  FETCH_FILMS,
  async () => {
    const res = await axios.get('https://ghibliapi.herokuapp.com/films');
    console.log(res);
    return res;
  },
);

export {
  FetchFilms,
};

export default filmReducer;
