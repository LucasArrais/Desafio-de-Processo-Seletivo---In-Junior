function fat(valor) {
    if (valor === 0 || valor === 1) return 1;
    return valor * fat(valor - 1);
}

let continuar;

do {
    let valor;
    let entradaValida = false;
    
    do {
        const input = prompt("Insira um número inteiro positivo:");
        
        if (input === null) {
            alert("Programa encerrado.");
            continuar = 'n';
            break;
        }
        
        valor = parseInt(input);
        

        if (!isNaN(valor) && valor >= 0 && input.trim() === valor.toString()) {
            entradaValida = true;
        } else {
            alert("Valor inválido! Digite apenas números inteiros positivos.");
        }
    } while (!entradaValida && continuar !== 'n');
    

    if (continuar === 'n') break;
    

    const resultado = fat(valor);
    console.log(`O fatorial de ${valor} é ${resultado}`);
    

    do {
        continuar = prompt("Calcular outro fatorial? (S/N)")?.trim().toLowerCase();
        
        if (continuar === null) { 
            continuar = 'n';
        }
        
        if (continuar !== 's' && continuar !== 'n') {
            alert("Digite 'S' para continuar ou 'N' para sair");
        }
    } while (continuar !== 's' && continuar !== 'n');
    
} while (continuar === 's');
