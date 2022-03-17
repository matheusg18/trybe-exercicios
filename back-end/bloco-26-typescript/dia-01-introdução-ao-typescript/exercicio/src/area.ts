import { questionFloat } from 'readline-sync';
import cliSelect from 'cli-select';

type units = 'km2' | 'hm2' | 'dam2' | 'm2' | 'dm2' | 'cm2' | 'mm2';
const unitsArr: units[] = ['km2', 'hm2', 'dam2', 'm2', 'dm2', 'cm2', 'mm2'];

const convertTable = {
  km2: 1_000_000,
  hm2: 10_000,
  dam2: 100,
  m2: 1,
  dm2: 0.01,
  cm2: 0.0001,
  mm2: 0.000001,
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
