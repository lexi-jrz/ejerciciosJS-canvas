/*
 * 1. User profile
Write a program that prompts a user for their data: username, age, and a list of their favorite movies. Store the information and then showcase it in the console. Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.

Perfil del usuario
Escriba un programa que solicite al usuario sus datos: nombre de usuario, edad y una lista de sus películas favoritas. Almacene la información y luego muéstrela en la consola. Tenga en cuenta que el resultado de las películas debe agregar un pequeño mensaje como: 'La película {película} es una de mis favoritas' */

let usuario = "lexi-jrz";
let edad = 28;
let pelis = ["shrek2", "interstellar", "pandorum"];

function datos (usuario, edad, pelis){

    console.log("Nombre de usuario: " ,usuario);
    console.log("Edad:", edad);
    for (let i = 0; i < pelis.length; i++) {
      console.log(pelis[i] + " es una de mis pelis favoritas");
    }

}
