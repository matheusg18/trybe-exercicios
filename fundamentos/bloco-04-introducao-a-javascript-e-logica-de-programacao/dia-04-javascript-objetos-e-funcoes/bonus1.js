const romanNumerals = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function convertRomanNumerals(romanNumber = "") {
  numbers = romanNumber.split("");
  sum = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    numberCurrent = numbers[i];

    if (i === numbers.lenght - 1) {
      sum += romanNumerals[numberCurrent];
      break;
    }

    numberNext = numbers[i + 1];

    if (romanNumerals[numberCurrent] < romanNumerals[numberNext]) {
      sum -= romanNumerals[numberCurrent];
    } else {
      sum += romanNumerals[numberCurrent];
    }
  }

  return sum;
}

console.log(convertRomanNumerals("MMXXI"));
