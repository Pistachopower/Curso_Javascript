/*

//usando funciones fecha 
let sumaArgParesF = (...arguments) => {

  var pares = 0;

  for (let i = 0; i < arguments.length; i++) {
    //pares = (arguments[i]);
    if (arguments[i] % 2 === 0) {
      pares += arguments[i];
    }
  }
  return pares;
};

alert(sumaArgParesF(1, 2, 6));

d.Observando los ejemplos anteriores, repite el ejercicio 9.d, utilizando la programación funcional

Explicación de la Refactorización

    Eliminación de las Llaves:
        Si la función tiene solo una línea de código, podemos omitir las llaves {} y la palabra return. Esto hace que el código sea más limpio.

    Uso del Operador Ternario:
        La expresión num % 2 === 0 ? num : 0 permanece igual. Esto significa que si num es par, se suma; de lo contrario, se agrega 0.

    Resultados:
        La lógica de la función sigue siendo la misma: sumar solo los números pares de los argumentos.

*/

//operador Rest 

/*
El metodo reduce tiene adentro funciones flechas (en este ejemplo tiene dos)
El reduce funciona parecido como un for que recorre los indices del array
Aunque faltan las {} y los return 
*/
const sumaArgParesF = (...valores) => valores.reduce((sumaPares, indiceActual) => sumaPares + (indiceActual % 2 === 0 ? indiceActual : 0), 0); //0 es de donde debe comenzar

alert(sumaArgParesF(1, 2, 6)); // Muestra: 8

  