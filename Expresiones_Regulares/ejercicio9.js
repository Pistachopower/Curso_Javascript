/*
Usa una expresión regular para eliminar todos los espacios en 
blanco de una cadena.
*/

var cadena= "Hola buenos dias";

/*
\s: Este es un metacaracter que representa cualquier espacio en blanco. 
Esto incluye espacios, tabulaciones (\t), saltos de línea (\n), etc.

+: Este es un cuantificador que significa “uno o más”. Así que \s+ 
busca una o más ocurrencias consecutivas de cualquier tipo de espacio en blanco.

g: Este es un modificador que significa “global”. Indica que la búsqueda debe 
aplicarse a toda la cadena, no solo a la primera coincidencia.

Entonces, cuando usas texto.replace(/\s+/g, ''), estás diciendo: 
“Encuentra todas las secuencias de uno o más espacios en blanco en
el texto y reemplázalas con nada (es decir, elimínalas)”.

*/


var regex= cadena.replace(/\s+/g,'');

alert(regex);

