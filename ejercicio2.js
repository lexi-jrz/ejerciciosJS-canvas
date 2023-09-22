/* 2. Highest number
Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.

Numero más alto
Escribe un programa que solicite 10 números. Usando operadores lógicos y cualquier otra función/estructura de JavaScript que haya visto antes, determine y genere el mayor de esos números.
*/


let numeros = [];
function ordenamiento (numeros){
numeros.sort((a, b)=> {
    if (a == b) {
        return 0;
    }
    if (a<b){
        return -1;
    }
    return 1;
});
let numeroMayor = numeros[numeros.length-1];
console.log("El numero mayor es: " + numeros[numeros.length-1]);
}

