function arrayOfNumbers(vector = []) {
  let evenNumbers = [];

  for (const array of vector) {
    for (const num of array) {
      if (num % 2 === 0) {
        evenNumbers.push(num);
      }
    }
  }

  return evenNumbers;
}

let vector = [
  [1, 2],
  [3, 4, 5, 6],
  [7, 8, 9, 10],
];
console.table(arrayOfNumbers(vector));
