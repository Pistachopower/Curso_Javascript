/*
Hacer un programa en el que el usuario introduzca, nombre, profesión y 
edad separado por comas. Después el programa debe mostrar la edad del 
usuario por pantalla.

input: nelson,estudiante,31


var datosPersona = prompt("Ingrese un dato:");

// Convertimos en un array el texto 
var datosArrays = datosPersona.split(",");

//obtenemos la edad por indices 
var edadPalabra= datosArrays[2];


alert(edadPalabra);

*/

var datosPersona = prompt("Ingrese un dato:");

//expresion regular para verificar si hay un número
var regex= /\d+/g;

alert(datosPersona.match(regex));
