type units = 'km3' | 'hm3' | 'dam3' | 'm3' | 'dm3' | 'cm3' | 'mm3';

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

export default convert;
