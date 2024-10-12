/*
En un cuadro de diálogo de alerta, muestre el alto y ancho en
 píxeles y la profundidad de color de su pantalla. Cada valor 
 será separado por un salto de línea.
*/

var anchoPantalla= window.screen.width;

var altoPantalla= window.screen.height;

var profundidadColorPantalla= window.screen.colorDepth;

alert("Ancho pantalla: " + anchoPantalla + "\n" + 
    "Alto pantalla: " + altoPantalla + "\n" + 
    "Profundidad Color Pantalla: " + profundidadColorPantalla);