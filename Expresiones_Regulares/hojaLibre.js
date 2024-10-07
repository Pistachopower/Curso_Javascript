/*
Hacer un programa en el que el usuario introduzca, nombre, profesión y 
edad separado por comas. Después el programa debe mostrar la edad del 
usuario por pantalla.

nelson,estudiante,31 

*/

var datosPersona = prompt("Ingrese un dato:");

//expresion regular para verificar si hay un número
var regex= /\d+/g;

alert(datosPersona.match(regex));