/*
Escriba un algoritmo que lea un instante de tiempo dado en horas y minutos y
escriba como respuesta los mensajes “Buenos días” “Buenas tardes” “Buenas
noches”, de acuerdo con las siguientes reglas:
a. Es de día desde las 7:30 hasta las 14:00 horas.
b. Es tarde desde las 14:01 hasta las horas 20:30.
c. Es noche desde las 20:31 hasta las horas 7:29.
*/

//pedimos el instante de tiempo
//hacemos un parseo para convertir la cadena a numero
instanteTime= parseInt(prompt('Ingrese su nombre: '));

//usamos condicionales 
if (instanteTime >= 730 && instanteTime <= 1400) {
    // Código a ejecutar si condición1 es verdadera
    alert("Buenos dias");
  } else if (instanteTime >= 1401 && instanteTime <= 2030) {
    alert("Buenos tardes");
  } else {

    alert("Buenas noches");
  }
  
  