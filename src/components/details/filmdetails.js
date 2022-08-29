import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { FetchFilms } from '../../redux/film';
import DetailSkeleton from './DetailSkeleton';
import '../film/filmlist.css';

const Filmlist = () => {
  const dispatch = useDispatch();
  const films = useSelector((state) => state.films, shallowEqual);

  useEffect(() => { dispatch(FetchFilms()); }, []);

  return (
    <section className="container">
      {
    films.map((film) => (
      <DetailSkeleton
        key={film.id}
        id={film.id}
        title={film.title}
        origin={film.original_title}
        origin_romanised={film.original_title_romanised}
        image={film.image}
      />
    ))
  }
    </section>
  );
};
export default Filmlist;