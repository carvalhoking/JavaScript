//1
function JavaScript() {
    console.log("Eu gosto de JavaScript")
}

JavaScript()
console.log("--------------------")

//2
for(let contarAteCinco = 1; contarAteCinco <= 5; contarAteCinco ++) {
    console.log(contarAteCinco )
}
console.log("--------------------")

//3
let saudacao = function(nome) {
    console.log("Seja bem-vindo(a)", nome)
}
saudacao("Maria Alice")
console.log("--------------------")

//4
function multiplicarDoisNumeros(c,d) {
    let resultado = c*d
    return resultado
}
console.log(multiplicarDoisNumeros(4,5))
console.log("--------------------")

//5
let idade = prompt("Qual sua idade?")
if (idade >= 18) {
    console.log("Maior de idade")
} else{
    console.log("Menor de idade")
}
console.log("--------------------")

//6
function somar(a,b) {
    let resultado = a +b
    return resultado
}
console.log(somar(8,4))
console.log("--------------------")

//7
function calcularAreaRetangulo(l,h) {
    let resultado = l*h
    return resultado
}
console.log(calcularAreaRetangulo(3,6))
console.log("--------------------")

//8
function compararIdade(idade1, idade2) {
    if (idade1 > idade2) {
      return "A primeira pessoa é mais velha.";
    }
    else if (idade2 > idade1) {
        return "A segunda pessoa é mais velha.";
      }
      else {
        return "As duas pessoas têm a mesma idade.";
      }
}
console.log("--------------------")