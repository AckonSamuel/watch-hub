import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Hola from './components/details/filmdetails';
import { FetchFilms } from './redux/film';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(FetchFilms()); });
  const films = useSelector((state) => state.films, shallowEqual);
  console.log(films);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage films={films} />} />
        <Route path="/details/:title" element={<Hola films={films} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
