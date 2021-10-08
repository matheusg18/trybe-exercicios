import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Pokemon from './components/Pokemon';

export default class Pokedex extends Component {
  render() {
    const { pokemons } = this.props;

    return (
      <div className="pokedex">
        {pokemons.map((pokemon, index) => <Pokemon pokemon={pokemon} key={index}/>)}
      </div>
    )
  }
}

Pokemon.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      averageWeight: PropTypes.shape({
        value: PropTypes.number.isRequired,
        measurementUnit: PropTypes.string.isRequired,
      }).isRequired,
      image: PropTypes.string,
    })
  ),
};
