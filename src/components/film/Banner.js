import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import './filmlist.css';

const Banner = () => {
  const films = useSelector((state) => state.films, shallowEqual);
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
        style={{
          width: '100%', height: '100%', objectFit: 'cover', margin: '0',
        }}
      />
    </Card>
  );
};

export default Banner;
