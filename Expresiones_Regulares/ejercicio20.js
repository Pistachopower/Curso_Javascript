/*
Escribe una expresión regular que encuentre todos los números en un texto dado
*/

const texto = "Aquí hay algunos números: 123, 456, y 789.";


/*
\d+ es la expresión regular que busca secuencias de uno o más dígitos, y el
 método match devuelve todas las coincidencias en el texto como un array. 
 La opción g al final de la expresión regular indica que debe buscar todas 
 las coincidencias en lugar de detenerse en la primera.

*/
const numeros = texto.match(/\d+/g);

console.log(numeros);  // Salida: ['123', '456', '789']
