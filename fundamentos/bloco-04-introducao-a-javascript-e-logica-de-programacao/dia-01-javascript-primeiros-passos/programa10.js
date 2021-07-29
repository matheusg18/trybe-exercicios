let custo = 17.35;
let valorDeVenda = 24.99;

if (custo < 0 || valorDeVenda < 0) {
  console.log("error");
} else {
  let custoTotal = 1.2 * custo;
  let lucro = valorDeVenda - custoTotal;
  console.log(lucro * 1000);
}
