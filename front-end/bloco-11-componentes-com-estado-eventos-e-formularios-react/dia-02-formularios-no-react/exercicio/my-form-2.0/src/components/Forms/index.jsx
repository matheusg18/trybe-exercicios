import React, { Component } from 'react';
import AdressInput from './components/AdressInput';
import CpfInput from './components/CpfInput';
import EmailInput from './components/EmailInput';
import NameInput from './components/NameInput';

export default class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      cpf: '',
      adress: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    let value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value });
  }

  render() {
    const { name, email, cpf, adress } = this.state;

    return (
      <form>
        <fieldset>
          <NameInput handleChange={this.handleChange} value={name} />
          <EmailInput handleChange={this.handleChange} value={email} />
          <CpfInput handleChange={this.handleChange} value={cpf} />
          <AdressInput handleChange={this.handleChange} value={adress} />
        </fieldset>
        <button type="submit">Enviar</button>
      </form>
    );
  }
}
