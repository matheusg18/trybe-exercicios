import React, { Component } from 'react';

export default class PasswordInput extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <input
        name="senha"
        type="password"
        value={value}
        onChange={handleChange}
        placeholder="Senha"
      />
    );
  }
}
