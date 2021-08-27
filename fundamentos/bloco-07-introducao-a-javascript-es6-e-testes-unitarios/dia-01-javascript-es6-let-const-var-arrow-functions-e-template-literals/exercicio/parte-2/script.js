// const factorial = (num) => {
//   if (num === 0) {
//     return 1;
//   } else {
//     return num * factorial(num - 1);
//   }
// };

const factorial = (num) => (num === 0 ? 1 : num * factorial(num - 1));

console.log(factorial(6));

const longestWord = (sentence) => sentence.split(" ").sort((a, b) => b.length - a.length)[0];

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));
