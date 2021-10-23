import React, { Component } from 'react';

export default class NameInput extends Component {
  constructor(props) {
    super(props);

    this.toUpperChange = this.toUpperChange.bind(this);
  }

  toUpperChange(event) {
    const { handleChange } = this.props;
    const newEvent = { ...event };

    newEvent.target.value = event.target.value.toUpperCase();

    handleChange(newEvent);
  }

  render() {
    const { value } = this.props;

    return (
      <input
        type="text"
        name="name"
        maxLength="40"
        required
        placeholder="Nome"
        onChange={this.toUpperChange}
        value={value}
      />
    );
  }
}
