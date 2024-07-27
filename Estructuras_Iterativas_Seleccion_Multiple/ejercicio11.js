/*
Hacer un algoritmo que lea el número correspondiente a 
un mes del calendario y presente en pantalla su nombre
usando una estructura de control adecuada.
*/

var mes = parseInt(prompt("Ingrese el número del mes: "));

while ( mes >= 1 && mes <= 12) {
    switch (mes) {
        case 1:
          // Código a ejecutar si la expresión coincide con valor1
          alert("Enero");
          break;
        case 2:
          // Código a ejecutar si la expresión coincide con valor2
          alert("Febrero");
          break;
        case 3:
          // Código a ejecutar si la expresión coincide con valor2
          alert("Marzo");
          break;
        case 4:
          // Código a ejecutar si la expresión coincide con valor2
          alert("Abril");
          break;
      
        case 5:
          // Código a ejecutar si la expresión coincide con valor2
          alert("Mayo");
          break;
      
        case 6:
          // Código a ejecutar si la expresión coincide con valor2
          alert("Junio");
          break;
      
        case 7:
          // Código a ejecutar si la expresión coincide con valor2
          alert("Julio");
          break;
      
        case 8:
          // Código a ejecutar si la expresión coincide con valor2
          alert("Agosto");
          break;
      
        case 9:
          // Código a ejecutar si la expresión coincide con valor2
          alert("Septiembre");
          break;
      
        case 10:
          // Código a ejecutar si la expresión coincide con valor2
          alert("Octubre");
          break;
      
        case 11:
          // Código a ejecutar si la expresión coincide con valor2
          alert("Noviembre");
          break;
      
        case 12:
          // Código a ejecutar si la expresión coincide con valor2
          alert("Diciembre");
          break;
 
      }

        mes = parseInt(prompt("Ingrese el número del mes: "));


}


