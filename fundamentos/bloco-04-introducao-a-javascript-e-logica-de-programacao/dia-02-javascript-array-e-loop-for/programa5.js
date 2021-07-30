let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let impares = 0;
for (const num of numbers) {
  if (num % 2 != 0) {
    impares += 1;
  }
}

if (impares > 0) {
  console.log(`Existem ${impares} números ímpares.`);
} else {
  console.log("Nenhum valor ímpar encontrado.");
}
