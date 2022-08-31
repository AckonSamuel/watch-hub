import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Details from './components/details/Details';
import { FetchFilms, FilterFilms, SearchText } from './redux/film';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  let films = useSelector((state) => state.films.film, shallowEqual);

  useEffect(() => { dispatch(FetchFilms()); }, []);

  const textListener = (title) => {
    dispatch(FilterFilms(title));
    dispatch(SearchText(title));
  };
  const filtered = useSelector((state) => state.films.filters, shallowEqual);
  const searchText = useSelector((state) => state.films.search, shallowEqual);

  if( filtered.length !== 0 )
      { films = filtered;}

console.log(filtered);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage films={films} filtered={filtered} textListener={textListener} searchText={searchText} />} />
        <Route path="/details/:title" element={<Details films={films} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
