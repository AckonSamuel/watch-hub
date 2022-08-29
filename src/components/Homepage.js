import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Banner from './film/Banner';
import Filmlist from './film/Filmlist';

const Homepage = () => (
  <Container>
    <Row style={{ height: '30%' }}>
      <Banner />
    </Row>
    <Row>
      <Filmlist />
    </Row>
  </Container>
);

export default Homepage;
