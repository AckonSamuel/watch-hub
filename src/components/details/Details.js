import React from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Details = ({ films }) =>{ 
  
  const { title } = useParams();
  return (
    <section className='detail'>
      <div className='innerdetail'>
        {
          films
          .filter((film) => film.title === title)
          .map((film) =>  <Card key={film.id} style={{ width: '80%' }}>
          <Card.Img variant="top" src={film.movie_banner} />
          <Card.Body style={{ color: '#dfdfdf'}}>
            <Card.Title>{film.title}</Card.Title>
            <Card.Subtitle>
              {film.original_title}
            </Card.Subtitle>
            <Card.Subtitle>
              {film.original_title_romanised}
            </Card.Subtitle>
            <Card.Text>
            {film.description}
            </Card.Text>
            <Card.Text>
           Director: {film.director}
            </Card.Text>
            <Card.Text>
           Producer: {film.producer}
            </Card.Text>
            <Card.Text>
           Release date: {film.release_date}
            </Card.Text>
            <Card.Text>
          Length: {film.running_time}
            </Card.Text>
            <Card.Text>
           Score: {film.rt_score}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      )};
      </div>
    </section>
)};

export default Details;
