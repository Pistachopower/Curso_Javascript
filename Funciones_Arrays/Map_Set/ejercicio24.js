/*
Escribe una función a la que se le pase como parámetro un array y devuelva ese mismo array después de eliminar los elementos repetidos.
*/

function eliminarElementosRepetidos(array) {
    // Crear un Set a partir del array para eliminar duplicados
    var arraySinDuplicados = [...new Set(array)];
    return arraySinDuplicados;
}

// Ejemplo de uso
var miArray = [1, 2, 2, 3, 4, 4, 5];
var resultado = eliminarElementosRepetidos(miArray);
console.log(resultado); // [1, 2, 3, 4, 5]
