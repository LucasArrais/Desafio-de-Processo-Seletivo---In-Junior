function verificarIdades(anosNascimento) {
    let anoAtual = parseInt(prompt("Digite o ano atual:"));

    const resultados = [];

    for (let i = 0; i < anosNascimento.length; i++) {
        const ano = anosNascimento[i];
        const idade = anoAtual - ano;
        let status;
        
        if (idade >= 18) {
            status = "maior";
            console.log("Pessoa " + (i + 1) + ": Maior de idade");
        } else {
            status = "menor";
            console.log("Pessoa " + (i + 1) + ": Menor de idade");
        }
        
        resultados.push(status);
    }
    
    return resultados;
}