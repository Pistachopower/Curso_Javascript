/*
Realiza un algoritmo que lea un dato de teclado y calcule e imprima su inverso.
Considere el caso especial del valor 0 mostrando el mensaje de error
correspondiente.


*/
//pedimos el dato
var dato= prompt("Ingrese el dato: ");

while (dato != "0" && dato != "s") {
    var datoInverso= " ";
    for (let d = dato.length - 1; d >= 0; d--) {
    //variable guarda dato en orden inverso
   

    //concatenamos la cadena invertida
    datoInverso+= dato[d];
  
  }

     //mostramos
     alert(datoInverso); 

     //volvemos a pedir el valor
     dato= prompt("Ingrese el dato: ");

      
  }

if (dato == 0) {
    alert("Valor incorrecto");
} else { 
    alert("Has salido");

}

 





  





  