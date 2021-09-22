const sum = require('../sum');

describe('Testes com valores numéricos', () => {
  it('sum(4, 5) deve retornar 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('sum(0, 0) deve retornar 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
});

describe('Testa se lança erro com valores não numéricos', () => {
  it("sum(4, '5') deve lançar o erro 'parameters must be numbers'", () => {
    expect(() => sum(4, '5')).toThrow('parameters must be numbers');
  });
});
