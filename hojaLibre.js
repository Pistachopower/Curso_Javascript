/*
precio= 20
cantindadCliente= 50
diferencia= cantindadCliente - precio (30)

*/

var precio = 20;
var cantidadCliente = 50;

//aplicamos la primera fórmula para determinar
//el monto a devolver al cliente
var diferencia = cantidadCliente - precio;

/*
creamos diversas variables que representan
los billetes y monedas de mayor y menor 
denominación y que funciona como un contador 
de los billetes a entregar al cliente
*/
var b_50 = 0;
var b_20 = 0;
var b_10 = 0;

if (diferencia >= 50) {
  //aqui representamos cantidad de bille o monedas
  //a entregar
  b_50 = Math.floor(diferencia / 50);
  diferencia= diferencia % 50;
}
if (diferencia >= 20) {
    //aqui representamos cantidad de bille o monedas
    //a entregar
    b_20 = Math.floor(diferencia / 20);
    diferencia= diferencia % 20;
  }
  if (diferencia >= 10) {
    //aqui representamos cantidad de bille o monedas
    //a entregar
    b_10 = Math.floor(diferencia / 10);
    diferencia= diferencia % 10;
  }

console.log(b_50 + " billetes de 50");
console.log(b_20 + " billetes de 20");
console.log(b_10 + " billetes de 10");