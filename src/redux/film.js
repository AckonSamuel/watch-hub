import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_FILMS = 'watch-hub/film/films';
const FILTER_FILMS = 'watch-hub/film/filter';
const SEARCH_TEXT = 'watch-hub/search_text';

const initialState = {
  film: [],
  filters: [],
  search: '',
};

const filmReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'watch-hub/film/films/fulfilled':
      return {
        ...state,
        film: [...action.payload],
      };
    case FILTER_FILMS:
      const filteredFilms = state.film
        .filter((film) => film.title
          .toLowerCase().includes(action.payload.toLowerCase()));
      return {
        ...state,
        filters: action.payload === '' ? [] : filteredFilms,
      };
    case SEARCH_TEXT: 
    return {
      ...state,
      search: action.payload,
    }
    default:
      return state;
  }
};

const FetchFilms = createAsyncThunk(
  FETCH_FILMS,
  async () => {
    const res = await axios.get('https://ghibliapi.herokuapp.com/films').then((res) => res.data);
    console.log(res);
    return res;
  },
);

const FilterFilms = (title) => ({
  type: FILTER_FILMS,
  payload: title,
});

const SearchText = (text) => ({
  type: SEARCH_TEXT,
  payload: text,
});

export {
  FetchFilms,
  FilterFilms,
  SearchText,
};

export default filmReducer;
