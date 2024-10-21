
/*Asegúrate de que la función se llama doubleOddNumbers.*/
//codigo sin refactorizar
function doubleOddNumbers(arr){
    //devuelve nuevo array
    return arr.filter(function(val){ //var:guarda el par 
        return val % 2 !== 0; //lo guarda en el array
    }).map(function(val){
        return val * 2;
    })
  }
  
  alert(doubleOddNumbers([1,2,5]));
  

  //codigo refactorizado

  /*
  Desglose de la Función

    Entrada de la Función:
        La función recibe un arreglo (arr) como entrada. Este arreglo puede contener números.

    Filtrar Números Impares:
        Usamos el método filter para crear un nuevo arreglo que solo contenga los números impares.
        La condición val % 2 !== 0 verifica si un número es impar. Si el residuo de la división por 2 no es cero, el número es impar y se incluye en el nuevo arreglo.

    Doblar los Números Impares:
        Después de filtrar, aplicamos el método map al arreglo de números impares para multiplicarlos por 2.
        La expresión val * 2 dobla cada número impar que ha pasado el filtro.

Ejemplo Práctico

Supongamos que tenemos el siguiente arreglo:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
Paso a Paso con el Ejemplo

    Filtrar Números Impares:
        Aplicamos filter a numbers:

    javascript

numbers.filter(val => val % 2 !== 0);

    Aquí, el resultado será un nuevo arreglo con los números impares:

javascript

[1, 3, 5, 7, 9]

Doblar los Números Impares:

    Ahora aplicamos map al arreglo filtrado:

javascript

[1, 3, 5, 7, 9].map(val => val * 2);

    Multiplicamos cada número por 2:

javascript

    [2, 6, 10, 14, 18]

Resultado Final

Así que si llamamos a nuestra función:

javascript

const result = doubleOddNumbers(numbers);
console.log(result);

El resultado impreso en la consola será:

csharp

[2, 6, 10, 14, 18]

Resumen

    Entrada: Un arreglo de números.
    Filtrado: Se obtienen los números impares.
    Transformación: Se doblan esos números impares.
    Salida: Un nuevo arreglo que contiene los números impares multiplicados por 2.
  
  
  
  */
  const doubleOddNumbers = arr => arr.filter(val => val % 2 !== 0).map(val => val * 2);
  