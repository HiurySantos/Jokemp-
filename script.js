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

pedra.addEventListener("click", function() {
    jogar("Pedra");
});
papel.addEventListener("click", function() {
    jogar("Papel");
});
tesoura.addEventListener("click", function() {
    jogar("Tesoura");
}); 