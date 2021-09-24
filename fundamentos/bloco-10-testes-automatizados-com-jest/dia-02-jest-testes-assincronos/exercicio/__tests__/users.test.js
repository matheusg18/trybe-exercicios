const { getUserName, findUserById } = require('../users');

describe('Testes com sintaxe de Promise', () => {
  it('Caso onde existe o usuário', () =>
    getUserName(1).then((name) => expect(name).toBe('Mark')));
  it('Caso onde não existe o usuário', () => {
    expect.assertions(1);
    return getUserName(3).catch((error) => expect(error.message).toBe('User with 3 not found.'));
  });
});

describe('Testes com a sintaxe de async/await', () => {
  it('Caso onde existe o usuário', async () => {
    const userName = await getUserName(1);
    expect(userName).toBe('Mark');
  });
  it('Caso onde não existe o usuário', async () => {
    expect.assertions(1);
    try {
      const userName = await getUserName(3);
    } catch (error) {
      expect(error.message).toBe('User with 3 not found.');
    }
  });
});
