// 1. Seleção de elementos (como você fez)
const msg = document.getElementById("mensagem");
const pontoJogador = document.getElementById("ponto-jogador");
const pontoComputador = document.getElementById("ponto-computador");
const pontoEmpates = document.getElementById("ponto-empates");
const escolhaPcTexto = document.getElementById("escolha-pc");

// 2. Variáveis de controle (estilo do curso - mais seguro)
let scoreJogador = 0;
let scorePC = 0;
let scoreEmpate = 0;

// 3. Função apenas para o sorteio (Modularidade)
const getEscolhaPC = () => {
    const opcoes = ["Pedra", "Papel", "Tesoura"];
    return opcoes[Math.floor(Math.random() * 3)];
};

// 4. Função principal de lógica (Separada)
const jogar = (escolhaJogador) => {
    const escolhaPC = getEscolhaPC();
    
    // Mapa de ícones que você aprendeu
    const icones = { "Pedra": "👊 Pedra ","Papel": "✋ Papel ","Tesoura": "✌️ Tesoura " };
    escolhaPcTexto.textContent = icones[escolhaPC];

    if (escolhaJogador === escolhaPC) {
        scoreEmpate++;
        pontoEmpates.textContent = scoreEmpate;
        msg.textContent = "Empate!";
        msg.style.color = "gray";
    } 
    else if (
        (escolhaJogador === "Pedra" && escolhaPC === "Tesoura") ||
        (escolhaJogador === "Papel" && escolhaPC === "Pedra") ||
        (escolhaJogador === "Tesoura" && escolhaPC === "Papel")
    ) {
        scoreJogador++;
        pontoJogador.textContent = scoreJogador;
        msg.textContent = "Você ganhou!";
        msg.style.color = "green";
    } 
    else {
        scorePC++;
        pontoComputador.textContent = scorePC;
        msg.textContent = "Você perdeu!";
        msg.style.color = "red";    
    }
};

// 5. Event Listeners usando Arrow Functions (Mais limpo)
document.getElementById("Pedra").addEventListener("click", () => jogar("Pedra"));
document.getElementById("Papel").addEventListener("click", () => jogar("Papel"));
document.getElementById("Tesoura").addEventListener("click", () => jogar("Tesoura"));


/* Primeira tentativa, ficou modo antigo

let pedra = document.getElementById("Pedra");
let papel = document.getElementById("Papel");
let tesoura = document.getElementById("Tesoura");
let pontoJogador = document.getElementById("ponto-jogador");
let pontoComputador = document.getElementById("ponto-computador");
let pontoEmpates = document.getElementById("ponto-empates");
let msg = document.getElementById("mensagem");

function jogar(escolhaJogador) {
    let opcoes = ["Pedra", "Papel", "Tesoura"];
    let escolhaPC = opcoes[Math.floor(Math.random() * 3)];

    // 1. Criamos o mapa de ícones
    const icones = {
        "Pedra": "👊 Pedra ",
        "Papel": "✋ Papel ",
        "Tesoura": "✌️ Tesoura "
    };

    // 2. Trocamos o texto pelo ícone usando o mapa
    document.getElementById("escolha-pc").textContent = icones[escolhaPC];


    // 1. Lógica de Empate
    if (escolhaJogador === escolhaPC) {
        pontoEmpates.textContent = parseInt(pontoEmpates.textContent) + 1;
        msg.textContent = "Empate!";
        msg.style.color = "gray";
    }
    // 2. Lógica de Vitória (todas as possibilidades que você ganha)
    else if (
        (escolhaJogador === "Pedra" && escolhaPC === "Tesoura") ||
        (escolhaJogador === "Papel" && escolhaPC === "Pedra") ||
        (escolhaJogador === "Tesoura" && escolhaPC === "Papel")
    ) {
        pontoJogador.textContent = parseInt(pontoJogador.textContent) + 1;
        msg.textContent = "Você ganhou!";
        msg.style.color = "green";
    }
    // 3. Se não empatou nem ganhou, só pode ter perdido
    else {
        pontoComputador.textContent = parseInt(pontoComputador.textContent) + 1;
        msg.textContent = "Você perdeu!";
        msg.style.color = "red";
    }
}

pedra.addEventListener("click", function () {
    jogar("Pedra");
});
papel.addEventListener("click", function () {
    jogar("Papel");
});
tesoura.addEventListener("click", function () {
    jogar("Tesoura");
});
 */

/*  Projeto aula DEVCLUB - Jokenpô

    const result = document.getElementById("mensagem");
    const yourScore = document.getElementById("ponto-jogador");
    const machineScore = document.getElementById("ponto-computador");

    let humanScoreNumber = 0;
    let machineScoreNumber = 0;

    const playHuman = (humanChoice) => {

        playGame(humanChoice.playmachine);
    
    }

    const playMachine = () => {

        const choices = ["Pedra", "Papel", "Tesoura"];
        const randomnumber = Math.floor(Math.random() * 3);

        return choices[randomnumber];
    }

    const playGame = (human, machine) => {
        const machineChoice = playMachine();

        if (human === machine) {
            result.innerHTML = "Empate!";
        }
        else if  (human === "Pedra" && machine === "Tesoura" ||
         human === "Papel" && machine === "Pedra" ||
          human === "Tesoura" && machine === "Papel") 
        {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber + 1;
        result.innerHTML = "Ganhou!"
        }

        else (quando a máquina ganha){
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber + 1;
        result.innerHTML = "Perdeu!"
        }
    }
        


    */