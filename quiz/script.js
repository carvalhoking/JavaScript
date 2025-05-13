//cada pergunta tem: uma pergunta, as opções e, alternativa certa (começa no 0)
const perguntas = [
    {
        pergunta: "Quanto é 7 x 8?",
        opcoes: ["54", "56", "58", "60"],
        correta: 1
    },
    {
        pergunta: "Qual é a raiz quadrada de 144?", 
        opcoes: ["10", "11", "12", "13"],
        correta: 2
    },
    {
        pergunta: "Qual é o valor de π (pi) aproximado até duas casas decimais?",
        opcoes: ["3.12", "3.14", "3.16", "3.18"],
        correta: 1
    },
    {
        pergunta: "Qual é o resultado de 15 + (3 x 2)?",
        opcoes: ["21", "33", "36", "45"],
        correta: 0
    },
    {
        pergunta: "Quanto é 100 dividido por 4?",
        opcoes: ["20", "25", "30", "40"],
        correta: 1
    },
    {
        pergunta: "Se um triângulo tem lados de 3 cm, 4 cm e 5 cm, ele é:",
        opcoes: ["Isósceles", "Equilátero", "Retângulo", "Escaleno"],
        correta: 2
    },
    {
        pergunta: "Qual é a área de um quadrado com lado de 6 cm?",
        opcoes: ["36 cm²", "12 cm²", "24 cm²", "18 cm²"],
        correta: 0
    },
    {
        pergunta: "Quanto é 2³ (2 elevado à 3)?",
        opcoes: ["6", "8", "9", "12"],
        correta: 1
    },
    {
        pergunta: "Qual é o número primo entre os seguintes?",
        opcoes: ["9", "15", "17", "21"],
        correta: 2
    },
    {
        pergunta: "Qual é o valor de x na equação: 2x + 6 = 14?",
        opcoes: ["3", "4", "5", "6"],
        correta: 2
    },
]
//variáveis para controlar o quiz
let perguntaAtual = 0 //qual pergunta está sendo mostrada
let pontuacao = 0 //quantidade de acertos
let erros = 0 //quantidade de erros
let opcaoSelecionada = null //qual opção o usuário selecionou

const pergunta = document.getElementById("pergunta")
const opcoes = document.getElementById("opcoes")
const botaoProxima = document.getElementById("proxima")
const quiz = document.getElementById("quiz")
const pontuacaoFinal = document.getElementById("pontuacao")
const valorPontuacao = document. getElementById("valor-pontuacao")
const botaoReiniciar = document.getElementById("reiniciar")
const errosContador = document.getElementById ("erros")
const acertos = document.getElementById ("acertos")

// função que atualiza o placar
function atualizarPlacar() {
    acertos.textContent = pontuacao
    errosContador.textContent = erros
}  
// função que mostra a pergunta atual
function mostrarPergunta() {
//Pega a pergunta atual
const perguntaAtualObj = perguntas[perguntaAtual]
// Mostra o texto da pergunta
pergunta.textContent = perguntaAtualObj.pergunta
opcoes.textContent = "" //limpa as opcoes anteriores

// Cria um botão para cada opção de resposta
perguntaAtualObj.opcoes.forEach((opcao, indice) => {
    const botao = document.createElement ("button")
    botao.textContent = opcao
    botao.classList.add("opcao")
    botao.addEventListener("click", () => selecionarOpcao(indice))
    opcoes.appendChild(botao)
 })
opcaoSelecionada = null
botaoProxima.disabled = true //desabilita o botão de proxima
}
// Para quando o usuário escolher uma opção
function selecionarOpcao(indice) {
opcaoSelecionada = indice
//atualiza o visual da opção selecionada
const opcoes = document.querySelectorAll(".opcao")
opcoes.forEach((opcao, i) => {
opcao.classList.toggle("selecionada", i == indice)
})
 botaoProxima.disabled = false //habilita o botao de proxima
}
function mostrarPontuacao() {
    quiz.classList.add("esconder")
    pontuacaoFinal. classList.remove("esconder")
    valorPontuacao.textContent = pontuacao
}
// Função para ir para a próxima pergunta
botaoProxima.addEventListener("click", () => {
// Verifica se a resposta está correta
if(opcaoSelecionada == perguntas[perguntaAtual].correta) {
pontuacao++
} else {
erros++
}
atualizarPlacar()

perguntaAtual++
if(perguntaAtual < perguntas.length) {
    mostrarPergunta()
    } else {
    mostrarPontuacao()
}
 })
//botao para reiniciar o quiz
    botaoReiniciar.addEventListener("click", () => {
        // Reseta todas as variáveis
        perguntaAtual = 0
        pontuacao = 0
        erros = 0
   //o quiz aparece e a pontuação final some     
        quiz.classList.remove("esconder")
        pontuacaoFinal. classList.add("esconder")
         atualizarPlacar()
         mostrarPergunta()
})

mostrarPergunta()