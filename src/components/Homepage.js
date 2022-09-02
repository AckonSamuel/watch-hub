import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Banner from './film/Banner';
import Filmlist from './film/Filmlist';
import Navbar from './Navbar';

const Homepage = ({
  films, textListener, filtered, searchText,
}) => (
  <>
    <Navbar textListener={textListener} searchText={searchText} />
    <Container style={{ zIndex: '10' }}>
      <Row style={{ height: '30%' }}>
        <Banner films={films} />
      </Row>
      <Row>
        <Filmlist films={films} searchText={searchText} filtered={filtered} />
      </Row>
    </Container>
  </>
);

Homepage.propTypes = {
  films: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  filtered: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  searchText: PropTypes.string.isRequired,
  textListener: PropTypes.func.isRequired,
};

export default Homepage;
