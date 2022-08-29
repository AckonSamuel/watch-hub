import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './filmlist.css';

const Film = ({
  id, title, origin, origin_romanised, image,
}) => {
  
  const navigate = useNavigate();

  const navigateToDetails = () => {
    navigate('/details');
  };

  return (
  <Card className="card" id={id} border="dark" style={{ marginTop: '3%', width: '30%', height: '50%' }}>
    <Card.Img variant="top" src={image} style={{ width: '90%', height: '50%', margin: 'auto' }} />
    <Card.Body style={{ color: '#dfdfdf', fontSize: '0.9em' }}>
      <Card.Title>{title}</Card.Title>
      <Card.Subtitle>
        {origin}
      </Card.Subtitle>
      <Card.Text>
        {origin_romanised}
      </Card.Text>
      <Button as="a" 
      variant="primary" 
      onClick={navigateToDetails}
      style={{ width: '90%', height: '20%', margin: 'auto' }}>
        Explore
        {'>'}
        {'>'}
        {'>'}
      </Button>
    </Card.Body>
  </Card>
)};

export default Film;
