const connection = require('./connection');

const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
  // Note que `Boolean` é uma função que recebe um parâmetro e retorna true ou false
  // nesse caso, se middle_name for `undefined` ou uma string vazia o retorno será `false`
  const fullName = [firstName, middleName, lastName].filter(Boolean).join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  };
};

const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name,
});

const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
  );

  return authors.map(serialize).map(getNewAuthor);
};

module.exports = { getAll };
