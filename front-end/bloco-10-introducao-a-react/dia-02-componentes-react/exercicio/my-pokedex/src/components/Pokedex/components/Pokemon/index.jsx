import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Pokemon extends Component {
  render() {
    const { pokemon: { name, type, averageWeight, image } } = this.props;

    return (
      <div className="pokemon">
        <img src={image} alt={name} />
        <p>{name}</p>
        <p>{type}</p>
        <p>
          Average weight: {averageWeight.value} {averageWeight.measurementUnit}
        </p>
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    }).isRequired,
    image: PropTypes.string,
  }).isRequired,
};
