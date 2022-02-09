const count = require('./exercicio1');

const getRandom = () => Math.floor(Math.random() * 100 + 1);

const main = async () => {
  try {
    const result = count(getRandom(), getRandom(), getRandom());
    console.log(result);
  } catch (err) {
    console.error(err.message);
  }
};

main();
