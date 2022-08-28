import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import download from './download.jpg';

const Film = () => (
  <Card border="primary" style={{ width: '18rem' }}>
    <Card.Img variant="top" src={download} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text
        to build on the card title
        and make up the bulk of the card content.
      </Card.Text>
      <Button as="a" variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
);

export default Film;
