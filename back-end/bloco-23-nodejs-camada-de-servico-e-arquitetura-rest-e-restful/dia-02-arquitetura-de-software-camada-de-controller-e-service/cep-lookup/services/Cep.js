const Cep = require('../models/Cep');

const getByCep = async (cep) => Cep.getByCep(cep);

// const create = async ({ cep, logradouro, bairro, localidade, uf }) => {
  
// }

module.exports = { create, getByCep };
