/*
Elabora un programa que dado un precio y una cantidad 
pagada, obtengamos el cambio con el mínimo número de
 elementos (monedas o billetes). Para devolver el
cambio disponemos de una cantidad ilimitada de 
monedas y de billetes.
*/

var precio = 80;
var cantidadPagada = 500;
var diferencia = cantidadPagada - precio;
var b_500 = 0;
var b_200 = 0;
var b_100 = 0;
var b_50 = 0;
var b_20 = 0;
var b_10 = 0;
var b_5 = 0;
var b_2 = 0;
var b_1 = 0;
var b_050 = 0;


if (diferencia >= 500) {
    b_500 = Math.floor(diferencia / 500);
    diferencia = diferencia % 500;
}
if (diferencia >= 200) {
    b_200 = Math.floor(diferencia / 200);
    diferencia = diferencia % 200;
}
if (diferencia >= 100) {
    b_100 = Math.floor(diferencia / 100);
    diferencia = diferencia % 100;
}

if (diferencia >= 50) {
    b_50 = Math.floor(diferencia / 50);
    diferencia = diferencia % 50;
}

if (diferencia >= 20) {
    b_20 = Math.floor(diferencia / 20);
    diferencia = diferencia % 20;
}

if (diferencia >= 10) {
    b_10 = Math.floor(diferencia / 10);
}

console.log(b_500 + " billetes de 500");
console.log(b_200 + " billetes de 200");
console.log(b_100 + " billetes de 100");
console.log(b_50 + " billetes de 50");
console.log(b_20 + " billetes de 20");
console.log(b_10 + " billetes de 10");


  


