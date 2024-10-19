/*
Refactoriza el siguiente código usando funciones flecha.
Asegúrate de que la función se llama tripleAndFilter.
    function tripleAndFilter(arr){
            return arr.map(function(value){
                    return value * 3;
                    }).filter(function(value){
                        return value % 5 === 0;
                })
    }

*/

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
let tripleAndFilterF = (arr) => {

    //metodo que devuelve un array con los elementos multiplicados
    var arrayMultiplicado = arr.map(
        function (elementoArray) {
            return elementoArray * 3;});


    //metodo de devuelve los elementos en array que son divisibles entre 5
    return arrayMultiplicado.filter(
        //obtiene el eleme
        function (elementoArrayMultiplicado) {
        return elementoArrayMultiplicado % 5 === 0;
    })
    

}

//alert(tripleAndFilterF([5, 5, 4])); 

/*
Asegúrate de que la función se llama doubleOddNumbers.
    function doubleOddNumbers(arr){
        return arr.filter(function(val){
            return val % 2 !== 0;
        }).map(function(val){
            return val *2;
        })
    }


Asegúrate de que la función se llama bar
function bar(){ 
let txt = ''; 
for(let i in arguments){ 
txt += arguments[i];
} 
return txt;
}
        d.Observando los ejemplos anteriores, repite el
         ejercicio 9.d, utilizando la programación funcional
*/
