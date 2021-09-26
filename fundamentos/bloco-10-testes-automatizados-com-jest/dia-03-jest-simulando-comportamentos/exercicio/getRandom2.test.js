const service = require('./getRandom');

test('testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros', () => {
  service.getRandom = jest.fn().mockImplementationOnce((a, b) => a / b);
  expect(service.getRandom(6, 2)).toBe(3);
  expect(service.getRandom).toBeCalled();
  expect(service.getRandom()).toBeUndefined();
  expect(service.getRandom).toBeCalledTimes(2);
});
