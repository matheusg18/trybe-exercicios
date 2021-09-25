const uppercase = require('../uppercase');

describe('Testes para uppercase()', () => {
  it('Teste que passa', (done) => {
    uppercase('ola', (result) => {
      try {
        expect(result).toBe('OLA');
        done();
      } catch (error) {
        done(error);
      }
    });
  });

  it('Teste que falha', (done) => {
    uppercase('ola', (result) => {
      try {
        expect(result).toBe('ola');
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});
