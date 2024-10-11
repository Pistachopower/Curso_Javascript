/*
Crear dos enlaces, uno para abrir una nueva ventana y uno 
para cerrarla. La nueva ventana mostrará este mensaje en 
una fuente grande : ​”El ojo es la ventana a tu alma “. 
La nueva ventana se coloca en la esquina izquierda de la 
pantalla , será redimensionable , tendrá una barra de 
desplazamiento, y estará en primer plano.
*/

//variable que guardara la referencia a la ventana (objeto) que se abrirá
var miVentana;

//creamos la funcion abrir ventana
function abrirVentana() {
    //abrimos una ventana con las medidas definidas 
    //segundo parametro: es el nombre de la ventana
    miVentana= window.open("", "nuevaVentana","width=400,height=300,left=0,top=0,resizable=yes,scrollbars=yes" );

    //escribimoos en la ventana
    miVentana.document.write("<h1>El ojo es la ventana a tu alma</h1>");
}

function cerrarVentana() {
    //si miVentana se ha abierto
    if (miVentana) {

        //cerramos la ventana
        miVentana.close();
    }
}

