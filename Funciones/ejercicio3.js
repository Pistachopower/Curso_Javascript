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
//alert(numCifras(32148));


//creamos la variable que guarda la funcion
//lleva tambien el parametro numero y termina con ; 
//porque es una variable que almacena una funcion
var numCifrasFuncionFlecha= (numero) => {
    let numCasteado=  new String(numero);
    return numCasteado.length;
};

    //alert(numCifrasFuncionFlecha(321547));


function numCifrasSpread(numero) {
    //pasa todos los numeros a un array separado por indices
    var longitudNumeros= [...new String(numero)];
    return longitudNumeros.length;
}


alert(numCifrasSpread(25478));




