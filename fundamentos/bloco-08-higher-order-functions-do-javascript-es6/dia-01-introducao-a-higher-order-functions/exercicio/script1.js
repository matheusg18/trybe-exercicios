const newEmployees = (makeEmployee) => {
  const employees = {
    id1: makeEmployee('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: makeEmployee('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: makeEmployee('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

const employees = newEmployees((name) => ({
  nomeCompleto: name,
  email: `${name.split(' ').join('')}@trybe.com`,
}));

console.table(employees);
