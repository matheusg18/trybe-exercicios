import { questionFloat } from 'readline-sync';
import cliSelect from 'cli-select';

type units = 'km3' | 'hm3' | 'dam3' | 'm3' | 'dm3' | 'cm3' | 'mm3';
const unitsArr: units[] = ['km3', 'hm3', 'dam3', 'm3', 'dm3', 'cm3', 'mm3'];

const convertTable = {
  km3: 1_000_000_000,
  hm3: 1_000_000,
  dam3: 1_000,
  m3: 1,
  dm3: 0.001,
  cm3: 0.000001,
  mm3: 0.000000001,
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
