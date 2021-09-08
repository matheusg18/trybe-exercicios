const assert = require('assert');

const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];

  for (let index = 0, cont = 1; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      results.push(cont++);
    } else {
      results.push(characters[index]);
    }
  }
  return results.join('');
};

const parameter = 'Dayane';
const result = 'D1y2n3';

assert.strictEqual(typeof removeVowels, 'function');
assert.strictEqual(removeVowels(parameter), result);
