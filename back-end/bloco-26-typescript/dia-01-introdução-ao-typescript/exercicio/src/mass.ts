import { questionFloat } from 'readline-sync';
import cliSelect from 'cli-select';

type units = 'kg' | 'hg' | 'dag' | 'g' | 'dg' | 'cg' | 'mg';
const unitsArr: units[] = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

const convertTable = {
  kg: 1000,
  hg: 100,
  dag: 10,
  g: 1,
  dg: 0.1,
  cg: 0.01,
  mg: 0.001,
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
