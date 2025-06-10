// 1 - Contador: Mostre os números de 1 a 20 no console.
console.log("1 - Contador de 1 a 20");
let i1 = 1;
do {
    console.log(i1);
    i1++;
} while (i1 <= 20);

// 2 - Resposta do usuário: Pergunta se deseja continuar
console.log("\n2 - Resposta do usuário");
let resposta2;
do {
    resposta2 = prompt("Deseja continuar? (s/n)").toLowerCase();
} while (resposta2 === "s");

// 3 - Sequência numérica até número escolhido pelo usuário
console.log("\n3 - Sequência numérica");
let final3 = parseInt(prompt("Digite um número final para a sequência:"));
let i3 = 1;
do {
    console.log(i3);
    i3++;
} while (i3 <= final3);

// 4 - Contador pulando de 2 em 2 até 31
console.log("\n4 - Contador de 1 a 31 pulando de 2 em 2");
let i4 = 1;
do {
    console.log(i4);
    i4 += 2;
} while (i4 <= 31);

// 5 - Classificação numérica
console.log("\n5 - Classificação numérica");
let count5 = 1;
do {
    let num = parseFloat(prompt(`Digite o ${count5}º número:`));
    if (num > 0) {
        console.log("NÚMERO POSITIVO");
    } else if (num < 0) {
        console.log("NÚMERO NEGATIVO");
    } else {
        console.log("O NÚMERO É ZERO");
    }
    count5++;
} while (count5 <= 5);

// 6 - Operações: Soma de dois números enquanto quiser
console.log("\n6 - Operações com soma");
let resposta6;
do {
    let n1 = parseFloat(prompt("Digite o primeiro número:"));
    let n2 = parseFloat(prompt("Digite o segundo número:"));
    let soma = n1 + n2;
    console.log(`A soma de ${n1} + ${n2} é: ${soma}`);
    resposta6 = prompt("Deseja fazer outra conta? (s/n)").toLowerCase();
} while (resposta6 === "s");