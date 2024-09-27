/*
Realiza un algoritmo que solicite del usuario 
un tiempo dado en segundos y calcule y presente 
en pantalla dicho tiempo pero expresado en horas, 
minutos y segundos.

Math.trunc(10.5);

*/
//segundos= 3600

segundos = parseInt(prompt('Ingrese el número: '));

var horas= Math.trunc(segundos / 3600);

var minutos= Math.trunc((segundos % 3600) / 60) ;

var segundos= segundos % 3600;

alert("Horas:Minutos:Segundos: " + horas + ":" + minutos + ":" + segundos)