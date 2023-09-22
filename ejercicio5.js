/**
 * Factorial
Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.

Factorial
Escriba un programa que solicite un número entero n. Donde 1 <= n. Resuelve esto usando recursividad.

 */

function factorial (n){
    if ( n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}
let numero = 8;
let operacion = factorial(numero);
console.log("El factorial de " + numero + " es " + operacion);