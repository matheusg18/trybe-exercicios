import React from 'react';
import Pokedex from './components/Pokedex';
import pokemons from './data';

function App() {
  return <Pokedex pokemons={pokemons} />;
}

export default App;
