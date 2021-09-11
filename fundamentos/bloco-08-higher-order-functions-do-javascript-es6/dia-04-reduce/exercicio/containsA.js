const assert = require('assert');

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

const containsA = () =>
  names.reduce((aCount, word) => aCount + word.toLowerCase().match(new RegExp('a', 'g')).length, 0);

assert.deepStrictEqual(containsA(), 20);
