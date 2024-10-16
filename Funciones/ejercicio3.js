/*
Realizar un programa que calcule el número de cifras de un número. 
Deberá implementarse una función numCifras(numero) que devuelva el 
número de cifras del mismo. Utiliza el operador spread.
*/

function numCifras(numero) {

    //pasamos el numero a una cadena
    var numCasteado= new String(numero);


    return (numCasteado.length);
}

// Llamar a la función


alert(numCifras(32148));