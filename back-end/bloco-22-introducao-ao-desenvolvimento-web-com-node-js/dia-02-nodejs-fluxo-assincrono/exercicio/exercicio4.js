const simpsons = require('./simpsons');

const printSimpsons = () => simpsons.forEach(({ id, name }) => console.log(`${id} - ${name}`));

printSimpsons();
