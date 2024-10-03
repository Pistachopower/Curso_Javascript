/*
Realizar un programa que compruebe si una palabra es palíndromo, 
es decir, si se lee igual de izquierda a derecha que de derecha 
a izquierda. Por ejemplo: RADAR, ARA....

*/
var palindromo= "RADAR";
var palabraAlreves="";

//recorremos la cadena 
for (let i = 0; i < palindromo.length; i++) {

    palabraAlreves= palindromo.charAt(i) + palabraAlreves;
    
  }

if (palindromo == palabraAlreves) {
    alert("Es palíndromo");
} else {
    alert("No es palíndromo");
    
}
  

