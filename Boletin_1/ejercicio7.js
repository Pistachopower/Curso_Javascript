/*
Elabora un programa que dado un precio y una cantidad 
pagada, obtengamos el cambio con el mínimo número de
 elementos (monedas o billetes). Para devolver el
cambio disponemos de una cantidad ilimitada de 
monedas y de billetes.
*/

var precio = 80;
var cantidadPagada = 153; //1 billete de 100, 1 billete de 50, 1 una moneda de 2, 1 moneda de 1, 1 moneda de 2 centimos, 
                        //1 moneda de un 1 centimo
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
var b_020 = 0;
var b_010 = 0;
var b_005 = 0;
var b_002= 0;
var b_001 = 0;


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
    diferencia = diferencia % 10;
}

if (diferencia >= 5) {
    b_5 = Math.floor(diferencia / 5);
    diferencia = diferencia % 5;
}

if (diferencia >= 2) {
    b_2 = Math.floor(diferencia / 2);
    diferencia = diferencia % 2;
}

if (diferencia >= 1) {
    b_1 = Math.floor(diferencia / 1);
    diferencia = diferencia % 1;
}

if (diferencia >= 0.50) {
    b_050 = Math.floor(diferencia / 0.50);
    diferencia = diferencia % 0.50;
}

if (diferencia >= 0.20) {
    b_020 = Math.floor(diferencia / 0.20);
    diferencia = diferencia % 0.20;
}

if (diferencia >= 0.10) {
    b_010 = Math.floor(diferencia / 0.10);
    diferencia = diferencia % 0.10;
}

if (diferencia >= 0.05) {
    b_005 = Math.floor(diferencia / 0.05);
    diferencia = diferencia % 0.05;
}

if (diferencia >= 0.02) {
    b_002 = Math.floor(diferencia / 0.02);
    diferencia = diferencia % 0.02;
}

if (diferencia >= 0.01) {
    b_001 = Math.floor(diferencia / 0.01);
    diferencia = diferencia % 0.01;
}


console.log(b_500 + " billetes de 500");
console.log(b_200 + " billetes de 200");
console.log(b_100 + " billetes de 100");
console.log(b_50 + " billetes de 50");
console.log(b_20 + " billetes de 20");
console.log(b_10 + " billetes de 10");
console.log(b_5 + " billetes de 5");
console.log(b_2 + " moneda de 2");
console.log(b_1 + " moneda de 1");
console.log(b_005 + " moneda de 0.50");
console.log(b_002 + " moneda de 0.02");
console.log(b_001 + " moneda0 de 0.01");


  


