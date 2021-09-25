const math = require('./math');

describe('Exercício 1', () => {
  it('Mock na função subtrair', () => {
    math.subtrair = jest.fn();
    math.subtrair();
    expect(math.subtrair).toBeCalled();
  });
});

describe('Exercício 2', () => {
  it('Mock na função multiplicar', () => {
    math.multiplicar = jest.fn().mockReturnValue(10);
    math.multiplicar();
    expect(math.multiplicar).toBeCalled();
    expect(math.multiplicar()).toBe(10);
  });
});
