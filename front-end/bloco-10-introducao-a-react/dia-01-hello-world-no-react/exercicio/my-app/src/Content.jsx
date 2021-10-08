import { Component } from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido',
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei',
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei',
  },
];

const createParagraph = ({ conteudo, bloco, status }) => (
  <p>
    O conteudo é: {conteudo} <br />
    Status: {status} <br />
    Bloco: {bloco}
  </p>
);

class Content extends Component {
  render() {
    return <div>{conteudos.map((element) => createParagraph(element))}</div>;
  }
}

export default Content;
