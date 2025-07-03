const filaDeClientes = [];

function exibirMenu() {
    console.log("\n=== FILA DE ATENDIMENTO ===");
    if (filaDeClientes.length === 0) {
        console.log("A fila está vazia.");
    } else {
        console.log("Clientes na fila:");
        filaDeClientes.forEach((cliente, index) => {
            console.log(`${index + 1}º ${cliente}`);
        });
    }
    
    console.log("\nOpções:");
    console.log("1 - Novo Cliente");
    console.log("2 - Atender Cliente");
    console.log("3 - Sair");
}

function novoCliente() {
    const nome = prompt("Digite o nome do novo cliente:");
    if (nome && nome.trim() !== "") {
        filaDeClientes.push(nome.trim());
        console.log(`${nome} foi adicionado à fila.`);
    } else {
        console.log("Nome inválido. O cliente não foi adicionado.");
    }
}

function atenderCliente() {
    if (filaDeClientes.length === 0) {
        console.log("Não há clientes para atender. A fila está vazia.");
    } else {
        const clienteAtendido = filaDeClientes.shift();
        console.log(`Atendendo: ${clienteAtendido}`);
    }
}
let opcao = 0;
    
    do {
        exibirMenu();
        opcao = parseInt(prompt("Escolha uma opção (1-3):"));
        
        switch(opcao) {
            case 1:
                novoCliente();
                break;
            case 2:
                atenderCliente();
                break;
            case 3:
                console.log("Encerrando o programa...");
                break;
            default:
                console.log("Opção inválida. Por favor, escolha 1, 2 ou 3.");
        }
    } while (opcao !== 3);

