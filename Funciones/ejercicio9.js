/*
Escribe todas las funciones en ES5 (Estandar js) y con la notación 
de función flecha de ES6. 
Escribe una función llamada elMenor que acepte un 
número variable de parámetros y devuelva el parámetro de menor 
valor pasado a la función.

Escribe una función llamada sumaArgPares que sume todos los argumentos pares que se pasen a la función.
Ejemplos:
sumEvenArgs(1,2,3,4) // 6
sumEvenArgs(1,2,6) // 8

*/




//forma 1
//usamos el operador Rest porque no sabemos la cantidad de parametros
var elMenor = function (...numeros) {
  // Usamos Math.min para obtener el menor valor de los argumentos
  var valores = Math.min(...numeros);

  return valores;
}

//alert(elMenor(3, 8, 5, 1));

//con funcion flecha
var elMenor = (...numeros) => Math.min(...numeros);

//alert(elMenor(3, 5, 4));


/*
Escribe una función llamada colocaEnMedio que acepte como parámetros
 dos arrays y devuelva el primer array con todos los valores del
  segundo array colocados en el centro del primer array. 
Ejemplos: 
placeInMiddle([1,2,6,7],[3,4,5]) // [1,2,3,4,5,6,7]
placeInMiddle([1],[3,4,5]) // [3,4,5,1]
placeInMiddle([1,6],[2,3,4,5]) // [1,2,3,4,5,6]
placeInMiddle([],[2,3,4,5]) // [2,3,4,5]
*/



//usamos spread porque se trabaja recibiendo por parametro arrays
var colocaEnMedio = function (array1, array2) {
  const medio = Math.floor(array1.length / 2); // Calculamos el centro
  const nuevoArray = array1.slice(); // Hacemos una copia del primer array

  //modificamos el array1 y reemplazamos
  /*
  El primer parámetro (medio) indica el índice donde comienza la 
  modificación del array. El segundo parámetro (0) indica cuántos
  elementos se eliminarán desde esa posición. En este caso, es 0, 
  por lo que no se elimina ningún elemento.
  Los parámetros siguientes (...array2) son los elementos que se
  agregarán en la posición indicada. El operador spread (...)
  descompone el array array2 en elementos individuales y los pasa
  como argumentos.
  
  */

  nuevoArray.splice(medio, 0, ...array2); // Insertamos arr2 en el medio
  return nuevoArray; // Devolvemos el nuevo array

}

alert(colocaEnMedio([1, 2, 6, 7], [3, 4, 5]))


/*
Escribe una función llamada uneArrays que acepte un número variable
de parámetros (cada uno de ellos será un array) y devuelva un nuevo
array con todos los parámetros concatenados.
    Ejemplos:
joinArrays([1], [2], [3]); // [1,2,3]
joinArrays([1,2,3],[4,5,6],[7,8,9]) //[1,2,3,4,5,6,7,8,9]
*/

//usamos spread para guardar los valores
function uneArrays(...numero) {

  //creamos una variable que almacena array resultante
  var arrayResultante;

  for (let i = 0; i < paragram.length; i++) {
    suma += parametro[i];
  }


  return;
}

alert(uneArrays([1], [2], [3]));


