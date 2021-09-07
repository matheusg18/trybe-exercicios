const assert = require('assert');
// escreva a função wordLengths aqui
const wordLengths = (words) => {
  const sizesArray = [];
  words.forEach((element) => sizesArray.push(element.length));
  return sizesArray;
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
