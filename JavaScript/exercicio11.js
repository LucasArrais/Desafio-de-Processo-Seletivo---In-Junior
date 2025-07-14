const quantidade = parseInt(prompt("Quantos números você deseja inserir no vetor?"));

const numeros = [];
for (let i = 0; i < quantidade; i++) {
    const numero = parseInt(prompt(`Insira o número ${i + 1}:`));
    numeros.push(numero);
}


let contador = 0;
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > numeros[i - 1]) {
        contador++;
    }
}

console.log(`Array inserido: [${numeros.join(",")}]`);
console.log(`Quantidade de números em ordem crescente: ${contador}`);