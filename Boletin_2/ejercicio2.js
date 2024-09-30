/*
Con expresiones regulares, leer desde teclado una cadena con una serie de
nombres. Contar cuántos nombres se han leído, cuántos comienzan C.
*/

var contadorNombres = 0;
var contadorLetraC = 0;
//var expRegC= /^C/i; detecta mayusculas y minusculas letra c
const expRegC= /^C/;

var valor = prompt('Ingresa la palabra: ');

while (!(valor === "ULTIMO")) {
    contadorNombres++;

    //usamos un bucle para recorrer la cadena y buscar la C
    for (let i = 0; i < valor.length; i++) {

        //si el índice de la letra es igual a C cuenta
  
        if (expRegC.test(valor[i])) {
            contadorLetraC++;
        }
    }


    valor = prompt('Ingresa la palabra: ');
}

//imprime los valores
alert("total nombre: " + contadorNombres + "\n" + "total letra C:  " + contadorLetraC);