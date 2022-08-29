import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { FetchFilms } from '../redux/film';
import Film from './Film';

const Filmlist = () => {
  
  const dispatch = useDispatch();
  useEffect(() => dispatch(FetchFilms()), []);
  const films = useSelector((state) => state.films, shallowEqual);

  
  return (
    films.map((film) => {
      <Film 
      key={film.id}
      title={film.title}
      origin={film.original_title}
      origin_romanised={film.original_title_romanised}
      image={film.image}
      />
    })
);
}
export default Filmlist;
