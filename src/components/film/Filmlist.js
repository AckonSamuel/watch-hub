import React from 'react';
import PropTypes from 'prop-types';
import Film from './Film';
import './filmlist.css';

const Filmlist = ({ films, searchText, filtered }) => {
  if (filtered.length === 0 && searchText.length !== 0) {
    console.log(searchText.length);
    return <h1>Oops! Search not found</h1>;
  }
  return (
    <section className="container">
      {

        (films.map((film) => (
          <Film
            key={film.id}
            id={film.id}
            title={film.title}
            image={film.image}
          />
        )))
      }
    </section>
  );
};

Filmlist.propTypes = {
  films: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  searchText: PropTypes.string.isRequired,
  filtered: PropTypes.string.isRequired,
};

export default Filmlist;
