const escolhaJogador = prompt("Escolha pedra, papel ou tesoura:")
const escolhaPC = ["pedra", "papel", "tesoura"]
[Math.floor(Math.random()* 3)]

alert(`Você escolheu ${escolhaJogador}`)
alert(`O computador escolheu ${escolhaPC}`)

if(escolhaJogador == escolhaPC) {
    alert("Empate")
} else if (escolhaJogador == "pedra" && escolhaPC == "tesoura") {
    alert("Você venceu")
} else if (escolhaJogador == "tesoura" && escolhaPC == "papel") {
    alert("Você venceu")
} else if (escolhaJogador == "papel" && escolhaPC == "pedra") {
    alert("Você venceu")
} else {
    alert("Você perdeu")
}