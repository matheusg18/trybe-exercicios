let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menor = numbers[1];
for (const num of numbers) {
  if (num < menor) {
    menor = num;
  }
}

console.log(`${menor} é o menor número.`);
