/*
Calcular de un conjunto de fechas la menor, 
la mayor y la diferencia en segundos entre ambas.
*/

var fechas = ["2023-01-01", "2023-06-15", "2023-12-31"];

//pasamos la fecha a objeto date
var fecha1= new Date(fechas[0]).getTime();
var fecha2= new Date(fechas[1]).getTime();
var fecha3= new Date(fechas[2]).getTime();

var mayor= Math.max(fecha1,fecha2,fecha3);
var menor= Math.min(fecha1,fecha2,fecha3);

// Calcular la diferencia en milisegundos y luego convertir a segundos
var diferenciaEnMilisegundos = mayor - menor;
var diferenciaEnSegundos = diferenciaEnMilisegundos / 1000;

alert("Fecha mayor: " + new Date(mayor));
alert("Fecha menor: " + new Date(menor));
alert("Diferencia en segundos: " + diferenciaEnSegundos);
