/*
Diseñar un algoritmo para escribir en pantalla los n primeros números naturales, sus
cuadrados, sus cubos y la suma de todos ellos.
*/

var n= 2;
var contador=0;

for (let i = 1; i <= n; i++) {
    // Se ejecuta 5 veces, con valores del paso 0 al 4.
    console.log(i);
    console.log("Cuadrado: ", Math.pow(i,2));
    console.log("Cubo : ", Math.pow(i,3));
    contador+= i;
    
  }
  console.log("Suma: ", contador);
  