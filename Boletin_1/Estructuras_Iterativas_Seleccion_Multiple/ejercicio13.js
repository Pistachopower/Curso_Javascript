/*
Realizar un programa que lea una fecha de nacimiento de 
la forma día, mes, año, y dé como resultado el número de
 Tarot. El programa verificará si la fecha es correcta.
El número de Tarot se calcula sumando los números de la 
fecha de nacimiento y reduciéndolos a un único dígito. 
Por ejemplo, si su fecha de nacimiento es 20 de julio
de 1984, el número de Tarot sería: 
20 + 7+ 1984 = 2011⇒ 2 + 0 + 1 + 1 = 4

alert(typeof lista);
*/

//variables: (tipo numerico) dia, mes, anio
var dia = 0;
var mes = 0;
var anio = 0;

//verificar fecha de nacimiento
do {
  
  dia = parseInt(prompt("Ingrese dia: "));
} while (dia < 1 || dia > 31);

do {
 
  mes = parseInt(prompt("Ingrese mes: "));
} while (mes < 1 || mes > 12);


do {
 
    anio = parseInt(prompt("Ingrese año: "));
  } while (anio < 1);

//sumamos el dia, mes y anio y almacena en fechaTemp
var fechaTemp= dia + mes + anio;

//fechaTemp pasamos a cadena
var fechaTempCadena= fechaTemp.toString();

//recorremos fechaTemp, creamos variable contador

var contador=0;



for (var i=0; i < fechaTempCadena.length; i++) {
    //alert('Argumento ' + i + ' =' + fechaTempCadena[i]);
    
    //pasamos a numero
    let temporal= parseInt(fechaTempCadena[i]);
    
    contador+=  temporal;
}

alert("Tu número del tarot es: " + contador);


//sumamos contador

//mostramos
