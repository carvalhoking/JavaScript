//1
for (let i = 1; i <= 30; i++) {
    console.log(i);
}
console.log("----------------------------------")
//2
for (let i = 30; i >= 1; i--) {
    console.log(i);
}
console.log("----------------------------------")
//3
for (let i = 0; i < 5; i++) {
    let numero = prompt("Digite suas notas:");
    if (numero >= 50) {
        console.log("ACIMA DA MÉDIA");
    } else {
        console.log("ABAIXO DA MÉDIA");
    }
}
console.log("----------------------------------")
//4
let numero = prompt("Digite um número para ver sua tabuada:");
for (let i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + (numero * i));
}
console.log("----------------------------------")
//5
let n = prompt("Digite o número de patinhos que foram passear:");

for (let i = n; i >= 1; i--) {
    console.log(i + " patinhos foram passear Além das montanhas Para brincar A mamãe gritou: Quá, quá, quá, quá Mas só " + (i - 1) + " patinhos voltaram de lá.")
    console.log("A mamãe patinha foi procurar Além das montanhas Na beira do mar A mamãe gritou: Quá, quá, quá, quá E os patinhos voltaram de lá.");
}
console.log("----------------------------------")
//6
for (let i = 1; i <= 10; i++) {
    let n = prompt("Informe 10 idades:");
    if (numero >= 18) {
        console.log("Maior de idade");
    } else {
        console.log("Menor de idade");
    }
}
//7
for (let i = 1; i <= 1; i++) {
    let n = prompt("Informe seu voto:");
    if (numero >= 1, 2, 3, 4) {
        console.log("Voto para os respectivos candidatos");
    } else if (numero >= 5){
        console.log("Voto nulo");
    }else{
        console.log("Voto em branco");
    }   
} 