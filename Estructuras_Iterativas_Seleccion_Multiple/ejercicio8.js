/*
Diseñar un algoritmo para escribir en pantalla los n 
primeros números naturales, sus cuadrados, sus cubos 
y la suma de todos ellos.

    console.log("Cuadrado: " + Math.pow(i,2));

    //calculo y muestro sus cubos
    console.log("Al cubo: " + Math.pow(i,3));
*/

//variable n
var n = 5;


//variable suma a 0
var suma = 0;

//estructura for recorre de n a 1
for (let i = 1; i <= n; i++) {
    //creamos las variables locales que existen en este ámbito
    let n_Cuadrado = 0;
    let n_Cubo = 0;

    //muestro los números
    console.log("Numero: " + i);

    //calculo sus cuadrados 
    n_Cuadrado = n_Cuadrado + Math.pow(i, 2);

    //calculo sus cubos
    n_Cubo = n_Cubo + Math.pow(i, 3);

    //sumo los valores que arroja n
    suma = suma + i + n_Cuadrado + n_Cubo;


}

//muestro la suma de todos
console.log("Suma total: " + suma);
