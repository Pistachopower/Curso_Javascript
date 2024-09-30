/*
Realizar un programa que proporcione el cambio de Euros a Dólares, 
Libras, Yenes, Franco Suizo, Corona Noruega, según opción. 
El programa debe controlar todas las entradas y ofrecer al usuario 
la posibilidad de repetir o salir.

Euros a Dólares
     a Libras
     a  Yenes
     a Franco Suizo
     a Corona Noruega
*/



//construimos la iteracion de salida
//0
//variable global
var euros = 0;

var opcion = parseInt(prompt('Menú: Número negativo para salir, 1- Convertir Euros a Dólares, 2- a Libras, 3- a  Yenes, 4- a Franco Suizo, 5-a Corona Noruega '));

while (!(opcion < 0)) {



    //Swich para las opciones de valor
    switch (opcion) {
        case parseInt(1):
            euros = parseFloat(prompt('Ingrese monto del cambio en euros: '));

            //hacemos la conversion: tasa de cambio 1.10
            var conversion = euros * 1.10;

            //mostramos la conversion
            alert('El cambio de ' + euros + ' €  a dólares es: ' + conversion);

            break;

        case 2:
            euros = parseFloat(prompt('Ingrese monto del cambio en euros: '));

            //hacemos la conversion: tasa de cambio 
            var conversion = euros * 0.84;

            //mostramos la conversion
            alert('El cambio de ' + euros + ' €  a libras es: ' + conversion);

            break;

        case 3:
            euros = parseFloat(prompt('Ingrese monto del cambio en euros: '));

            //hacemos la conversion: tasa de cambio 
            var conversion = euros * 160.93;

            //mostramos la conversion
            alert('El cambio de ' + euros + ' €  a yenes es: ' + conversion);

            break;

        case 4:
            euros = parseFloat(prompt('Ingrese monto del cambio en euros: '));

            //hacemos la conversion: tasa de cambio 
            var conversion = euros * 0.95;

            //mostramos la conversion
            alert('El cambio de ' + euros + ' €  a Franco Suizo es: ' + conversion);

            break;



        case 5:
            euros = parseFloat(prompt('Ingrese monto del cambio en euros: '));

            //hacemos la conversion: tasa de cambio 
            var conversion = euros * 160.93;

            //mostramos la conversion
            alert('El cambio de ' + euros + ' €  a corona noruega es: ' + conversion);

            break;

        default:
            alert("La opción no es correcta");
            break;
    }





    //vuelve a pedir la opcion
    opcion = parseInt(prompt('Menú: Número negativo para salir, 1- Convertir Euros a Dólares, 2- a Libras, 3- a  Yenes, 4- a Franco Suizo, 5-a Corona Noruega '));

}

alert("Has salido");



