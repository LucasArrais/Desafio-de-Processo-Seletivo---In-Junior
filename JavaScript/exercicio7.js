const frase = prompt("Digite uma frase para verificar se é um palíndromo:");    
const fraseProcessada = frase.toLowerCase().replace(/\s/g, '');    
const fraseReversa = fraseProcessada.split('').reverse().join('');    
if (fraseProcessada === fraseReversa) {
    console.log(`"${frase}" eh um palíndromo!`);
} else {
    console.log(`"${frase}" nao eh um palíndromo.`);
}
