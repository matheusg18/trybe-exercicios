import { questionFloat } from 'readline-sync';
import cliSelect from 'cli-select';

type units = 'kl' | 'hl' | 'dal' | 'l' | 'dl' | 'cl' | 'ml';
const unitsArr: units[] = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

const convertTable = {
  kl: 1000,
  hl: 100,
  dal: 10,
  l: 1,
  dl: 0.1,
  cl: 0.01,
  ml: 0.001,
};

const convert = (value: number, baseUnit: units, covertUnit: units) => {
  const valueInM = value * convertTable[baseUnit];

  return valueInM / convertTable[covertUnit];
};

const exec = async () => {
  const value = questionFloat('Digite o valor: ');

  console.log('Escolha a unidade base:');
  const { value: baseUnit } = await cliSelect({ values: unitsArr });

  console.log('Escolha a unidade de conversão:');
  const { value: covertUnit } = await cliSelect({ values: unitsArr });

  const convertedValue = convert(value, baseUnit, covertUnit);

  console.log(`\n${value}${baseUnit} é igual a ${convertedValue}${covertUnit}.`);
};

export default exec;
