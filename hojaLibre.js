/*
Hallar el menor, el mayor y la media de un conjunto de números positivos leídos de
teclado.
*/

var valor= parseInt(prompt("Ingrese numero: "));

var menor= valor;
var mayor= valor;

while (!(valor < 0)) {

  if (valor > mayor) {
    mayor= valor;
  }

  if (valor < menor) {
    menor= valor;
  }

  valor= parseInt(prompt("Ingrese numero: "));
}

document.write("Número mayor: ", mayor);
document.write("Número menor: ", menor);

