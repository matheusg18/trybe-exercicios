import React, { Component } from 'react';

export default class AdressInput extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <input
        type="text"
        name="adress"
        maxLength="200"
        required
        placeholder="Endereço"
        onChange={handleChange}
        value={value}
      />
    );
  }
}
