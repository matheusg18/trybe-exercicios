import React, { Component } from 'react';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import './style.css';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      tempo: '',
      senha: '',
      email: '',
      textArea: '',
      check: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value });
  }

  render() {
    const { senha, tempo, email, textArea, check } = this.state;

    return (
      <form>
        <label>
          Melhor tempo:
          <select name="tempo" value={tempo} onChange={this.handleChange}>
            <option value="nublado">Nublado</option>
            <option checked value="chuvoso">
              Chuvoso
            </option>
            <option value="ensolarado">Ensolarado</option>
          </select>
        </label>
        <label>
          <input type="checkbox" name="check" checked={check} onChange={this.handleChange} />
          Sim ou não?
        </label>
        <fieldset>
          <EmailInput value={email} handleChange={this.handleChange} />
          <PasswordInput value={senha} handleChange={this.handleChange} />
        </fieldset>
        <textarea
          name="textArea"
          value={textArea}
          onChange={this.handleChange}
          cols="30"
          rows="10"
        />
        <input type="file" />
      </form>
    );
  }
}
