/*
Diseña un programa que indique el carácter más repetido dentro de una cadena de caracteres.
*/

var cadena= "aaaabbcdddeeffgghh";

/*
busca todos los caracteres minusculas, mayusculas, numeros de 0 a 9, la
expresion \1+ indica las coincidencia de la letra repetida y el g recorre
todo el texto sin detenerse en la primera coincidencia

*/
var regex= /([a-zA-Z0-9])\1+/g;
