/*
Pedimos una cadena de texto que sabemos que puede contener paréntesis. 
Realiza un script que extraiga la cadena que se encuentra entre los 
paréntesis. Ejemplo: Si escribimos el texto “Hola (que) tal” se 
mostrará “que”. Si no existe el signo “(“ mostrará una cadena 
vacía y si existe el signo  “(“pero no el signo “)” mostrará desde 
el primer paréntesis hasta el final.


*/

//inicializamos las cadenas para seleccionar la palabra por indice con slice
var inicioP= "";
var finalP= "";


palabra= prompt("Ingrese una  cadena: ");

//si exite (que) muestra la palabra dentro del parentesis
if (palabra.indexOf("(") >= 0 && palabra.indexOf(")") >= 0) {
    
    /*seleccionamos el inicio de "q" despues del parentesis ( + 1: porque va de 0 a N) 
    h|o|l|a| |(|q|u|e|)| | t | a  |l |
    0 1 2 3 4 5 6 7 8 9 10 11  12  13
    
    */
   //selecciona desde el 6 
    inicioP= palabra.indexOf("(") + 1;

    //selecciona hasta el 9
    finalP= palabra.indexOf(")");

    //muestra la palabra seleccionada
    alert(palabra.slice(inicioP, finalP));


//sino existe el parentesis inicial (  pero si el cierre del parentesis
//mostrara una cadena vacia
  } else if (palabra.indexOf("(") <= -1) {
    alert("");

    //sino si existe el signo () mostrara desde el primer parentesis hasta el final
  } else if (palabra.indexOf(")") <= -1) {

    //seleccionamos la cadena desde q... hasta ...tal
       //selecciona desde el 5 
       inicioP= palabra.indexOf("(");

       //muestra la palabra seleccionada
       alert(palabra.slice(inicioP));

  }

