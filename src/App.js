import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Hola from './components/details/filmdetails';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/details" element={<Hola />} />
    </Routes>
  </BrowserRouter>
);

export default App;
