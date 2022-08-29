import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './filmlist.css';

const Banner = () => {
    const films = useSelector((state) => state.films, shallowEqual);
    const imgArray = [];
    films.forEach(film => {
      imgArray.push(film.image)  
    });

    const randomNum = Math.floor(Math.random() * imgArray.length);

    return (<section>
    </section>)
}
