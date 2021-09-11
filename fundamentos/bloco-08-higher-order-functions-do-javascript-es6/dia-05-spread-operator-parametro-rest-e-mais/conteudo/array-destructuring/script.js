const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

const [ola, saudacao] = saudacoes;
saudacao(ola);
//////////////////////////////////////////////////////////////////
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida, animal, bebida] = [bebida, comida, animal];

console.log(comida, animal, bebida);
///////////////////////////////////////////////////////////////////
let numerosPares = [1, 3, 5, 6, 8, 10, 12];

[, , , ...numerosPares] = numerosPares;

console.log(numerosPares); // [6, 8, 10, 12];
