import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_PEOPLE = 'watch-hub/people/people';

const initialState = [];

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'watch-hub/people/people/fulfilled':
      return [...action.payload];
    default:
      return state;
  }
};

const FetchPeople = createAsyncThunk(
  FETCH_PEOPLE,
  async () => {
    const res = await axios.get('https://ghibliapi.herokuapp.com/people').then((res) => res.data);
    console.log(res);
    return res;
  },
);

export {
  FetchPeople,
};

export default peopleReducer;
