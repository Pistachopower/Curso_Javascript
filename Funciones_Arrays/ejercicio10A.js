function tripleAndFilter(arr) {
    /*    
        //metodo map: crea y devuelve un array con un resultado, parametro(array)
        //parag: ejecuta la funcion en cada elemento de array
        //value: el valor actual del elemento
    
    El método map en JavaScript acepta dos parámetros:
    Callback function: Una función que será ejecutada en cada elemento del 
    array. Esta función puede tener hasta tres parámetros:
        currentValue: El valor del elemento actual.
        index (opcional): El índice del elemento actual.
        array (opcional): El array que está siendo mapeado.
    thisArg (opcional): Un valor que será usado como this al ejecutar 
    la función callback.
       
    El método filter acepta dos parámetros:
    
    Callback function: Una función que será ejecutada en cada elemento 
    del array y que determina si el elemento debe incluirse en el nuevo 
    array. Esta función puede tener hasta tres parámetros:
        currentValue: El valor del elemento actual.
        index (opcional): El índice del elemento actual.
        array (opcional): El array que está siendo filtrado.
    thisArg (opcional): Un valor que será usado como this al ejecutar la 
    función callback.
    
    */
    //15,18
    return arr.map(function (value) {
        return value * 3;
        //metodo filter: crea y devuelve un nuevo array con los elementos que pase la condicion
        //15,18,12 
    }).filter(function (value) {
        return value % 5 === 0;
    })
}


//alert(tripleAndFilter([5,6, 4]));

//refactorizacion
const tripleAndFilter = (arr) => 
    arr.map(value => value * 3)
       .filter(value => value % 5 === 0);
/*
Explicación Paso a Paso

    Identificación de Funciones:
    La función original tiene dos partes: map y filter.
    map se utiliza para transformar cada elemento del arreglo multiplicándolo por 3.
    filter se usa para seleccionar solo aquellos elementos que son divisibles por 5.

    Uso de Funciones de Flecha:
    En lugar de usar la sintaxis tradicional de function, podemos usar funciones de flecha, que son 
    más cortas y se ven más limpias.
    Por ejemplo, function(value) { return value * 3; } se convierte en value => value * 3.

    Simplificación de Retornos:
    ººAl usar funciones de flecha, si solo hay una línea de código, podemos omitir las llaves {} y 
    la palabra return.
    ººAsí, la línea return arr.map(function(value) { ... }) se convierte simplemente en arr.map(...).

    Consolidación:
        El código se vuelve más fácil de leer y entender al usar una única expresión para devolver 
        el resultado final.

        Proceso Interno

        Aplicar map:
            Multiplicamos cada número por 3:
            [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]

        Aplicar filter:
            Filtramos los números que son divisibles por 5:
            Solo queda: [15, 30]

    Resultado Final

    El resultado impreso en la consola será: [15, 30]


*/


//alert(tripleAndFilterF([5, 5, 4])); 


