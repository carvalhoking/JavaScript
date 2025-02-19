// 1
let filmesFavoritos = ["Gente Grande", "Homem Aranha", "Click"];
console.log(filmesFavoritos[0]);
console.log("---------------------");

// 2
let frutas = ["Maçã", "Banana", "Laranja", "Abacaxi", "Uva"];
console.log(fruitas[2]);
console.log("---------------------");

// 3
let cores = ["Azul", "Vermelho", "Verde"];
cores.push("Amarelo");
for (let i = 0; i < cores.length; i++) {
    console.log(cores[i]);
}
console.log("---------------------");

// 4
let numeros = [1, 2, 3, 4];
numeros.pop();
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}
console.log("---------------------");

// 5
let cidades = ["São Paulo", "Rio de Janeiro"];
cidades.unshift("Belo Horizonte");
for (let i = 0; i < cidades.length; i++) {
    console.log(cidades[i]);
}
console.log("---------------------");

// 6
let animais = ["Cachorro", "Gato", "Coelho"];
animais.shift();
for (let i = 0; i < animais.length; i++) {
    console.log(animais[i]);
}
console.log("---------------------");

// 7
let carros = ["Fusca", "Civic", "Corolla", "Palio"];
console.log(carros.length);
console.log("---------------------");

let numerosVazio = [];
numerosVazio.push(10, 20, 30);
numerosVazio.unshift(5);
numerosVazio.pop();
numerosVazio.shift();
console.log(numerosVazio);
console.log(numerosVazio.length);
console.log("---------------------");
