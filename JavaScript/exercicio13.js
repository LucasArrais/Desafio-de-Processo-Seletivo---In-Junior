const time = []; 


function adicionarJogador() {
    const nome = prompt("Digite o nome do jogador:");
    const idade = parseInt(prompt("Digite a idade do jogador:"));
    const posicao = prompt("Digite a posição do jogador:");
    const pontuacao = parseFloat(prompt("Digite a pontuação do jogador:"));
    
    if (nome && !isNaN(idade) && posicao && !isNaN(pontuacao)) {
        const jogador = {
            nome: nome,
            idade: idade,
            posicao: posicao,
            pontuacao: pontuacao
        };
        time.push(jogador);
        console.log(`Jogador ${nome} adicionado com sucesso!`);
    } else {
        console.log("Dados inválidos. O jogador não foi adicionado.");
    }
}

function buscarPorPosicao() {
    const posicaoBusca = prompt("Digite a posição para buscar:");
    const jogadoresEncontrados = time.filter(jogador => 
        jogador.posicao.toLowerCase() === posicaoBusca.toLowerCase()
    );
    
    if (jogadoresEncontrados.length > 0) {
        console.log(`\nJogadores na posição ${posicaoBusca}:`);
        jogadoresEncontrados.forEach(jogador => {
            console.log(`- ${jogador.nome}, ${jogador.idade} anos, Pontuação: ${jogador.pontuacao}`);
        });
    } else {
        console.log(`Nenhum jogador encontrado na posição ${posicaoBusca}.`);
    }
}


function listarTime() {
    if (time.length === 0) {
        console.log("O time não possui jogadores cadastrados.");
    } else {
        console.log("\nLista completa do time:");
        time.forEach((jogador, index) => {
            console.log(`${index + 1}. ${jogador.nome} - ${jogador.posicao}, ${jogador.idade} anos, Pontuação: ${jogador.pontuacao}`);
        });
    }
}

function calcularPontuacaoMedia() {
    if (time.length === 0) {
        console.log("O time não possui jogadores para calcular a pontuação média.");
    } else {
        const totalPontuacao = time.reduce((soma, jogador) => soma + jogador.pontuacao, 0);
        const media = totalPontuacao / time.length;
        console.log(`\nPontuação média do time: ${media.toFixed(2)}`);
    }
}


function exibirMenu() {
    console.log("\n=== MENU DE GERENCIAMENTO DO TIME ===");
    console.log("1 - Adicionar jogador");
    console.log("2 - Buscar por posição");
    console.log("3 - Listar time");
    console.log("4 - Calcular pontuação média");
    console.log("5 - Sair");
    
    const opcao = parseInt(prompt("Escolha uma opção (1-5):"));
    
    switch(opcao) {
        case 1:
            adicionarJogador();
            break;
        case 2:
            buscarPorPosicao();
            break;
        case 3:
            listarTime();
            break;
        case 4:
            calcularPontuacaoMedia();
            break;
        case 5:
            console.log("Encerrando o programa...");
            return;
        default:
            console.log("Opção inválida. Por favor, escolha um número entre 1 e 5.");
    }
    

    exibirMenu();
}


exibirMenu();