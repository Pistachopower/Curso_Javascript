/*

Con expresiones regulares, leer desde teclado
 una cadena con una serie de nombres. Contar
cuántos nombres se han leído, cuántos comienzan C.
  

  */

var contadorNombre = 0;
var contadorC = 0;

/*


    / y /g: Las barras inclinadas (/) delimitan la expresión regular. La g al final es una bandera que significa “global”, lo que indica que la búsqueda debe continuar por toda la cadena, no solo detenerse en la primera coincidencia.

    \b: Este es un límite de palabra. Asegura que la coincidencia ocurra al inicio de una palabra. Por ejemplo, en la cadena “Casa coche”, \bC coincidirá con la “C” de “Casa” y “coche” por separado.

    C: Coincide específicamente con la letra “C” en mayúsculas.

    \w*:
        \w coincide con cualquier carácter alfanumérico (letras y números) y el guion bajo (_).
        * significa “cero o más” del carácter anterior. Así que \w* coincide con cualquier cantidad de caracteres alfanuméricos, incluyendo ninguno.

Pedro Carmen Elemena Carol Jose
*/


const regex = /\bC\w*/g;

var cadena = prompt("Ingrese una cadena: ");

//convertimos la cadena en un array para contar los nombre
arrayNombre = cadena.split(" ");

//obtenemos los nombres
var contadorNombre = arrayNombre.length;

//obtenemos un array con las palabras que comiencen por C
var arrayCoincidencias = cadena.match(regex);

//contamos las palabras de arrayCoincidencias
contadorC= arrayCoincidencias.length;


alert("Total de nombres: " + contadorNombre + " Total letra C: " + contadorC)