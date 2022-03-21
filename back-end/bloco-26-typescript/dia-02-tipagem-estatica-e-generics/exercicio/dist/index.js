"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = require("readline-sync");
var Months;
(function (Months) {
    Months[Months["JANUARY"] = 1] = "JANUARY";
    Months[Months["FEBRUARY"] = 2] = "FEBRUARY";
    Months[Months["MARCH"] = 3] = "MARCH";
    Months[Months["APRIL"] = 4] = "APRIL";
    Months[Months["MAY"] = 5] = "MAY";
    Months[Months["JUNE"] = 6] = "JUNE";
    Months[Months["JULY"] = 7] = "JULY";
    Months[Months["AUGUST"] = 8] = "AUGUST";
    Months[Months["SEPTEMBER"] = 9] = "SEPTEMBER";
    Months[Months["OCTOBER"] = 10] = "OCTOBER";
    Months[Months["NOVEMBER"] = 11] = "NOVEMBER";
    Months[Months["DECEMBER"] = 12] = "DECEMBER";
})(Months || (Months = {}));
var Seasons;
(function (Seasons) {
    Seasons["WINTER"] = "Winter";
    Seasons["SPRING"] = "Spring";
    Seasons["SUMMER"] = "Summer";
    Seasons["AUTUMN"] = "Autumn";
})(Seasons || (Seasons = {}));
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
    const selectedHemisphere = (0, readline_sync_1.question)('Digite o hemisfério do ano: [north, south]: ');
    if (!['north', 'south'].includes(selectedHemisphere))
        return console.log('Hemisfério inválido!');
    const selectedMonth = (0, readline_sync_1.questionInt)('Digite um mês [1 ~ 12]: ');
    if (selectedMonth < 1 || selectedMonth > 12)
        return console.log('Mês inválido!');
    // que ódio disso
    const schema = hemispheres[selectedHemisphere];
    let response = [];
    for (let s in schema) {
        const { season, months } = schema[s];
        if (months.includes(selectedMonth)) {
            response.push(season);
        }
    }
    return response;
};
console.log(getSeasonByMonth());
