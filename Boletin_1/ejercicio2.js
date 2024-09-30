/**
 * Diseñar un algoritmo para hallar el valor absoluto de un número leído de teclado y
presentarlo en pantalla.
 */

//pedir valor 
let numero= parseInt(prompt('Ingrese un número: '));

if (numero >=  0) {
    alert("valor absoluto: " + numero);

} else {
    alert("valor absoluto: " + numero * -1);

}

//mostrar