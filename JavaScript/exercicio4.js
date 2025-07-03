const euro = 6.10;
const dolar = 5.70;

let reais = parseFloat(prompt("Digite o valor em Reais (R$):"));

let valorEuro = reais / euro;
let valorDolar = reais / dolar;

console.log("Valor em Reais: R$" + reais.toFixed(2));
console.log("Em Euros: €" + valorEuro.toFixed(2));
console.log("Em Dólares: US$" + valorDolar.toFixed(2));

