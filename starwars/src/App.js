import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Character from './components/Character/Character';
import NextPage from './components/NextPage/NextPage';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState([]);
  // const [next, setNext] = (0);

  useEffect(() => {
    axios.all([
      axios.get('https://swapi.co/api/people/'),
      axios.get('https://swapi.co/api/planets/')
    ])
    .then(axios.spread((characterRes, planetRes) => {
      console.log(characterRes);
      console.log(planetRes);
      const characters = characterRes.data.results;
      const planets = planetRes.data.results;
      setData(characters);
      setPlanets(planets);
    }))
    .catch(error => {
      console.log('Data not returned', error);
    })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {data.map((character, index) => (
        <Character 
          key={index} 
          name={character.name}
          birth_year={character.birth_year}
          height={character.height}
          mass={character.mass}
          eye_color={character.eye_color}
          skin_color={character.skin_color}
        />
      ))}
      <NextPage />
    </div>
  );
}

export default App;
