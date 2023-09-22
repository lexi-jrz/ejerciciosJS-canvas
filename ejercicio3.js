/**
 * Alarm
Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.
Result example: "Time for bed after 10 seconds".

Alarma
Escribe un programa que pregunte a un usuario la cantidad de segundos necesarios hasta que se ejecute una alarma (mensaje) junto con un texto para mostrar una vez que hayan pasado esos segundos en tiempo real.

Ejemplo de resultado: "Hora de acostarse después de 10 segundos".
*/

function alarm (segundos) {
    setTimeout(function(){
        console.log("Time for bed");
    }, segundos*1000);
}

    