import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
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
        <Navbar.Brand style={{ marginLeft: '1.5%' }}>
          <ArrowBackIcon
            className="arrow"
            fontSize="large"
            color="action"
            onClick={() => goHome()}
          />
        </Navbar.Brand>
      </Navbar>
      <section className="detail">
        <div className="innerdetail">
          {
            films
              .filter((film) => film.title === title)
              .map((film) => (
                <Card key={film.id} style={{ width: '100%' }}>
                  <Card.Img variant="top" alt="anime photo" src={film.movie_banner} />
                  <Card.Body style={{ background: 'rgb(39, 38, 38)', color: '#dfdfdf' }}>
                    <Card.Title style={{ marginTop: '3%', marginBottom: '3%' }}>{film.title}</Card.Title>
                    <Card.Subtitle style={{ marginBottom: '3%' }}>
                      <span>Original Title</span>
                      {' '}
                      <p>{film.original_title}</p>
                    </Card.Subtitle>
                    <Card.Subtitle style={{ marginBottom: '3%' }}>
                      <span>Original Title Romanised</span>
                      {' '}
                      <p>{film.original_title_romanised}</p>
                    </Card.Subtitle>
                    <Card.Text>
                      <span>Description</span>
                      <p>{film.description}</p>
                    </Card.Text>
                    <Card.Text>
                      <span>Description</span>
                      <p>{film.director}</p>
                    </Card.Text>
                    <Card.Text>
                      <span>Producer</span>
                      <p>{film.producer}</p>
                    </Card.Text>
                    <Card.Text>
                      <span>Release date</span>
                      <p>{film.release_date}</p>
                    </Card.Text>
                    <Card.Text>
                      <span>Running Title</span>
                      <p>{film.running_time}</p>
                    </Card.Text>
                    <Card.Text>
                      <span>Rt Score</span>
                      <p>{film.rt_score}</p>
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
