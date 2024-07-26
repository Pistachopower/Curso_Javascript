

var valor= parseInt(prompt("Ingrese valor:"));

var menor=valor;
var mayor=valor;
var contador=0;
var sumaM= 0;

while (!(valor < 0) ) {
  contador++;
  //comprobamos los valores
  if (valor > mayor) {
    mayor= valor
  }

  if (valor < menor) {
    menor= valor
  }

  sumaM= sumaM + valor;

  valor= parseInt(prompt("Ingrese valor:"));
}

console.log("Número mayor: ", mayor );

console.log("Número menor: ", menor);

console.log("Media: ", (sumaM / contador));