/*
Hacer un programa que sume todos los parámetros pasados 
como argumentos de entrada en la llamada. El número de 
argumentos de entrada es desconocido.
*/
//ambas usan Rest (captura un numero indefinido de argumentos 
// pasandolos a un array)

function sumaNumClasica(...numeros) {
    //contador
    var suma=0;

    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }

    return suma;
}

//alert(sumaNumClasica(2,3));


function sumaNum(...numeros) {//captura los numeros y convierte los numeros en array

    /*
    => significa que esa una funcion flecha
    */
    return numeros.reduce((contador, numActualDeArray) => contador + 
                            numActualDeArray, 1); //0: valor inicial de contador
}

alert(sumaNum(3,4,8));

