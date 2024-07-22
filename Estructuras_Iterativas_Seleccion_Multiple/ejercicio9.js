/*
Hallar el menor, el mayor y la media de un conjunto de números positivos leídos de
teclado.
*/

var valor;
valor= parseInt(prompt("Ingrese el número: "));
var sumaMedia=0, contador=0, media=0;

var menor=valor;
var mayor=valor;


//7,3,9 
while (!(valor < 0) ) {
   

    //determinamos si valor es  menor o mayor
    if (valor > mayor) {
        mayor= valor;
    }

    if (valor < menor) {
        menor= valor;
    }
    
    contador++; // contador + 1 (cuenta la cantidad de numeros)
    sumaMedia= sumaMedia + valor; //suma para sacar la media
    valor= parseInt(prompt("Ingrese el número: "));
  }

//calculamos la media


console.log("La media es ",  (sumaMedia / contador));
console.log("Número mayor es ",  mayor);
console.log("Número menor es ",  menor);