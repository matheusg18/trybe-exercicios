import { questionFloat } from 'readline-sync';
import cliSelect from 'cli-select';

type units = 'km' | 'hm' | 'dam' | 'm' | 'dm' | 'cm' | 'mm';
const unitsArr: units[] = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

const convertTable = {
  km: 1000,
  hm: 100,
  dam: 10,
  m: 1,
  dm: 0.1,
  cm: 0.01,
  mm: 0.001,
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
