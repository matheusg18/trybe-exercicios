// Faça uma lista com as suas frutas favoritas
const specialFruit = ['abacaxi', 'morango', 'banana', 'manga', 'melão'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'granola', 'paçoca'];

const fruitSalad = (fruit, additional) => [...specialFruit, ...additionalItens];

console.table(fruitSalad(specialFruit, additionalItens));
