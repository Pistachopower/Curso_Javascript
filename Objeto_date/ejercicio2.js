/*
Escribe un algoritmo que lea desde la entrada estándar dos 
fechas dadas por día, mes y año y calcule cuál de ellas es
 anterior a la otra.

 a)2024/04/15
 b)2024/04/14
*/

let dia1 = parseInt(prompt('Ingrese día 1:'));
let mes1 = parseInt(prompt('Ingrese mes 1:'));
let año1 = parseInt(prompt('Ingrese año 1:'));

let dia2 = parseInt(prompt('Ingrese día 2:'));
let mes2 = parseInt(prompt('Ingrese mes 2:'));
let año2 = parseInt(prompt('Ingrese año 2:'));


//obtenemos los milisegundos de las dos
//Los meses en JavaScript van de 0 (enero) a 11 (diciembre)
var fecha1Comparar= new Date(año1, mes1 - 1 ,dia1).getTime();
var fecha2Comparar= new Date(año2, mes2 - 1 ,dia2).getTime();

if (fecha1Comparar < fecha2Comparar) {
    alert(dia1 + "/" + mes1 + "/" + año1 + " es anterior a " + dia2 + "/" + mes2 + "/" + año2);
} else { 
    alert(dia2 + "/" + mes2 + "/" + año2 + " es anterior a " + dia1 + "/" + mes1 + "/" + año1);
}