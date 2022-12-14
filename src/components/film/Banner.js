import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import './filmlist.css';

const Banner = ({ films }) => {
  const imgArray = [];
  films.forEach((film) => {
    imgArray.push(film.movie_banner);
  });

  const randomNum = Math.floor(Math.random() * imgArray.length);

  return (
    <Card style={{ width: '100%', height: '100%', padding: '0' }}>
      <Card.Img
        variant="top"
        src={imgArray[randomNum]}
        alt="anime photo"
        style={{
          width: '100%', height: '100%', objectFit: 'cover', margin: '0',
        }}
      />
    </Card>
  );
};

Banner.propTypes = {
  films: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};

export default Banner;
