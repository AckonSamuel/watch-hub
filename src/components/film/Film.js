import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import './filmlist.css';

const Film = ({
  id, title, image,
}) => {
  const navigate = useNavigate();

  const goTo = (sm) => {
    navigate(sm);
  };

  return (
    <Card
      className="cardi"
      id={id}
      border="dark"
      style={{
        marginLeft: '4%', marginTop: '3%', width: '20%', height: '17%',
      }}
    >
      <Card.Img
        variant="top"
        onClick={() => goTo(`/details/${title}`)}
        src={image}
        style={{ cursor: 'pointer', width: '100%', height: 'auto' }}
      />
    </Card>
  );
};

Film.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Film;
