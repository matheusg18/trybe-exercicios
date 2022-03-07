const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const app = require('../index');
const { Book } = require('../models');

chai.use(chaiHttp);
const { expect } = chai;

const fakeBooks = [
  {
    id: 2,
    title: 'Meu Pé de Laranja Lima',
    author: 'José Mauro de Vasconcelos',
    pageQuantity: 193,
    createdAt: '2022-03-06T00:00:00.000Z',
    updatedAt: null,
  },
  {
    id: 3,
    title: 'O Pequeno Príncipe',
    author: 'Antoine de Saint-Exupéry',
    pageQuantity: 96,
    createdAt: '2022-03-06T00:00:00.000Z',
    updatedAt: null,
  },
];

describe('Pega todos os livros', () => {
  describe('quando existem livros no banco de dados', () => {
    before(() => {
      sinon.stub(Book, 'findAll').resolves(fakeBooks);
    });

    after(() => {
      Book.findAll.restore();
    });

    it('retorna os livros', async () => {
      const { body: books, status } = await chai.request(app).get('/books');

      expect(status).to.be.equal(200);
      expect(books).to.be.deep.equal(fakeBooks);
    });
  });
});
