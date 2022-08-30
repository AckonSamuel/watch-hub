import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Details from './components/details/Details';
import { FetchFilms } from './redux/film';
import './App.css';

const App = () =>{ 

  const dispatch = useDispatch();
  const films = useSelector((state) => state.films, shallowEqual);

  useEffect(() => { dispatch(FetchFilms()); }, []);

  return (
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Homepage films={films}/>} />
    <Route path="/details/:title" element={<Details films={films}/>} />
  </Routes>
</BrowserRouter>
)};

export default App;
