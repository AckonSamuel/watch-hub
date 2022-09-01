import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Card from 'react-bootstrap/Card';
import './details.css';

const Details = ({ films }) => {
  const { title } = useParams();
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <>
      {' '}
      <Navbar bg="dark" expand="lg">
        <Container>
          <ArrowBackIcon
            className="arrow"
            fontSize="large"
            color="action"
            onClick={() => goHome()}
          />
        </Container>
      </Navbar>
      <section className="detail">
        <div className="innerdetail">
          {
          films
            .filter((film) => film.title === title)
            .map((film) => (
              <Card key={film.id} style={{ width: '70%', margin: 'auto' }}>
                <Card.Img variant="top" alt="anime photo" src={film.movie_banner} />
                <Card.Body style={{ background: 'rgb(39, 38, 38)', color: '#dfdfdf' }}>
                  <Card.Title style={{ marginTop: '3%', marginBottom: '3%' }}>{film.title}</Card.Title>
                  <Card.Subtitle style={{ marginBottom: '3%' }}>
                    {film.original_title}
                  </Card.Subtitle>
                  <Card.Subtitle style={{ marginBottom: '3%' }}>
                    {film.original_title_romanised}
                  </Card.Subtitle>
                  <Card.Text>
                    {film.description}
                  </Card.Text>
                  <Card.Text>
                    Director:
                    {' '}
                    {film.director}
                  </Card.Text>
                  <Card.Text>
                    Producer:
                    {' '}
                    {film.producer}
                  </Card.Text>
                  <Card.Text>
                    Release date:
                    {' '}
                    {film.release_date}
                  </Card.Text>
                  <Card.Text>
                    Length:
                    {' '}
                    {film.running_time}
                  </Card.Text>
                  <Card.Text>
                    Score:
                    {' '}
                    {film.rt_score}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))
}
          ;
        </div>
      </section>
    </>
  );
};

Details.propTypes = {
  films: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};

export default Details;
