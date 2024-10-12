/*
Crear un programa en cuyo título del documento aparezca 
el siguiente texto animado circularmente (ver ​Ejemplo 
de texto animado circularmente​): ¡¡Sólo quedan 20 días de ofertas!!
*/


// Texto que queremos animar
var texto = "¡¡Sólo quedan 20 días de ofertas!!";

// Función que rota el texto circularmente
function rotarTexto() {
    // Mueve el primer carácter al final del texto
    texto = texto.substring(1) + texto.charAt(0);
    // Actualiza el título del documento con el texto rotado
    document.title = texto;
}

// Llama a la función rotarTexto cada 200 milisegundos
setInterval(rotarTexto, 200);

