const service = require('./getRandom');

test('testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada', () => {
  service.getRandom = jest.fn().mockReturnValue(10);

  expect(service.getRandom()).toBe(10);
  expect(service.getRandom).toHaveBeenCalled();
  expect(service.getRandom).toHaveBeenCalledTimes(1);
});
