/**
 * Palindrome
Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.

Palíndromo
Escriba un programa que solicite una palabra u oración (puede estar en mayúscula, tener espacios y puntuación). Averigua si la oración/palabra es un palíndromo o no. Ignorando la puntuación, los espacios y las letras mayúsculas.
 */


function palindromo (frase) {

    let fraseCorregida = frase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g, '').toLowerCase();
    let fraseInvertida = fraseCorregida.split('').reverse().join('');
     
    if (fraseCorregida === fraseInvertida) {
        console.log("Es un palíndromo.");
      } else {
        console.log("No es un palíndromo.");
      }
  }



  
  
   
  

 
  