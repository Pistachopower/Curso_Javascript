/*
Realiza un algoritmo que solicite del usuario un tiempo
dado en segundos y calcule y presente en pantalla dicho 
tiempo pero expresado en horas, minutos y segundos.

3661 segundos: 1 hora, 1 minuto y 1 segundo
*/

var tiempoSegundos = prompt("Introduce un tiempo dado en segundos");

let fecha = new Date(tiempoSegundos * 1000); // Convertir segundos a milisegundos
let horas = Math.floor(tiempoSegundos / 3600);
let minutos = Math.floor((tiempoSegundos % 3600) / 60);
let segundos = tiempoSegundos % 60;

alert(horas + " hora " + minutos + " minuto " + segundos + " segundo");