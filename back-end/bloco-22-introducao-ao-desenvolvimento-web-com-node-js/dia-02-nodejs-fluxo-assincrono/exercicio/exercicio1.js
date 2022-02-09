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

count(1, 2, 50)
  .then((result) => console.log(result))
  .catch((err) => console.error(err.message));
