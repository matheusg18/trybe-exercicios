const fizzbuzz = require('../fizzbuzz');

describe('Teste com número divisível por 3 e 5', () => {
  it('fizzbuzz(15) deve retornar fizzbuzz', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz');
  });
});

describe('Teste com número divisível por 3', () => {
  it('fizzbuzz(9) deve retornar fizz', () => {
    expect(fizzbuzz(9)).toBe('fizz');
  });
});

describe('Teste com número divisível por 5', () => {
  it('fizzbuzz(20) deve retornar buzz', () => {
    expect(fizzbuzz(20)).toBe('buzz');
  });
});

describe('Teste com número não divisível por 3 e 5', () => {
  it('fizzbuzz(44) deve retornar 44', () => {
    expect(fizzbuzz(44)).toBe(44);
  });
});

describe('Teste com parâmetro não numérico', () => {
  it("fizzbuzz('azul') deve retornar false", () => {
    expect(fizzbuzz('azul')).toBe(false);
  });
});
