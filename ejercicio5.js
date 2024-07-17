/*
Para comprobar si un año es o no bisiesto se usa 
la siguiente regla: “Un año es
bisiesto si es divisible por 400, o bien es 
divisible por 4 pero no por 100”. Diseñar un
programa que utilizando una variable lógica que 
tenga valor cierto si el año es
bisiesto y falso si no lo es.
*/

//variable logica
var estado = false;

inputAnioB =2100;

/*
Un año es
bisiesto si es divisible por 400, o bien es 
divisible por 4 pero no por 100
*/
if (inputAnioB % 400 === 0 || (inputAnioB % 4 === 0 && inputAnioB % 100 != 0)) {
  estado = true;
}

alert(estado);
