const myRemove = require('../myRemove');

describe('Testes de casos normais', () => {
  it('myRemove([1, 2, 3, 4], 3) deve retornar o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('myRemove([1, 2, 3, 4], 5) deve retornar o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
  it('myRemove([1, 2, 3, 4], 3) não deve retornar o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
});

describe('Teste para verificar que o array passado como parâmetro não sofreu alterações', () => {
  const originalArray = [1, 2, 3, 4, 5];
  const newArray = myRemove(originalArray, 3);

  it('Testa se o array passado como parâmetro não muda', () => {
    expect(newArray).not.toEqual(originalArray);
  });
});
