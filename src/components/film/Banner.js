import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import './filmlist.css';

const Banner = () => {
    const films = useSelector((state) => state.films, shallowEqual);
    const imgArray = [];
    films.forEach(film => {
      imgArray.push(film.image)  
    });

    const randomNum = Math.floor(Math.random() * imgArray.length);

    return (<Card style={{ margin: '3%', width: 'auto', height: 'auto'}}>
        <Card.Img variant="top" src={imgArray[randomNum]} 
        style={{ margin: '3%', width: 'auto', height: 'auto'}} />
    </Card>)
}

export default Banner;