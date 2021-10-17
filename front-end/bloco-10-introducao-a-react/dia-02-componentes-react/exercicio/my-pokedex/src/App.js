import React from 'react';
import Pokedex from './components/Pokedex';
import pokemons from './data';
import './style.css'

function App() {
  return (
    <>
      <h1>Pokédex</h1>
      <Pokedex pokemons={pokemons} />
    </>
  );
}

export default App;
