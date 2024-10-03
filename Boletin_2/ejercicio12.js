/*
Crea una expresión regular que reemplace todas las instancias de la
 palabra "malo" en un texto por "bueno". Ahora modifica tu código
  para que el usuario introduzca las palabras a reemplazar.
*/
/*
var cadena= "el malo de carlos";


var cadenaNueva= cadena.replace(/malo/g,"bueno");

alert(cadenaNueva);
*/


//tenemos una cadena con mayusculas y minusculas
var texto= "Este es un mal ejemplo.";

//se usa prompt con trim para asegurarnos de eliminar espacios del usuario al principio o final
var palabraModificar= prompt("Ingrese la palabra a reemplazar: ").trim();

var palabraNuevaCambiar= prompt("Introduce la nueva palabra:").trim();

//usamos el constructor RegExp y pasamos por parametro la palabra a cambiar con la bandera g e i que
//hara la busqueda en todo el texto y el modificador i para hacer na búsqueda insensible a mayusculas
var expresionRegular= new RegExp(palabraModificar,'gi');

//cambiamos la palabra
var textoNuevo= texto.replace(expresionRegular,palabraNuevaCambiar);

alert(textoNuevo);
