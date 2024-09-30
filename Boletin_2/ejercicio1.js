/*
Leer de teclado una serie de nombres hasta que 
aparezca la palabra "ULTIMO". Contar cuántos nombres
 se han leído, cuántos comienzan C y cuántos contienen la ñ.

*/

var contadorNombre= 0;
var contadorC= 0;
var contadorÑ= 0;

palabra= prompt("Ingrese un nombre: ");


while (!(palabra == "ULTIMO")) {
    //contamos la palabra
    contadorNombre++;

    //obtenemos el nombre y recorremos todas las letras hasta encontrar
    //coincidencias
    if (palabra.indexOf("C") >= 0) {
        contadorC++;
        
    }

    if (palabra.indexOf("ñ") >= 0) {
        contadorÑ++;
        
    }
    


    palabra= prompt("Ingrese un nombre: ");
  }

  alert("Total nombre: " + contadorNombre + " total C: " + contadorC + " total ñ: " + contadorÑ);