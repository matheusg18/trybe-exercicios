const { obj1, obj2, obj3 } = require('../compareObjects');

describe('Comparando obj1 com obj2', () => {
  it('obj1 e obj2 são iguais', () => {
    expect(obj1).toEqual(obj2);
  });
});

describe('Comparando obj1 com obj3', () => {
  it('obj1 e obj3 são diferentes', () => {
    expect(obj1).not.toEqual(obj3);
  });
});
