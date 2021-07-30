let array = [];

for (let i = 1; i <= 25; i += 1) {
  array.push(i);
}

console.log(array);

for (const num of array) {
  console.log(num / 2);
}
