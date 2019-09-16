import React, { useState, useEffect } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import axios from 'axios';

const Character = ({
    name, 
    birth_year, 
    homeworld, 
    height, 
    mass, 
    eye_color, 
    skin_color,
    species,
    starships,
    vehicles,
    films,
  }) => {

  const [planet, setPlanet] = useState('');

  useEffect(() => {
    axios
      .get(homeworld)
      .then(res => setPlanet(res.data.name))
      .catch(error => console.log('error', error));
      // console.log(homeworld)
  }, []);
    
  return (
    <div className='card-center'>
      <Card className='card'>
        <CardTitle>{name}</CardTitle>
        <CardSubtitle>Birth Year: {birth_year}</CardSubtitle>
        <CardSubtitle>Height: {height}</CardSubtitle>
        <CardSubtitle>Mass: {mass}</CardSubtitle>
        <CardSubtitle>eye_color: {eye_color}</CardSubtitle>
        <CardSubtitle>skin_color: {skin_color}</CardSubtitle>
        <CardSubtitle>homeworld: {planet} </CardSubtitle>
      </Card>
    </div>
  );
}

export default Character;