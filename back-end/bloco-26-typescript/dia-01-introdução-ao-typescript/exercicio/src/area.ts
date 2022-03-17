type units = 'km2' | 'hm2' | 'dam2' | 'm2' | 'dm2' | 'cm2' | 'mm2';

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

export default convert;
