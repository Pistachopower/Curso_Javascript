/*
Leer un texto de la entrada estándar y contar cuántas palabras tiene,
cuántas de ellas empiezan por A. Suponemos que una palabra está separada de
  otra por uno o más espacios, un tabulador y el texto acaba con un punto, 
  no existe ningún punto y aparte y las palabras son todas correctas.

Pedro Armando Elemena Carol Jose 
Pedro  Armando   Elemena Carol Jose. 
Pedro     Elemena Carol Jose.
  */
/*

*/

var cadena = prompt("Ingrese una cadena: ");

// Eliminamos puntos finales
cadena = cadena.replace(/\./g, '');

// Reemplazamos múltiples espacios por un solo espacio
cadena = cadena.replace(/\s+/g, ' ');

// Convertimos la cadena en un array separando por espacios
var arrayPalabras = cadena.trim().split(" ");

//obtenemos el total de palabras
var contadorPalabra = arrayPalabras.length;


//obtenemos un array con las palabras que comiencen por A
var arrayCoincidencias = cadena.match(/A/g) || [];


//contamos las palabras de arrayCoincidencias
var contadorA= arrayCoincidencias.length;

alert("Total de palabras: " + contadorPalabra + " Total letra A: " + contadorA)
