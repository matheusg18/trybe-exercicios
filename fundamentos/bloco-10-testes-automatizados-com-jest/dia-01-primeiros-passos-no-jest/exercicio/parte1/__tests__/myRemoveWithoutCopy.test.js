const myRemoveWithoutCopy = require('../myRemoveWithoutCopy');

describe('Testes de casos normais', () => {
  it('myRemoveWithoutCopy([1, 2, 3, 4], 3) deve retornar o array esperado', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('myRemoveWithoutCopy([1, 2, 3, 4], 5) deve retornar o array esperado', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
  it('myRemoveWithoutCopy([1, 2, 3, 4], 3) não deve retornar o array [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
});

describe('Teste para verificar que o array passado como parâmetro sofreu alterações', () => {
  const originalArray = [1, 2, 3, 4, 5];
  const newArray = myRemoveWithoutCopy(originalArray, 3);

  it('Testa se o array passado como parâmetro não muda', () => {
    expect(newArray).toEqual(originalArray);
  });
});
