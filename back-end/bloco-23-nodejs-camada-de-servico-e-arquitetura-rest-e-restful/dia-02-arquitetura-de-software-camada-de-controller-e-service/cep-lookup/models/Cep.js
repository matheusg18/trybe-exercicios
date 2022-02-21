const connection = require('./connection');

const getByCep = async (cep) => {
  const query = 'SELECT cep, logradouro, bairro, localidade, uf FROM ceps WHERE cep = ?';
  const [cepInfo] = await connection.execute(query, [cep]);

  return cepInfo[0];
};

const create = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const query = 'INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)';
  await connection.execute(query, [cep, logradouro, bairro, localidade, uf]);
};

module.exports = { create, getByCep };
