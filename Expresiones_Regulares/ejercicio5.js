/*
Realiza un script que pida una cadena de texto y 
la devuelva al revés. Es decir, si tecleo “hola que tal” 
deberá mostrar “lat euq aloh”.

solucion 1:
var palabraAlreves="";

palabra= prompt("Ingrese una  cadena: ");

//recorremos la cadena alreves 
for (let i = palabra.length - 1; i >= 0; i--) {
    palabraAlreves+= palabra[i];
}

alert(palabraAlreves);
*/

var palabraAlreves="";

var palabra= prompt("Ingrese una  cadena: ");

//recorremos la cadena 
for (let i = 0; i < palabra.length; i++) {
    //el orden de las variables importan para la correcta concatenacion
    /*
    La insercion se hace de derecha a izquierda, es decir:
    iteracion 0 palabraAlreves= "h"
    iteracion 1 palabraAlreves= "oh"
    iteracion 2 palabraAlreves= "loh"
    iteracion 3 palabraAlreves= "aloh"
    
    */
    palabraAlreves= palabra.charAt(i) + palabraAlreves;
    
  }
  

alert(palabraAlreves);
