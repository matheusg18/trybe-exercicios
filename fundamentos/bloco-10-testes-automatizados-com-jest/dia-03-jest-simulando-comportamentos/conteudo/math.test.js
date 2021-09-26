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

describe('Exercício 3', () => {
  it('Mock na função somar', () => {
    math.somar = jest.fn().mockImplementation((a, b) => a + b);
    math.somar(1, 2);
    expect(math.somar).toBeCalled();
    expect(math.somar(1, 2)).toBe(3);
    expect(math.somar).toBeCalledTimes(2);
  });
});
