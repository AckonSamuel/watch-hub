import React from 'react';
import PropTypes from 'prop-types';
import Film from './Film';
import './filmlist.css';

const Filmlist = ({ films, searchText, filtered }) => {
  if (filtered.length === 0 && searchText.length !== 0) {
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
  films: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  searchText: PropTypes.string.isRequired,
  filtered: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};

export default Filmlist;
