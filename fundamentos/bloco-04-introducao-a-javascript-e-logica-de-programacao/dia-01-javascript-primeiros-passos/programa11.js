let salario = 3000;
let inss;
let irParcela, irAliquota;

if (salario < 0) {
  console.log("error");
} else {
  // Calculo do INSS

  if (salario <= 1556.94) {
    inss = salario * 0.08;
  } else if (salario <= 2594.92) {
    inss = salario * 0.09;
  } else if (salario <= 5189.82) {
    inss = salario * 0.11;
  } else {
    inss = 570.88;
  }

  salario -= inss;

  // Calculo do imposto de renda
  if (salario <= 1903.98) {
    irParcela = 0;
    irAliquota = 0;
  } else if (salario <= 2826.65) {
    irParcela = 142.8;
    irAliquota = 0.075;
  } else if (salario <= 3751.05) {
    irParcela = 354.8;
    irAliquota = 0.15;
  } else if (salario <= 4664.68) {
    irParcela = 636.13;
    irAliquota = 0.225;
  } else {
    irParcela = 869.36;
    irAliquota = 0.275;
  }

  salario -= irAliquota * salario - irParcela;
  console.log(salario);
}
