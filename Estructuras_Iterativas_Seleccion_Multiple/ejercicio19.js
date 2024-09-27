/*
Diseña un algoritmo para simular el juego de ¿dónde está 
la bolita? (trileros), famoso timo practicado por los llamados
 trileros .En nuestro caso el ordenador será un honrado trilero 
 que no engañará al usuario que juegue con él.

Planteamiento
Por simplicidad del juego represento las variables v1 y v2 como vasos donde
estará la bolita. La bolita será representada como el resultado de una resta 
(v2 - v1)= resultado.

Los intentos del jugador se representa con un bucle while que termina cuando
v1 < 6 y v2 > 0. Se elige una resta para representar valores supuestamente aleatorio
y si la selección coincide con el resultado, el usuario a encontrado la 
bolita y sale del juego. 



*/

var v1= 1; //incre
var v2= 5; //decre
var resultado;

while (v1 < 6 && v2 > 0) {

    let seleccion= parseInt(prompt('Indique donde está la bolita: '));

    resultado= v2 - v1;

    if (resultado === seleccion) {
        alert("Has ganado");
        break;
        
    }

    v1++;
    v2--;
}

alert("Fin del juego");




