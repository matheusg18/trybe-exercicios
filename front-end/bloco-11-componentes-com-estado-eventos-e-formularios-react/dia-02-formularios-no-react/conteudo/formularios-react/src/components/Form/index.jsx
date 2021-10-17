import React, { Component } from 'react';
import './style.css';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      senha: '',
    };

    this.handlePasswordInput = this.handlePasswordInput.bind(this);
  }

  handlePasswordInput(event) {
    this.setState({ senha: event.target.value });
  }

  render() {
    const { senha } = this.state;

    return (
      <form>
        <label>
          Melhor tempo:
          <select>
            <option value="nublado">Nublado</option>
            <option value="chuvoso">Chuvoso</option>
            <option value="ensolarado">Ensolarado</option>
          </select>
        </label>
        <label>
          Email input:
          <input type="email" />
        </label>
        <label>
          Senha input:
          <input type="password" value={senha} onChange={this.handlePasswordInput} />
        </label>
        <textarea placeholder="Insira texto aqui..." cols="30" rows="10" />
      </form>
    );
  }
}
