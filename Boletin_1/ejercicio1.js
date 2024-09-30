/**
 * Calcular el área y el volumen de la esfera cuyo radio se pide al usuario

. Pide por

teclado qué operación se desea calcular.

let a= parseInt(prompt('Ingrese el radio'));
 * 
 */

//pedimos la opcion
alert("Introduce 1 para calcular  / Introduce 2 para salir");
let condicion= parseInt(prompt('Introduce la opcion: '));

while (condicion != 2) {
    //pedirmos radio
    let radio= parseInt(prompt('Ingrese el radio'));

    //calculamos el area y volumne
    let potenciaRadio= radio * 2;
    let potenciaVolumen= radio * 3;
    let calculoRadio= 3.14 * radio;

    let volumen= 4/3 * 3.14 * potenciaVolumen;

    //mostramos 
    alert("El area es " + calculoRadio);
    alert("El volumen es " + volumen);

    //volvemos a pedir la opcion
    
    condicion= parseInt(prompt('Introduce la opcion: '));
  }

  alert("saliste"); 
  


