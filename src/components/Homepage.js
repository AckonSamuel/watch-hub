import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Banner from './film/Banner';
import Filmlist from './film/Filmlist';

const Homepage = ({films}) => (
  <Container>
    <Row style={{ height: '30%' }}>
      <Banner films={films} />
    </Row>
    <Row>
      <Filmlist films={films} />
    </Row>
  </Container>
);

export default Homepage;
