/*
Hallar el menor, el mayor y la media de un conjunto de números positivos leídos de
teclado.


Otra solucion
//cuenta los numeros
var total_Numeros = 0;

//suma para la media
var suma = 0;

var menor=0;
var mayor=0;
var valor=0;

//la longitud del conjunto
var conjunto_Numeros = parseInt(prompt('Ingrese la longitud del conjunto: '));

for (let i = 0; i < conjunto_Numeros; i++) {

    //valor a determinar menor, mayo y media
    valor = parseInt(prompt('Ingrese el número: '));

    // en la primera iteración, inicializamos menor y mayor
    if (i === 0) {
        menor = valor;
        mayor = valor;


    } else {

        //determinamos menor
        if (valor < menor) {
            menor = valor;
        }

        //determinamos mayor
        if (valor > mayor) {
            mayor = valor;
        }


    }

    //cuento la cantidad de numeros
    total_Numeros++;

    //sumo el valor del usuario
    suma = suma + valor;

}

alert("El número menor es " + menor);
alert("El número mayor es " + mayor);
alert("La media es " + (suma / total_Numeros));

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
