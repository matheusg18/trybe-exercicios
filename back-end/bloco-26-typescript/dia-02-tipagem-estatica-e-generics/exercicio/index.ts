import { question, questionInt } from 'readline-sync';

enum Months {
  JANUARY = 1,
  FEBRUARY,
  MARCH,
  APRIL,
  MAY,
  JUNE,
  JULY,
  AUGUST,
  SEPTEMBER,
  OCTOBER,
  NOVEMBER,
  DECEMBER,
}

enum Seasons {
  WINTER = 'Winter',
  SPRING = 'Spring',
  SUMMER = 'Summer',
  AUTUMN = 'Autumn',
}

const hemispheres = {
  north: {
    autumn: {
      season: Seasons.AUTUMN,
      months: [Months.SEPTEMBER, Months.OCTOBER, Months.NOVEMBER, Months.DECEMBER],
    },
    winter: {
      season: Seasons.WINTER,
      months: [Months.DECEMBER, Months.JANUARY, Months.FEBRUARY, Months.MARCH],
    },
    spring: {
      season: Seasons.SPRING,
      months: [Months.MARCH, Months.APRIL, Months.MAY, Months.JUNE],
    },
    summer: {
      season: Seasons.SUMMER,
      months: [Months.JUNE, Months.JULY, Months.AUGUST, Months.SEPTEMBER],
    },
  },

  south: {
    spring: {
      season: Seasons.SPRING,
      months: [Months.SEPTEMBER, Months.OCTOBER, Months.NOVEMBER, Months.DECEMBER],
    },
    summer: {
      season: Seasons.SUMMER,
      months: [Months.DECEMBER, Months.JANUARY, Months.FEBRUARY, Months.MARCH],
    },
    autumn: {
      season: Seasons.AUTUMN,
      months: [Months.MARCH, Months.APRIL, Months.MAY, Months.JUNE],
    },
    winter: {
      season: Seasons.WINTER,
      months: [Months.JUNE, Months.JULY, Months.AUGUST, Months.SEPTEMBER],
    },
  },
};

const getSeasonByMonth = () => {
  const selectedHemisphere = question('Digite o hemisfério do ano: [north, south]: ');
  if (!['north', 'south'].includes(selectedHemisphere)) return console.log('Hemisfério inválido!');

  const selectedMonth = questionInt('Digite um mês [1 ~ 12]: ');
  if (selectedMonth < 1 || selectedMonth > 12) return console.log('Mês inválido!');

  // que ódio disso
  const schema = hemispheres[selectedHemisphere as keyof typeof hemispheres];

  let response: string[] = [];
  for (let s in schema) {
    const { season, months } = schema[s as keyof typeof schema];

    if (months.includes(selectedMonth)) {
      response.push(season);
    }
  }

  return response;
};

console.log(getSeasonByMonth());
