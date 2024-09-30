/*
Diseñar un algoritmo que tomando las coordenadas cartesianas de un 
punto en el plano y calcule e imprima el cuadrante al que pertenece dicho 
punto. También debe detectar cuando está en el origen o sobre un eje.
*/

//creamos las dos  variables que representa x, y

/*ejemplos: x=3, y=4  / el punto esta en el primer cuadrante
( x = -5 ), ( y = 2 )  “El punto está en el segundo cuadrante”
 ( x = -3 ), ( y = -7 )  “El punto está en el tercer cuadrante”
  ( x = 6 ), ( y = -1 )  “El punto está en el cuarto cuadrante”


*/

var x = -5, y = 2;

//determinamos donde se encuentran los puntos
if (x === 0 && y === 0) {
    alert('X y Y están en el origen');
} else if (x === 0) {
    alert('El punto está sobre el eje Y');
} else if (y === 0) {
    alert('El punto está sobre el eje X');
} else if (x > 0 && y > 0) {
    alert('El punto está en el primer cuadrante');
} else if (x < 0 && y > 0) {
    alert('El punto está en el segundo cuadrante');
} else if (x < 0 && y < 0) {
    alert('El punto está en el tercer cuadrante');
} else if (x > 0 && y < 0) {
    alert('El punto está en el cuarto cuadrante');
}
  
