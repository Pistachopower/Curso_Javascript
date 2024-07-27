/*
Realizar un algoritmo que permita introducir la nota 
de una asignatura por teclado, la
valide para que esté comprendida entre 0 y 10 y se 
escriba en letras de la siguiente
manera:
SUSPENSO si es menor que 5
APROBADO mayor que 5 y menor que 6
BIEN entre 6 y 7
NOTABLE entre 7 y 8
SOBRESALIENTE entre 9 y 10
*/


do {
    //se controla que el valor esté entre 0 y 10
    var nota= parseFloat(prompt('Ingrese nota: '));

  } while ( nota < 0 || nota > 10);
  
  if (nota < 5) {
    alert("SUSPENSO");
  } else if (nota >= 5 && nota < 6) {
    alert("APROBADO");
  } else if (nota >= 6 && nota < 7) {
    alert("BIEN");
  } else if (nota >= 7 && nota <= 8) {
    alert("NOTABLE");
  } else {
    alert("SOBRESALIENTE");
  }
  
  

