import React, { Component } from 'react';

export default class EmailInput extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <input type="email" name="email" value={value} onChange={handleChange} placeholder="Email" />
    );
  }
}
