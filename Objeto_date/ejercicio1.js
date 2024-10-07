/*
Hacer el Tarot que comprueba que la fecha de 
nacimiento, introducida no es mayor que la actual.
*/

//var fechaNacimiento= prompt("Ingrese la fecha de nacimiento: ");
//2024/10/15 (el mes debe ser 10 para representar 9 porque los meses van de 0 -- 11)
var fechaNacimiento = prompt("Introduce tu fecha de nacimiento (dd/mm/yyyy):");


var fechaActual= new Date().getTime();

var fechaNacimientoFinal= new Date(fechaNacimiento).getTime();

// Comparar las fechas y mostrar el resultado
if (fechaNacimientoFinal < fechaActual) {
    alert("La fecha de nacimiento es menor que la actual");

} else {
    alert("La fecha de nacimiento es mayor que la fecha actual.");
}