import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Film = ({
  id, title, origin, origin_romanised, image,
}) => (
  <Card bg='dark' id={id} border="dark" style={{ width: '18rem', height: '28rem'}}>
    <Card.Img variant="top" src={image} style={{ width: '17.8rem', height: '18rem', margin: 'auto' }}/>
    <Card.Body style={{color: '#dfdfdf'}}>
      <Card.Title>{title}</Card.Title>
      <Card.Subtitle >
        {origin}
      </Card.Subtitle>
      <Card.Text style={{color: '#dfdfdf'}}>
        {origin_romanised}
      </Card.Text>
      <Button as="a" variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
);

export default Film;
