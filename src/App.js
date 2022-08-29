import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Filmlist from './components/film/Filmlist';
import Details from './components/details/Details';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Filmlist />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  </BrowserRouter>
);

export default App;
