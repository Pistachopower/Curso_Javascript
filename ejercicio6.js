/*
Diseñar un algoritmo que tomando las coordenadas 
cartesianas de un punto en el
plano y calcule e imprima el cuadrante al que 
pertenece dicho punto. También debe
detectar cuando está en el origen o sobre un eje.
*/

//coordenadas del punto
var cX= 4;
var cY= -1;

//determinamos a que cuadrante pertenece el punto
if (cX > 0 && cY > 0) {
    alert("El punto se encuentra en el cuadrante 1 y sobre su eje");
  } else if (cX< 0 && cY > 0) {
    alert("El punto se encuentra en el cuadrante 2 y sobre su eje");
  } else if (cX< 0 && cY < 0) {
    alert("El punto se encuentra en el cuadrante 3 y sobre su eje");
  } else if (cX > 0 && cY < 0) {
    alert("El punto se encuentra en el cuadrante 4 y sobre su eje");
  } else {
    alert("El punto está en su origen");
  }
  