import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Banner from './film/Banner';
import Filmlist from './film/Filmlist';

const Homepage = () => (
  <section>
    <Row>
      <Banner />
    </Row>
    <Row>
      <Filmlist />
    </Row>
  </section>
);

export default Homepage;
