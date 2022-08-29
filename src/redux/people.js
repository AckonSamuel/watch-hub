import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { useSelector, shallowEqual } from 'react-redux';

const films = useSelector((state) => state.films, shallowEqual);
const peepArr = [];
films.foreach((film) => peepArr.push(film.people));

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
  peeps.map((peep) => async () => {
    const res = await axios.get(peep).then((res) => res.data);
    console.log(res);
    return res;
  },)
);

export {
  FetchPeople,
};

export default peopleReducer;
