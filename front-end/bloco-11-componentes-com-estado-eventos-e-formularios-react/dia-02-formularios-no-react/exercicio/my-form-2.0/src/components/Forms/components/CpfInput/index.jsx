import React, { Component } from 'react';

export default class CpfInput extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <input
        type="text"
        name="cpf"
        maxLength="11"
        required
        placeholder="CPF"
        onChange={handleChange}
        value={value}
      />
    );
  }
}
