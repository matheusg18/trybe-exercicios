import React, { Component } from 'react';

export default class EmailInput extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <input
        type="text"
        name="email"
        maxLength="50"
        required
        placeholder="Email"
        onChange={handleChange}
        value={value}
      />
    );
  }
}
