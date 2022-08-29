import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Film = ({
  id, title, origin, origin_romanised, image,
}) => (
  <Card id={id} border="primary" style={{ width: '18rem' }}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Subtitle>
        {origin}
      </Card.Subtitle>
      <Card.Text>
        {origin_romanised}
      </Card.Text>
      <Button as="a" variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
);

export default Film;
