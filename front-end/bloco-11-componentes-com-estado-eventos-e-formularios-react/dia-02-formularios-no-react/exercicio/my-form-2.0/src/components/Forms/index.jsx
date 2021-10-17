import React, { Component } from 'react';

export default class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    let value = target.type === 'checkbox' ? target.checked : target.value;

    if (name === 'name') value = value.toUpperCase();

    this.setState({ [name]: value });
  }

  render() {
    const { name } = this.state;

    return (
      <form>
        <fieldset>
          <input
            type="text"
            name="name"
            maxLength="40"
            required
            placeholder="Nome"
            onChange={this.handleChange}
            value={name}
          />
        </fieldset>
        <button type="submit">Enviar</button>
      </form>
    );
  }
}
