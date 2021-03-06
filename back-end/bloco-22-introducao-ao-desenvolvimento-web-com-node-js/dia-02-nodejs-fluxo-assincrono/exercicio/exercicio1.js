const count = (a, b, c) =>
  new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      reject(new Error('Informe apenas números'));
      return;
    }

    const result = (a + b) * c;

    if (result < 50) {
      reject(new Error('Valor muito baixo'));
      return;
    }

    resolve(result);
  });

module.exports = count;
