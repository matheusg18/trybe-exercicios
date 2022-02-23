const { expect } = require('chai');
const getNumberSign = require('../getNumberSign');

describe('getNumberSign', () => {
  describe('Quando o número é maior que 0', () => {
    it('retorna "positivo"', () => {
      const sign = getNumberSign(1);

      expect(sign).to.be.equals('positivo');
    });
  });

  describe('Quando o número é menor que 0', () => {
    it('retorna "negativo"', () => {
      const sign = getNumberSign(-1);

      expect(sign).to.be.equals('negativo');
    });
  });

  describe('Quando o número é 0', () => {
    it('retorna "neutro"', () => {
      const sign = getNumberSign(0);

      expect(sign).to.be.equals('neutro');
    });
  });

  describe('Quando o parâmetro não é do tipo "number"', () => {
    it('retorna "o valor deve ser um número"', () => {
      const sign = getNumberSign('2');

      expect(sign).to.be.equals('o valor deve ser um número');
    });
  });
});
