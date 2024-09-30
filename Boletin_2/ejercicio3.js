/*
Leer un texto de la entrada estándar y contar cuántas palabras tiene,
 cuántas de ellas empiezan por A. Suponemos que una palabra está separada de
  otra por uno o más espacios, un tabulador y el texto acaba con un punto, 
  no existe ningún punto y aparte y las palabras son todas correctas.

   
  */

var totalPalabras = 0;
var totalA = 0;

var texto = prompt("Ingrese el texto: ");

//convertimos en un array texto para contar las palabras
var textoArrays = texto.split(" ");

//recorremos el array 
for (let i = 0; i < textoArrays.length; i++) {
  // Contamos las palabras
  totalPalabras++;

/*
Seleccionamos los indices del array, de la palabra tomamos la primera letra
charAt(0) y luego comparamos si tiene una letra A en mayuscula
*/
  if (textoArrays[i].charAt(0) === 'A') {
    //contamos la palabra
    totalA++;
  }
}



alert("Total de palabras: " + totalPalabras + " total letra A: " + totalA);



