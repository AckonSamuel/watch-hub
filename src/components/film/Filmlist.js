import React from 'react';
import Film from './Film';
import './filmlist.css';

const Filmlist = ({ data }) => (
  <section className="container">
    {
    data.map((film) => (
      <Film
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

export default Filmlist;
