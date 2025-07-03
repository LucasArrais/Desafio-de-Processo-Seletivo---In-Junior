function fibonacciTermo(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacciTermo(n - 1) + fibonacciTermo(n - 2);
}

function fibonacciSequencia(n) {
    const sequencia = [];
    for (let i = 0; i < n; i++) {
        sequencia.push(fibonacciTermo(i));
    }
    return sequencia;
}


let n;
do {
    n = parseInt(prompt("Digite quantos termos da sequência de Fibonacci deseja ver (número inteiro positivo):"));
} while (isNaN(n) || n < 1);

const resultado = fibonacciSequencia(n);
console.log(`Os ${n} primeiros termos da sequência de Fibonacci são:`);
console.log(resultado.join(', '));

