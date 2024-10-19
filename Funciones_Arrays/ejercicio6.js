/*
Hacer un programa que sume todos los parámetros pasados 
como argumentos de entrada en la llamada. El número de 
argumentos de entrada es desconocido.
*/
//ambas usan Rest (captura un numero indefinido de argumentos 
// pasandolos a un array)

/*
function sumaNumClasica(...numeros) {
    //contador
    var suma = 0;

    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }

    return suma;
}




*/


//funcion flecha
let sumaNumClasica = (...parametro) => {
    //contador
    var suma = 0;

    for (let i = 0; i < parametro.length; i++) {
        suma += parametro[i];
    }

    return suma;

}









