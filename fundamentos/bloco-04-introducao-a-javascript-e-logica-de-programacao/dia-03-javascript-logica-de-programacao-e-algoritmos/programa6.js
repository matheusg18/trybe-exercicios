let n = 876;

if (n > 1) {
  let ePrimo = true;

  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      ePrimo = false;
      break;
    }
  }

  if (ePrimo) {
    console.log(`O número ${n} é primo!`);
  } else {
    console.log(`O número ${n} não é primo!`);
  }
}
