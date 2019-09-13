import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

function Character(
  {
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
  }) {
    
  console.log(homeworld);
  return (
    <div className='card-center'>
    <Card className='card'>
      <CardTitle>{name}</CardTitle>
      <CardSubtitle>Birth Year: {birth_year}</CardSubtitle>
      <CardSubtitle>Height: {height}</CardSubtitle>
      <CardSubtitle>Mass: {mass}</CardSubtitle>
      <CardSubtitle>eye_color: {eye_color}</CardSubtitle>
      <CardSubtitle>skin_color: {skin_color}</CardSubtitle>
    </Card>
    </div>
  );
}

export default Character;