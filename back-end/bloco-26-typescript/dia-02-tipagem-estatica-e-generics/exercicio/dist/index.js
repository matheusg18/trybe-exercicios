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
console.log((0, readline_sync_1.question)('oi'));
