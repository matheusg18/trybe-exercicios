const count = require('./exercicio1');

const getRandom = () => Math.floor(Math.random() * 100 + 1);

count(getRandom(), getRandom(), getRandom())
  .then((result) => console.log(result))
  .catch((err) => console.error(err.message));
