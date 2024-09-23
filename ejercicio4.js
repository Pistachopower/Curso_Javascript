/*
4. Escriba un algoritmo que lea un instante de tiempo dado en horas y minutos y
escriba como respuesta los mensajes “Buenos días” “Buenas tardes” “Buenas
noches”, de acuerdo con las siguientes reglas:

a. Es de día desde las 7:30 hasta las 14:00 horas.
b. Es tarde desde las 14:01 hasta las horas 20:30.
c. Es noche desde las 20:31 hasta las horas 7:29.

*/



var calculo=0;

//pedir por teclado
var horaMinutos= prompt('Ingrese hora y minutos: ');

//Es de día desde las 7:30 hasta las 14:00 horas.
if ((horaMinutos >= '07:30') && (horaMinutos <= '14:00')) {
    alert('buenos dias');

//Es tarde desde las 14:01 hasta las horas 20:30.
} else if ((horaMinutos >= '14:01') || (horaMinutos <= '20:30')) {
    alert('buenas tardes');

//Es noche desde las 20:31 hasta las horas 7:29.  
} else if ((horaMinutos >= '20:31') || (horaMinutos <= '07:29') ) {
    alert('buenas noches');
} 
