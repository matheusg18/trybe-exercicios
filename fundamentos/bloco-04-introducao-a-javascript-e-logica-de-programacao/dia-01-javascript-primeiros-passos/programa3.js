let a = 82;
let b = 67;
let c = 80;

let maior = a;

maior = b > maior ? b : maior;
maior = c > maior ? c : maior;

console.log(maior);
