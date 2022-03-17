import cliSelect from 'cli-select';
import area from './area';
import mass from './mass';
import volume from './volume';
import length from './length';
import capacity from './capacity';

const files = ['area', 'capacity', 'length', 'mass', 'volume'];
const operations = { area, mass, volume, length, capacity };

console.log('Escola um tipo de conversão: \n');

cliSelect({ values: files }).then(({ value }) => {
  operations[value as keyof typeof operations]();
});
