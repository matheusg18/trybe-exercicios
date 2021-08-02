function verificaPalindrome(palavra = "") {
  let palavraInvertida = palavra.split("");
  palavraInvertida.reverse();
  palavraInvertida = palavraInvertida.join("");

  return palavra === palavraInvertida;
}

console.log(verificaPalindrome("arara"));
console.log(verificaPalindrome("desenvolvimento"));
console.log("================================================");

function maiorDoArray(numeros = []) {
  if (numeros.length > 0) {
    let maior = numeros[0];
    let index = 0;

    for (let i = 0; i < numeros.length; i += 1) {
      if (numeros[i] > maior) {
        maior = numeros[i];
        index = i;
      }
    }

    return index;
  }
}

console.log(maiorDoArray([2, 34, 6, 24, 10, 11]));
console.log("================================================");

function menorDoArray(numeros = []) {
  if (numeros.length > 0) {
    let menor = numeros[0];
    let index = 0;

    for (let i = 0; i < numeros.length; i += 1) {
      if (numeros[i] < menor) {
        menor = numeros[i];
        index = i;
      }
    }

    return index;
  }
}

console.log(menorDoArray([2, 34, 6, 24, -10, 11]));
console.log("================================================");

function maiorNome(nomes = []) {
  if (nomes.length > 0) {
    let maior = nomes[0];

    for (const nome of nomes) {
      if (nome.length > maior.length) {
        maior = nome;
      }
    }

    return maior;
  }
}

console.log(
  maiorNome(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"])
);
console.log("================================================");

function encontraNumeroQueMaisRepete(numeros = []) {
  if (numeros.length > 0) {
    numeros.sort((a, b) => a - b);

    let numeroQueMaisRepete = numeros[0];
    let repeticoesDoQueMaisRepete = 0;

    let numeroAtual = numeros[0];
    let repeticoesAtual = 0;

    for (const numero of numeros) {
      if (numero === numeroAtual) {
        repeticoesAtual += 1;
      } else {
        if (repeticoesAtual > repeticoesDoQueMaisRepete) {
          numeroQueMaisRepete = numeroAtual;
          repeticoesDoQueMaisRepete = repeticoesAtual;
        }

        numeroAtual = numero;
        repeticoesAtual = 1;
      }
    }

    return numeroQueMaisRepete;
  }
}

console.log(encontraNumeroQueMaisRepete([2, 3, 2, 5, 8, 2, 3]));
console.log("================================================");

function somatorio(n) {
  let sum = 0;

  for (let i = 1; i <= n; i += 1) {
    sum += i;
  }

  return sum;
}

console.log(somatorio(5));
console.log("================================================");

function verificaFimPalavra(word = "", ending = "") {
  return word.endsWith(ending);
}

console.log(verificaFimPalavra("joaofernando", "fernan"));
